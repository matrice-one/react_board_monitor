import React from 'react';
import { Typography, Button, Grid, Container, CardMedia, Box } from '@mui/material';
import DrawerAppBar from './Header';
import SearchBar from './StyledSearchBar'
import StyledContainer from './StyledContainer';


function StyledDashboard () {
    return(
        <div>
        <DrawerAppBar/>

        <Box p={2}>
            <Typography variant="h1" fontWeight="bold" align='center'>
                Company & Board Member Connections Explorer
            </Typography>
        </Box>

        <Container>
            <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    width: { sm: '60%' },
                    margin: { xs: 0, sm: '0 auto' } 
                }}>
                <SearchBar inputMessage="Search for items..." buttonMessage="Start Search" />
            </Box>
        </Container>

        <Container maxWidth="xl">
            <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
                <StyledContainer title="Interactive visualizer" bgColor="tertiary.main" textColor="primary.main">
                <p>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum av</p>
                </StyledContainer>
            </Grid>
            <Grid item xs={12} lg={3}>
      <Grid container spacing={2} direction="row" style={{ height: '100%' }}>
        <Grid item xs={12}>
          <StyledContainer title="Competitive analysis" bgColor="secondary.main" textColor='primary.main'>
            <p>Some content</p>
          </StyledContainer>
        </Grid>
        <Grid item xs={12}>
          <StyledContainer title="Competitive analysis" bgColor="secondary.main" textColor='primary.main'>
            <p>Some content</p>
          </StyledContainer>
        </Grid>
      </Grid>
    </Grid>
        
        {/* Add more Grid items as needed... */}
            </Grid>
        </Container>
       
        </div>

    )
}
export default StyledDashboard