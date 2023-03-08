import React, { useEffect } from "react";
import rating from "../../../../assets/Catalog/Coffee/Filters/rating.svg";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeaItems = ({ type }) => {
  const [cards, setCards] = useState([]);
  const [modal, setModal] = useState("showC");
  const [sorting, setSorting] = useState("Сортировка");
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
      .catch(error => {
        if(error.resp){
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }else if(error.request){
          console.log(error.request)
        }else {
          console.log('Error: ', error.messege)
        }
        console.log(error.config)
      })
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
    <>
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
                    <div className="tea__cards-inner-row-card-top-right">
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
                        <h4>{item.rating}</h4>
                      </div>
                      <select>
                        <option value="100g">100г</option>
                        <option value="300g">300г</option>
                        <option value="500g">500г</option>
                        <option value="1000g">1000г</option>
                      </select>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <Link to="" className="tea-img-block">
                      <img
                        src={item.image}
                        className="card-image"
                        height="221px"
                        alt=""
                      /> 
                    </Link>
                    <p></p>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <Link to="" className="treedots">
                      Больше
                    </Link>
                    <>...</>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <h3>{item.price} ₽</h3>
                      <button>В корзину</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeaItems;
