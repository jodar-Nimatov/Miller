import React, { useEffect, useContext } from "react";
import rating from "../../../../assets/Catalog/Coffee/Filters/rating.svg";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CustomContext } from "../../../../utils/Context";

const TeaItems = ({ type }) => {
  const [cards, setCards] = useState([]);
  const [modal, setModal] = useState("showC");
  const [sorting, setSorting] = useState("Сортировка");
  const { addCart, chooseId, category } = useContext(CustomContext);
  useEffect(() => {
    const url = `http://localhost:3333/coffee-drinks-${type}?`;
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
              : ""
          }`
      )
      .then((resp) => {
        setCards(resp.data);
      })
      .catch((error) => {
        if (error.resp) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error: ", error.messege);
        }
        console.log(error.config);
      });
  }, [sorting, type]);
  const closeSorting = () => {
    document.body.children[1].childNodes[5].addEventListener(
      "click",
      showSorting
    );
    setModal("closeC");
  };
  const showSorting = () => {
    setModal("showC");
  };
  return (
    <div className="tea-cards-back">
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
              </ul>
            </div>
            <div className="coffee__cards-inner-row">
              {cards.map((item) => (
                <div key={item.id} className="coffee__cards-inner-row-card">
                  <div className="tea__cards-inner-row-card-top">
                    <div className="tea__cards-inner-row-card-top-right forDF">
                      <div className="tea__cards-inner-row-card-center-right-rating">
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
                        <div className="forDF kkdwe">
                          <h4>{item.rating}</h4>
                          <small>({item.review} отзыва)</small>
                        </div>
                      </div>
                      <div className="coffee__cards-inner-row-card-top-right">
                        <select>
                          <option value="100g">100г</option>
                          <option value="300g">300г</option>
                          <option value="500g">500г</option>
                          <option value="1000g">1000г</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <Link
                      to={`/catalog/${category}/card-item`}
                      className="tea-img-block"
                    >
                      <img
                        onClick={() => chooseId(item)}
                        src={item.image}
                        className="card-image"
                        height="221px"
                        alt=""
                      />
                    </Link>
                    <p></p>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4 style={{ marginTop: "16px" }}>{item.title}</h4>
                    <p style={{ marginTop: "20px" }}>{item.subtitle}</p>
                    <Link
                      to="/catalog/${somethingFromContext}/card-item"
                      className="treedots"
                    >
                      Больше
                    </Link>
                    <>...</>
                    <div className="coffee__cards-inner-row-card-bottom-bottom forDF">
                      <div className="coffee__cards-inner-row-card-bottom-bottom-price">
                        <></>
                        <h3 className="card-title-jiest">{item.price} ₽</h3>
                      </div>
                      <button type="button" onClick={() => addCart(item)}>
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <button>Показать еще</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaItems;
