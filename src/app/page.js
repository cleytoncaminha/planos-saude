"use client"
import React from "react";
import Head from "next/head";
import { Container, Typography, Button, Box, TextField, Grid, AppBar, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalHospital } from "@mui/icons-material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import HospitalsSection from "@/components/hospitals";
import Image from 'next/image'
import Carrossel from "@/components/formCarousel";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1daa2d",
    },
  },
});

export default function Home() {
  const scrollToContact = () => {
    const contatoSection = document.getElementById("contato");
    contatoSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRede = () => {
    const contatoSection = document.getElementById("rede");
    contatoSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Plano de Saúde Personalizado</title>
        <meta name="description" content="Garanta hoje mesmo seu plano de saúde com benefícios exclusivos!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar 
      position="sticky" 
      color="primary"
      sx={{
        backgroundColor: "rgba(13, 74, 20, 0.8)",
        backdropFilter: "blur(5px)",
      }}
      >
        <Toolbar sx={{display: "flex", justifyContent:"space-between"}}>
          <Image 
          src="/unimed-fortaleza.png"
          width={150}
          height={150}
          alt="Picture of the author"
          sx={{ flexGrow: 1 }}
          />
          <Box>
            <Button color="inherit" onClick={scrollToContact}>
              Contato
            </Button>
            <Button color="inherit" onClick={scrollToRede}>
              Rede
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        <Box
          sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              height: {sm:"90vh", md:"70vh"},
              backgroundImage: 'url(/banner-medica.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: "#ffffff",
            }}
          >
        <Box
          sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              height: {sm:"90vh", md:"70vh"},
              backgroundColor: "rgba(13,74,20, 0.9)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: "#ffffff",
            }}
          >
            <Carrossel />
          </Box>
        </Box>
        <Container maxWidth="md" sx={{ my: 6, p: 4, borderRadius: 2 }}>
          <Typography
            mb={7}
            variant="h4"
            component="h2"
            color="primary"
            gutterBottom
            textAlign="center"
          >
            Benefícios dos nossos Planos
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                textAlign="center"
                sx={{
                  backgroundColor: "#1daa2d",
                  color: "#ffffff",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                <LocalHospital sx={{ fontSize: 50, mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Cobertura Completa
                </Typography>
                <Typography>
                  Atendimento médico em diversas especialidades e ampla rede de
                  hospitais.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                textAlign="center"
                sx={{
                  backgroundColor: "#1daa2d",
                  color: "#ffffff",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", // Adicionando sombra
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                <AttachMoneyIcon  sx={{ fontSize: 50, mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Preços Acessíveis
                </Typography>
                <Typography>
                  Planos pensados para caber no seu bolso, sem abrir mão da qualidade.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                textAlign="center"
                sx={{
                  backgroundColor: "#1daa2d",
                  color: "#ffffff",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", // Adicionando sombra
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                <LocalConvenienceStoreIcon  sx={{ fontSize: 50, mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Atendimento 24/7
                </Typography>
                <Typography>
                  Estamos disponíveis para você a qualquer momento, todos os dias da
                  semana.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              height: "50vh",
              backgroundImage: 'url(/hands-promotion.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: "#ffffff",
            }}
          >
        <Box
          sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              height: "50vh",
              backgroundColor: "rgba(13,74,20, 0.7)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              p: { xs: 5, sm: 10 },
              color: "#ffffff",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "2rem", sm: "1.5rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              🎉 Promoção Exclusiva
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" },
                mt: 1,
              }}
            >
              Adquira seu plano de saúde multiplan hoje e aproveite condições especiais. 
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" },
                backgroundColor: "#ffffff",
                color: "#1daa2d",
                fontWeight: "bold",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={() => {
                window.open(
                  "https://wa.me/558599077819?text=Quero%20aproveitar%20a%20promoção%20de%2010%%20de%20desconto%20nos%20planos%20de%20saúde",
                  "_blank"
                );
              }}
            >
              Aproveitar Agora
            </Button>
          </Box>
        </Box>
        <HospitalsSection />
        <Container maxWidth="sm"  id="contato" sx={{ my: 3, backgroundColor: "#ffffff", p: 4, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom textAlign={"center"}>
            Entre em Contato
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
            <TextField
              fullWidth
              label="Nome"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="E-mail"
              variant="outlined"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Telefone"
              variant="outlined"
              margin="normal"
              type="tel"
            />
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              mt: 2 
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Enviar Mensagem
            </Button>
          </Box>
          </Box>
        </Container>
      </main>

      <Box component="footer" sx={{ py: 3, textAlign: "center", backgroundColor: "#ffffff" }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Planos de Saúde. Todos os direitos reservados.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
