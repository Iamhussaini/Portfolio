import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProjectsContainer = styled(Box)({
  background: "linear-gradient(70.5deg,  #2e2e2e 50%, #000000 50%)",
  padding: '60px 20px',
  minHeight: '100vh',
  color: 'white',
});

const ProjectsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
  marginBottom: '40px',
});

const ProjectCard = styled(Card)({
  backgroundColor: '#2a2a2a',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 255, 0, 0.2)',
  },
});

const ProjectImage = styled(CardMedia)({
  height: 200,
  position: 'relative',
});

const ProjectContent = styled(CardContent)({
  padding: '20px',
  color: 'white',
});

const ViewMoreButton = styled(Button)({
  backgroundColor: 'hsl(120, 100%, 50%)',
  color: 'black',
  borderRadius: '25px',
  padding: '8px 20px',
  fontWeight: 'bold',
  textTransform: 'none',
  marginTop: '15px',
  '&:hover': {
    backgroundColor: 'hsl(120, 100%, 60%)',
    boxShadow: '0 0 20px hsl(120, 100%, 50%)',
  },
});

const DotsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
  marginTop: '30px',
});

const Dot = styled(IconButton)(({ ...props }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  padding: 0,
  minWidth: 'auto',
  backgroundColor: props.active ? 'hsl(120, 100%, 50%)' : '#555',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: props.active ? 'hsl(120, 100%, 60%)' : '#777',
    boxShadow: props.active ? '0 0 15px hsl(120, 100%, 50%)' : 'none',
  },
}));

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projectSlides = [
    [
      {
        id: 1,
        title: 'Portfolio Website UI',
        category: 'UI Design',
        image: 'https://i.pinimg.com/736x/d2/29/49/d229492ab19772d5b469636880c64e6c.jpg',
        description: 'Modern portfolio website with clean design',
      },
      {
        id: 2,
        title: 'E-commerce Platform',
        category: 'Web Development',
        image: 'https://i.pinimg.com/736x/d8/04/5d/d8045d6ad985a546b74bc6ca1e60296d.jpg',
        description: 'Full-stack e-commerce solution',
      },
      {
        id: 3,
        title: 'Mobile App Design',
        category: 'UI/UX',
        image: 'https://i.pinimg.com/736x/24/b4/aa/24b4aa2b4b26aa22222113888ca8674c.jpg',
        description: 'iOS and Android app interface',
      },
    ],
    [
      {
        id: 4,
        title: 'Dashboard Analytics',
        category: 'Data Visualization',
        image: 'https://i.pinimg.com/1200x/e4/34/4e/e4344e6cab68c04ceea27850de7f970e.jpg',
        description: 'Real-time analytics dashboard',
      },
      {
        id: 5,
        title: 'Social Media App',
        category: 'Mobile Development',
        image: 'https://i.pinimg.com/1200x/54/2c/08/542c0887f1948c4f18741ebd47503fb0.jpg',
        description: 'Social networking platform',
      },
      {
        id: 6,
        title: 'Brand Identity',
        category: 'Graphic Design',
        image: 'https://i.pinimg.com/1200x/1b/55/23/1b5523c9dc7d7ae70be2744dfd497f4b.jpg',
        description: 'Complete brand identity design',
      },
    ],
    [
      {
        id: 7,
        title: 'AI Chatbot Interface',
        category: 'AI/ML',
        image: 'https://i.pinimg.com/1200x/b7/6c/aa/b76caa23d4c9a49014a0a0f95a4ccba8.jpg',
        description: 'Intelligent chatbot UI design',
      },
      {
        id: 8,
        title: 'Crypto Trading App',
        category: 'FinTech',
        image: 'https://i.pinimg.com/1200x/28/c9/56/28c95657056993d7f706e323363eb89d.jpg',
        description: 'Cryptocurrency trading platform',
      },
      {
        id: 9,
        title: 'Learning Management',
        category: 'EdTech',
        image: 'https://i.pinimg.com/1200x/46/9c/08/469c0836b7697640b956ba52c257ea2b.jpg',
        description: 'Online learning platform',
      },
    ],
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <ProjectsContainer>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 'bold',
          marginBottom: '50px',
          fontSize: { xs: '2rem', md: '3rem' },
          letterSpacing: '2px',
        }}
      >
        PROJECTS
      </Typography>

      <ProjectsGrid>
        {projectSlides[activeSlide].map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage image={project.image} title={project.title} component="img" />
            <ProjectContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '8px', color: 'white' }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'hsl(120, 100%, 50%)', fontWeight: '500', marginBottom: '10px' }}
              >
                {project.category}
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc', marginBottom: '15px', lineHeight: 1.6 }}>
                {project.description}
              </Typography>
              <ViewMoreButton size="small">View more</ViewMoreButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <DotsContainer>
        {projectSlides.map((_, index) => (
          <Dot key={index} active={activeSlide === index} onClick={() => handleDotClick(index)} />
        ))}
      </DotsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
