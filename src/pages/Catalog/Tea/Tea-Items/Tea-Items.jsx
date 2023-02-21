import React, { useEffect } from 'react'
import TeaFilters from './../Tea-Filters/Tea-Fiters';
import filcategory from '../../../../assets/Catalog/Coffee/Cards/Group 76.svg'
import raiting from '../../../../assets/Catalog/Coffee/Cards/Group 78.svg'
import { useState } from 'react';
import axios from 'axios';

const TeaItems = () => {
  const [cards, setCards] = useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:3333/coffe-drinks')
    // .then(resp => resp.json())
    .then(resp => {
      setCards(resp.data[0])
      // console.log(cards)
    })
  }, [])  
  return (
    <> 
      <TeaFilters />
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4>Сортировка</h4>
            <div className="coffee__cards-inner-row">
              {
                cards.map(item => (
                  <div className="coffee__cards-inner-row-card">
                  <div className="coffee__cards-inner-row-card-top">
                    <div className="coffee__cards-inner-row-card-top-right">
                      <div className="coffee__cards-inner-row-card-center-right-rating">
                        {/* В будушем сделаю 1 блок с 5-ю классами и распределю в db.json чтобы была логика. иииуу абу! */}
                        <h5>{item.rating}</h5>
                        <img src={raiting} alt="" />
                      </div>
                      <select>
                        <option value="250g">250г</option>
                        <option value="500g">500г</option>
                        <option value="1000g">1000г</option>
                      </select>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <div className="coffee__cards-inner-row-card-center-left">
                      <img src={item.image} width='120px' alt="" />
                    </div>
                    <div className="coffee__cards-inner-row-card-center-right">
                      <div className="coffee__cards-inner-row-card-center-right-roasting">
                        {/* В будушем сделаю 1 блок с 5-ю классами и распределю в db.json чтобы была логика. иииуу абу! */}
                      </div>
                      <div className="coffee__cards-inner-row-card-center-right-filters">
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Кислинка</p>
                          <div className="kislinka"><img src={filcategory} alt="" /></div>
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Горчинка</p>
                          <div className="kislinka"><img src={filcategory} alt="" /></div>
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Носыщенность</p>
                          <div className="kislinka"><img src={filcategory} alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{}</h4>
                    <p>{}</p>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <h3>{}</h3>
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
    </>
  );
}

export default TeaItems