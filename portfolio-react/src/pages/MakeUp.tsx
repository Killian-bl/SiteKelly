import { Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const makeups = [
    {
        title: "Smokey Eyes",
        image: "../assets/portfolio/makeup1.jpg",
    },
    {
        title: "Bridal Look",
        image: "../assets/portfolio/makeup2.jpg",
    },
    {
        title: "Glam Nude",
        image: "../assets/portfolio/makeup3.jpg",
    },
    {
        title: "Colorful Style",
        image: "../assets/portfolio/makeup4.jpg",
    },
];

export default function MakeUp() {
    return (
        <Box sx={{ padding: "40px 20px" }}>
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontWeight: "bold",
                    color: "#FEC195",
                }}
            >
                Portfolio Make-Up
            </Typography>

            <Grid container spacing={4}>
                {makeups.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                                background: "#1a1a1a",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="280"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    objectFit: "cover",
                                }}
                            />

                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#FEC195", fontWeight: "600" }}
                                >
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
