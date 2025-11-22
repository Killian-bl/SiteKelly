import { useState } from "react";
import { Box, TextField, Typography, Button, Rating, Paper } from "@mui/material";

const Comment = () => {
    const [nom, setNom] = useState("");
    const [message, setMessage] = useState("");
    const [note, setNote] = useState<number | null>(3);
    const [commentaires, setCommentaires] = useState<any[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!nom || !message) return;

        const nouveauCommentaire = {
            nom,
            message,
            note,
            date: new Date().toLocaleDateString()
        };

        setCommentaires([nouveauCommentaire, ...commentaires]);
        setNom("");
        setMessage("");
        setNote(3);
    };

    return (
        <Box sx={{ py: 8 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
                Vos avis
            </Typography>

            {/* Formulaire */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ maxWidth: 600, mx: "auto", mb: 5, display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="Votre nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    fullWidth
                />

                <Rating
                    value={note}
                    onChange={(e, newValue) => setNote(newValue)}
                />

                <TextField
                    label="Votre commentaire"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                />

                <Button variant="contained" type="submit">
                    Envoyer
                </Button>
            </Box>

            {/* Liste des commentaires */}
            <Box sx={{ maxWidth: 700, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
                {commentaires.length === 0 ? (
                    <Typography textAlign="center">Aucun commentaire pour le moment.</Typography>
                ) : (
                    commentaires.map((c, index) => (
                        <Paper key={index} sx={{ p: 2 }}>
                            <Typography variant="h6">{c.nom}</Typography>
                            <Rating value={c.note} readOnly size="small" />
                            <Typography sx={{ my: 1 }}>{c.message}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                Posté le {c.date}
                            </Typography>
                        </Paper>
                    ))
                )}
            </Box>
        </Box>
    );
};

export default Comment;
