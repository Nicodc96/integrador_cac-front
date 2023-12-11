import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/generalStyles.css';
import './styles/Header.css';
import './styles/Home.css';
import './styles/Footer.css';
import './styles/generalResponsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)