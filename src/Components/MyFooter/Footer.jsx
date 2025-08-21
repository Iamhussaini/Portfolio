import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { Phone, Mail, LocationOn } from '@mui/icons-material';

const Footer = () => {
  // State for form fields
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    emailjs.send(
      'service_qa6ncsq', // replace with your EmailJS service ID
      'template_4j3w1vz', // replace with your EmailJS template ID
      {
        userName,
        userEmail,
        userSubject,
        userMessage,
      },
      'ehUi8dCce6AE9Wj8Z' // replace with your EmailJS public key
    )
      .then(() => {
        setSent(true);
        setUserName('');
        setUserEmail('');
        setUserSubject('');
        setUserMessage('');
      })
      .catch((err) => {
        setError('Failed to send message. Please try again.');
      })
      .finally(() => setSending(false));
  };
  return (
    <Box id="contact" sx={{ background: '#111', py: 8, px: 2 }}>
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
            <Typography variant="h5"  fontFamily={"fantasy"}
          letterSpacing={"0.2rem"} sx={{ color: '#2e7375', 
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
              <Mail sx={{ color: '#fff' }} /> hussainsawoo@gmail.com
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
          <Grid item xs={12} md={7} sx={{ paddingTop: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your name"
                      variant="filled"
                      fullWidth
                      name="userName"
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ bgcolor: '#333', input: { color: '#fff' }, label: { color: '#aaa' } , borderRadius: '8px', }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Email"
                      variant="filled"
                      fullWidth
                      name="userEmail"
                      value={userEmail}
                      onChange={e => setUserEmail(e.target.value)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ bgcolor: '#333', input: { color: '#fff' }, label: { color: '#aaa' } , borderRadius: '8px', }}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', gap: 2 }}>
                  <Grid item xs={12}>
                    <TextField
                      label="Your subject"
                      variant="filled"
                      fullWidth
                      name="userSubject"
                      value={userSubject}
                      onChange={e => setUserSubject(e.target.value)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ bgcolor: '#333', input: { color: '#fff' }, label: { color: '#aaa' } , borderRadius: '8px', }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="filled"
                      multiline
                      rows={4}
                      fullWidth
                      name="userMessage"
                      value={userMessage}
                      onChange={e => setUserMessage(e.target.value)}
                      InputProps={{ disableUnderline: true }}
                      sx={{ bgcolor: '#333', textarea: { color: '#fff' }, label: { color: '#aaa' },  borderRadius: '8px', width: '110%' }}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: '#2e7375',
                      color: '#fff7f7ff',
                      fontWeight: 'bold',
                      px: 4,
                      borderRadius: '8px',
                      '&:hover': { bgcolor: '#2e7375' },
                    }}
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send'}
                  </Button>
                </Grid>
                {sent && (
                  <Grid item xs={12}>
                    <Typography sx={{ color: '#2e7375', mt: 1 }}>Message sent successfully!</Typography>
                  </Grid>
                )}
                {error && (
                  <Grid item xs={12}>
                    <Typography sx={{ color: 'red', mt: 1 }}>{error}</Typography>
                  </Grid>
                )}
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Footer;
