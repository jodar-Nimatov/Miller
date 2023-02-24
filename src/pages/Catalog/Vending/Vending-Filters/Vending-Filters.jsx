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
                <li><Link className='filters-nav-item' to="/catalog/tea">&#x2022;Продукция для вендинга</Link></li>
              </ul>
              <h1 className='filters__title'>Продукция для вендинга</h1>
              {/* Короче поставлю медиа запрос. */}
            </div>
          </div>
          <div className="tea-filters-machine"></div>
          <div className="tea-filters-blocks">
            <div className="tea-filters-blocks-top">
              <div className="tea-filters-blocks-item balck-tea">
                <img src='https://avatars.mds.yandex.net/get-mpic/5313128/img_id1561179389513617548.jpeg/orig' width='101px' height='141px' alt="" />
                <p>Гранулированный кофе</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='https://avatars.mds.yandex.net/get-mpic/4441046/img_id4057321941938745998.jpeg/orig' width='101px' height='141px' alt="" />
                <p>Гранулированный цикорий</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src='https://avatars.mds.yandex.net/get-mpic/7650323/img_id2644147707912347235.png/orig' width='101px' height='141px'   alt="" />
                <p>Зерновой кофе</p>
              </div>
            </div>
            <div className="tea-filters-blocks-bottom">
              <div className="tea-filters-blocks-item balck-tea">
                <img src='https://avatars.mds.yandex.net/get-mpic/4888456/img_id2569588223286459338.jpeg/orig'  height='141px' alt="" />
                <p>Гранулированный какао</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='https://avatars.mds.yandex.net/get-mpic/5236177/img_id8468542783010526713.jpeg/orig'  height='141px' alt="" />
                <p>Гранулированные кофейные напитки</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src='https://avatars.mds.yandex.net/get-mpic/4012462/img_id7256194758433004023.jpeg/orig'  height='141px'   alt="" />
                <p>Кофе порошкообразный</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='https://avatars.mds.yandex.net/get-mpic/4887676/img_id4967117453283869030.jpeg/orig' alt="" height='141px'  />
                <p>Сухое молоко гранулированное</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default TeaFilters