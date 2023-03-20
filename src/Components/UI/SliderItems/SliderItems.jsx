import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import kislinkaHigh from "../../../assets/Catalog/kislinkH.svg";
import kislinkaLow from "../../../assets/Catalog/kislinkL.svg";
import kislinkaMedium from "../../../assets/Catalog/kislinkM.svg";
import rating from "../../../assets/Catalog/Coffee/Filters/rating.svg";
import roast5 from "../../../assets/Catalog/Coffee/Filters/roast5.svg";
import roast4 from "../../../assets/Catalog/Coffee/Filters/roast4.svg";
import roast3 from "../../../assets/Catalog/Coffee/Filters/roast3.svg";
import roast2 from "../../../assets/Catalog/Coffee/Filters/roast2.svg";
import roast1 from "../../../assets/Catalog/Coffee/Filters/roast1.svg";
import { CustomContext } from '../../../utils/Context';

const CARD_WIDTH = 280


const SliderItems = () => {
  const {addCart, chooseId, category, search} = useContext(CustomContext)
    const [cards, setCards] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(()=>{ 
      axios.get('http://localhost:3333/catalog?&_limit=16')
      // .then(resp => resp.json())
      .then(resp => {
        setCards(resp.data)
      })
    //   .catch((err) => alert(err))
    }, [])

    

    const nextHandler = (el) => {
      el.style.transition = '1000ms'
      el.style.transform = 'translateX(-520px)'
    }

    const prevHandler = (el) => {
      el.style.transition = '1000ms'
      el.style.transform = 'translateX(420px)'
    }


  return (
    <div className='Slider'>
        <div className="Slider__show" >
          <div className="Slider__inner">
            {
                cards.map((item) => {
                  if(item.category.includes('Скидки')){

                    return (
                      <div key={item.id} className="coffee__cards-inner-row-card slider-card">
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
                          <Link to={`/catalog/{somethingFromContext}/card-item`} className="treedots">
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
                  }
                  })
            }
          </div>
        </div>
        <button className='Slider__button_prev' onClick={(e)=>prevHandler(e.target.previousElementSibling.firstChild)}>{`<`}</button>
        <button className='Slider__button_next' onClick={(e)=>nextHandler(e.target.previousElementSibling.previousElementSibling.firstChild)}>{`>`}</button>
    </div>
  )
}

export default SliderItems