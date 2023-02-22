import React from "react";
import CheckPhoto from "./Check-photo/Check.svg"
import DeleteBtn from "./Check-photo/Close.svg"

const Cart = () => {
  return (
    <div className="Cart">
        <div className="container">
            <div className="Cart-inner">
                <div className="Cart-left">
                <ul className="Cart-ul">
                    <li>Главная</li>
                    <li>Корзина</li>
                </ul>
                <div className="Cart-product">
                    <div className="Block-inside">
                    <div className="Cart-product-up">
                        <h1>Товара в корзине</h1>
                        <button className="Product-delete">Удалить все</button>
                    </div>
                    <div className="Cart-product-middle">
                        <ul className="Cart-product-mid-left">
                            <li>Удалить товар</li>
                            <li>Наименование товара</li>
                        </ul>
                        <ul className="Cart-product-mid-right">
                            <li>Цена</li>
                            <li>Количество</li>
                            <li>Скидка(%10)</li>
                            <li>Итого</li>
                        </ul>
                    </div>
                    <div className="Cart-card">
                            <div className="Card-left">
                                <button className="Card-close"><img src={DeleteBtn} alt=""/></button>
                                <img src={CheckPhoto} alt="" />
                                    <div className="columbia">
                                        <h3>Columbia Supremo</h3>
                                        <p>мытая, натуралья, смесь</p>
                                        <p>250 г.</p>
                                    </div>
                            </div>       
                            <div className="Card-right">
                                <p>270 ₽</p>
                                    <div className="Card-click">
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                <p>27 ₽</p>
                                <p>243 ₽</p>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="Cart-delivery">

                </div>

                <div className="Cart-promo">

                </div>

                <div className="Cart-total">

                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart