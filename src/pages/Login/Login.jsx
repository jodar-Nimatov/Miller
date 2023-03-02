import React, { useState } from "react";
import Modal from "react-modal";
import millerlogom from "../../assets/modal/image26.svg";
import coffeelogo from "../../assets/modal/Group 245.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleopenmodal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <div className="overflow">
      {modalIsOpen && (
        <div className="overlow">
          <div className="login">
            <div className="container">
              <div className="login_inner">
                <div className="login_left">
                  <img className="login_logo" src={coffeelogo} alt="" />
                  <h1>Регистрация</h1>
                  <p>Получайте скидки первыми!?</p>
                  <Link to="registr">
                    <button className="login_left_button">
                      Зарегистрироваться
                    </button>
                  </Link>
                </div>
                <div className="login_right">
                  <img className="login_right_logo" src={millerlogom} alt="" />
                  <h2>Войти в личный кабинет</h2>
                  <form className="login_right_forms">
                    <input
                      className="login_right_inputone"
                      type="email"
                      placeholder="email"
                      required="email"
                    />
                    <input
                      className="login_right_inputtwo"
                      BsFillEyeFill
                      type="password"
                      placeholder="password"
                      required="password"
                    />
                    <button className="login_right_buttonlog">Войти</button>
                    {/* <button className="login_right_reset">Забыли пароль?</button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
