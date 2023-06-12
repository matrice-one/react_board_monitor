import React from 'react';
import { Typography, Button, Grid, Container, CardMedia, Box } from '@mui/material';
import BannerImage from '../media/images/landing-banner-image.png';  // Replace this path with the actual path to your image
import { Link } from 'react-router-dom';

function Banner() {
    return (

    <Box pt={2}>
      {/* <Container maxWidth="xl"> */}
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" height="100%">
            <Box pb={2}>
              <Typography variant="h2" align="left">
              Unveil the Hidden Network of Companies and Members
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="h4" align="left" gutterBottom>
              Leverage our powerful network analysis tool to gain valuable insights, identify patterns, and make data-driven business decisions.
              </Typography>
              </Box>
              <Button component={Link} to="/dashboard" variant="contained" color="secondary" size="large">
                Search a company
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" justifyContent="flex-end">
              <CardMedia
                component="img"
                height="20%"
                image={BannerImage}
                alt="Banner Image"
                sx={{ objectFit: 'contain' }}
              />
            </Box>
          </Grid>
        </Grid>
      {/* </Container> */}
    </Box>
    );
  }
  
  export default Banner;