import { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';

// components
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  const isAuth = localStorage.getItem('isAuth');
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={isAuth ? <Homepage /> : <LoginPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
