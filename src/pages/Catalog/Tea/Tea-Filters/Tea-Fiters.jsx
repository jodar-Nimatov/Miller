import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import blackTea from "../../../../assets/Catalog/Tea/Filters/image 22.png";
import greenTea from "../../../../assets/Catalog/Tea/Filters/image 16.png";
import oolongMilk from "../../../../assets/Catalog/Tea/Filters/image 27.png";
import TeaItems from "../Tea-Items/Tea-Items";
import { useRef } from "react";
import { CustomContext } from "../../../../utils/Context";

const TeaFilters = () => {
  const {types, setTypes} = useContext(CustomContext)
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
                    <Link className="filters-nav-item" to="/catalog/tea">
                      &#x2022;Чай и кофейные напитки
                    </Link>
                  </li>
                </ul>
                <h1 className="filters__title">Чай и кофейные напитки</h1>
              </div>
            </div>
            <div className="tea-filters-kettle"></div>
            <div className="tea-filters-blocks">
              <div className="tea-filters-blocks-top">
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "one" });
                  }}
                  className="tea-filters-blocks-item f balck-tea"
                >
                  <img width="101px" src={blackTea} height="141px" alt="" />
                  <p>Черный чай</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "two" });
                  }}
                  className="tea-filters-blocks-item f green-tea"
                >
                  <img width="101px" src={greenTea} height="141px" alt="" />
                  <p>Зеленый чай</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "three" });
                  }}
                  className="tea-filters-blocks-item f oolong-milk"
                >
                  <img width="101px" src={oolongMilk} height="141px" alt="" />
                  <p>Молочный улунг</p>
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
                    src="https://avatars.mds.yandex.net/i?id=673e9d6068fbc684646655511a01047657ec01f1-6249527-images-thumbs&ref=rim&n=33&w=225&h=225"
                    height="141px"
                    alt=""
                  />
                  <p>Травяной чай</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "five" });
                  }}
                  className="tea-filters-blocks-item f green-tea"
                >
                  <img
                    src="https://kn95.ecoorganica.ru/wa-data/public/shop/products/98/60/36098/images/27768/27768.970.jpg"
                    height="141px"
                    alt=""
                  />
                  <p>Матча</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "six" });
                  }}
                  className="tea-filters-blocks-item f oolong-milk"
                >
                  <img
                    src="https://othertea.ru/image/cache/catalog/products/tea/Chinatea/Puer/GunTinpuerkirpich_250_(fab.YUnfa,YUnnanYUnde),2018god-800x800.webp"
                    height="141px"
                    alt=""
                  />
                  <p>Пуэр</p>
                </div>
                <div
                  onClick={() => {
                    handleSrcoll();
                    setTypes({ type: "seven" });
                  }}
                  className="tea-filters-blocks-item f green-tea"
                >
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/4575382/img_id4727551693313545040.jpeg/orig"
                    alt=""
                    height="141px"
                  />
                  <p>Кофейные напитки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref}></div>
      <TeaItems type={types.type} />
    </>
  );
};

export default TeaFilters;
