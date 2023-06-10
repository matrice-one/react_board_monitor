import * as React from 'react';
import { Slider, Box } from '@mui/material';

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Range slider'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0} // minimum value
        max={100} // maximum value
        sx={{
            color: 'secondary.main', 
            '& .MuiSlider-thumb': { 
                backgroundColor: 'tertiary.main', 
            },
            
        }}
      />
    </Box>
  );
}
