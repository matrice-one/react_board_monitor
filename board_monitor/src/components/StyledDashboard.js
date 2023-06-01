import React from 'react';
import { Typography, Button, Grid, Container, CardMedia, Box } from '@mui/material';
import DrawerAppBar from './Header';
import SearchBar from './StyledSearchBar'
import StyledContainer from './StyledContainer';
import RowRadioButtonsGroup from './FilterRadio';
import RangeSlider from './FilterSlider';

import NetworkGraph from './NetworkGraph';

function StyledDashboard () {
    const handleSearch = (searchQuery) => {
        NetworkGraph.fetchAndRenderGraph(searchQuery); // Call the function that fetches data and renders a graph
      };
    
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
                <SearchBar inputMessage="Search for items..." buttonMessage="Start Search" onSearch={handleSearch}/>
            </Box>
        </Container>

        <Container maxWidth="xl">
            <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
                <StyledContainer title="Interactive visualizer" bgColor="tertiary.main" textColor="primary.main">
                    <NetworkGraph />
                </StyledContainer>
            </Grid>
            <Grid item xs={12} lg={3}>
      <Grid container spacing={2} direction="row" style={{ height: '100%' }}>
        <Grid item xs={12}>
          <StyledContainer title="Filter by:" bgColor="tertiary.main" textColor='primary.main'>
            <RowRadioButtonsGroup/>
          </StyledContainer>
        </Grid>
        <Grid item xs={12}>
          <StyledContainer title="Control panel:" bgColor="tertiary.main" textColor='primary.main'>
           <RangeSlider/>
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