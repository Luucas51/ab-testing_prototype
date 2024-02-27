import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import { VersionProvider } from './context/VersionContext';

ReactDOM.render(
  <VersionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VersionProvider>,
  document.getElementById('root')
);
registerServiceWorker();
