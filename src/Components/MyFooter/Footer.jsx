import React from 'react';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { Phone, Mail, LocationOn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ background: '#111', py: 8, px: 2 }}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: '1000px',
          mx: 'auto',
          p: 4,
          borderRadius: '16px',
          background: 'linear-gradient(120deg, #000000 50%, #2e2e2e 50%)',
        }}
      >
        <Grid container spacing={4}
        sx={{display: 'flex', justifyContent: 'space-between' , alignItems: 'center' }}
       >
          {/* Left: Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" sx={{ color: '#39FF14 ', 
               mb: 2 }}>
              CONTACT
            </Typography>
            <Box
              sx={{
                borderBottom: '1px solid #fff',
                width: '40px',
                mb: 3,
              }}
            />
            <Box sx={{ color: '#ccc', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ color: '#fff' }} /> +92 369194872
            </Box>
            <Box sx={{ color: '#ccc', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Mail sx={{ color: '#fff' }} /> mhussain@gmail.com
            </Box>
            <Box sx={{ color: '#ccc', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn sx={{ color: '#fff' }} /> Gilgit Baltistan , Pakistan
            </Box>
            <Box
              sx={{
                
                width: '40px',
                mt: 4,
              }}
            />
          </Grid>

          {/* Right: Contact Form */}
          <Grid item xs={12} md={7} 
          sx={{paddingTop: 2,}}
          >
            <Grid container spacing={2}
            sx={{ display: 'flex', 
                flexDirection: 'column',
                
               }}>
              <Grid 
              sx={{ display: 'flex', 
                alignItems: 'center',
                gap: 2,
                
               }}  >
              
                   <Grid item xs={12} sm={6}>
                <TextField
                  label="Your name"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  sx={{ bgcolor: '#333', input: { color: '#fff' }, label: { color: '#aaa' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Email"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  sx={{ bgcolor: '#333', input: { color: '#fff' }, label: { color: '#aaa' } }}
                />
              </Grid>
              </Grid>
               <Grid
               sx={{ display: 'flex', 
                gap: 2,
                
               }}>
                 <Grid item xs={12}>
                <TextField
                  label="Your subject"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  sx={{ bgcolor: '#333', input: { color: '#fff'  }, label: { color: '#aaa'   },  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="filled"
                  multiline
                  rows={4}
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  sx={{ bgcolor: '#333', textarea: { color: '#fff' }, label: { color: '#aaa' } , padding: '5px'}}
                />
              </Grid>
              
               </Grid>
               <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#00ff00',
                    color: '#000',
                    fontWeight: 'bold',
                    px: 4,
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#00cc00' },
                  }}
                >
                  Send
                </Button>
              </Grid>
            
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Footer;
