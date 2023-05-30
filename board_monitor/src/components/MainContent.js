import React from 'react';
import { Link } from 'react-router-dom';
import DrawerAppBar from './Header';
import Banner from './Banner'
import SectionTitle from './SectionTitle';
import { Typography, Button, Grid, Container, CardMedia, Box } from '@mui/material';
import StyledContainer from './StyledContainer';

const MainContent = () => {
  return (
    <div>
    <DrawerAppBar/>

    <Banner/>

    <Container maxWidth="xl">
        <Box display="flex"  pt={2} justifyContent="flex-start">
          <SectionTitle title="Features" bgColor="secondary.main" />
        </Box>
        <Box display="flex"  pt={2} justifyContent="flex-start">
        </Box>
    </Container>

    <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <StyledContainer title="Competitive analysis" bgColor="tertiary.main" textColor="primary.main">
              <p>Some content</p>
            </StyledContainer>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledContainer title="Competitive analysis" bgColor="secondary.main" textColor='primary.main'>
            <p>Some content</p>
            </StyledContainer>
          </Grid>
        
      {/* Add more Grid items as needed... */}
    </Grid>
    </Container>





    

    </div>

  )
}

export default MainContent;