import React, {useState} from 'react'
import images from './FilterImages';
import roast5 from '../../../../assets/Catalog/Coffee/Filters/roast5.svg'
import roast4 from '../../../../assets/Catalog/Coffee/Filters/roast4.svg'
import roast3 from '../../../../assets/Catalog/Coffee/Filters/roast3.svg'
import roast2 from '../../../../assets/Catalog/Coffee/Filters/roast2.svg'
import roast1 from '../../../../assets/Catalog/Coffee/Filters/roast1.svg'
import searchicon from "../../../../assets/Header/search.svg";
import { Link } from 'react-router-dom';
import CoffeeItems from './../Coffee-Items/Coffee-Items';

const CoffeeFilters = () => {
  const [filters, setFilters] = useState({roastlevel: [], coffeefrom: [], kislinka: [], pmethod: [], special: [], coffeetype: [], cmethod: []})
  const [key, setKey] = useState(0)
  const [tum, setTum] = useState(false)
  const oBack = tum ? '#f9b300' : '#e4e4e4'
  let eventInner;
  const filterFun = (e, filt)=>{
    setTum(!tum)
    if(e.target.classList[0] == 'white-circle'){
      eventInner = e.target
    }else if(e.target.localName == 'p'){
      eventInner = e.target.previousElementSibling
    }
    if(eventInner.style.background == 'rgb(249, 179, 0)'){
      //The micro-error is here ! (easy to fix)
      filters[filt].filter(item => item == item.id)
    }
    if(filters[filt].includes(eventInner.nextSibling.innerText) === false && eventInner.style.background == 'rgb(228, 228, 228)'){
      filters[filt] = [...filters[filt], eventInner.nextSibling.innerText]
    }
    console.log(filters[filt])
    eventInner.style.background = oBack
  }
  const handleGeography = (e) => {
    filterFun(e, 'coffeefrom')
  }
  const handleKislinka = (e) => {
    filterFun(e, 'kislinka')
  }
  const handlePmethod = (e) => {
    filterFun(e, 'pmethod')
  }
  const handleSpecial = (e) => {
    filterFun(e, 'special')
  }
  const handleCoftype = (e) => {
    filterFun(e, 'coffeetype')
  }
  const handleCmethod = (e) => {
    // Здесь нужно написать отдельную функцию для метода приготовления.
  }
  return (
    <> 
      <div className="filters-back">
        <div className='filters'>
          <div className="container">
            <div className="filters__inner"> 
              <div className="filters__left">
                <ul className="filters-nav">
                  <li><Link className='filters-nav-first'to="/">Главная</Link></li>
                  <li><Link className='filters-nav-item' to="/">&#x2022;Каталог товаров</Link></li>
                  <li><Link className='filters-nav-item' to="/catalog/coffee">&#x2022;Свежеобжаренный кофе</Link></li>
                </ul>
                <h1 className='filters__title'>Свежеобжаренный кофе</h1>
              </div>
              <div className="filters-cup"></div>
              <div className="filters-coffee"></div>
            </div>
          <div className="filters-functions">
            <div className="filters-function-left">
              <div className="filters-function-left-line"></div>
              <div className="filters-function-left-sec">
                <h3>Степень обжарки</h3>
                <div className="fiveCoffees">
                  <span className="white-circle"></span>
                  <img src={roast5} alt="" />
                </div>
                <div className="fiveCoffees">
                  <span className="white-circle"></span>
                  <img src={roast4} alt="" />
                </div>
                <div className="fiveCoffees">
                  <span className="white-circle"></span>
                  <img src={roast3} alt="" />
                </div>
                <div className="fiveCoffees">
                  <span className="white-circle"></span>
                  <img src={roast2} alt="" />
                </div>
                <div className="fiveCoffees">
                  <span className="white-circle"></span>
                  <img src={roast1} alt="" />
                </div>
              </div>
            </div>
            <div className="filters-functions-right">
              <div className="filters-functions-right-line"></div>
              <div className="filters-functions-right-bottom">
                <div className="filters-functions-right-column geography">
                  <h3>География</h3>
                    <div className="filters-functions-right-column-options">
                      <div onClick={(e)=>{
                        handleGeography(e)
                        }} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Африка</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div onClick={(e)=>handleGeography(e)} className="white-circle"></div>
                        <p>Йемен</p>
                      </div>
                      <div onClick={(e)=>handleGeography(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Уганда</p>
                      </div>
                      <div onClick={(e)=>handleGeography(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Эфиопия</p>
                      </div>
                      <div onClick={(e)=>handleGeography(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Азия</p>
                      </div>
                      <div onClick={(e)=>handleGeography(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Центр. Америка</p>
                      </div>
                      <div onClick={(e)=>handleGeography(e)}  className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Лат. Америка</p>
                      </div>
                    </div>
                </div>
                <div className="noDF">
                  <div className="filters-functions-right-column kislinka">
                    <h3>Кислинка</h3>
                    <div className="filters-functions-right-column-options">
                      <div onClick={(e)=>handleKislinka(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Низкая</p>
                      </div>
                      <div onClick={(e)=>handleKislinka(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Средняя</p>
                      </div>
                      <div onClick={(e)=>handleKislinka(e)} className="filters-functions-right-column-options-item">
                        <span className="white-circle"></span>
                        <p>Высокая</p>
                      </div> 
                    </div>
                  </div>
                  <div className="filters-functions-right-column processing-method">
                    <h3>Способ</h3>
                    <h3>обработки</h3>
                      <div className="filters-functions-right-column-options">
                        <div onClick={(e)=>handlePmethod(e)} className="filters-functions-right-column-options-item">
                          <span className="white-circle"></span>
                          <p>Сухая</p>
                        </div>
                        <div onClick={(e)=>handlePmethod(e)} className="filters-functions-right-column-options-item">
                          <span className="white-circle"></span>
                          <p>Мытая</p>
                        </div>
                        <div onClick={(e)=>handlePmethod(e)} className="filters-functions-right-column-options-item">
                          <span className="white-circle"></span>
                          <p>Прочие</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="filters-functions-right-column special">
                  <h3>Особые</h3>
                  <div className="filters-functions-right-column-options">
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Популярное</p>
                    </div>
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Новый урожай</p>
                    </div>
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Ваш выбор</p>
                    </div>
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Микролот</p>
                    </div>
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Сорт недели</p>
                    </div>
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Скидки</p>
                    </div>
                    <div onClick={(e)=>handleSpecial(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Новинка</p>
                    </div>
                  </div>
                </div>
                <div className="filters-functions-right-column typeOfCoffee">
                  <h3>Вид кофе</h3>
                  <div className="filters-functions-right-column-options">
                    <div onClick={(e)=>handleCoftype(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Арабика</p>
                    </div>
                    <div onClick={(e)=>handleCoftype(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Робуста</p>
                    </div>
                    <div onClick={(e)=>handleCoftype(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Смесь арабик</p>
                    </div>
                    <div onClick={(e)=>handleCoftype(e)} className="filters-functions-right-column-options-item">
                      <span className="white-circle"></span>
                      <p>Смесь арабика/робуста</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="useFilter-btns">
                <button className='useFilters-btn' onClick={()=>window.location.reload()}>Очистить филтры</button>
                <button className='useFilters-btn' onClick={()=>setKey(key + 1)}>Искать <img src={searchicon} height='10px' alt="" /></button>
              </div>
            </div>
          </div>
          <div className="filters-bottom-blocks">
          {
            images.map(item => (
              <div key={item.id} className="filters-bottom-blocks-item">
                <div onClick={(e)=>handleCmethod(e)} className="filters-bottom-blocks-item-inner">
                  <p>{item.text}</p>
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
    <CoffeeItems filters={filters} key={key}/>
    </>
  )
}

export default CoffeeFilters