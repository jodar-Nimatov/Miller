import React, { useEffect } from "react";
import CoffeeFilters from "../Coffee-Filters/Coffee-Filters";
import kislinkaHigh from '../../../../assets/Catalog/kislinkH.svg'
import kislinkaLow from '../../../../assets/Catalog/kislinkL.svg'
import kislinkaMedium from '../../../../assets/Catalog/kislinkM.svg'
import rating from '../../../../assets/Catalog/Coffee/Filters/rating.svg'
import { useState } from "react";
import roast5 from '../../../../assets/Catalog/Coffee/Filters/roast5.svg'
import roast4 from '../../../../assets/Catalog/Coffee/Filters/roast4.svg'
import roast3 from '../../../../assets/Catalog/Coffee/Filters/roast3.svg'
import roast2 from '../../../../assets/Catalog/Coffee/Filters/roast2.svg'
import roast1 from '../../../../assets/Catalog/Coffee/Filters/roast1.svg'
import axios from "axios";

const CoffeeItems = () => {
  const [cards, setCards] = useState([])
  useEffect(()=>{ 
    axios
    .get('http://localhost:3333/catalog')
    // .then(resp => resp.json())
    .then(resp => {
      setCards(resp.data)
    //   console.log(cards)
    })
  }, [])  
  return (
    <>
      <CoffeeFilters/>
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4 className="cortirovka">Сортировка</h4>
            <div className="coffee__cards-inner-row">
              {/* <BsStar/> */}
              {
                cards.map(item => (
                <div key={item.id} className="coffee__cards-inner-row-card">
                  <div className="coffee__cards-inner-row-card-top">
                    <div className="coffee__cards-inner-row-card-top-left">
                      {item.category.map(cy => <p key={cy.length}>{cy == 'Скидки' ? <><div className="discount">%</div>{cy}</> : cy}</p>)}
                    </div>
                    <div className="coffee__cards-inner-row-card-top-right">
                      <select>
                        <option value="250g">250г</option>
                        <option value="500g">500г</option>
                        <option value="1000g">1000г</option>
                      </select>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <div className="coffee__cards-inner-row-card-center-left">
                      <img src={item.image} width='120px' className="card-image" alt="" />
                    </div>
                    <div className="coffee__cards-inner-row-card-center-right">
                      <div className="coffee__cards-inner-row-card-center-right-rating">
                        <div className="rating" style={{backgroundImage: `url(${rating})`, height: '12px', width: `${(Math.floor(item.rating[0]) + item.rating[2])}px`, backgroundSize: '50px', backgroundRepeat: 'no-repeat', position: 'relative'}}></div>
                        <h4>{item.rating}</h4>
                        <small className="coffee__cards-inner-row-card-center-right-rating-review">({item.review} отзыва)</small>
                      </div>
                      <div className="coffee__cards-inner-row-card-center-right-roasting">
                        {
                          item.roast === 5 ? <img height='13px' src={roast5} alt=""/> : item.roast === 4 ? <img height='13px' src={roast4} alt=''/> : item.roast === 3 ? <img height='13px' src={roast3} alt=''/> : item.roast === 2 ? <img height='13px' src={roast2} alt=''/> : item.roast === 1 ? <img height='13px' src={roast1} alt=''/> : null 
                        }
                      </div>
                      <div className="coffee__cards-inner-row-card-center-right-filters">
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Кислинка</p>
                          <div className="kislinka"><img src={item.kislinka > 7 ? kislinkaHigh : item.kislinka > 3 ? kislinkaMedium : item.kislinka > 0 ? kislinkaLow : null } alt="" /></div>
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Горчинка</p>
                          <div className="kislinka"><img src={item.gorchinka > 7 ? kislinkaHigh : item.gorchinka > 3 ? kislinkaMedium : item.gorchinka > 0 ? kislinkaLow : null  } alt="" /></div>
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Носыщенность</p>
                          <div className="kislinka"><img src={item.nasyshennost > 7 ? kislinkaHigh : item.nasyshennost > 3 ? kislinkaMedium : item.nasyshennost > 0 ? kislinkaLow : null  } alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <h3>{item.price}</h3>
                      <button>В корзину</button>
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
          </div> 
        </div>
      </div>
      <div className="grey"></div>
    </>
  );
};

export default CoffeeItems; 