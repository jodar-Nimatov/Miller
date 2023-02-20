import React from "react";
import Yandexmaps from "./YandexMaps";

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
                <button className="switcр-stores">Наши Магазины</button>
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
              <h4 className="store-t">Наши магазины г. Санкт-Петербург</h4>
              <p className="adres-c">Гороховая, 53 Московский, 53</p>

              <h5 className="t-t">Наши магазины Калининградская обл.</h5>
              <p className="adress-store">
                Советск, Гончарова 2а Черняховск, Пионерская 1 Ульяны-Громовой
                15 Советский проспект 6а Гурьевск, Каштановая 1г Черняховского
                15 Панина 2а Ленинский 8Б Аксакова 133 Липовая Аллея 2
              </p>
            </div>
          </div>
        </div>
      </div>
      <Yandexmaps/>
    </div>
  );
};

export default Contacts;
