import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import "primereact/resources/themes/md-dark-indigo/theme.css";
import 'primeflex/primeflex.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);