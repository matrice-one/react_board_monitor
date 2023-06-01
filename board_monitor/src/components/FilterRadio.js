import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography } from '@mui/material';


export default function RowRadioButtonsGroup() {
  return (
    <FormControl sx={{ textAlign: 'left' }}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        <Typography variant="h4" component="div" fontWeight="bold">Type</Typography>
      </FormLabel>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="company" control={<Radio />} label={<Typography variant="body2">Company</Typography>} />
        <FormControlLabel value="board member" control={<Radio />} label={<Typography variant="body2">Board Member</Typography>}  />
      </RadioGroup>
      
    </FormControl>
  );
}