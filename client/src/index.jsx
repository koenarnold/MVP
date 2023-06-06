import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

const Main = () => {

  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));