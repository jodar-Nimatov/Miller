import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../../../utils/Context";
import kislinkaHigh from "../../../assets/Catalog/kislinkH.svg";
import kislinkaLow from "../../../assets/Catalog/kislinkL.svg";
import kislinkaMedium from "../../../assets/Catalog/kislinkM.svg";
import roast5 from "../../../assets/Catalog/Coffee/Filters/roast5.svg";
import roast4 from "../../../assets/Catalog/Coffee/Filters/roast4.svg";
import roast3 from "../../../assets/Catalog/Coffee/Filters/roast3.svg";
import roast2 from "../../../assets/Catalog/Coffee/Filters/roast2.svg";
import roast1 from "../../../assets/Catalog/Coffee/Filters/roast1.svg";
import rating from "../../../assets/Catalog/Coffee/Filters/rating.svg";
import Blog from "../../Blog/Blog";
const ProductCard = () => {
  const [card, setCard] = useState({});
  const [check, setCheck] = useState(Object.keys(card));
  const { id } = useContext(CustomContext);
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios
      .get(`http://localhost:3333/catalog?id=${id}`)
      .then((res) => setCard(res.data[0]));
  }, [id]);
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
                  <Link className="filters-nav-item" to="/catalog/coffee">
                    &#x2022;Свежеобжаренный кофе
                  </Link>
                </li>
                <li>
                  <Link className="filters-nav-item" to="/catalog/card-item">
                    &#x2022;{card.title}
                  </Link>
                </li>
              </ul>
              <div className="card__info_top forDF">
                <div className="card__info_top-left">
                  <div
                    className="card-img"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  <div
                    className="card__image_circle"
                    style={{ backgroundImage: `url(${card.in})` }}
                  ></div>
                </div>
                <div className="card__info_top-right">
                  <div className="roasting-level">
                    {card.roast == 5 ? (
                      <img height="17px" src={roast5} alt="" />
                    ) : card.roast == 4 ? (
                      <img height="17px" src={roast4} alt="" />
                    ) : card.roast == 3 ? (
                      <img height="17px" src={roast3} alt="" />
                    ) : card.roast == 2 ? (
                      <img height="17px" src={roast2} alt="" />
                    ) : card.roast == 1 ? (
                      <img height="17px" src={roast1} alt="" />
                    ) : null}
                  </div>
                  <div className="title forDF">
                    <h2>{card.title}</h2>
                    <div className="title_right">
                      <p className="pjest">
                        {card.category !== undefined ? card.category[0] : ""}
                      </p>
                      <p>
                        {card.category !== undefined ? card.category[1] : ""}
                      </p>
                    </div>
                  </div>
                  <p className="pmethod">{card["processing method"]}</p>
                  {/* <div
                    className="rating"
                    style={{
                      backgroundImage: `url(${rating})`,
                      height: "12px",
                      width: `${Math.floor(card.rating[0]) + card.rating[2]}px`,
                      backgroundSize: "50px",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                    }}
                  ></div> */}
                  <p>({card.review} отзыва)</p>
                  {/* --- */}
                  <p className="card--desc">{card.subtitle}</p>
                  {/* --- */}
                  <div className="coffee__cards-inner-row-card-center-right-filters forDF">
                    <div className="coffee__cards-inner-row-card-center-right-filters-item">
                      <p>Кислинка</p>
                      <div className="kislinka">
                        <img
                          src={
                            card.kislinka == "Высокая"
                              ? kislinkaHigh
                              : card.kislinka == "Средняя"
                              ? kislinkaMedium
                              : card.kislinka == "Низкая"
                              ? kislinkaLow
                              : null
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="coffee__cards-inner-row-card-center-right-filters-item">
                      <p>Горчинка</p>
                      <div className="kislinka">
                        <img
                          src={
                            card.gorchinka > 7
                              ? kislinkaHigh
                              : card.gorchinka > 3
                              ? kislinkaMedium
                              : card.gorchinka > 0
                              ? kislinkaLow
                              : null
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="coffee__cards-inner-row-card-center-right-filters-item">
                      <p>Носыщенность</p>
                      <div className="kislinka">
                        <img
                          src={
                            card.nasyshennost > 7
                              ? kislinkaHigh
                              : card.nasyshennost > 3
                              ? kislinkaMedium
                              : card.nasyshennost > 0
                              ? kislinkaLow
                              : null
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* --- */}
                  <div className="grams forDF">
                    <div className="white-circle"></div>
                    250 г.
                    <div className="white-circle"></div>
                    1000 г.
                  </div>
                  {/* --- */}
                  <div className="Card-click">
                    <button type="button">
                      -
                    </button>
                    <span className="Card-count">{count}</span>
                    <button type="button">
                      +
                    </button>
                  </div>
                  {/* --- */}
                  <button>Купить за //price</button>
                </div>
              </div>
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
