import React, { useEffect, useState, useContext } from "react";
import millerLogo from "../../assets/Header/millerLofo.svg";
import searchlogo from "../../assets/Header/search.svg";
import basketlogo from "../../assets/Header/basket.svg";
import userlogo from "../../assets/Header/user.svg";
import burger from "../../assets/Header/Group 165.svg";
import millerlogom from "../../assets/modal/image26.svg";
import coffeelogo from "../../assets/modal/Group 245.svg";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/Header/arrow.svg";
import { CustomContext } from "../../utils/Context";
import CartEmpty from "../../Components/CartEmpty/CartEmpty";
import BurgerSD from "./BurgerSD";
import { TfiClose } from "react-icons/tfi";
import { UserAuth } from "../../utils/authContext";
import { MdExitToApp } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const { logout, name, user, number, signIn, getData } = UserAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("Каталог товаров");
  const [display, setDisplay] = useState("block");
  const { cart, setSearch, setKey, key } = useContext(CustomContext);
  const [see, setSee] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [BurgerMenu, setBurgerMenu] = useState(false);
  if(document.querySelector('.cun') !== null){
    document.querySelector('.cun').addEventListener('click', ()=>{
      setDisplay('block')
      setShow(false)
    })
  }
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
    if (user) {
      navigate("/profile");
    } else {
      setIsOpen(!modalIsOpen);
    }
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

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/signup");
    } catch (error) {}
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      setIsOpen(!modalIsOpen);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };
  return (
    <>
      <div className="white"></div>
      <div className="header">
        {/* <div className="container"> */}
        <div className="header__inner">
          <div className="header__left">
            <BurgerSD handleSignOut={handleSignOut} BurgerMenu={BurgerMenu} setBurgerMenu={setBurgerMenu} />
            <div className="header-burger-menu">
              <img onClick={() => setBurgerMenu(true)} src={burger} alt="" />
            </div>
            <Link to="/">
              <img
                className="millerLogo"
                src={millerLogo}
                onClick={() => {
                  setTitle("Каталог Товаров");
                  setDisplay("block");
                  setShow(false)
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
              <li onClick={()=>setShow(false)} className="header__item2">
                <Link className="blog" to="/blog">
                  Блог
                </Link>
              </li>
              <li onClick={()=>setShow(false)} className="header__item">
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className={`header__input-block ${display}`}>
              <form
                onSubmit={(e) => {
                  navigate('/catalog/coffee')
                  e.preventDefault();
                  setSearch(text);
                  setKey(key + 1);
                }}
              >
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="Поиск по товарам"
                  className={`header__input ${display}`}
                />
              </form>
          </div>
          <div className="header__right" onClick={()=>setShow(false)}>
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
                    <a href="/cart" />;
                  } else {
                    setSee(true);
                  }
                }}
                className="header-right-icon header-basket"
                src={basketlogo}
                alt="header basket"
              />
            </Link>
            <span className="header-right-count_header-basket">
              {cart.length}
            </span>
            <CartEmpty see={see} setSee={setSee} />

            <img
              className="header-right-icon header-user"
              src={userlogo}
              alt="header user"
              onClick={handleopenmodal1}
            />
          </div>
          {user && (
            <Link to={user ? "/signUp" : "/"}>
              <MdExitToApp className="exitIcon" onClick={handleSignOut}></MdExitToApp>
            </Link>
          )}
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
                        <button
                          onClick={(e) => setIsOpen(!modalIsOpen)}
                          className="login_left_button"
                        >
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
                      <div
                        className="close-modal"
                        onClick={() => setIsOpen(false)}
                      >
                        <TfiClose />
                      </div>
                      <h2>Войти в личный кабинет</h2>
                      <form
                        onSubmit={handleSubmit}
                        className="login_right_forms"
                      >
                        <input
                          className="login_right_inputone"
                          type="email"
                          placeholder="email"
                          required
                          value={error ? error.message : email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          className="login_right_inputtwo"
                          BsFillEyeFill
                          type="password"
                          placeholder="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="login_right_buttonlog">Войти</button>
                        <p className="link_to_register">
                          Еще нет аккаунта?{" "}
                          <Link to="/SignUp" onClick={() => setIsOpen(false)}>
                            Зарегистрироваться
                          </Link>
                        </p>
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
