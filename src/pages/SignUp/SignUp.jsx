import React, { useState, useEffect } from "react";
import coffeelogo from "../../assets/modal/Group 245.svg";
import millerlogom from "../../assets/modal/image26.svg";
import axios from "axios";
import { UserAuth } from "../../utils/authContext";
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp, setName, setNumber, name, number, user } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let urlUser = "http://localhost:4444/users";

  // let handleSubmit = async (e) => {
  //   fetch(urlUser, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: e.target[0].value,
  //       email: e.target[1].value,
  //       password: e.target[2].value,
  //       number: e.target[3].value,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="login_inner">
            <div className="login_left">
              <img className="login_logo" src={coffeelogo} alt="" />
              <h1>Добро пожаловать!</h1>
              <p>Уже есть аккаунт?</p>
              <button className="login_left_button">
                <Link to="/">Войти</Link>
              </button>
            </div>
            <div className="login_right">
              <img className="login_right_logo" src={millerlogom} alt="" />
              <div className="text_cnt">
                <h2 className="h2registrALo">Регистрация</h2>
                <li className="loshara">
                  Зарегистрируйтесь на сайте, чтобы первым получать скидки и
                  узнавать акционные предложения!
                </li>
              </div>
              {error ? (
                <p style={{ fontSize: "19px", color: "red" }}>{error}</p>
              ) : null}
              <form className="login_right_formik" onSubmit={handleSubmit}>
                <input
                  value={name}
                  className="fio_inputs"
                  type="text"
                  placeholder="Имя и фамилия"
                  required="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  value={email}
                  className="email_reg"
                  type="email"
                  placeholder="email"
                  required="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  value={number}
                  className="number_inputss"
                  type="number"
                  placeholder="Телефон"
                  required="number"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  value={password}
                  className="input_passwordd"
                  type="password"
                  placeholder="Придумайте пароль"
                  required="Придумайте пароль"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link to={user ? "/profile" : "/signup"}>
                  <button
                    className="login_right_buttonlogg"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Зарегистрироваться
                  </button>
                </Link>
                {/* {error && <alert variant="danger">{error}</alert>} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
