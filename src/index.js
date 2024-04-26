import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();