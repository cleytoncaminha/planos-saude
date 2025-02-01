import React from "react";
import { Box, Typography, Grid, Divider, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";

export default function HospitalsSection() {
  const categories = [
    {
      title: "Hospitais e Pronto Atendimento",
      items: [
        "Hospital Unimed",
        "Hospital Unimed Sul",
        "Hospital São Raimuno",
        "Hospital da Criança",
        "Hospital Central de Fortaleza",
        "Hospital de Olhos Leiria Andrade",
        "Hospital Gênesis",
        "Pronto Atendimento Aldeota",
        "IOF",
        "Policlínica Pecém",
        "Policlínica de Aracati",
        "Hospital São Camilo",
        "Instituo do câncer do Ceará (ICC)",
        "E outras opções disponíveis*",
      ],
    },
    {
      title: "Laboratórios",
      items: [
        "Laboratório Unimed",
        "Laboratório Clementino Fraga",
        "Laboratório Evandro Chagas",
        "Laboratório Evandro Pessoa",
        "Laboratório Emilio Ribas",
        "Laboratório Klaus Magno",
        "Central de análises clínicas",
        "Prontoclínica Arruda Bastos",
        "E outras opções disponíveis*",
      ],
    },
    {
      title: "Clínicas de Imagem",
      items: [
        "Hospital Unimed",
        "Hospital Unimed Sul",
        "Multiclínica Fortaleza",
        "Clínica Imagemama",
        "Clínica Radius",
        "Clínica Dr. Mário Márcio",
        "Clínica Trajano Almeida",
        "Uno Diagnósticos",
        "Boghos Edilson Brasil Soares",
        "Ecogênesis",
        "Gastroimagem",
        "Otoimagem Caucaia",
        "E outras opções disponíveis*",
      ],
    },
  ];

  return (
    <Box id="rede" sx={{ backgroundColor: "#dedede", py: 6, px: 3 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#2e7d32" }}
      >
        Rede de Atendimento Plano de Saúde Unimed Fortaleza
      </Typography>

      <Divider sx={{ my: 4, borderColor: "#c5e1a5" }} />

      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#388e3c" }}
                >
                  {category.title}
                </Typography>
                <List>
                  {category.items.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Typography
                variant="caption"
                display="block"
                align="center"
                sx={{ mt: 2, color: "#616161" }}
            >
                *De acordo com o plano contratado.
            </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mt: 6, borderColor: "#c5e1a5" }} />
    </Box>
  );
}