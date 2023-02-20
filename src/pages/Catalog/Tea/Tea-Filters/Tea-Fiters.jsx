import React from 'react'
import { Link } from 'react-router-dom';

const TeaFilters = () => {
  return (
    <div className="filters-back">
      <div className='filters'>
        <div className="container">
          <div className="tea-filters__inner">
            <div className="filters__left">
              <ul className="filters-nav">
                <li><Link className='filters-nav-first'to="/">Главная</Link></li>
                <li><Link className='filters-nav-item' to="/">&#x2022;Каталог товаров</Link></li>
                <li><Link className='filters-nav-item' to="/catalog/tea">&#x2022;Чай и кофейные напитки</Link></li>
              </ul>
              <h1 className='filters__title'>Чай и кофейные напитки</h1>
            </div>
          </div>
          <div className="tea-filters-right-kettle"></div>
          <div className="tea-filters-blocks">
            <div className="tea-filters-blocks-top">
              <div className="tea-filters-blocks-item balck-tea">
                <img src="" alt="" />
                <p>Травяной-чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src="" alt="" />
                <p>Травяной-чай</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src="" alt="" />
                <p>Травяной-чай</p>               
              </div>
            </div>
            <div className="tea-filters-blocks-bottom">
              <div className="tea-filters-blocks-item dirn-tea">
                <img src="" alt="" />
                <p>Травяной-чай</p>
              </div>
              <div className="tea-filters-blocks-item jsdfk-tea">
                <img src="" alt="" />
                <p>Травяной-чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
              <img src="" alt="" />
                  <p>Травяной-чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src="" alt="" />
                <p>Травяной-чай</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default TeaFilters