import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(112deg, #000000 50%, #2e2e2e 50%)',
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
    backgroundColor: 'hsl(142, 76%, 36%)',
    borderRadius: '50%',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '30px',
    marginBottom: '25px',
  },
}));

const TimelinePeriod = styled(Typography)({
  fontSize: '14px',
  color: '#39FF14',
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
    period: 'January 2020 - December 2023',
    title: 'Information Systems',
    company: 'KIU (Karakurum International University)',
    description:
      "Bachelor's degree in Information Systems with a focus on software development and data management.",
  },
  {
    period: 'August 2018 - December 2019',
    title: 'Web Development',
    company: 'KIU (Karakurum International University)',
    description:
      'Specialized course in modern web development technologies and frameworks.',
  },
];

const jobsData = [
  {
    period: 'October 2021 - January 2023',
    title: 'IT Assistant',
    company: 'Grande Valor Consultoria Empresarial LTDA',
    description:
      'Responsible for system maintenance, user support, and development of internal tools.',
  },
  {
    period: 'August 2020 - August 2021',
    title: 'Front-end Developer (Intern)',
    company: 'Grande Valor Consultoria Empresarial LTDA',
    description:
      'Developed responsive web interfaces and collaborated on various client projects.',
  },
];

const Education: React.FC = () => {
  return (
    <SectionContainer id="education">
      <Container maxWidth="lg">
        <TimelineContainer>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 900,
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
              variant="h3"
              sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 900,
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
