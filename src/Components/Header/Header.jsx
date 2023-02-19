import QouraLogo from '../../assets/Quora.svg.png';
import homePage from '../../assets/home-svgrepo-com.svg';
import list from '../../assets/list.svg';
import answer from '../../assets/answer.svg';
import spaces from '../../assets/spaces.svg';
import notification from '../../assets/notification.svg';
import logout from '../../assets/log-out.png';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { auth } from '../../firebase/firebase-config';

const Header = () => {
  let userProfilePic = localStorage.getItem('userPic');
  let isAuth = localStorage.getItem('isAuth');
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleLogout = () => {
    localStorage.clear();
    auth.signOut();
    location.reload();
  };

  return (
    <header>
      <div className="left-header">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src={QouraLogo} alt="qoura" className="header-qoura-logo" />
        </Link>
        {width <= 600 ? (
          ''
        ) : (
          <div className="header-left-buttons">
            <button className="header-button ">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <img className="home-button" src={homePage} />
              </Link>
            </button>
            <button className="header-button">
              <img src={list} />
            </button>
            <button className="header-button">
              <img src={answer} />
            </button>
            <button className="header-button">
              <img src={spaces} />
            </button>
            <button className="header-button">
              <img src={notification} />
            </button>
          </div>
        )}
      </div>
      {width >= 600 ? <input placeholder="🔍 Search Qoura" /> : ''}

      <div className="right-header">
        <button className="profile-pic-header-container">
          {isAuth ? (
            <button
              onMouseEnter={() => {
                setOpen(true);
              }}
              onMouseLeave={() => {
                setOpen(false);
              }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={userProfilePic} />
            </button>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <button className="login-button">Login</button>
            </Link>
          )}
        </button>
        <div
          onMouseEnter={() => {
            setOpen(open);
          }}
          onMouseLeave={() => {
            setOpen(!open);
          }}
          onClick={() => {
            setOpen(!open);
          }}
          className={`dropdown-menu ${open ? 'active' : 'inactive'}`}
        >
          <h3>
            Hi,
            <br />
          </h3>
          <ul>
            <DropdownItem img={userProfilePic} text={'My Profile'} />

            <div onClick={handleLogout}>
              <DropdownItem img={logout} text={'Logout'} />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}
