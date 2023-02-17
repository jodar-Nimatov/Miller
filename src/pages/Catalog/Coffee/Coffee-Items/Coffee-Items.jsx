import React from 'react'
import CoffeeFilters from '../Coffee-Filters/Coffee-Filters'

const CoffeeItems = () => {
  // Axios
  return (
    <>
      <CoffeeFilters/>
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4>Сортировка</h4>
            <div className="row">
              {
                // Card block
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoffeeItems