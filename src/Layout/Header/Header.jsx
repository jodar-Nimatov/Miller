import React, { useState } from "react";
import '../Header/Header.scss'
import millerLogo from "../../assets/millerLofo.svg"
import searchlogo from "../../assets/search.svg"
import basketlogo from "../../assets/basket.svg"
import userlogo from "../../assets/user.svg"

const Header = () => {
  //Функция которая дает другой класс при клике.
  return (
    <>
    <div className="white"></div>
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className='header__left'>
            <a href="#">
              <img src={millerLogo} width='179px' height='80px' alt="header logo" />
            </a>
          </div>
          <div className="header__center">
            <ul className="header__list">
              <li className="header__item"><a href="#">Каталог товаров</a></li>
              <li className="header__item"><a href="#">Блог</a></li>
              <li className="header__item"><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className="header__right">
            <a href="#">
              <img className="header-search" src={searchlogo} alt="header search" />
            </a>
            <a href="#">
              <img className="header-basket" src={basketlogo} alt="header basket" />
            </a>
            <a href="#">
              <img className="header-user" src={userlogo} alt="header user" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="white"></div>
    </>
  );
};

export default Header;