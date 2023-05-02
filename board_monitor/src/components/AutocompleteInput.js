import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    const response = await fetch(`http://127.0.0.1:8000/api/companies/?query=${query}`);
    const data = await response.json();
    console.log(data);
    setSuggestions(data);
  };

  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  useEffect(() => {
    if (inputValue) {
      debouncedFetchSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    console.log('Suggestion clicked:', suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Start typing..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion.name)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
