import React from 'react'
import { Link } from 'react-router-dom';
import blackTea from '../../../../assets/Catalog/Tea/Filters/image 22.png'
import greenTea from '../../../../assets/Catalog/Tea/Filters/image 16.png'
import oolongMilk from '../../../../assets/Catalog/Tea/Filters/image 27.png'

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
          <div className="tea-filters-kettle"></div>
          <div className="tea-filters-blocks">
            <div className="tea-filters-blocks-top">
              <div className="tea-filters-blocks-item balck-tea">
                <img src={blackTea} width='101px' height='141px' alt="" />
                <p>Черный чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src={greenTea} width='101px' height='141px' alt="" />
                <p>Зеленый чай</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src={oolongMilk}width='101px' height='141px'   alt="" />
                <p>Молочный улунг</p>
              </div>
            </div>
            <div className="tea-filters-blocks-bottom">
              <div className="tea-filters-blocks-item balck-tea">
                <img src='https://avatars.mds.yandex.net/i?id=673e9d6068fbc684646655511a01047657ec01f1-6249527-images-thumbs&ref=rim&n=33&w=225&h=225'  height='141px' alt="" />
                <p>Травяной чай</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='https://kn95.ecoorganica.ru/wa-data/public/shop/products/98/60/36098/images/27768/27768.970.jpg'  height='141px' alt="" />
                <p>Матча</p>
              </div>
              <div className="tea-filters-blocks-item oolong-milk">
                <img src='https://othertea.ru/image/cache/catalog/products/tea/Chinatea/Puer/GunTinpuerkirpich_250_(fab.YUnfa,YUnnanYUnde),2018god-800x800.webp'  height='141px'   alt="" />
                <p>Пуэр</p>
              </div>
              <div className="tea-filters-blocks-item green-tea">
                <img src='https://avatars.mds.yandex.net/get-mpic/4575382/img_id4727551693313545040.jpeg/orig' alt="" height='141px'  />
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