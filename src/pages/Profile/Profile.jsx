import React, { useState } from "react";
import coffee from '../../assets/Profile/coffeeProfile.png'
import joodar from '../../assets/Profile/Joodar.png'
import { Link } from "react-router-dom";



const Profile = () => {
    const [show, setShow] = useState(true)
    // function click() {
    //     let a = document.querySelector('classInput').value;
    //     document.querySelector('ClassDiv').innerHTML = a
    // }
  


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
                                <button className="btn__joodar" type="button" >Изменить</button>   
                            </div>

                            <ul>
                                <li className="name__joodar">Ниматов Жоодар, Здраствуйте!</li>
                                <li>nimatovjoodar@gmail.com</li>
                                <li>+996550520666</li>
                               
                                <li>Пароль:*********</li>
                            </ul>

                        </div>

                        <div className="discount-profile">
                            <div className="discount__inner">
                                    <button className="discount__btn" onClick={()=>setShow(!show)}>?</button> 
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


                    <div className="orders__cart">
                        <div className="orders__title">
                            <h1>Мои заказы</h1>

                            <button>Текущие заказы</button>
                            <button>Завершенные</button>
                            <div className="orders__p">
                                <p>01.03.2023 18:24:00 - оплачено</p>
                                <p>Дата доставки: 01.03.2023</p>

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


                    <div className="slider__profile">
                        <h1 className="slider__title">Персональные акции</h1>
                        <div className="slides__inner">
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Купи 3 пачки кофе и получи 4-ую в подарок!</h1>
                                <p>Срок акции: до 10.03.2023</p>
                            </div>
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Активных покупателей есть большие скидки!</h1>
                                <p>Срок акции: до 11.03.2023</p>
                            </div>
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>Только сегодня большие скидки на кофе!</h1>
                                <p>Срок акции: до 1.03.2023</p>
                            </div>
                            <div className="coffee">
                                <img src={coffee} alt="" />
                                <h1>На 8 марта большие скидки успей купить!</h1>
                                <p>Срок акции: до 8.03.2023</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile;