import React from "react";
import '../Header/Header.scss'
import millerLogo from "../../assets/image 25.png"
import searchlogo from "../../assets/Vector.svg"
import basketlogo from "../../assets/Vector (1).svg"
import userlogo from "../../assets/Vector (2).svg"

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-logo">
            <img src={millerLogo} alt="" />
          </div>
          <div className="header-menu">
            <ul>
              <li>Каталог товаров</li>
              <li>Блог</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="header-icons">
            <img src={searchlogo} alt="" />
            <img src={basketlogo} alt="" />
            <img src={userlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;