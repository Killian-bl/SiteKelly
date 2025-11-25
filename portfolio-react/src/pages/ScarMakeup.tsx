import { useState } from "react";
import scar1 from "../assets/scar/scar1.jpeg";
import scar2 from "../assets/scar/scar2.jpeg";
import scar3 from "../assets/scar/scar3.jpeg";

import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";

const MAKEUP_LIST = [
    {
        id: 1,
        title: "Maquillage Glamour",
        img: scar1,
        duration: "1h30",
        price: "80€",
    },
    {
        id: 2,
        title: "Maquillage Mariage",
        img: scar2,
        duration: "2h",
        price: "120€",
    },
    {
        id: 3,
        title: "Maquillage Artistique",
        img: scar3,
        duration: "1h45",
        price: "100€",
    },
];

export default function MakeupGallery() {
    const [makeups] = useState(MAKEUP_LIST);

    return (
        <Box className="p-6 max-w-6xl mx-auto">
            <Typography variant="h3" className="text-center mb-10 font-semibold">
                Galerie Cicatrice
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
