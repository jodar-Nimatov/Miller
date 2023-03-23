import React, { useContext, useEffect, } from "react";
import kislinkaHigh from "../../../../assets/Catalog/kislinkH.svg";
import kislinkaLow from "../../../../assets/Catalog/kislinkL.svg";
import kislinkaMedium from "../../../../assets/Catalog/kislinkM.svg";
import rating from "../../../../assets/Catalog/Coffee/Filters/rating.svg";
import { useState } from "react";
import roast5 from "../../../../assets/Catalog/Coffee/Filters/roast5.svg";
import roast4 from "../../../../assets/Catalog/Coffee/Filters/roast4.svg";
import roast3 from "../../../../assets/Catalog/Coffee/Filters/roast3.svg";
import roast2 from "../../../../assets/Catalog/Coffee/Filters/roast2.svg";
import roast1 from "../../../../assets/Catalog/Coffee/Filters/roast1.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { CustomContext } from "../../../../utils/Context";

const CoffeeItems = ({ filters }) => {
  const {addCart, chooseId, category, search} = useContext(CustomContext)
  const [cards, setCards] = useState([]);
  const [product, setProduct] = useState('hide')
  const [modal, setModal] = useState("showC");
  const [sorting, setSorting] = useState("Сортировка");
  const url = "http://localhost:3333/catalog?";
  const filterBase = {
    geographyFilter: "",
    kislinkaFilter: "",
    pmethodFilter: "",
    specialFilter: "",
    coftypeFilter: "",
    coffeelevelFilter: "",
    cmethodFilter: "",
  };
  // Esly budet vremya, poprobuyu sokratit kod !
  const filtering = () => {
    if (filters.coffeefrom !== []) {
      for (let i = 0; i < filters.coffeefrom.length; i++) {
        filterBase.geographyFilter += `geography=${filters.coffeefrom[i]}&`;
      }
    }
    if (filters.kislinka !== []) {
      for (let i = 0; i < filters.kislinka.length; i++) {
        filterBase.kislinkaFilter += `kislinka=${filters.kislinka[i]}&`;
      }
    }
    if (filters.pmethod !== []) {
      for (let i = 0; i < filters.pmethod.length; i++) {
        filterBase.pmethodFilter += `processing method=${filters.pmethod[i]}&`;
      }
    }
    if (filters.special !== []) {
      for (let i = 0; i < filters.special.length; i++) {
        filterBase.specialFilter += `special=${filters.special[i]}&`;
      }
    }
    if (filters.coffeetype !== []) {
      for (let i = 0; i < filters.coffeetype.length; i++) {
        filterBase.coftypeFilter += `type of coffee=${filters.coffeetype[i]}&`;
      }
    }
    if (filters.coffeelevel !== []) {
      for (let i = 0; i < filters.coffeelevel.length; i++) {
        filterBase.coffeelevelFilter += `roast=${filters.coffeelevel[i]}&`;
      }
    }
    if (filters.cmethod !== []) {
      for (let i = 0; i < filters.cmethod.length; i++) {
        filterBase.cmethodFilter += `cooking method=${filters.cmethod[i]}&`;
      }
    }
  };
  filtering();
  useEffect(() => {
    axios
      .get(
        url +
          `${
            sorting == "По убыванию цены"
              ? "_sort=price&_order=desc"
              : sorting == "По возрастанию цены"
              ? "_sort=price&_order=asc"
              : sorting == "По рейтингу"
              ? "_sort=rating&_order=desc"
              : sorting == "По кислотности"
              ? "_sort=kislinka&_order=desc"
              : ""
          }` +
          "&" + `${search !== '' ? 'title_like=' + search + '&' : ''}` +
          filterBase.geographyFilter +
          filterBase.kislinkaFilter +
          filterBase.coftypeFilter +
          filterBase.pmethodFilter +
          filterBase.specialFilter +
          filterBase.coffeelevelFilter +
          filterBase.cmethodFilter
      )
      .then((resp) => {
        setCards(resp.data);
      });
  }, [sorting, filters]);
  const closeSorting = () => {
    document.body.children[1].childNodes[4].addEventListener(
      "click",
      showSorting
    );
    setModal("closeC");
  };
  const showSorting = () => {
    setModal("showC");
  };
  return (
    <>
    <div className='tea-cards-back'>
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4 className={`cortirovka siuu ${modal}`}>Тебе с пенкой?</h4>
            <h4 className={`cortirovka ${modal}`} onClick={closeSorting}>
              {sorting}
            </h4>
            <div className={`c-sorting-modal-window ${modal}`}>
              <ul>
                <div className="sorting-title">
                  {sorting} <span>&times;</span>
                </div>
                <li
                  className="sorting-item"
                  onClick={(e) => setSorting(e.target.innerHTML)}
                >
                  По возрастанию цены
                </li>
                <li
                  className="sorting-item"
                  onClick={(e) => setSorting(e.target.innerHTML)}
                >
                  По убыванию цены
                </li>
                <li
                  className="sorting-item"
                  onClick={(e) => setSorting(e.target.innerHTML)}
                >
                  По рейтингу
                </li>
                <li
                  className="sorting-item"
                  onClick={(e) => setSorting(e.target.innerHTML)}
                >
                  По кислотности
                </li>
              </ul>
            </div>
            <div className="coffee__cards-inner-row tocenter">
              {/* <BsStar/> */}
              {cards.map((item) => {
                // Nujno propisat nemnogo logiki dlya cartochek.
                return (
                  <div key={item.id} className="coffee__cards-inner-row-card">
                    <div className="coffee__cards-inner-row-card-top">
                      <div className="coffee__cards-inner-row-card-top-left">
                        {item.category.map((cy) => (
                          <p key={cy.length}>
                            {cy == "Скидки" ? (
                              <>
                                <span className="discount">%</span>
                                {cy}
                              </>
                            ) : (
                              cy
                            )}
                          </p>
                        ))}
                      </div>
                      <div className="coffee__cards-inner-row-card-top-right">
                        <select>
                          <option value="250g">250 г.</option>
                          <option value="500g">500 г.</option>
                          <option value="1000g">1000 г.</option>
                        </select>
                      </div>
                    </div>
                    <div className="coffee__cards-inner-row-card-center">
                      <div className="coffee__cards-inner-row-card-center-left">
                        <Link to={`/catalog/${category}/card-item`} className="tea-img-block">
                          <img
                          onClick={()=>chooseId(item)}
                            src={item.image}
                            height="218px"
                            className="card-image"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="coffee__cards-inner-row-card-center-right">
                        <div className="coffee__cards-inner-row-card-center-right-rating">
                          <div
                            className="rating"
                            style={{
                              backgroundImage: `url(${rating})`,
                              height: "12px",
                              width: `${
                                Math.floor(item.rating[0]) + item.rating[2]
                              }px`,
                              backgroundSize: "50px",
                              backgroundRepeat: "no-repeat",
                              position: "relative",
                            }}
                          ></div>
                          <h4>{item.rating}</h4>
                          <small className="coffee__cards-inner-row-card-center-right-rating-review">
                            ({item.review} отзыва)
                          </small>
                        </div>
                        <div className="roasting-level">
                          {item.roast == 5 ? (
                            <img height="13px" src={roast5} alt="" />
                          ) : item.roast == 4 ? (
                            <img height="13px" src={roast4} alt="" />
                          ) : item.roast == 3 ? (
                            <img height="13px" src={roast3} alt="" />
                          ) : item.roast == 2 ? (
                            <img height="13px" src={roast2} alt="" />
                          ) : item.roast == 1 ? (
                            <img height="13px" src={roast1} alt="" />
                          ) : null}
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters">
                          <div className="coffee__cards-inner-row-card-center-right-filters-item">
                            <p>Кислинка</p>
                            <div className="kislinka">
                              <img
                                src={
                                  item.kislinka == "Высокая"
                                    ? kislinkaHigh
                                    : item.kislinka == "Средняя"
                                    ? kislinkaMedium
                                    : item.kislinka == "Низкая"
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
                                  item.gorchinka > 7
                                    ? kislinkaHigh
                                    : item.gorchinka > 3
                                    ? kislinkaMedium
                                    : item.gorchinka > 0
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
                                  item.nasyshennost > 7
                                    ? kislinkaHigh
                                    : item.nasyshennost > 3
                                    ? kislinkaMedium
                                    : item.nasyshennost > 0
                                    ? kislinkaLow
                                    : null
                                }
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="coffee__cards-inner-row-card-bottom">
                      <small>{item.geography}</small>
                      <h4>{item.title}</h4>
                      <p>{item.subtitle}</p>
                      <Link to={`/catalog/${category}/card-item`} className="treedots">
                        Больше
                      </Link>
                      <>...</>
                      <div className="coffee__cards-inner-row-card-bottom-bottom forDF">
                        <div className="coffee__cards-inner-row-card-bottom-bottom-price">
                          {item.category.includes("Скидки") ? (
                            <div className="old-price">
                              {Math.floor(item.price + (item.price / 100) * 30)}{" "}
                              ₽
                            </div>
                          ) : (
                            <></>
                          )}
                          <h3>{item.price} ₽</h3>
                        </div>
                        <button type="button" onClick={() => addCart(item) }>В корзину</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <br />
            <button>Показать еще</button>
          </div>
        </div>
        <div className="grey"></div>
      </div>
    </div>
    </>
  );
};
export default CoffeeItems;