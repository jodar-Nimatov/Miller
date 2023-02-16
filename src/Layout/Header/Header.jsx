import React, { useState } from "react";
import "../Header/Header.scss";
import millerLogo from "../../assets/millerLofo.svg";
import searchlogo from "../../assets/search.svg";
import basketlogo from "../../assets/basket.svg";
import userlogo from "../../assets/user.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleopen = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="white"></div>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <Link to="/">
                <img
                  src={millerLogo}
                  width="179px"
                  height="80px"
                  alt="header logo"
                />
              </Link>
            </div>
            <div className="header__center">
              <ul className="header__list">
                <div className="accordion">
                  <li className="header__item1">
                    <div
                      style={{transition: '500ms'}}
                      className="header-accordion-title"
                      onClick={handleopen}
                    >
                      Каталог товаров
                    </div>
                    <div className="si">
                      <img
                        onClick={() => setShow(!show)}
                        src={arrow}
                        className={show ? "arrowdown" : "arrowup"}
                        height="10px"
                        alt=""
                      />
                    </div>
                  </li>
                  {show && (
                    <div className="header-accordion">
                      <Link to="/coffee">
                        <span onClick={() => setShow(!show)}>
                          Свежеобжаренный кофе
                        </span>
                      </Link>
                      <br />
                      <Link to="/tea">
                        <span onClick={() => setShow(!show)}>
                          Чай и кофейные напитки
                        </span>
                      </Link>
                      <br />
                      <Link to="/wending">
                        <span onClick={() => setShow(!show)}>
                          Продукция для вендинга
                        </span>
                      </Link>
                      <br />
                      <Link to="/healthy">
                        <span onClick={() => setShow(!show)}>
                          Здоровое питание
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <li className="header__item2">
                  <Link to="/blog">Блог</Link>
                </li>
                <li className="header__item">
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <a href="#">
                <img
                  className="header-search"
                  src={searchlogo}
                  alt="header search"
                />
              </a>
              <a href="#">
                <img
                  className="header-basket"
                  src={basketlogo}
                  alt="header basket"
                />
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
