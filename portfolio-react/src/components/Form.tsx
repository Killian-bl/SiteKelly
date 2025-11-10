import { useState } from "react";

export default function RendezVousForm() {
    const [form, setForm] = useState({
        nom: "",
        email: "",
        date: "",
        heure: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 👉 Ici tu peux envoyer les données à ton backend ou à un service comme EmailJS
        console.log(form);

        alert("Votre demande de rendez-vous a été envoyée !");
        setForm({ nom: "", email: "", date: "", heure: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
            <h2>Prendre rendez-vous</h2>
            <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={form.nom}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="heure"
                value={form.heure}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Message (optionnel)"
                value={form.message}
                onChange={handleChange}
            />
            <button type="submit">Envoyer</button>
        </form>
    );
}
