import "./page-sample.css";
import logoImg from "./../../img/logo.png";
import profileImg from "./../../img/profile.svg";
import basketImg from "./../../img/basket.svg";

import Tshirts from "../tshirts/tshirts";
function PageSample() {
  return (
    <div className="container">
      <div className="header__row">
        <div className="header__logo">
          <img src={logoImg} alt="LOGO" />
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

      <div className="body__content">
        <nav className="body__nav">
          <ul>
            <li>
              <a href="/">ФУТБОЛКИ</a>
            </li>
            <li>
              <a href="#">ТОЛСТОВКИ</a>
            </li>

            <li>
              <a href="#">АКСЕССУАРЫ</a>
            </li>
          </ul>
        </nav>
      </div>

      <hr color="#D7D7D7" />
    </div>
  );
}

export default PageSample;
