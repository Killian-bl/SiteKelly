// netlify/functions/createEvent.js
import { google } from "googleapis";
// optional: import SendGrid or nodemailer to send confirmation emails

const getAuth = () => {
    return new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/calendar"],
    });
};

export const handler = async (event) => {
    try {
        const { name, email, startDateTime, durationMinutes = 60, notes } = JSON.parse(event.body);
        
        if (!name || !email || !startDateTime) {
            return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
        }

        const auth = await getAuth();
        const calendar = google.calendar({ version: "v3", auth });

        const endDateTime = new Date(new Date(startDateTime).getTime() + durationMinutes * 60000).toISOString();

        const fb = await calendar.freebusy.query({
            requestBody: {
                timeMin: startDateTime,
                timeMax: endDateTime,
                items: [{ id: process.env.GOOGLE_CALENDAR_ID }],
            },
        });

        const busy = fb.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy || [];
        if (busy.length > 0) {
            return { statusCode: 409, body: JSON.stringify({ error: "Slot already booked" }) };
        }

        const eventResource = {
            summary: `RDV Maquillage - ${name}`,
            description: `Client: ${name}\nEmail: ${email}\n${notes || ""}`,
            start: { dateTime: startDateTime, timeZone: "Europe/Paris" },
            end: { dateTime: endDateTime, timeZone: "Europe/Paris" },
            attendees: [{ email }], // optionnel: envoie une invitation au client
        };

        const created = await calendar.events.insert({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            resource: eventResource,
            sendUpdates: "all", // envoie mails aux invités
        });


        return {
            statusCode: 200,
            body: JSON.stringify({ message: "RDV créé", eventId: created.data.id }),
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};
