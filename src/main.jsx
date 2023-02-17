import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

// Styles
import './Styles/App.scss';
import './Styles/header.scss';
import './Styles/homepage.scss';
import './Styles/postform.scss';
import './Styles/post-temp.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Homepage />
  </React.StrictMode>
);
