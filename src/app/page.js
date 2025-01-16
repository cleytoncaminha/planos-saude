"use client"
import React from "react";
import Head from "next/head";
import { Container, Typography, Button, Box, TextField, Grid, AppBar, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Definindo o tema com a cor principal
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
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Planos de Saúde
          </Typography>
          <Button color="inherit" onClick={scrollToContact}>
            Contato
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <Box
          sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              height: "70vh",
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
              height: "70vh",
              backgroundColor: "rgba(13,74,20, 0.9)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              p: 10,
              color: "#ffffff",
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom color="primary">
              Cuide da sua Saúde Agora!
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Encontre o plano de saúde ideal para você e sua família, com preços acessíveis e cobertura completa.
            </Typography>
            <Button variant="contained" size="large" color="primary" sx={{ mt: 2 }}>
              Fale com uma Consultora
            </Button>
          </Box>
        </Box>
        <Container maxWidth="md" sx={{ my: 8, p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom textAlign="center">
            Benefícios dos nossos Planos
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" sx={{ backgroundColor: "#1daa2d", color: "#ffffff", p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Cobertura Completa
                </Typography>
                <Typography>
                  Atendimento médico em diversas especialidades e ampla rede de hospitais.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" sx={{ backgroundColor: "#1daa2d", color: "#ffffff", p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Preços Acessíveis
                </Typography>
                <Typography>
                  Planos pensados para caber no seu bolso, sem abrir mão da qualidade.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" sx={{ backgroundColor: "#1daa2d", color: "#ffffff", p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Atendimento 24/7
                </Typography>
                <Typography>
                  Estamos disponíveis para você a qualquer momento, todos os dias da semana.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="sm"  id="contato" sx={{ mb: 8, backgroundColor: "#ffffff", p: 4, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Enviar Mensagem
            </Button>
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
