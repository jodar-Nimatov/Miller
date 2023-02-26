import React, { useEffect } from "react";
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
import { Link } from 'react-router-dom';
import axios from "axios";

const CoffeeItems = () => {
  const [cards, setCards] = useState([])
  const [modal, setModal] = useState('showC')
  const [sorting, setSorting] = useState('Сортировка')
  useEffect(()=>{ 
    axios
    .get('http://localhost:3333/catalog?' + `${sorting == 'По убыванию цены' ? '_sort=price&_order=desc' : sorting == 'По возрастанию цены' ? '_sort=price&_order=asc' : sorting == 'По рейтингу' ? '_sort=rating&_order=desc' : sorting == 'По кислотности' ? '_sort=kislinka&_order=desc' : ''}`)
    .then(resp => {
      setCards(resp.data)
  })
  }, [sorting])
  const closeSorting = () => {
    document.body.children[1].childNodes[4].addEventListener('click', showSorting)
    setModal('closeC')
  }
  const showSorting = () => {
    setModal('showC')
  }
  return (
      <>
       <div className="coffee__cards">
         <div className="container">
           <div className="coffee__cards-inner">
             <h4 className={`cortirovka siuu ${modal}`}>Тебе с пенкой?</h4>
             <h4 className={`cortirovka ${modal}`} onClick={closeSorting}>{sorting}</h4>
              <div className={`c-sorting-modal-window ${modal}`}>
                <ul>
                  <div className="sorting-title">{sorting} <l>  &times;</l></div>
                  <li className="sorting-item" onClick={(e)=>setSorting(e.target.innerHTML)}>По возрастанию цены</li>
                  <li className="sorting-item" onClick={(e)=>setSorting(e.target.innerHTML)}>По убыванию цены</li>
                  <li className="sorting-item" onClick={(e)=>setSorting(e.target.innerHTML)}>По рейтингу</li>
                  <li className="sorting-item" onClick={(e)=>setSorting(e.target.innerHTML)}>По кислотности</li>
                </ul>
              </div>
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
                         <option value="250g">250 г.</option>
                         <option value="500g">500 г.</option>
                         <option value="1000g">1000 г.</option>
                       </select>
                     </div>
                   </div>
                   <div className="coffee__cards-inner-row-card-center">
                     <div className="coffee__cards-inner-row-card-center-left">
                       <Link to="/cards" className="tea-img-block">
                         <img src={item.image} height='218px' className="card-image" alt="" />
                       </Link>
                     </div>
                     <div className="coffee__cards-inner-row-card-center-right">
                       <div className="coffee__cards-inner-row-card-center-right-rating">
                         <div className="rating" style={{backgroundImage: `url(${rating})`, height: '12px', width: `${(Math.floor(item.rating[0]) + item.rating[2])}px`, backgroundSize: '50px', backgroundRepeat: 'no-repeat', position: 'relative'}}></div>
                         <h4>{item.rating}</h4>
                         <small className="coffee__cards-inner-row-card-center-right-rating-review">({item.review} отзыва)</small>
                       </div>
                       <div className="coffee__cards-inner-row-card-center-right-roasting">
                         {
                           item.roast == 5 ? <img height='13px' src={roast5} alt=""/> : item.roast == 4 ? <img height='13px' src={roast4} alt=''/> : item.roast == 3 ? <img height='13px' src={roast3} alt=''/> : item.roast == 2 ? <img height='13px' src={roast2} alt=''/> : item.roast == 1 ? <img height='13px' src={roast1} alt=''/> : null
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
                     <small>{item.geography}</small>
                     <h4>{item.title}</h4>
                     <p>{item.subtitle}</p>
                     <Link to='/cards' className="treedots">Больше</Link><>...</>
                     <div className="coffee__cards-inner-row-card-bottom-bottom">
                      {
                        item.category.includes('Скидки') ? <was className='old-price'>{Math.floor(item.price + (item.price / 100 * 30))} ₽</was> : <></> 
                      }
                       <h3>{item.price} ₽</h3>
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