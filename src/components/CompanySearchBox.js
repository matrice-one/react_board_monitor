import React, { useState } from 'react';

const CompanySearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleQueryChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    if (inputValue.length >= 3) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/companies/?query=${inputValue}`);
        const data = await response.json();
        setSuggestions(data.results);
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleSuggestionClick = (suggestion) => {
    query(suggestion);
    setSuggestions([]);
    console.log('Suggestion clicked:', suggestion);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for a company:
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
        />
      </label>
      <button type="submit">Launch Graph</button>
      {suggestions && suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion.name)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default CompanySearchBox;
