import React from "react";
import CoffeeFilters from "../Coffee-Filters/Coffee-Filters";

const CoffeeItems = () => {
  // Axios
  return (
    <>
      <CoffeeFilters/>
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4>Сортировка</h4>
            <div className="coffee__cards-inner-row">
              {
                <div className="coffee__cards-inner-row-card">
                  <div className="coffee__cards-inner-row-card-top">
                    <div className="coffee__cards-inner-row-card-top-left">

                    </div>
                    <div className="coffee__cards-inner-row-card-top-right">
                      <div className="accordion"></div>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <div className="coffee__cards-inner-row-card-center-left">
                      <img src="" alt="" />
                    </div>
                    <div className="coffee__cards-inner-row-card-center-right">
                      <div className="coffee__cards-inner-row-card-center-right-rating"></div>
                      <div className="coffee__cards-inner-row-card-center-right-roasting"></div>
                      <div className="coffee__cards-inner-row-card-center-right-filters">
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Кислинка</p>
                          <div className="white-circle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeItems; 