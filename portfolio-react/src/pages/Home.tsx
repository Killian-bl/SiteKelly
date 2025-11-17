import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import ButtonContact from "../components/buttons/ButtonContact.tsx";
import fond from "../assets/images/fond2.jpg";

{/*const portfolioItems = [
        {id: 1, title: "Maquillage Mariage", image: "https://source.unsplash.com/400x400/?makeup,wedding"},
        {id: 2, title: "Shooting Mode", image: "https://source.unsplash.com/400x400/?makeup,model"},
        {id: 3, title: "Soirée & Événement", image: "https://source.unsplash.com/400x400/?makeup,evening"},
    ]; */}

const Home = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${fond})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
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

            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
                    À propos
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify", maxWidth: 800, mx: "auto" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed metus vel lacus euismod dapibus. Praesent sit amet mollis risus. Cras augue ipsum, fermentum gravida volutpat eget, vestibulum vitae libero. Nullam nec nibh non dui cursus scelerisque vestibulum pellentesque neque. Ut eros nisi, dapibus sed lobortis at, sollicitudin vel risus. Maecenas semper felis in commodo dapibus. Etiam tincidunt turpis metus. Curabitur pharetra lectus facilisis lacus facilisis, interdum commodo justo ornare. Praesent eu consequat ipsum. Donec eu dui tristique, bibendum enim a, ornare velit. Fusce varius ultrices purus, porta cursus nisl mattis ac. Donec vel magna eget elit pellentesque congue. Proin cursus in tortor sed tempor. Integer ullamcorper libero non enim vehicula feugiat. Integer hendrerit ut felis ac volutpat.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify", maxWidth: 800, mx: "auto" }}>
                    Ut sed nisi eget felis gravida tristique in eu mi. Donec augue lacus, varius sed tincidunt et, commodo vel sem. Suspendisse sed odio in ex ultrices blandit. Nulla magna nunc, vehicula a ligula fringilla, condimentum ornare ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis ipsum, dictum ac mollis et, bibendum quis justo. Sed eget pharetra dui, non imperdiet metus. Suspendisse vestibulum mauris eget nisl bibendum ultrices. Nunc ullamcorper nulla in lacus pulvinar, non congue libero ultrices.
                </Typography>
            </Container>

            {/*<Container sx={{ py: 8 }}>
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
            </Container>*/}

            <Box sx={{ backgroundColor: "#be0000", py: 10, textAlign: "center" }}>
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
