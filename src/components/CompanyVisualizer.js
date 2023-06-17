import React, { useState } from 'react';
import CompanySearchBox from './CompanySearchBox';
import NetworkGraph from './NetworkGraph';
import Autocomplete from './AutocompleteInput';

const CompanyVisualizer = () => {
  const [data, setData] = useState(null);

  const fetchGraphData = async (query) => {
    const response = await fetch(`http://board-visualizer.ch/api/network-data/?search_term=${query}`);
    const json = await response.json();
    setData(json);
  };

  return (
    <div>
      <Autocomplete onLaunchGraph={fetchGraphData} />
      {data ? (
        <NetworkGraph data={data} />
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
};

export default CompanyVisualizer;


// // const response = await fetch(`http://127.0.0.1:8000/api/api/network-data/?search_term=${query}}`);
// // const response = await fetch(`http://127.0.0.1:8000/api/companies/?query=${query}`);