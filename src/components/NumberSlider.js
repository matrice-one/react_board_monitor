import React from 'react';
import { Slider, Box, Typography } from '@mui/material';

function NumberSlider({ maxNodes, setMaxNodes }) {
  const handleChange = (event, newValue) => {
    setMaxNodes(newValue);
  };

  return (
    <div>
    <Box sx={{ width: 250 }}>
    <Typography variant="h4" component="div" align="left" fontWeight="bold">Number of nodes</Typography>
      <Slider
        value={maxNodes}
        onChange={handleChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={0}
        max={200}
        sx={{
            color: 'secondary.main', 
            '& .MuiSlider-thumb': { 
                backgroundColor: 'tertiary.main', 
            },
            
        }}
      />
    </Box>
      
    </div>
  );
}

export default NumberSlider;
