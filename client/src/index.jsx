import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const Main = () => {

  return (
      <CssBaseline>
        <App />
      </CssBaseline>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Main />);