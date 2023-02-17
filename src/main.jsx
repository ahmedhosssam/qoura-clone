import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Header from './Components/Header/Header';

// Styles
import './Styles/App.scss';
import './Styles/header.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
