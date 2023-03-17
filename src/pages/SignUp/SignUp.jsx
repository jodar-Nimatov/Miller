import React, { useState } from "react";
import { useSelector } from "react-redux";
import coffeelogo from "../../assets/modal/Group 245.svg";
import millerlogom from "../../assets/modal/image26.svg";
import {
  setEmail,
  setNum,
  setPass,
  setUser,
} from "../../store/slices/userSlice";
import "./SignUp.scss";

// const initialState = {
//   name: "",
//   email: "",
//   number: "",
//   password: "",
// };

const SignUp = () => {
  const { email, pass, num, user } = useSelector((state) => state.user);

  console.log("hahahhahah", email, pass, num, user);
  // const [state, setState] = useState(initialState);
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   number: "",
  //   password: "",
  // });

  // let name, value;
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUserData({ ...userData, [name]: value });
  // };

  //conect firebaase

  // const submitdata = async (event) => {
  //   event.preventDefault();
  //   const { name, email, number, password } = userData;
  //   const res = fetch(
  //     "https://gogletest-1e5f0-default-rtdb.firebaseio.com/userData.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         number,
  //         password,
  //       }),
  //     }
  //   );
  //   if (res) {
  //     alert("lox molodes");
  //   } else {
  //     alert("idi naxyu");
  //   }
  // };
  // const { name, email, number, password } = state;
  // const navigate = useNavigate();

  // const handlesubmitchange = (e) => {
  //   const { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  //   fetch("https://gogletest-1e5f0-default-rtdb.firebaseio.com", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: e.target[0].value,
  //       email: e.target[1].value,
  //       password: e.target[2].value,
  //       number: e.target[3].value,
  //     }),
  //   });
  // };

  // const handlesubmits = (e) => {
  //   e.preventDefault();
  //   if (!name || !email || !number || !password) {
  //     alert.error("please idi naxyu");
  //   } else {
  //     firedb.child("contacts").push(state, (err) => {
  //       if (err) {
  //         alert.error(err);
  //       } else {
  //         alert.sucsess("contact add");
  //       }
  //     });
  //     setTimeout(() => navigate.push("/"), 500);
  //   }
  // };
  // let urlUser = "http://localhost:4444/users";

  // let handleSubmit = async (e) => {
  //   fetch(urlUser, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: e.target[0].value,
  //       email: e.target[1].value,
  //       password: e.target[2].value,
  //       number: e.target[3].value,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
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
              <button className="login_left_button">
                <Link to="/" onClick={() => setIsOpen(true)}>
                  Войти
                </Link>
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

              <form className="login_right_formik">
                <input
                  className="fio_inputs"
                  type="text"
                  placeholder="Имя и фамилия"
                  // required
                  // value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <input
                  className="email_reg"
                  type="email"
                  placeholder="email"
                  // required
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="number_inputss"
                  type="number"
                  placeholder="Телефон"
                  // required
                  // value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
                <input
                  className="input_passwordd"
                  type="password"
                  placeholder="Придумайте пароль"
                  // required
                  onChange={(e) => setPass(e.target.value)}
                  // value={pass}
                />
                {/* <Link to="/profile"> */}
                {/* <p>{err}</p> */}
                <button
                  className="login_right_buttonlog"
                  type="submit"
                  // onClick={submitdata}
                >
                  Зарегистрироваться
                </button>
                {/* </Link> */}
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
