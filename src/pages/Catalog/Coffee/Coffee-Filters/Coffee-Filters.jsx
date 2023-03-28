import React, { useState } from "react";
import images from "./FilterImages";
import roast5 from "../../../../assets/Catalog/Coffee/Filters/roast5.svg";
import roast4 from "../../../../assets/Catalog/Coffee/Filters/roast4.svg";
import roast3 from "../../../../assets/Catalog/Coffee/Filters/roast3.svg";
import roast2 from "../../../../assets/Catalog/Coffee/Filters/roast2.svg";
import roast1 from "../../../../assets/Catalog/Coffee/Filters/roast1.svg";
import searchicon from "../../../../assets/Header/search.svg";
import { Link } from "react-router-dom";
import CoffeeItems from "./../Coffee-Items/Coffee-Items";
import { useContext } from "react";
import { CustomContext } from './../../../../utils/Context';

const CoffeeFilters = () => {
  const [filters, setFilters] = useState({
    roastlevel: [],
    coffeefrom: [],
    kislinka: [],
    pmethod: [],
    special: [],
    coffeetype: [],
    cmethod: [],
    coffeelevel: [],
  });
  const {key, setKey} = useContext(CustomContext) 
  const [tum, setTum] = useState(false);
  const oBack = tum ? "#f9b300" : "#e4e4e4";
  const filterFun = (e, filt) => {
    let et =
      e.target.localName == "img"
        ? e.target.previousElementSibling.previousElementSibling
        : e.target;
    let index = filters[filt].indexOf(et.nextSibling.innerText);
    setTum(!tum);
    if (
      et.style.background == "rgb(249, 179, 0)" &&
      filters[filt].includes(et.nextSibling.innerText) == true
    ) {
      filters[filt].splice(index, 1);
    }
    if (
      filters[filt].includes(et.nextSibling.innerText) === false &&
      et.style.background == "rgb(228, 228, 228)"
    ) {
      filters[filt] = [...filters[filt], et.nextSibling.innerText];
    }
    et.style.background = oBack;
  };
  const handleGeography = (e) => {
    filterFun(e, "coffeefrom");
  };
  const handleKislinka = (e) => {
    filterFun(e, "kislinka");
  };
  const handlePmethod = (e) => {
    filterFun(e, "pmethod");
  };
  const handleSpecial = (e) => {
    filterFun(e, "special");
  };
  const handleCoftype = (e) => {
    filterFun(e, "coffeetype");
  };
  const handleCoffeelevel = (e) => {
    filterFun(e, "coffeelevel");
  };
  const handleCmethod = (e) => {
    filterFun(e, "cmethod");
  };
  return (
    <>
      <div className="filters-back cun">
        <div className="filters">
          <div className="container">
            <div className="filters__inner">
              <div className="filters__left">
                <ul className="filters-nav">
                  <li>
                    <Link className="filters-nav-first" to="/">
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link className="filters-nav-item" to="/">
                      &#x2022;Каталог товаров
                    </Link>
                  </li>
                  <li>
                    <Link className="filters-nav-item" to="/catalog/coffee">
                      &#x2022;Свежеобжаренный кофе
                    </Link>
                  </li>
                </ul>
                <h1 className="filters__title">Свежеобжаренный кофе</h1>
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
                    <span
                      onClick={(e) => handleCoffeelevel(e)}
                      className="white-circle"
                    ></span>
                    <div className="divdn">5</div>
                    <img src={roast5} alt="" />
                  </div>
                  <div className="fiveCoffees">
                    <span
                      onClick={(e) => handleCoffeelevel(e)}
                      className="white-circle"
                    ></span>
                    <div className="divdn">4</div>
                    <img src={roast4} alt="" />
                  </div>
                  <div className="fiveCoffees">
                    <span
                      onClick={(e) => handleCoffeelevel(e)}
                      className="white-circle"
                    ></span>
                    <div className="divdn">3</div>
                    <img src={roast3} alt="" />
                  </div>
                  <div className="fiveCoffees">
                    <span
                      onClick={(e) => handleCoffeelevel(e)}
                      className="white-circle"
                    ></span>
                    <div className="divdn">2</div>
                    <img src={roast2} alt="" />
                  </div>
                  <div className="fiveCoffees">
                    <span
                      onClick={(e) => handleCoffeelevel(e)}
                      className="white-circle"
                    ></span>
                    <div className="divdn">1</div>
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
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Африка</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Йемен</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Уганда</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Эфиопия</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Азия</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Центр. Америка</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleGeography(e)}
                          className="white-circle"
                        ></span>
                        <p>Лат. Америка</p>
                      </div>
                    </div>
                  </div>
                  <div className="noDF">
                    <div className="filters-functions-right-column kislinka">
                      <h3>Кислинка</h3>
                      <div className="filters-functions-right-column-options">
                        <div className="filters-functions-right-column-options-item">
                          <span
                            onClick={(e) => handleKislinka(e)}
                            className="white-circle"
                          ></span>
                          <p>Низкая</p>
                        </div>
                        <div className="filters-functions-right-column-options-item">
                          <span
                            onClick={(e) => handleKislinka(e)}
                            className="white-circle"
                          ></span>
                          <p>Средняя</p>
                        </div>
                        <div className="filters-functions-right-column-options-item">
                          <span
                            onClick={(e) => handleKislinka(e)}
                            className="white-circle"
                          ></span>
                          <p>Высокая</p>
                        </div>
                      </div>
                    </div>
                    <div className="filters-functions-right-column processing-method">
                      <h3>Способ</h3>
                      <h3>обработки</h3>
                      <div className="filters-functions-right-column-options">
                        <div className="filters-functions-right-column-options-item">
                          <span
                            onClick={(e) => handlePmethod(e)}
                            className="white-circle"
                          ></span>
                          <p>Сухая</p>
                        </div>
                        <div className="filters-functions-right-column-options-item">
                          <span
                            onClick={(e) => handlePmethod(e)}
                            className="white-circle"
                          ></span>
                          <p>Мытая</p>
                        </div>
                        <div className="filters-functions-right-column-options-item">
                          <span
                            onClick={(e) => handlePmethod(e)}
                            className="white-circle"
                          ></span>
                          <p>Прочие</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filters-functions-right-column special">
                    <h3>Особые</h3>
                    <div className="filters-functions-right-column-options">
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Популярное</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Новый урожай</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Ваш выбор</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Микролот</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Сорт недели</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Скидки</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleSpecial(e)}
                          className="white-circle"
                        ></span>
                        <p>Новинка</p>
                      </div>
                    </div>
                  </div>
                  <div className="filters-functions-right-column typeOfCoffee">
                    <h3>Вид кофе</h3>
                    <div className="filters-functions-right-column-options">
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleCoftype(e)}
                          className="white-circle"
                        ></span>
                        <p>Арабика</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleCoftype(e)}
                          className="white-circle"
                        ></span>
                        <p>Робуста</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleCoftype(e)}
                          className="white-circle"
                        ></span>
                        <p>Смесь арабик</p>
                      </div>
                      <div className="filters-functions-right-column-options-item">
                        <span
                          onClick={(e) => handleCoftype(e)}
                          className="white-circle"
                        ></span>
                        <p>Смесь арабика/робуста</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="useFilter-btns">
                  <button
                    className="useFilters-btns-btn two"
                    onClick={() => setKey(key + 1)}
                  >
                    Искать <img src={searchicon} height="13px" alt="" />
                  </button>
                  <button
                    className="useFilters-btns-btn one"
                    onClick={() => window.location.reload()}
                  >
                    Очистить филтры
                  </button>
                </div>
              </div>
            </div>
            <div className="filters-bottom-blocks">
              {images.map((item) => (
                <div key={item.id} className="filters-bottom-blocks-item">
                  <div className="filters-bottom-blocks-item-inner">
                    <div className="divdn b"></div>
                    <p>{item.text}</p>
                    <img
                      onClick={(e) => handleCmethod(e)}
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CoffeeItems filters={filters} key={key} />
    </>
  );
};

export default CoffeeFilters;
