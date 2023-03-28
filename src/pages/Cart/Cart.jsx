import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "./Check-photo/Close.svg";
import Master from "./Check-photo/MasterCard.svg";
import Visa from "./Check-photo/Visa.svg";
import { CustomContext } from "../../utils/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../Components/ModalCart/Modal";
import "react-credit-cards-2/lib/styles.scss";
import Cards from "react-credit-cards-2";
import InputMask from "react-input-mask";

const Cart = () => {
  const [modalactive, setModalactive] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nameCompany, setnameCompany] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [house, setHouse] = useState("");
  const [postcode, setPostcode] = useState("");
  const [comment, setComment] = useState("");
  /////
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [namecard, setNamecard] = useState("");
  const [numbercard, setNumbercard] = useState("");

  const handleInputFocus = ({ target }) => {
    setFocused(target.id);
  };

  const notify = (e) => {
    e.preventDefault();
    toast.warn("Ваш заказ был успешно расчитан!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: false,
    });
  };

  const notifypromo = (e) => {
    e.preventDefault();
    toast.warn("Данный промокод уже просрочен!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const {
    cart,
    addComplite,
    plusOneCart,
    minusOneCart,
    delCart,
    delTo,
    setIs,
    is,
    setAdds,
  } = useContext(CustomContext);
  const total = cart.reduce(
    (prev, curr) =>
      prev + curr.price * curr.count - ((curr.price * curr.count) / 100) * 10,
    0
  );
  const podItog = cart.reduce(
    (prev, curr) =>
      prev + curr.price * curr.count - ((curr.price * curr.count) / 100) * 10,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const itog = cart.reduce((prev, curr) => prev + curr.price * curr.count, 0);
  const skidka = cart
    .reduce((prev, curr) => prev + ((curr.price * curr.count) / 100) * 10, 0)
    .toFixed(1);
  // const skidk = cart.reduce(
  //     (item, state) =>
  //         item + state.price * state.count / 100 * 10,
  //     0
  // ).toFixed(1);
  let url = "http://localhost:7777/dostavka";

  let handlesubmitdos = async (e) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: e.target[0].value,
        surname: e.target[1].value,
        number: e.target[2].value,
        email: e.target[3].value,
        nameCompany: e.target[4].value,
        country: e.target[5].value,
        city: e.target[6].value,
        house: e.target[7].value,
        postcode: e.target[8].value,
        comment: e.target[9].value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="back-cart cun">
      <div className="Cart">
        <div className="container">
          <div className="Cart-inner">
            <div className="Cart-left">
              <ul className="Cart-ul">
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>&#x2022;Корзина</li>
              </ul>
            </div>
            {/* Карточка товара в корзине */}
            <div className="Cart-product">
              <div className="Cart-inside">
                <div className="Cart-product-up">
                  <h2>{cart.length} Товара в корзине</h2>
                  <button
                    type="button"
                    onClick={() => delTo()}
                    className="Product-delete"
                  >
                    Удалить все
                  </button>
                </div>
                <div className="Cart-product-middle">
                  <ul className="Cart-product-mid-left">
                    <li>Удалить товар</li>
                    <li>Наименование товара</li>
                  </ul>
                  <ul className="Cart-product-mid-right">
                    <li>Цена</li>
                    <li>Количество</li>
                    <li>Скидка(10%)</li>
                    <li>Итого</li>
                  </ul>
                </div>
                {cart.map((item) => (
                  <div className="Cart-card">
                    <div className="Card-left">
                      <button
                        type="button"
                        onClick={() => delCart(item.id)}
                        className="Card-close"
                      >
                        <img src={DeleteBtn} alt="" />
                      </button>
                      <img width="90" height="80" src={item.image} alt="" />
                      <div className="Cart-description">
                        <h3 className="Cart-des-h3">{item.title}</h3>
                        <p>мытая, натуральная, смесь</p>
                        <p className="Cart-des-p">250 г.</p>
                      </div>
                    </div>
                    <div className="Card-right">
                      <div>
                        <p className="Cart-right-price">{item.price} ₽</p>
                      </div>
                      <div className="Card-click">
                        <button
                          type="button"
                          onClick={() => minusOneCart(item.id)}
                        >
                          -
                        </button>
                        <span className="Card-count">{item.count}</span>
                        <button
                          type="button"
                          onClick={() => plusOneCart(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="Card-Click-p">
                        <p className="Card-Click-dis">
                          {Math.ceil(((item.price * item.count) / 100) * 10)}₽
                        </p>
                      </div>
                      <div className="Card-total">
                        <p>
                          {item.price * item.count -
                            ((item.price * item.count) / 100) * 10}{" "}
                          ₽
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Карточка товара в корзине */}
            {/* Карточка доставки */}
            <div className="Cart-delivery">
              <div className="Delivery-inside">
                <div className="Delivery-head">
                  <h2>Доставка</h2>
                </div>
                <div className="Delivery-input">
                  <form onSubmit={handlesubmitdos}>
                    <div className="Delivery-left">
                      <input
                        value={name}
                        type="text"
                        placeholder="Имя"
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                      <input
                        value={surname}
                        type="text"
                        placeholder="Фамилия"
                        onChange={(e) => setSurname(e.target.value)}
                      ></input>
                      <input
                        value={number}
                        type="tel"
                        placeholder="Телефон"
                        onChange={(e) => setNumber(e.target.value)}
                      ></input>
                      <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <input
                        value={nameCompany}
                        type="text"
                        placeholder="Название компании"
                        onChange={(e) => setnameCompany(e.target.value)}
                      ></input>
                    </div>
                    <div className="Delivery-right">
                      <input
                        value={country}
                        type="text"
                        placeholder="Страна"
                        onChange={(e) => setCountry(e.target.value)}
                      ></input>
                      <input
                        value={city}
                        type="text"
                        placeholder="Город"
                        onChange={(e) => setCity(e.target.value)}
                      ></input>
                      <input
                        value={house}
                        type="text"
                        placeholder="Улица, дом"
                        onChange={(e) => setHouse(e.target.value)}
                      ></input>
                      <input
                        value={postcode}
                        type="number"
                        placeholder="Почтовый индекс"
                        onChange={(e) => setPostcode(e.target.value)}
                      ></input>
                      <input
                        value={comment}
                        type="text"
                        placeholder="Комментарий к заказу (необязательно)"
                        onChange={(e) => setComment(e.target.value)}
                      ></input>
                    </div>
                    <button className="Delivery-btn" onClick={notify}>
                      Рассчитать доставку
                    </button>
                    <ToastContainer />
                  </form>
                </div>
                <div></div>
              </div>
            </div>
            {/* Карточка доставки */}
            {/* Карточка промокода */}
            <div className="Cart-down">
              <div className="Cart-promo">
                <div className="Promo-inside">
                  <div className="Promo-head">
                    <h2>Промокод</h2>
                    <p>
                      Введите подарочный промокод в поле ниже и получите скидку
                      на заказ до 20%. Скидка не распространяется на доставку
                    </p>
                  </div>
                  <input
                    type="text"
                    className="Promo-inp"
                    placeholder="Введите промокод"
                  ></input>
                  <button onClick={notifypromo} className="Promo-btn">
                    Ввести промокод
                  </button>

                  {/* {alert("")} */}
                </div>
              </div>
              <div className="Cart-total">
                <div className="Total-inside">
                  <div className="Total-head">
                    <h2>{total}₽</h2>
                    <img src={Master} alt="" />
                    <img src={Visa} alt="" />
                  </div>
                  <div className="Total-skidka">
                    <p>Под итог: {podItog} ₽</p>
                    <p>Скидка: {skidka} ₽ (10%)</p>
                  </div>
                  <div className="dostavka">
                    <div className="Dostavka-p">
                      <div className="Dostavka-vid">
                        <p>Доставка:</p>
                        <div
                          className="white-circle"
                          onClick={(e) =>
                            (e.target.style.background = "orange")
                          }
                        ></div>
                        <p>СДЭК - до двери 390 ₽</p>
                      </div>
                      <div className="Dostavka-vid-block">
                        <div
                          onClick={(e) =>
                            (e.target.style.background = "orange")
                          }
                          className="white-circle"
                        ></div>
                        <p>Почта России 300 ₽</p>
                      </div>
                      <div className="Dostavka-vid-block">
                        <div
                          className="white-circle"
                          onClick={(e) =>
                            (e.target.style.background = "orange")
                          }
                        ></div>
                        <p>DPD - курьер, 3 дн 427 ₽</p>
                      </div>
                    </div>
                  </div>
                  <div className="Total-down">
                    <button className="Total-btn" onClick={setModalactive}>
                      Оплатить заказ
                    </button>
                    <Modal active={modalactive} setActive={setModalactive}>
                      <form action="">
                        <Cards
                          locale={{
                            valid: "Date",
                          }}
                          placeholders={{
                            name: "Your name",
                          }}
                          number={numbercard}
                          name={namecard}
                          expiry={expiry}
                          cvc={cvc}
                          focused={focused}
                          callback={console.log}
                        />
                        <div className="inpts">
                          <InputMask
                            mask="9999 9999 9999 9999"
                            value={numbercard}
                            onChange={(e) => setNumbercard(e.target.value)}
                            disabled={false}
                            maskChar=""
                            placeholder="number"
                            style={{ width: "250px", height: "25px" }}
                          ></InputMask>

                          <InputMask
                            mask="99/99"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            disabled={false}
                            maskChar=""
                            placeholder="expiry"
                            style={{ width: "250px", height: "25px" }}
                          ></InputMask>

                          <InputMask
                            mask="999"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            disabled={false}
                            placeholder="cvc"
                            maskChar=""
                            style={{ width: "250px", height: "25px" }}
                          ></InputMask>
                        </div>
                        <button
                          onClick={(e) => {
                            setAdds(false);
                            e.preventDefault();
                            setModalactive(false);
                          }}
                          className="oformlenie"
                        >
                          ОФОРМИТЬ ЗАКАЗ
                        </button>
                      </form>
                    </Modal>
                    <p>
                      Ваши персональные данные будут использоваться для
                      управления доступом к вашей учетной записи и для других
                      целей, описанных в нашем документе политика
                      конфиденциальности.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Карточка промокода */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
