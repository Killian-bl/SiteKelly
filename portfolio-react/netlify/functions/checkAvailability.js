// netlify/functions/checkAvailability.js
import { google } from "googleapis";

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
        const { start, end } = JSON.parse(event.body); // ISO strings
        const auth = await getAuth();
        const calendar = google.calendar({ version: "v3", auth });

        const res = await calendar.freebusy.query({
            requestBody: {
                timeMin: start, // ex: "2025-12-01T09:00:00+01:00"
                timeMax: end,
                timeZone: "Europe/Paris",
                items: [{ id: process.env.GOOGLE_CALENDAR_ID }],
            },
        });

        // freebusy response: array busy ranges
        const busy = res.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy || [];
        return {
            statusCode: 200,
            body: JSON.stringify({ busy }),
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};
// netlify/functions/checkAvailability.js
import { google } from "googleapis";

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
        const { start, end } = JSON.parse(event.body); // ISO strings
        const auth = await getAuth();
        const calendar = google.calendar({ version: "v3", auth });

        const res = await calendar.freebusy.query({
            requestBody: {
                timeMin: start, // ex: "2025-12-01T09:00:00+01:00"
                timeMax: end,
                timeZone: "Europe/Paris",
                items: [{ id: process.env.GOOGLE_CALENDAR_ID }],
            },
        });

        // freebusy response: array busy ranges
        const busy = res.data.calendars[process.env.GOOGLE_CALENDAR_ID].busy || [];
        return {
            statusCode: 200,
            body: JSON.stringify({ busy }),
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};
