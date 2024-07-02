import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';
import { DataProvider } from './pages/Registrar/DataContext';
import { TripProvider } from './pages/Trip/TripContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
    <TripProvider>
      <App />
      </TripProvider>
    </DataProvider>

  </React.StrictMode>
);

reportWebVitals();
