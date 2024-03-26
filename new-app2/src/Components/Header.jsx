import './../Components/header.css'

import logoImg from "./../img/logo.png";
import profileImg from "./../img/profile.svg";
import basketImg from "./../img/basket.svg";
import { useState } from 'react';


function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="logo">
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
            <a href="login" className="action-icon actions__profile">
              <img src={profileImg} alt="PROFILE" />
            </a>

            <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`action-icon actions__basket ${cartOpen && 'active'}`}>
              <img src={basketImg} alt="basket" />
            </div>

            {cartOpen && (
              <div className='shopCart'></div>
            )}
          </div>

          

         
        </div>

        <div className="body__content">
            <nav className="body__nav">
              <ul>
                <li>
                  <a href="tshirts">ФУТБОЛКИ</a>
                </li>
                <li>
                  <a href="sweatshirts">ТОЛСТОВКИ</a>
                </li>

                <li>
                  <a href="accessories">АКСЕССУАРЫ</a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
      
    </header>
  );
}

export default Header;
