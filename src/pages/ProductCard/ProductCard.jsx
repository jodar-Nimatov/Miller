import React from "react";
import card_logo from "../../assets/cards/image 5.svg";
import { Link } from 'react-router-dom';
const ProductCard = () => {
  return (
    <div className="wrapper">
      <div className="card-back">
        <div className="card">
          <div className="container">
            <div className="card__inner">
              <ul className="filters-nav ci">
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
                  <Link className="filters-nav-item" to="/catalog/${somethingFromContext}/card-item">
                    &#x2022;Свежеобжаренный кофе
                  </Link>
                </li>
              </ul>
              <div className="card__top-info">
                <img className="card__logo" src={card_logo} height='542px' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
