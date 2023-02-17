import QouraLogo from '../../assets/Quora.svg.png';
import homePage from '../../assets/home-svgrepo-com.svg';
import list from '../../assets/list.svg';
import answer from '../../assets/answer.svg';
import spaces from '../../assets/spaces.svg';
import notification from '../../assets/notification.svg';

const Header = () => {
  return (
    <header>
      <div className="left-header">
        <img src={QouraLogo} alt="qoura" className="header-qoura-logo" />
        <div className="header-left-buttons">
          <button className="header-button">
            <img src={homePage} />
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
      </div>

      <input placeholder="🔍 Search Qoura" />
      <div className="right-header">
        <div className="profile-pic-header-container">
          <img src />
        </div>
      </div>
    </header>
  );
};

export default Header;
