import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/youtube-playlist">
    <App />
  </Router>,

  document.getElementById('root')
);
