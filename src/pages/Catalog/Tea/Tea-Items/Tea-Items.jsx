import React from 'react'
import TeaFilters from './../Tea-Filters/Tea-Fiters';

const TeaItems = () => {
  return (
    <> 
      <TeaFilters />
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4>Сортировка</h4>
            <div className="coffee__cards-inner-row">
              {
                // cards.map(item => (
                  <div className="coffee__cards-inner-row-card">
                  <div className="coffee__cards-inner-row-card-top">
                    <div className="coffee__cards-inner-row-card-top-left">
                      {/* {item.category.map(cy => <p key={cy.length}>{cy == 'Скидки' ? <><div className="discount">%</div>{cy}</> : cy}</p>)} */}
                    </div>
                    <div className="coffee__cards-inner-row-card-top-right">
                      <select>
                        <option value="250g">250г</option>
                        <option value="500g">500г</option>
                        <option value="1000g">1000г</option>
                      </select>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <div className="coffee__cards-inner-row-card-center-left">
                      {/* <img src={item.image} width='120px' alt="" /> */}
                    </div>
                    <div className="coffee__cards-inner-row-card-center-right">
                      <div className="coffee__cards-inner-row-card-center-right-rating">
                        {/* В будушем сделаю 1 блок с 5-ю классами и распределю в db.json чтобы была логика. иииуу абу! */}
                        <h5>{}</h5>
                        {/* <img src={raiting} alt="" /> */}
                      </div>
                      <div className="coffee__cards-inner-row-card-center-right-roasting">
                        {/* В будушем сделаю 1 блок с 5-ю классами и распределю в db.json чтобы была логика. иииуу абу! */}
                      </div>
                      <div className="coffee__cards-inner-row-card-center-right-filters">
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Кислинка</p>
                          {/* <div className="kislinka"><img src={filcategory} alt="" /></div> */}
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Горчинка</p>
                          {/* <div className="kislinka"><img src={filcategory} alt="" /></div> */}
                        </div>
                        <div className="coffee__cards-inner-row-card-center-right-filters-item">
                          <p>Носыщенность</p>
                          {/* <div className="kislinka"><img src={filcategory} alt="" /></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{}</h4>
                    <p>{}</p>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <h3>{}</h3>
                      <button>В корзину</button>
                    </div>
                  </div>
                </div>
                // ))
              }
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default TeaItems