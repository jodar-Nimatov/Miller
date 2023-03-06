import React from "react";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="Container">
        <div className="Cart-inner">
          <div className="Cart-left">
            <li className="Home-cart">Главная</li>
            <li className="Cart-in">Корзина</li>

            <div className="Cart-product">
              <div className="Product-up">
                <h1>Товара в корзине</h1>
                <button className="Product-delet">Удалить все</button>
              </div>
              <div>
                <p>Удалить товар</p>
                <p>Наименование товара</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Скидка(10%)</p>
                <p>Итого</p>
              </div>
              <div className="Cart-card">
                <button></button>
                <img src="" alt="" />
                <div>
                  <h3></h3>
                  <p></p>
                  <p></p>
                </div>
                <p>270</p>
                <input type="number" />
                <p>27</p>
                <p>243</p>
              </div>
            </div>

            <div className="Cart-delivery"></div>

            <div className="Cart-promo"></div>

            <div className="Cart-total"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
