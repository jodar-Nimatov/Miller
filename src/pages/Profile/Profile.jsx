import React from "react";
import './Profile.scss'
import coffee from '../../assets/Profile/coffeeProfile.png'
import joodar from '../../assets/Profile/Joodar.png'

const Profile = () => {
    return (

        <div className="profile">
            <div className="container">
                <div className="profile__inner">
                    <ul className="home">
                        <li>Главная</li>
                        <li>Личный кабинет</li>
                    </ul>

                    <div className="profile__cart">
                        <div className="profile__name">
                            <div className="profile__joodar">
                                <img className="joodar" src={joodar} alt="" />
                                <button className="btn__joodar">Изменить</button>
                            </div>

                            <ul>
                                <li className="name__joodar">Ниматов Жоодар, Здраствуйте!</li>
                                <li>nimatov.joodar@gmail.com</li>
                                <li>+996707568734</li>
                                <li>Пароль:*********</li>
                            </ul>

                        </div>
                        <div className="discount">
                            <div className="discount__inner">
                                <div className="discount__button">
                                    <h1>Ваша скидка: 10%</h1>
                                    <button className="discount__btn">?</button>
                                </div>

                                <li>Сумма заказов: 5675 ₽*</li>
                                <p>*До скидки 15% не хватает покупок на сумму: 1255 ₽</p>
                            </div>
                        </div>
                    </div>


                    <div className="orders__cart">
                        <div className="orders__title">
                            <h1>Мои заказы</h1>

                            <button>Текущие заказы</button>
                            <button>Завершенные</button>
                            <div className="orders__p">
                                <p>01.08.2021 12:24:00 - оплачено</p>
                                <p>Дата доставки: 03.08.2021</p>

                            </div>


                        </div>
                        <div className="info">
                            <div className="info__text">
                                <h1>Товаров:</h1>
                                <ul>
                                    <li>2 х Columbia Supremo, 250 г.</li>
                                    <li>1 х Напиток ячменый Millor, 250 г.</li>
                                </ul>
                            </div>
                            <div className="price__one">
                                <h1>Сумма заказа:</h1>
                                <ul>
                                    <li>480 ₽</li>
                                    <li>480 ₽</li>
                                </ul>
                            </div>
                            <div className="info__discount">
                                <h1 >Скидка (10%):</h1>
                                <ul>
                                    <li>48 ₽ </li>
                                    <li>48 ₽ </li>
                                </ul>
                            </div>
                            <div className="price__two">
                                <h1>Сумма заказа:</h1>
                                <ul>
                                    <li>432 ₽ </li>
                                    <li>432 ₽ </li>
                                </ul>
                            </div>

                        </div>
                        <ul className="price__info">
                            <li>Сумма заказа: 864 ₽</li>
                            <li>Доставка: 350 ₽ </li>
                        </ul>



                    </div>


                    <div className="coffee__title">
                        <h1>Персональные акции</h1>
                        <div className="coffee__img">
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Купи 3 пачки кофе и получи 4-ую в подарок!</h1>
                                <p>Срок акции: до 31.08.2021</p>
                            </div>
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Купи 3 пачки кофе и получи 4-ую в подарок!</h1>
                                <p>Срок акции: до 31.08.2021</p>
                            </div>
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Купи 3 пачки кофе и получи 4-ую в подарок!</h1>
                                <p>Срок акции: до 31.08.2021</p>
                            </div>
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Купи 3 пачки кофе и получи 4-ую в подарок!</h1>
                                <p>Срок акции: до 31.08.2021</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile;