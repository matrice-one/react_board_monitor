import React from "react";
import { TextField, InputAdornment, IconButton, Tooltip,  Box, Button, OutlinedInput} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ inputMessage, buttonMessage }) => {
  return (
    <TextField
      placeholder={inputMessage}
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={buttonMessage}>
              <IconButton color="secondary">
                <SearchIcon />
              </IconButton>
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
