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
  const { id, category, types, addCart } = useContext(CustomContext);
  const [count, setCount] = useState(1);
  const obj = { one: false, two: false };
  useEffect(() => {
    axios
      .get(
        `http://localhost:3333/${category}${
          category !== "catalog" ? "-" + types.type : ""
        }?id=${id}`
      )
      .then((res) => setCard(res.data[0]));
  }, [id, category]);
  return (
    <div className="wrapper">
      <div className="card-back">
        <div className="card" key={card.id}>
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
                  <Link
                    className="filters-nav-item"
                    to={`/catalog/${category}/card-item`}
                  >
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
                    hidden={card.kislinka !== undefined ? false : true}
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
                    <p></p>
                  </div>

                  <p className="pmethod">{card["processing method"]}</p>

                  <div className="das forDF">
                    <div
                      className="rating"
                      style={{ backgroundImage: `url(${rating})` }}
                    ></div>
                    <h3>{card.rating}</h3>
                    <small>({card.review} отзыва)</small>
                  </div>

                  {/* --- */}
                  <p className="card--desc">{card.subtitle}</p>

                  {/* --- */}
                  <div className="coffee__cards-inner-row-card-center-right-filters filts forDF">
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
                    <div>
                      <div className="white-circle"></div>
                      250 г.
                    </div>
                    <div>
                      <div className="white-circle"></div>
                      1000 г.
                    </div>
                  </div>
                  {/* --- */}

                  <div className="forDF">
                    <div className="card_clicker">
                      <span
                        type="button"
                        className="plusorminus"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </span>
                      <span className="Card-count">{count}</span>
                      <span
                        type="button"
                        className="plusorminus"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </span>
                    </div>
                    {/* --- */}
                    <button onClick={(item = card) => addCart(item)}>
                      Купить за {card.price * count} ₽
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`blogg ${
                  card.kislinka !== undefined ? "show" : "hide"
                }`}
              >
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
