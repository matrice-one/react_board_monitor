import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, Button, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';

const SearchBar = ({ inputMessage, buttonMessage, onSearch }) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    const response = await fetch(`http://127.0.0.1:8000/api/companies/?query=${query}`);
    const data = await response.json();
    setSuggestions(data);
  };

  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  useEffect(() => {
    if (search) {
      debouncedFetchSuggestions(search);
    } else {
      setSuggestions([]);
    }
  }, [search]);

  const handleInputChange = (event, value, reason) => {
    if (reason === 'input') {
      setSearch(value);
    }
  };

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <Box width="80%" mx="auto" mt={2}>
      <Autocomplete
        freeSolo
        options={suggestions.map((option) => option.name)}
        renderInput={(params) => (
          <TextField 
            {...params} 
            label={inputMessage} 
            variant="outlined" 
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  <InputAdornment position="end">
                    <Button variant="contained" color="secondary" onClick={handleSearch}>
                      {buttonMessage}
                    </Button>
                  </InputAdornment>
                </>
              ),
            }}
          />
        )}
        onInputChange={handleInputChange}
      />
    </Box>
  );
};

export default SearchBar;
