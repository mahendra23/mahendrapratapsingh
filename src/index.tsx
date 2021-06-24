import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNew from './container/AppNew';

import { worker } from './api-mocks/browser';
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <AppNew />
  </React.StrictMode>,
  document.getElementById('root')
);
