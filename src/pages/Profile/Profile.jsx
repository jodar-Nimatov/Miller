import React, { useState } from "react";
import coffee from "../../assets/Profile/coffeeProfile.png";
import joodar from "../../assets/Profile/Joodar.png";
import CoffeeImg from "../../assets/Profile/coffeeImgProfile1.svg"
import { Link } from "react-router-dom";

const Profile = () => {
  const [show, setShow] = useState(true)
  const [info, setInfo] = useState(true)


  return (
    <div className="profile">
      <div className="container">
        <div className="profile__inner">
          <ul className="home">
            <Link to="/">
              <li>Главная</li>
            </Link>
            <Link to="/Profile">
              <li>Личный кабинет</li>
            </Link>
          </ul>

          <div className="profile__card">
            <div className="profile__name">
              <div className="profile__joodar">
                <img className="joodar" src={joodar} alt="" />
                <button className="btn__joodar">Изменить</button>
              </div>
              {/* <blockquote contenteditable="true"> */}
              <ul>
                <li className="name__joodar">Ниматов Жоодар, Здраствуйте!</li>
                <li>nimatov.joodar@gmail.com</li>
                <li>+996707568734</li>
                <li>Пароль:********</li>
              </ul>

              {/* </blockquote> */}

            </div>
            <div className="discount__profile">
              <div className="discount__inner">
                <button className="discount__btn" onClick={() => setShow(!show)}>?</button>
                <div className={`discount-block ${show ? 'block' : 'none'}`}>
                  <h1 className="discount__text">Ваша скидка: 10%</h1>
                  <li>Сумма заказов: 5675 ₽*</li>
                  <p>*До скидки 15% не хватает покупок на сумму: 1255 ₽</p>

                </div>

                <div className={`discount-block ${show ? 'none' : 'block'}`}>
                  <h1 className="discount__title">До скидки 15% не хватает покупок на сумму: 1255 ₽</h1>
                  <p className="discount__p">Скидка 10% - сумма покупок 5000 ₽ </p>
                  <p className="discount__p">Скидка 15% - сумма покупок 7000 ₽ </p>
                  <p className="discount__p">Скидка 20% - сумма покупок 10000 ₽ </p>
                </div>

              </div>
            </div>
          </div>

          <div className="orders__card">
            <div className="orders__title">
              <h1>Мои заказы</h1>
              <div className="orders__btn">
                <button onClick={() => setInfo(true)}>Текущие заказы</button>
                <button onClick={() => setInfo(false)}>Завершенные</button>
              </div>
            </div>
            <div className={`info-block ${info ? 'block' : 'none'}`}>
              <div className="orders__p">
                <p>31.02.2023 1:24 - Не оплачено</p>
              </div>
              <div className="info__cards">
                <div className="info__text">
                  <h1>Товаров:</h1>
                  <ul className="info__title">
                    <li>2 х Columbia Supremo, 250 г.</li>
                    <li>2 х Columbia Supremo, 250 г.</li>
                  </ul>
                </div>
                <div>
                  <h1>Сумма заказа:</h1>
                  <ul>
                    <li>250 ₽</li>
                    <li>250 ₽</li>
                  </ul>
                </div>
                <div className="info__discount">
                  <h1>Скидка (10%):</h1>
                  <ul>
                    <li>48 ₽ </li>
                    <li>48 ₽ </li>
                  </ul>
                </div>
                <div className="price__two">
                  <h1>Сумма заказа:</h1>
                  <ul>
                    <li>202 ₽ </li>
                    <li>202 ₽ </li>
                  </ul>
                </div>
              </div>
              <ul className="price__info">
                <li>Сумма заказа: 404 ₽</li>
                <li>Доставка: 350 ₽ </li>
              </ul>
            </div>
            <div className={`info-block ${info ? 'none' : 'block'}`}>
              <div className="orders__p">
                <p>3.03.2023 1:24 - оплачено</p>
                <p>Дата доставки: 03.03.2023</p>
              </div>
              <div className="info__cards">
                <div className="info__text">
                  <h1>Товаров:</h1>
                  <ul className="info__title">
                    <li>2 х Ячменный напиток Millor, 100 г.</li>
                    <li>2 х Ячменный напиток Millor, 100 г.</li>
                  </ul>
                </div>
                <div>
                  <h1>Сумма заказа:</h1>
                  <ul>
                    <li>250 ₽</li>
                    <li>250 ₽</li>
                  </ul>
                </div>
                <div className="info__discount">
                  <h1>Скидка (10%):</h1>
                  <ul>
                    <li>48 ₽ </li>
                    <li>48 ₽ </li>
                  </ul>
                </div>
                <div className="price__two">
                  <h1>Сумма заказа:</h1>
                  <ul>
                    <li>202 ₽ </li>
                    <li>202 ₽ </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="formobile">
     
           
          </div>
          <div className="slider__profile">
            <h1 className="slider__text">Персональные акции</h1>
            <div className="slides__inner ">
              <div className="coffee__profile">
                <img src={coffee} alt="" />
                <h1>Купи 3 пачки кофе и получи 4-ую в подарок!</h1>
                <p>Срок акции: до 1.03.2023</p>
              </div>
              <div className="coffee__profile">
                <img src={coffee} alt="" />
                <h1>На 8 марта большие скидки!</h1>
                <p>Срок акции: до 8.03.2023</p>
              </div>
              <div className="coffee__profile">
                <img src={coffee} alt="" />
                <h1>Активным покупателям скидки!</h1>
                <p>Срок акции: до 23.03.2023</p>
              </div>
              <div className="coffee__profile">
                <img src={coffee} alt="" />
                <h1>За первую покупку можно получить скидку!</h1>
                <p>Срок акции: до 31.03.2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;