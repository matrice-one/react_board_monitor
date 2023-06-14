import React, { useState, useEffect, useCallback } from 'react';
import { TextField, InputAdornment, Button, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';
import { useTheme } from '@mui/material/styles';


const SearchBar = ({ inputMessage, buttonMessage, onSearch }) => {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(''); // New state to store selected item
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async (query) => {
    const response = await fetch(`http://board-visualizer.ch/api/companies/?query=${query}`);
    const data = await response.json();
    setSuggestions(data);
  }, [setSuggestions]);

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), [fetchSuggestions]);

  useEffect(() => {
    if (search) {
      debouncedFetchSuggestions(search);
    } else {
      setSuggestions([]);
    }
  }, [search, debouncedFetchSuggestions]);

  const handleInputChange = (event, value, reason) => {
    if (reason === 'input') {
      setSearch(value);
    }
  };

  const handleSearch = () => {
    onSearch(selectedItem);
  };

  return (
    <Box width="80%" mx="auto" mt={2}>
      <Autocomplete
        freeSolo
        options={suggestions.map((option) => option.name)}
        onChange={(event, newValue) => {
          setSelectedItem(newValue); // Store the selected item when an item is selected from the dropdown
        }}
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
