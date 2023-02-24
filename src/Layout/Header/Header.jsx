import React, { useEffect, useState } from "react";
import millerLogo from "../../assets/Header/millerLofo.svg";
import searchlogo from "../../assets/Header/search.svg";
import basketlogo from "../../assets/Header/basket.svg";
import userlogo from "../../assets/Header/user.svg";
import burger from "../../assets/Header/Group 165.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/Header/arrow.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Каталог товаров");
  const [display, setDisplay] = useState("block");
  const handleInput = () => {
    setDisplay("none");
  };
  const handleInputClose = () => {
    document.body.children[1].childNodes[5].addEventListener("click", () =>
      setDisplay("block")
    );
    document.body.children[1].childNodes[3].addEventListener("click", () =>
      setDisplay("block")
    );
  };
  const handleshow = () => {
    setShow(!show);
  };
  const handleopen = (catalog) => {
    setShow(!show);
    setTitle(catalog);
  };
  useEffect(() => {
    handleInputClose();
  }, [display]);
  return (
    <>
      <div className="white"></div>
      <div className="header">
        {/* <div className="container"> */}
        <div className="header__inner">
          <div className="header__left">
            <div className="header-burger-menu">
              <img src={burger} alt="" />
            </div>
            <Link to="/">
              <img
                className="millerLogo"
                src={millerLogo}
                onClick={() => {
                  setTitle("Каталог Товаров");
                  setDisplay("block");
                }}
                alt="header logo"
              />
            </Link>
          </div>
          <div className="header__center">
            <ul className={`header__list ${display}`}>
              <div className="accordion">
                <li className="header__item1">
                  <div className="header-accordion-title" onClick={handleshow}>
                    {title}
                  </div>
                  <div className="si">
                    <img
                      onClick={handleshow}
                      src={arrow}
                      className={show ? "arrowdown" : "arrowup"}
                      height="10px"
                      alt=""
                    />
                  </div>
                </li>
                {show && (
                  <div className="header-accordion">
                    <Link to="/catalog/coffee">
                      <span onClick={(e) => handleopen(e.target.innerText)}>
                        Свежеобжаренный кофе
                      </span>
                    </Link>
                    <br />
                    <Link to="/catalog/tea">
                      <span onClick={(e) => handleopen(e.target.innerText)}>
                        Чай и кофейные напитки
                      </span>
                    </Link>
                    <br />
                    <Link to="/catalog/wanding">
                      <span onClick={(e) => handleopen(e.target.innerText)}>
                        Продукция для вендинга
                      </span>
                    </Link>
                    <br />
                    <Link to="/catalog/healthy">
                      <span onClick={(e) => handleopen(e.target.innerText)}>
                        Здоровое питание
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <li className="header__item2">
                <Link className="blog" to="/blog">
                  Блог
                </Link>
              </li>
              <li className="header__item">
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className={`header__input-block ${display}`}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="search"
              placeholder="Поиск по товарам"
              className={`header__input ${display}`}
            />
          </div>
          <div className="header__right">
            <a href="#">
              <img
                onClick={handleInput}
                className={`header-right-icon header-search ${display}`}
                src={searchlogo}
                alt="header search"
              />
            </a>
            <Link to="">
              <img
                className="header-right-icon header-basket"
                src={basketlogo}
                alt="header basket"
              />
            </Link>
            <Link to="/Profile">
              <img
                className="header-right-icon header-user"
                src={userlogo}
                alt="header user"
              />
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="white"></div>
    </>
  );
};

export default Header;
