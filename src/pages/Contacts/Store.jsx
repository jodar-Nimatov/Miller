import React from "react";
import { Link } from "react-router-dom";
import YandexMaps from "./YandexMap";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts-inner">
            <li className="home-cont">Главная</li>
            <li className="cont-blog">Контакты</li>
              <div className="switch-click">
                <Link to="/contacts">
                  <button className="switch-contact">Контакты</button>
                </Link>
                <button className="switcр-stores">
                  <Link to="/contacts" className="switch_contacts">
                    Наши Магазины
                  </Link>
                </button>
              </div>
          <div className="contacts-left.forDF">
            <div className="btn-switch-text">
              <h4 className="store-t">Наши магазины г. Санкт-Петербург</h4>
              <p className="adres-c">Гороховая, 53 Московский, 53</p>

              <h5 className="t-t">Наши магазины Калининградская обл.</h5>
              <p className="adress-store">
                Советск, Гончарова 2а Черняховск, Пионерская 1 Ульяны-Громовой
                15 Советский проспект 6а Гурьевск, Каштановая 1г Черняховского
                15 Панина 2а Ленинский 8Б Аксакова 133 Липовая Аллея 2
              </p>
            </div>
        <div className="maps">
          <YandexMaps />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
