import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const Main = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Main />);