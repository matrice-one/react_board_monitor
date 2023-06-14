import React from 'react';
import { Slider, Box } from '@mui/material';

function NumberSlider({ maxNodes, setMaxNodes }) {
  const handleChange = (event, newValue) => {
    setMaxNodes(newValue);
  };

  return (
    <div>
    <Box sx={{ width: 250 }}>
    <h2>Control Panel</h2>
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
