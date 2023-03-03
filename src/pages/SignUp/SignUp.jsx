import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coffeelogo from "../../assets/modal/Group 245.svg";
import millerlogom from "../../assets/modal/image26.svg";
import axios from "axios";

import { useUserAuth } from "../../utils/UserAuthContext";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase";
import "./SignUp.scss";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  /////number
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  let url = "http://localhost:4444/users";

  let handleSubmit = async (e) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        number: e.target[3].value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:4444/users", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: "Rusya",
  //         email: "rusya@gmail.com",
  //         password: "2qwfas",
  //         number: "21706670",
  //       }),
  //     })
  //     .then((res) => alert("Данные успешно созданы", res))
  //     .catch((err) => alert("ошибка при создании", err));
  // }, []);

  // function onCaptchVerify() {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           onSignup();
  //         },
  //         "expired-callback": () => {},
  //       },
  //       auth
  //     );
  //   }
  // }

  // function onSignup() {
  //   setLoading(true);

  // const appVerifier = window.recaptchaVerifier;

  //   const formatPh = "+" + ph;

  //   signInWithPhoneNumber(auth, formatPh)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //       setLoading(false);
  //       setShowOTP(true);
  //       // toast.success("OTP sended successfully!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }

  // function onOTPVerify() {
  //   setLoading(true);
  //   window.confirmationResult
  //     .confirm(otp)
  //     .then(async (res) => {
  //       console.log(res);
  //       setUser(res.user);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await signUp(email, password);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="login_inner">
            <div className="login_left">
              <img className="login_logo" src={coffeelogo} alt="" />
              <h1>Добро пожаловать!</h1>
              <p>Уже есть аккаунт?</p>
              <button className="login_left_button">Войти</button>
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
                <button className="login_right_buttonlog" type="submit">
                  Зарегистрироваться
                </button>
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
