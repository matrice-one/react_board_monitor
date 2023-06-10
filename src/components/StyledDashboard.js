import React,{useState} from 'react';
import { Typography, Grid, Container, Box } from '@mui/material';
import DrawerAppBar from './Header';
import SearchBar from './StyledSearchBar'
import StyledContainer from './StyledContainer';
import RowRadioButtonsGroup from './FilterRadio';
import RangeSlider from './FilterSlider';

import NetworkGraph from './NetworkGraph';

function StyledDashboard () {
    const [data, setData] = useState(null);
  
    const fetchData = async (searchQuery) => {
      try {
        const response = await fetch(`http://board-visualizer.ch/api/network-data/?search_term=${searchQuery}`);
        
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: { sm: '60%' }, margin: { xs: 0, sm: '0 auto' } }}>
          <SearchBar inputMessage="Search for items..." buttonMessage="Start Search" onSearch={fetchData} />
        </Box>
      </Container>

        <Container maxWidth="xl">
            <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
                <StyledContainer title="Interactive visualizer" bgColor="tertiary.main" textColor="primary.main" height="500px">
                
                    {data !== null && <NetworkGraph data={data} />}
                    
                
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