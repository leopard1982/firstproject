import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Headers from './main/Headers';


const y = document.getElementById('paijo');
const root = ReactDOM.createRoot(y);
root.render(
  <React.StrictMode>
    <Headers/>
    <App/>  
  </React.StrictMode>
);