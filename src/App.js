import React from 'react';
import ReactGA from 'react-ga';
import { Route, Routes } from 'react-router-dom';
import StyledDashboard from './components/StyledDashboard';
import useEffect from 'react'

import './App.css';
import MainContent from './components/MainContent';
// index.js or App.js

import './components/GlobalStyles.module.css'; // adjust path as needed
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

ReactGA.initialize('G-6JGY49J0W2');


const theme = createTheme({
  palette: {
    primary: {
      main: '#F3F3F3',
    },
    secondary: {
      main: '#D5364B',
    },
    tertiary: {
      main: '#191A23',
    },
    accent: {
      main: 'rgb(30, 236, 76)'
    }
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 16,
    h1: {
      fontSize: '2.3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    body1: {
      fontWeight: 400,
    },
  },
});


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/dashboard" element={<StyledDashboard />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
