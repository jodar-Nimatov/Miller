import React, { useEffect, useState, useContext } from "react";
import millerLogo from "../../assets/Header/millerLofo.svg";
import searchlogo from "../../assets/Header/search.svg";
import basketlogo from "../../assets/Header/basket.svg";
import userlogo from "../../assets/Header/user.svg";
import burger from "../../assets/Header/Group 165.svg";
import millerlogom from "../../assets/modal/image26.svg";
import coffeelogo from "../../assets/modal/Group 245.svg";
import { Link, Navigate } from "react-router-dom";
import arrow from "../../assets/Header/arrow.svg";
import { CustomContext } from "../../pages/Cart/Context";
import CartEmpty from "../../Components/CartEmpty/CartEmpty";


const Header = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Каталог товаров");
  const [display, setDisplay] = useState("block");
  const {cart} = useContext(CustomContext)
  const [see, setSee] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);

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

  const handleopenmodal1 = () => {
    setIsOpen(!modalIsOpen);
  };
  const closemodal = () => {
    modalIsOpen(!setIsOpen);
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
            <Link to="/cart">
              <img
                onClick={() => {
                  if (cart.length) {
                    <Link to='/cart'/>
                  } else {
                    setSee(true)
                  }
                }}
                className="header-right-icon header-basket"
                src={basketlogo}
                alt="header basket"
              />
              <span className="header-right-count header-basket">
                {cart.length}
              </span> 
            </Link>
            <CartEmpty see={see} setSee={setSee}/>
            <Link to="/Profile">
              <img
                className="header-right-icon header-user"
                src={userlogo}
                alt="header user"
              />
            </Link>
          </div>
        {/* </div> */}
            {/* <Link to="/Profile"> */}
            <img
              className="header-right-icon header-user"
              src={userlogo}
              alt="header user"
              onClick={handleopenmodal1}
            />
            {modalIsOpen && (
              <div className="overlow">
                <div className="login">
                  <div className="container">
                    <div className="login_inner">
                      <div className="login_left">
                        <img className="login_logo" src={coffeelogo} alt="" />
                        <h1>Регистрация</h1>
                        <p>Получайте скидки первыми!?</p>
                        <Link to="/SignUp">
                          <button className="login_left_button">
                            Зарегистрироваться
                          </button>
                        </Link>
                      </div>
                      <div className="login_right">
                        <img
                          className="login_right_logo"
                          src={millerlogom}
                          alt=""
                        />
                        <h2>Войти в личный кабинет</h2>
                        <form className="login_right_forms">
                          <input
                            className="login_right_inputone"
                            type="email"
                            placeholder="email"
                            required
                          />
                          <input
                            className="login_right_inputtwo"
                            BsFillEyeFill
                            type="password"
                            placeholder="password"
                            required
                          />
                          <button className="login_right_buttonlog">
                            Войти
                          </button>
                          {/* <button className="login_right_reset">Забыли пароль?</button> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}         
            {/* </Link> */}
            </div>
          </div>
      <div className="white"></div>
    </>
    
  );
};

export default Header;
