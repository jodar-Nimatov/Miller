import React from 'react'
import { Link } from 'react-router-dom';
// import blackTea from '../../../../assets/Catalog/Tea/Filters/image 22.png'
// import greenTea from '../../../../assets/Catalog/Tea/Filters/image 16.png'
// import oolongMilk from '../../../../assets/Catalog/Tea/Filters/image 27.png'

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
              <h1 className='filters__title'>Продукция для вендинга</h1>
            </div>
          </div>
          <div className="tea-filters-machine"></div>
          <div className="tea-filters-blocks">
            <div className="tea-filters-blocks-top">
              <div className="tea-filters-blocks-item balck-tea">
                <img src='' width='101px' height='141px' alt="" />
                <p>Черный чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='' width='101px' height='141px' alt="" />
                <p>Зеленый чай</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src='' width='101px' height='141px'   alt="" />
                <p>Молочный улунг</p>
              </div>
            </div>
            <div className="tea-filters-blocks-bottom">
              <div className="tea-filters-blocks-item balck-tea">
                <img src=''  height='141px' alt="" />
                <p>Травяной чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src=''  height='141px' alt="" />
                <p>Матча</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src=''  height='141px'   alt="" />
                <p>Пуэр</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='' alt="" height='141px'  />
                <p>Кофейные напитки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default TeaFilters