import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Card, CardContent, Typography, Button, Box, TextField, Grid, AppBar, Toolbar } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Carrossel() {
  return (
    <Carousel showStatus={false} showArrows={true} showThumbs={false}>
      <Box height={{sm:"90vh", md:"70vh"}} padding={10}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignContent:"center", flexDirection:"column" }}>
      <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              color="#3bee2b"
              sx={{
                fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              Promoção Multiplan e
              Salute Max Empresarial
            </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 2, mb: 4, flexFlow:"wrap", justifyContent:"center" }}>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                2 a 3 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                20%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                4 a 29 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                25%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
    </Box>
    <Typography variant="caption" color="#969292" display="block" mt={2}>
            *Campanha válida durante as vigências de fevereiro e março de 2025. 
            Exclusiva para novos clientes. Consulte regulamento completo.
          </Typography>
    </Box>
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  mt: 2, 
                  px: 4,
                  py: 1.5,
                  fontSize: "1.2rem",
                  borderRadius: "30px"
                }}
                onClick={() => {
                  window.open(
                    "https://wa.me/558599077819?text=Quero%20mais%20informações%20sobre%20planos%20de%20saúde",
                    "_blank"
                  );
                }}
              >
                <WhatsAppIcon /> 
                <Box ml={1}>Fale com nossa consultora</Box>
              </Button> 
      </Box>
      <Box height={{sm:"90vh", md:"70vh"}} padding={10}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignContent:"center", flexDirection:"column" }}>
      <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              color="#3bee2b"
              sx={{
                fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              Promoção Multiplan e
              Salute Max Empresarial
            </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 2, mb: 4, flexFlow:"wrap", justifyContent:"center" }}>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                2 a 3 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                20%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                4 a 29 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                25%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
    </Box>
    <Typography variant="caption" color="#969292" display="block" mt={2}>
            *Campanha válida durante as vigências de fevereiro e março de 2025. 
            Exclusiva para novos clientes. Consulte regulamento completo.
          </Typography>
    </Box>
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  mt: 2, 
                  px: 4,
                  py: 1.5,
                  fontSize: "1.2rem",
                  borderRadius: "30px"
                }}
                onClick={() => {
                  window.open(
                    "https://wa.me/558599077819?text=Quero%20mais%20informações%20sobre%20planos%20de%20saúde",
                    "_blank"
                  );
                }}
              >
                <WhatsAppIcon /> 
                <Box ml={1}>Fale com nossa consultora</Box>
              </Button> 
      </Box>
      <Box height={{sm:"90vh", md:"70vh"}} padding={10}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignContent:"center", flexDirection:"column" }}>
      <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              color="#3bee2b"
              sx={{
                fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              Promoção Multiplan e
              Salute Max Empresarial
            </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 2, mb: 4, flexFlow:"wrap", justifyContent:"center" }}>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                2 a 3 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                20%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                4 a 29 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                25%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
    </Box>
    <Typography variant="caption" color="#969292" display="block" mt={2}>
            *Campanha válida durante as vigências de fevereiro e março de 2025. 
            Exclusiva para novos clientes. Consulte regulamento completo.
          </Typography>
    </Box>
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  mt: 2, 
                  px: 4,
                  py: 1.5,
                  fontSize: "1.2rem",
                  borderRadius: "30px"
                }}
                onClick={() => {
                  window.open(
                    "https://wa.me/558599077819?text=Quero%20mais%20informações%20sobre%20planos%20de%20saúde",
                    "_blank"
                  );
                }}
              >
                <WhatsAppIcon /> 
                <Box ml={1}>Fale com nossa consultora</Box>
              </Button> 
      </Box>
      <Box height={{sm:"90vh", md:"70vh"}} padding={10}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignContent:"center", flexDirection:"column" }}>
      <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              color="#3bee2b"
              sx={{
                fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              Promoção Multiplan e
              Salute Max Empresarial
            </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 2, mb: 4, flexFlow:"wrap", justifyContent:"center" }}>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                2 a 3 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                20%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
        <Card sx={{ 
                    width: 200, 
                    textAlign: 'center', 
                    height: 120, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",                   
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                  }, 
                  }}>
            <CardContent>
            <Typography variant="h7">
                4 a 29 vidas:
            </Typography>
            <Typography variant="h3" color="primary" fontWeight="bold">
                25%
            </Typography>
            <Typography>de desconto vitalício</Typography>
            </CardContent>
        </Card>
    </Box>
    <Typography variant="caption" color="#969292" display="block" mt={2}>
            *Campanha válida durante as vigências de fevereiro e março de 2025. 
            Exclusiva para novos clientes. Consulte regulamento completo.
          </Typography>
    </Box>
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  mt: 2, 
                  px: 4,
                  py: 1.5,
                  fontSize: "1.2rem",
                  borderRadius: "30px"
                }}
                onClick={() => {
                  window.open(
                    "https://wa.me/558599077819?text=Quero%20mais%20informações%20sobre%20planos%20de%20saúde",
                    "_blank"
                  );
                }}
              >
                <WhatsAppIcon /> 
                <Box ml={1}>Fale com nossa consultora</Box>
              </Button> 
      </Box>
    </Carousel>
  );
}

export default Carrossel;
