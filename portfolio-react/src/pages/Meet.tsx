import { Box, TextField, Typography, MenuItem, Button, Paper } from "@mui/material";
import { useState } from "react";

export default function Meet() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
    });

    const services = [
        "Make-up soirée",
        "Make-up mariage",
        "Cours de maquillage",
        "Make-up shooting photo",
        "Autre prestation"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulaire envoyé :", formData);
        alert("Votre demande a bien été envoyée !");
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 6,
                px: 2
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    maxWidth: 600,
                    width: "100%",
                    p: 4,
                    borderRadius: 3
                }}
            >
                <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
                    Formulaire de contact
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

                    <TextField
                        label="Prénom"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Nom"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Adresse Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <TextField
                        select
                        label="Prestation souhaitée"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        fullWidth
                        required
                    >
                        {services.map((s) => (
                            <MenuItem key={s} value={s}>
                                {s}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
                        Envoyer
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}
