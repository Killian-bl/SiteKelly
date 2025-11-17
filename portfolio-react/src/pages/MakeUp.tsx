import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

import makeup1 from "../assets/portfolio/makeup1.jpg";
import makeup2 from "../assets/portfolio/makeup2.jpg";
import makeup3 from "../assets/portfolio/makeup3.jpg";
import makeup4 from "../assets/portfolio/makeup4.jpg";
import makeup5 from "../assets/portfolio/makeup5.jpg";
import makeup6 from "../assets/portfolio/makeup6.jpg";
import makeup7 from "../assets/portfolio/makeup7.jpg";
import makeup8 from "../assets/portfolio/makeup8.jpg";

const horrorMakeups = [
    { title: "Bloody Girl", image: makeup1, price: "250$" },
    { title: "None", image: makeup2, price: "200$" },
    { title: "Clown", image: makeup3, price: "300$" },
    { title: "Morticia", image: makeup4, price: "150$" },
];

const makeups = [
    { title: "Classic", image: makeup5, price: "250$"},
    { title: "Bridal Look", image: makeup6, price: "200$"},
    { title: "Smokey Eyes", image: makeup7, price: "300$"},
    { title: "Colorful Style", image: makeup8, price: "350$"},
];

export default function MakeUp() {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // 3 par 3
        slidesToScroll: 3,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 }},
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 }},
        ]
    };

    const renderCard = (item, index) => (
        <Box
            key={index}
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 300,
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
                        sx={{
                            color: "#FEC195",
                            fontWeight: "600",
                            textAlign: "center"
                        }}
                    >
                        {item.title} — {item.price}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );

    return (
        <>
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
                    Portfolio Horror
                </Typography>
                <Container maxWidth="lg">
                    <Slider {...sliderSettings}>
                        {horrorMakeups.map(renderCard)}
                    </Slider>
                </Container>
            </Box>

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
                    Portfolio Classic
                </Typography>
                <Container maxWidth="lg">
                    <Slider {...sliderSettings}>
                        {makeups.map(renderCard)}
                    </Slider>
                </Container>
            </Box>
        </>
    );
}
