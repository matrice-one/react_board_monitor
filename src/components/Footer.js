import React from 'react';
import { Box, Container, Grid, IconButton, Link, TextField, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'tertiary.main', color: 'white', mt: 3, py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justify="flex-start">
          <Grid item xs={12}>
            <Typography variant="h4">Your Logo</Typography>
            {/* Website Pages */}
            <Link href="#" color="inherit">Home</Link>
            <Link href="#" color="inherit">About</Link>
            <Link href="#" color="inherit">Services</Link>
            <Link href="#" color="inherit">Contact</Link>
            
            {/* Social Media Icons */}
            <IconButton color="inherit" href="#"><FacebookIcon /></IconButton>
            <IconButton color="inherit" href="#"><TwitterIcon /></IconButton>
            <IconButton color="inherit" href="#"><InstagramIcon /></IconButton>
            <IconButton color="inherit" href="#"><LinkedInIcon /></IconButton>
          </Grid>
          
          {/* Contact Info and Email Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6">Contact</Typography>
              <Typography>John Doe</Typography>
              <Typography>123 Main St, City, State 00000</Typography>
              <Typography>Phone: (123) 456-7890</Typography>
              <Typography>Email: john.doe@example.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }} boxBackgroundColor='primary.main'>
              <Typography variant="h6">Stay Updated!</Typography>
              <Typography>Share your email to get our news and updates.</Typography>
              <form>
                <TextField variant="filled" label="Your email" color="secondary" fullWidth />
                <Button variant="contained" color="secondary" fullWidth style={{ marginTop: '1rem' }}>Submit</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
        
        {/* Line Separator */}
        <hr style={{ margin: '2rem 0', borderTop: '1px solid white' }} />
        
        {/* Copyright */}
        <Typography align="center" variant="body2" color="inherit">
          © 2023 Positivus. All Rights Reserved. <Link href="#" color="inherit">Privacy Policy</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
