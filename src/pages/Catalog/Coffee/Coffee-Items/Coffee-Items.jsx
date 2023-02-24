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
import { Link } from 'react-router-dom';

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
                    <Link to="/cards" className="tea-img-block">
                      <img src={item.image} height='218px' className="card-image" alt="" />
                    </Link>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <small>{item.geography}</small>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <Link to='' className="treedots">Больше</Link><>...</>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <h3>{item.prise}</h3>
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