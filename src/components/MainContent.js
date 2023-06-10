import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Header';
import Banner from './Banner'
import SectionTitle from './SectionTitle';
import { Typography, Button, Grid, Container, CardMedia, Box } from '@mui/material';
import StyledContainer from './StyledContainer';

const MainContent = () => {
  return (
    <div>
    <NavBar/>

    <Box sx={{ px: 10 }}>


    {/* <Container maxWidth="xl" pad> */}
    <Banner/>
    {/* </Container> */}
    

    {/* <Container maxWidth="xl"> */}
        <Box display="flex"  pt={2} justifyContent="flex-start">
          <SectionTitle title="Features" bgColor="secondary.main" />
        </Box>
        <Box display="flex"  pt={2} justifyContent="flex-start">
        </Box>
    {/* </Container> */}

    {/* <Container maxWidth="xl"> */}
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <StyledContainer title="Competitive analysis" bgColor="secondary.main" textColor="tertiary.main"  boxBackgroundColor='primary.main'>
              <>Learn more</>
            </StyledContainer>
          </Grid>

          <Grid item xs={12} lg={6}>
            <StyledContainer title="Influencial Board Members" bgColor="primary.main" textColor='tertiary.main'  boxBackgroundColor='secondary.main'>
            <p>Learn more</p>
            </StyledContainer>
          </Grid>

          <Grid item xs={12} lg={6}>
            <StyledContainer title="Industry trends" bgColor="primary.main" textColor='tertiary.main' boxBackgroundColor='tertiary.main'>
            <p>Learn more</p>
            </StyledContainer>
          </Grid>
        
      {/* Add more Grid items as needed... */}
    </Grid>
    {/* </Container> */}


    </Box>


    

    </div>

  )
}

export default MainContent;