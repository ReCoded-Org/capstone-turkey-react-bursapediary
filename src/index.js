import React from 'react';
import ReactDOM from 'react-dom';
/* import { BrowserRouter as Router } from 'react-router-dom'; */
import 'tw-elements';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Router></Router> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
