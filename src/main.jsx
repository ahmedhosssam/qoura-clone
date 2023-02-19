import React from 'react';
import ReactDOM from 'react-dom/client';

// Components

import App from './app';

// Styles
import './Styles/App.scss';
import './Styles/header.scss';
import './Styles/homepage.scss';
import './Styles/postform.scss';
import './Styles/post-temp.scss';
import './Styles/loginbtn.scss';
import './Styles/loginpage.scss';
import './Styles/dropdown.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
