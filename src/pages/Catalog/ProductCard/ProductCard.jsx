import axios from "axios";
import card_logo from '../../../assets/cards/image 5.svg'
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Blog from "../../Blog/Blog";
const ProductCard = () => {
  const [card, setCard] = useState({})
  useEffect(()=>{
    axios
    .get('http://localhost:3333/catalog?')
    .then(res => console.log(res.data[0]))
  }, [card])
  return (
    <div className="wrapper">
      <div className="card-back">
        <div className="card">
          <div className="container">
            <div className="card__inner">
              <ul className="filters-nav card-nav">
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
                <li>
                  <Link className="filters-nav-item" to="/catalog/${somethingFromContext}/card-item">
                    &#x2022;Product name from context
                  </Link>
                </li>
              </ul>
              <div className="card__info_top">
                <div className="card__info_top-left">
                  <img className="card__image" src={card_logo} height='542px' alt="" />
                  <div className="card__image_circle"></div>
                </div>
                <div className="card__info_top-right">

                </div>
              </div>
              <div className="card__info_middle">
                
              </div>
              <Blog/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
