import React, { useState } from 'react';
import { TextField, InputAdornment, Tooltip, Button} from '@mui/material';

const SearchBar = ({ inputMessage, buttonMessage, onSearch }) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
      setSearch(event.target.value);
    };
  
    const handleClick = () => {
      onSearch(search); // Pass the current search string back to the parent component
    };

  return (
    <TextField
        value={search} 
        onChange={handleChange}
        label={inputMessage}
      placeholder={inputMessage}
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={buttonMessage}>
              <Button variant="contained" color="primary" onClick={handleClick}>{buttonMessage}</Button>
            </Tooltip>
          </InputAdornment>
        ),
        style: {
          borderRadius: 50, // rounded corners
          borderColor: 'secondary.main', // stroke color
        }
      }}
    />
  );
};

export default SearchBar;
