import React, { useState } from 'react';
import Modal from 'react-modal';
import millerlogom from '../../assets/modal/image26.svg';
import coffeelogo from '../../assets/modal/Group 245.svg';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../utils/authContext';

const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   try {
  //     await signIn(email, password);
  //     navigate('/profile');
  //   } catch (e) {
  //     setError(e.message);
  //     console.log(e);
  //   }
  // };
  return (
    <div className="overflow">
      <div className="overlow">
        <div className="login">
          <div className="container">
            <div className="login_inner">
              <div className="login_left">
                <img className="login_logo" src={coffeelogo} alt="" />
                <h1>Регистрация</h1>
                <p>Получайте скидки первыми!?</p>
                <Link to="registr">
                  <button className="login_left_button">Зарегистрироваться</button>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="login_right_inputtwo"
                    BsFillEyeFill
                    type="password"
                    placeholder="password"
                    required="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="login_right_buttonlog" onClick={handleSubmit}>
                    Войти
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
