import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App.jsx'
import NavBar from './components/NavBar/NavBar';
import { ItemCount } from './components/ItemCount/ItemCount.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <ItemCount />
  </React.StrictMode>
);

