import React from "react";
import { Link } from "react-router-dom";
import cars_logo from "../../assets/cards/image 5.svg";
const Cards = () => {
  return (
    <div className="wrapper">
      <div className="cards-back">
        <div className="cards">
          <div className="container">
            <div className="cards_inner" style={{ height: "700px" }}>
              <ul className="ul_cards">
                <li>Главная</li>
                <li>Каталог товаров</li>
              </ul>
              <div className="block_cards">
                <img className="cards_logo" src={cars_logo} alt="" />
                <div className="text-t">
                  <h1 className="text_h1">Colombia Supremo</h1>
                </div>
                <p className="text_p">Мытая, натуральная, смесь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
