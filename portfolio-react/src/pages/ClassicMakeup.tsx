import { useState } from "react";
import classic1 from "../assets/beauty/beauty1.jpeg";
import classic2 from "../assets/beauty/beauty2.jpeg";
import classic3 from "../assets/beauty/beauty3.jpeg";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";


const MAKEUP_LIST = [
    {
        id: 1,
        title: "Maquillage Glamour",
        img: classic1,
        duration: "1h30",
        price: "80€",
    },
    {
        id: 2,
        title: "Maquillage Mariage",
        img: classic2,
        duration: "2h",
        price: "120€",
    },
    {
        id: 3,
        title: "Maquillage Artistique",
        img: classic3,
        duration: "1h45",
        price: "100€",
    },
];

export default function MakeupGallery() {
    const [makeups] = useState(MAKEUP_LIST);

    return (
        <Box className="p-6 max-w-6xl mx-auto">
            <Typography variant="h3" className="text-center mb-10 font-semibold">
                Galerie Make-Up
            </Typography>

            <Grid container spacing={4}>
                {makeups.map((m) => (
                    <Grid item xs={12} sm={6} md={4} key={m.id}>
                        <Card className="rounded-2xl shadow-lg overflow-hidden">
                            <CardMedia component="img" height="250" image={m.img} alt={m.title} />
                            <CardContent>
                                <Typography variant="h6" className="font-semibold mb-2">
                                    {m.title}
                                </Typography>
                                <Typography className="text-gray-600">Durée : {m.duration}</Typography>
                                <Typography className="text-gray-600">Prix : {m.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
