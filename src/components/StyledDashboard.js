import React,{useState,useCallback, useEffect} from 'react';
import { Typography, Grid, Container, Box } from '@mui/material';
import DrawerAppBar from './Header';
import SearchBar from './StyledSearchBar'
import StyledContainer from './StyledContainer';
import RowRadioButtonsGroup from './FilterRadio';
import NumberSlider from './NumberSlider';
import NetworkGraph from './NetworkGraph';

const StyledDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [maxNodes, setMaxNodes] = useState(50);

  // We wrap fetchData in useCallback to prevent unnecessary re-renders and re-fetches
// Define the function outside of useCallback
  const fetchFunction = async (searchQuery, maxNodes) => {
    try {
      const response = await fetch(`http://board-visualizer.ch/api/network-data/?search_term=${searchQuery}&max_nodes=${maxNodes}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  // Use useCallback to ensure that the function does not change across re-renders
  const fetchData = useCallback(fetchFunction, []);


  // Fetch data when searchTerm or maxNodes changes
  useEffect(() => {
    fetchData(searchTerm, maxNodes);
  }, [searchTerm, maxNodes, fetchData]);

    const onLaunchGraph = (query) => {
      setSearchTerm(query); // Set the search term state

      if (data) {
        // Clear the data state if it already has a value
        setData(null);
      }
      fetchData(query, maxNodes);
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
          <SearchBar inputMessage="Search for items..." buttonMessage="Start Search" onSearch={onLaunchGraph} />
        </Box>
      </Container>

        <Container maxWidth="xl">
            <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
                <StyledContainer title="Interactive visualizer" bgColor="tertiary.main" textColor="primary.main" height="500px">
                
                    {data !== null && <NetworkGraph data={data} searchTerm={searchTerm} />}
                    
                
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
           <NumberSlider maxNodes={maxNodes} setMaxNodes={setMaxNodes} />

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