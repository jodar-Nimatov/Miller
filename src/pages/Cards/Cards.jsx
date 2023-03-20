import React from "react";
import { Link } from "react-router-dom";
import cars_logo from "../../assets/cards/image 5.svg";
const Cards = () => {
  return (
    <div className="wrapper">
      <div className="cards-back">
        <div className="cards">
          <div className="container">
            <div className="cards_inner">
              <ul className="filters-nav">
                <li>
                  <Link className="filters-nav-first" to="/">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link className="filters-nav-item" to="/">
                    &#x2022;Каталог товаров
                  </Link>
                </li>
                <li>
                  <Link className="filters-nav-item" to="/catalog/coffee">
                    &#x2022;Свежеобжаренный кофе
                  </Link>
                </li>
                <li>
                  <Link className="filters-nav-item" to="/catalog/coffee">
                    &#x2022;Карточка товара название
                  </Link>
                </li>
              </ul>
              <div className="block_cards">
                <img className="cards_logo" src={cars_logo} alt="" />
                <div className="text-t">
                  ‰<h1 className="text_h1">Colombia Supremo</h1>
                </div>
                <p className="text_p">Мытая, натуральная, смесь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
