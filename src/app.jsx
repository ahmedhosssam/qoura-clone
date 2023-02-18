import { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';

// components
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Router>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Homepage isAuth={isAuth} />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
