import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import WebIcon from '@mui/icons-material/LaptopMac';
import DesignIcon from '@mui/icons-material/DesignServices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShareIcon from '@mui/icons-material/Share';

const services = [
  [
    { icon: <WebIcon sx={{ color: '#39FF14', fontSize: 30 }} />, title: 'Web Development' },
    { icon: <DesignIcon sx={{ color: '#39FF14', fontSize: 30 }} />, title: 'UI Design' }
  ],
  [
    { icon: <PhoneAndroidIcon sx={{ color: '#39FF14', fontSize: 30 }} />, title: 'Mobile Development' },
    { icon: <ShareIcon sx={{ color: '#39FF14', fontSize: 30 }} />, title: 'Social Media Design' }
  ]
];

const Services = () => {
  return (
    <Box sx={{ background: "linear-gradient(53deg, #2e2e2e 50%, #000000 50% )", py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h2" fontWeight="bold" color="white" mb={4}>
        My Services
      </Typography>

      {services.map((row, idx) => (
        <Grid container spacing={6} justifyContent="center" key={idx} mb={4}>
          {row.map((service, index) => (
            <Grid item xs={12} sm={5} md={3} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center',  gap: 1 }}>
                {service.icon}
                <Typography variant="body1" color="white" >
                  {service.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default Services;
