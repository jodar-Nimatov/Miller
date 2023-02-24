import React, { useEffect } from 'react'
import rating from '../../../../assets/Catalog/Coffee/Filters/rating.svg'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VendingItems = ({type}) => {
  const [cards, setCards] = useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:3333/Products-for-vending')
    .then(resp => {
      setCards(resp.data[type])
    })
  }, [type])
  return (
    <>
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4 className='cortirovka'>Сортировка</h4>
            <div className="coffee__cards-inner-row">
              {
                cards.map(item => (
                  <div key={item.id} className="coffee__cards-inner-row-card">
                  <div className="tea__cards-inner-row-card-top">
                    <div className="tea__cards-inner-row-card-top-right">
                      <div className="tea__cards-inner-row-card-center-right-rating">
                        <div className="rating" style={{backgroundImage: `url(${rating})`, height: '12px', width: `${(Math.floor(item.rating[0]) + item.rating[2])}px`, backgroundSize: '50px', backgroundRepeat: 'no-repeat', position: 'relative'}}></div>
                        <h4>{item.rating}</h4>
                      </div>
                      <select>
                        <option value="10kg">10кг</option>
                        <option value="15kg">15кг</option>
                        <option value="20kg">20кг</option>
                        <option value="30kg">30кг</option>
                      </select>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <Link to='' className='tea-img-block'>
                      <img src={item.image} className='card-image' height='177px' alt="" />
                    </Link>
                    {/* {item.category.map(cy => <p key={cy.length}>{cy === 'Скидки' ? <><div className="discount">%</div></> : null}</p>)} */}
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <Link to='' className="treedots">Больше</Link><>...</>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <button>Оставить заявку</button>
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

export default VendingItems