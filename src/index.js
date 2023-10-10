// index.js - Entry point of the application

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App'; //
import reportWebVitals from './reportWebVitals'; 


// Importing the 'NameProvider' context provider from the './context/Context' file
import { NameProvider } from './context/Context'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within the context of NameProvider and under StrictMode
root.render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </React.StrictMode>
);

reportWebVitals();
