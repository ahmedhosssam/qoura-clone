import QouraLogo from '../../assets/Quora.svg.png';
import homePage from '../../assets/home-svgrepo-com.svg';
import list from '../../assets/list.svg';
import answer from '../../assets/answer.svg';
import spaces from '../../assets/spaces.svg';
import notification from '../../assets/notification.svg';
// import profile from '../../assets/profile.jpg';
import logout from '../../assets/log-out.png';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { auth } from '../../firebase/firebase-config';

const Header = () => {
  let userProfilePic = localStorage.getItem('userPic');
  let isAuth = localStorage.getItem('isAuth');
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    const handleResize = () => {
      // console.log('Screen width:', window.innerWidth);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    document.addEventListener('mousedown', handler);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handler);
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
        {width >= 600 ? (
          <div
            className={
              width >= 600 ? 'header-left-buttons' : 'header-left-buttons hide'
            }
          >
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
        ) : (
          ''
        )}
      </div>
      {width >= 600 ? <input placeholder="🔍 Search Qoura" /> : ''}

      <div className="right-header">
        <button className="profile-pic-header-container">
          {isAuth ? (
            <button
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
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
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
