import React from "react";
import { Link } from "react-router-dom";
import YandexMaps from "./YandexMap";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts-inner">
          <div className="contacts-left">
            <li className="home-cont">Главная</li>
            <li className="cont-blog">Контакты</li>

            <div className="btn-switch-text">
              <div className="switch-click">
                <button className="switch-contact">Контакты</button>
                <button className="switcр-stores">
                  <Link to="/store" className="switch_contacts">
                    Наши Магазины
                  </Link>
                </button>
              </div>
              <h1 className="header-text">Связаться с нами:</h1>
              <p className="number-contact">+7 (401) 237 53 43</p>
              <ul className="link">Import@kldrefine.com</ul>
              <br />
              <h2 className="header-texts">Юридический адрес:</h2>
              <p className="info">
                Российская, Федерация, 238310, Калининградская область,
                Гурьевский район, поселок Васильково, улица Шатурская, дом 4А
              </p>
              <br />
              <h3 className="texts-cont">Адрес склада:</h3>
              <p className="new-t">
                Московская область, Балашиха, Западная промзона, Шоссе
                энтузиастов 1
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="map">
          <YandexMaps />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
