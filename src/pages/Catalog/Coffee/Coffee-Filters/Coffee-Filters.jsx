import React from 'react'
import CoffeeDot from '../../../../assets/Catalog/Coffee/Filters/coffeeDot.svg'
import images from './FilterImages';
import { Link } from 'react-router-dom';

const CoffeeFilters = () => {
  // Функция для того чтобы выбирать желтые круглишки.
  return (
      <div className="filters-back">
        <div className='filters'>
          <div className="container">
            <div className="filters__inner">
              <div className="filters__left">
                <ul className="filters-nav">
                  <li><Link className='filters-nav-first'to="/">Главная</Link></li>
                  <li><Link className='filters-nav-item' to="/">&#x2022;Каталог товаров</Link></li>
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
                  <div className="white-circle"></div>
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
            <div className="filters-functions-right">
              <div className="filters-functions-right-line"></div>
              <div className="filters-functions-right-bottom">
                <div className="filters-functions-right-column geography">
                  <h3>География</h3>
                    <div className="filters-functions-right-column-options">
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Африка</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Йемен</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Уганда</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Эфиопия</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Азия</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Центр. Америка</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Лат. Америка</p>
                      </div>
                    </div>
                </div>
                <div className="noDF">
                  <div className="filters-functions-right-column kislinka">
                    <h3>Кислинка</h3>
                    <div className="filters-functions-right-column-options">
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Низкая</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Средняя</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <div className="white-circle"></div>
                        <p>Высокая</p>
                      </div>
                    </div>
                  </div>
                  <div className="filters-functions-right-column processing-method">
                    <h3>Способ</h3>
                    <h3>обработки</h3>
                      <div className="filters-functions-right-column-options">
                        <div className="filters-functions-right-column-options-item">
                          <div className="white-circle"></div>
                          <p>Сухая</p>
                        </div>
                        <div className="filters-functions-right-column-options-item">
                          <div className="white-circle"></div>
                          <p>Мытая</p>
                        </div>
                        <div className="filters-functions-right-column-options-item">
                          <div className="white-circle"></div>
                          <p>Прочее</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="filters-functions-right-column special">
                  <h3>Особые</h3>
                  <div className="filters-functions-right-column-options">
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Популярное</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Популярное</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Новый урожай</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Ваш выбор</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Микролот</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Сорт недели</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Скидки</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Новинка</p>
                    </div>
                  </div>
                </div>
                <div className="filters-functions-right-column typeOfCoffee">
                  <h3>Вид кофе</h3>
                  <div className="filters-functions-right-column-options">
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Арабика</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Робуста</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Смесь арабик</p>
                    </div>
                    <div className="filters-functions-right-column-options-item">
                      <div className="white-circle"></div>
                      <p>Смесь арабика/робуста</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filters-bottom-blocks">
          {
            images.map(item => (
              <div key={item.id} className="filters-bottom-blocks-item">
                <div className="filters-bottom-blocks-item-inner">
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
  )
}

export default CoffeeFilters