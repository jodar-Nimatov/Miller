import axios from 'axios';
import { useState } from 'react';
import CoffeeDot from '../../../assets/Catalog/Coffee/Filters/coffeeDot.svg'
import filcategory from '../../../assets/Catalog/Coffee/Cards/Group 76.svg'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const CARD_WIDTH = 280


const SliderItems = () => {

    const [cards, setCards] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(()=>{ 
      axios.get('http://localhost:3333/catalog')
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
                cards.map(item => {
                    if(item.category.includes('Скидки')){
                    return (
                    <div key={item.id} className="coffee__cards-inner-row-card slider-card">
                      <div className="coffee__cards-inner-row-card-top">
                        <div className="coffee__cards-inner-row-card-top-left">
                          {item.category.map(cy => <p key={cy.length}>{cy == 'Скидки' ? <><span className="discount">%</span>{cy}</> : cy}</p>)}
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
                            <div className="rating" style={{ width: '94px'}}>
                              <div className="div" style={{background: '#F9B300', height: '10px', width: `${item.rating[0] + 7}px`}}></div>
                            </div>
                            <h4>{item.rating}</h4>
                            <small className="coffee__cards-inner-row-card-center-right-rating-review">({item.review} отзыва)</small>
                          </div>
                          <div className="coffee__cards-inner-row-card-center-right-roasting">
                            <div className="imagesOfCoffee">
                              <img src={CoffeeDot} alt="" />
                              <img src={CoffeeDot} alt="" />
                              <img src={CoffeeDot} alt="" />
                              <img src={CoffeeDot} alt="" />
                              <img src={CoffeeDot} alt="" />
                            </div>
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
                        <h4>{item.title}</h4>
                        <p>{item.subitle}</p>
                        <div className="coffee__cards-inner-row-card-bottom-bottom">
                          <h3>{item.price}</h3>
                          <Link to='/catalog/coffee'><button>В корзину</button></Link>
                        </div>
                      </div>
                    </div>
                    )
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