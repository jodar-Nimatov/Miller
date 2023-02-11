import React from "react";
import '../Header/Header.scss'
import millerLogo from "../../assets/image 25.svg"
import searchlogo from "../../assets/Vector.svg"
import basketlogo from "../../assets/Vector (1).svg"
import userlogo from "../../assets/Vector (2).svg"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <img src={millerLogo} alt=""/>
          </div>
          <div className="header-menu">
            <ul>
              <li><a href="#">Каталог товаров</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Контакты</a></li>
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