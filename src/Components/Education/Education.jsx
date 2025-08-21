import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(108deg, #000000 50%, #2e2e2e 50%)',
  padding: '100px 20px',
  [theme.breakpoints.down('md')]: {
    padding: '80px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 12px',
  },
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '40px',
  marginTop: '60px',
  width: '100%',
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: '40px',
  marginBottom: '30px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '3px',
    height: '100%',
    background: '#4e4949ff',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-6px',
    top: '0',
    width: '15px',
    height: '15px',
    backgroundColor: 'hsla(170, 76%, 36%, 1.00)',
    borderRadius: '50%',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '30px',
    marginBottom: '25px',
  },
}));

const TimelinePeriod = styled(Typography)({
  fontSize: '14px',
  color: '#2e7375',
  fontWeight: 600,
  marginBottom: '8px',
});

const TimelineTitle = styled(Typography)({
  fontSize: '20px',
  color: '#ffffff',
  fontWeight: 700,
  marginBottom: '8px',
});

const TimelineCompany = styled(Typography)({
  fontSize: '16px',
  color: 'hsl(240, 5%, 64.9%)',
  marginBottom: '12px',
});

const TimelineDescription = styled(Typography)({
  fontSize: '14px',
  color: 'hsl(240, 5%, 64.9%)',
  lineHeight: 1.6,
});

const educationData = [
  {
    period: 'Completed - 2024',
    title: 'Higher Secondary School Certificate (HSSC) – Computer Science',
    company: 'Unity Public School & College, Gilgit',
    description:
      "",
  },
 
];

const jobsData = [
  {
    period: 'October 2022 - January 2023',
    title: 'Front-end Developer Intern',
    company: 'Binary Hub Gilgit ',
    description:
      'Assisted in building responsive websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. Supported the dev team with UI debugging, layout fixes, and feature development using React.js and Next.js.Gained hands-on experience in real client projects, collaborating with backend developers using Node.js for integration. ',
    
  },
  {
    period: 'April 2023 ',
    title: 'Front-end Developer',
    company: 'Artcube |  ( Present )',
    description:
      'Developing modern, responsive web interfaces using React.js, Next.js, Tailwind CSS, and JavaScript. Collaborating closely with designers and backend teams to implement seamless UI/UX and API integrations using Node.js. Optimizing website performance, accessibility, and responsiveness across multiple devices and browsers.',
  },
];

const Education: React.FC = () => {
  return (
    <SectionContainer id="education">
      <Container maxWidth="lg">
        <TimelineContainer>
          <Box>
            <Typography
              variant="h2"
               fontFamily={"fantasy"}
          letterSpacing={"0.2rem"}
              sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
              
                color: '#ffffff',
                marginBottom: 4,
              }}
            >
              Education
            </Typography>
            {educationData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelinePeriod>{item.period}</TimelinePeriod>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineCompany>{item.company}</TimelineCompany>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </Box>

          <Box>
            <Typography
              variant="h2"
               fontFamily={"fantasy"}
          letterSpacing={"0.2rem"}
              sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
               
                color: '#ffffff',
                marginBottom: 4,
              }}
            >
              Jobs
            </Typography>
            {jobsData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelinePeriod>{item.period}</TimelinePeriod>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineCompany>{item.company}</TimelineCompany>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </Box>
        </TimelineContainer>
      </Container>
    </SectionContainer>
  );
};

export default Education;
