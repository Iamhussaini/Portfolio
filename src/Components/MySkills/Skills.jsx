import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  LinearProgress,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const skills = [
  {
    name: "HTML",
    value: 97,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    value: 70,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    value: 70,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Bootstrap",
    value: 90,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React",
    value: 75,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Webflow",
    value: 75,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
  },
  {
    name: "WordPress",
    value: 80,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Tailwind CSS",
    value: 70,
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
];

const Skills = () => (
  <Box
    id="skills"
    sx={{
      background: "linear-gradient(114deg, #000000 50%, #2e2e2e 50%)",
      py: 8,
      px: { xs: 3, md: 12 },
      textAlign: "center",
      color: "white",
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                backgroundColor: "#1f1f1f",
                borderRadius: 3,
                color: "white",
                width: 180,
                height: 180,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: 'inset 0 0 10px #39FF14',
                
              }}
            >
              <CardContent>
                <Avatar
                  src={skill.logo}
                  alt={skill.name}
                  sx={{ width: 48, height: 48, mx: "auto", mb: 1 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                  {skill.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#39FF14", fontWeight: 600 }}
                >
                  {skill.value}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    mt: 1,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#333",
                    "& .MuiLinearProgress-bar": { backgroundColor: "#39FF14" },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Skills;
