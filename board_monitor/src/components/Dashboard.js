import "./Dashboard.css";
import AutocompleteInput from "./AutocompleteInput";
import React, { useState } from "react";
import NetworkGraph from "./NetworkGraph";
import Section from "./Section";

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchGraphData = async (query) => {
    const response = await fetch(
      `http://board-visualizer/api/network-data/?search_term=${query}`
    );
    const json = await response.json();
    setData(json);
  };

  const onLaunchGraph = (query) => {
    if (data) {
      // Clear the data state if it already has a value
      setData(null);
    }
    fetchGraphData(query);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="dashboard-filters">
          <div className="autocomplete-container">
            <AutocompleteInput onLaunchGraph={onLaunchGraph} />
          </div>
          <div className="network-container">
            {data ? <NetworkGraph data={data} /> : <p>No data to display.</p>}
          </div>
        </div>
      </div>
      <Section title="My Section Title" children={<p>Youu</p>}></Section>

    </div>
  );
};

export default Dashboard;
