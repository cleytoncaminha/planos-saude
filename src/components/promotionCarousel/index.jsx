import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PromotionsCarousel() {
  const promotions = [
    {
      title: "Plano Completo com 20% de desconto!",
      description: "Garanta cobertura total com um super desconto para novos clientes. Aproveite agora!",
      buttonText: "Saiba mais",
    },
    {
      title: "Plano Família com mensalidade reduzida!",
      description: "Ideal para você e sua família! Confira nossas condições especiais.",
      buttonText: "Descubra",
    },
    {
      title: "Benefícios exclusivos para empresas!",
      description: "Planos empresariais com descontos progressivos. Entre em contato conosco!",
      buttonText: "Contate-nos",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      {/* Título */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 4, color: "#2e7d32" }}
      >
        Promoções Imperdíveis
      </Typography>

      {/* Carrossel */}
      <Slider {...settings}>
        {promotions.map((promo, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 600,
              margin: "0 auto",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#ffffff",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#388e3c", mb: 2 }}
              >
                {promo.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {promo.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2e7d32",
                  "&:hover": { backgroundColor: "#1b5e20" },
                }}
              >
                {promo.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
