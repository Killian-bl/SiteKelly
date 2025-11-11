import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import ButtonContact from "../components/buttons/ButtonContact.tsx";

const portfolioItems = [
    { id: 1, title: "Maquillage Mariage", image: "https://source.unsplash.com/400x400/?makeup,wedding" },
    { id: 2, title: "Shooting Mode", image: "https://source.unsplash.com/400x400/?makeup,model" },
    { id: 3, title: "Soirée & Événement", image: "https://source.unsplash.com/400x400/?makeup,evening" },
];

const Home = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: "323131",
                    minHeight: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
                    Kelly Make-Up
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Sublimez votre beauté naturelle
                </Typography>
                <ButtonContact variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
                    Prendre rendez-vous
                </ButtonContact>
            </Box>

            {/* À propos Section */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
                    À propos
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center", maxWidth: 800, mx: "auto" }}>
                    Kelly est une maquilleuse professionnelle passionnée par la beauté et l’élégance. Elle accompagne ses clients pour chaque occasion, qu’il s’agisse de mariages, de shootings ou d’événements spéciaux, en mettant toujours l’accent sur votre unicité.
                </Typography>
            </Container>

            {/* Portfolio Section */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
                    Portfolio
                </Typography>
                <Grid container spacing={4}>
                    {portfolioItems.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                                <CardMedia component="img" height="250" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Prendre rendez-vous Section */}
            <Box sx={{ backgroundColor: "#f3e5f5", py: 10, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: "bold" }}>
                    Prenez rendez-vous
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
                    Réservez votre séance facilement et rapidement. Kelly Make-Up s’adapte à vos envies et à votre emploi du temps.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Prendre rendez-vous
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
