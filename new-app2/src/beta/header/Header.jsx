import "./header.css";
import logoImg from "./../../img/logo.png";
import profileImg from "./../../img/profile.svg";
import basketImg from "./../../img/basket.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="#">
              <img src={logoImg} alt="LOGO" />
            </a>
          </div>
          <div className="title">
            <div className="tit1">DANIEL WILDSON</div>
            <div className="tit2">
              BE <p>wild</p>, SON
            </div>
          </div>

          <div className="header__actions">
            <a href="!#" className="action-icon actions__profile">
              <img src={profileImg} alt="PROFILE" />
            </a>

            <a href="!#" className="action-icon actions__basket">
              <img src={basketImg} alt="basket" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
