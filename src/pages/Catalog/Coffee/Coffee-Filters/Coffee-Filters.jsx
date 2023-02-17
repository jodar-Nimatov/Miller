import React from 'react'
import CoffeeDot from '../../../../assets/coffeeDot.svg'

const CoffeeFilters = () => {
  // Функция для того чтобы выбирать желтые круглишки.
  return (
    <div className='wrapper'>
    <div className="filters-back">
      <div className='filters'>
        <div className="container">
          <div className="filters__inner">
            <div className="filters__left">
              <ul className="filters-nav">
                <li><a className='filters-nav-first'href="#">Главная</a></li>
                <li><a className='filters-nav-item' href="#">&#x2022;Каталог товаров</a></li>
                <li><a className='filters-nav-item' href="#">&#x2022;Свежеобжаренный кофе</a></li>
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
                  <div className="yellow-circle"></div>
                  <div className="imgagesOfCoffee">
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                  </div>
                </div>
                <div className="fiveCoffees">
                  <div className="white-circle"></div>
                  <div className="imgagesOfCoffee">
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                  </div>
                </div>
                <div className="fiveCoffees">
                  <div className="white-circle"></div>
                  <div className="imgagesOfCoffee">
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                  </div>
                </div>
                <div className="fiveCoffees">
                  <div className="white-circle"></div>
                  <div className="imgagesOfCoffee">
                    <img src={CoffeeDot} alt="" />
                    <img src={CoffeeDot} alt="" />
                  </div>
                </div>
                <div className="fiveCoffees">
                  <div className="white-circle"></div>
                  <div className="imgagesOfCoffee">
                    <img src={CoffeeDot} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="filters-function-right"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CoffeeFilters