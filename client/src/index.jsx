import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx'

const Main = () => {

  return (
    <div>
      <App />
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Main />);