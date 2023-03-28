import React, { useState } from "react";
import { Link } from "react-router-dom";
import VendingItems from "../Vending-Items/Vending-Items";
import { useRef } from "react";

const VendingFilters = () => {
  const [types, setTypes] = useState({ type: "one" });
  const ref = useRef(null);

  const handleSrcoll = () => {
    ref.current?.scrollIntoView({ behavor: "smooth" });
  };
  return (
    <>
      <div className="filters-back cun">
        <div className="filters">
          <div className="container">
            <div className="tea-filters__inner">
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
                    <Link className="filters-nav-item" to="/catalog/wanding">
                      &#x2022;Продукция для вендинга
                    </Link>
                  </li>
                </ul>
                <h1 className="filters__title vending">
                  Продукция для вендинга
                </h1>
              </div>
            </div>
            <div className="tea-filters-machine"></div>
            <div className="tea-filters-blocks">
              <div className="tea-filters-blocks-top">
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "one" });
                  }}
                  className="tea-filters-blocks-item f balck-tea"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/5313128/img_id1561179389513617548.jpeg/orig"
                    width="101px"
                    height="141px"
                    alt=""
                  />
                  <p>Гранулированный кофе</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "two" });
                  }}
                  className="tea-filters-blocks-item f green-tea"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/4441046/img_id4057321941938745998.jpeg/orig"
                    width="101px"
                    height="141px"
                    alt=""
                  />
                  <p>Гранулированный цикорий</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "three" });
                  }}
                  className="tea-filters-blocks-item f oolong-milk"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/7650323/img_id2644147707912347235.png/orig"
                    width="101px"
                    height="141px"
                    alt=""
                  />
                  <p>Зерновой кофе</p>
                </div>
              </div>
              <div className="tea-filters-blocks-bottom">
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "four" });
                  }}
                  className="tea-filters-blocks-item f balck-tea"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/4888456/img_id2569588223286459338.jpeg/orig"
                    height="141px"
                    alt=""
                  />
                  <p>Гранулированный какао</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "five" });
                  }}
                  className="tea-filters-blocks-item f green-tea"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/5236177/img_id8468542783010526713.jpeg/orig"
                    height="141px"
                    alt=""
                  />
                  <p>Гранулированные кофейные напитки</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "six" });
                  }}
                  className="tea-filters-blocks-item f oolong-milk"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/4012462/img_id7256194758433004023.jpeg/orig"
                    height="141px"
                    alt=""
                  />
                  <p>Кофе порошкообразный</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "seven" });
                  }}
                  className="tea-filters-blocks-item f green-tea"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/4887676/img_id4967117453283869030.jpeg/orig"
                    alt=""
                    height="141px"
                  />
                  <p>Сухое молоко гранулированное</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref}></div>
      <VendingItems type={types.type} />
    </>
  );
};

export default VendingFilters;
