import React from 'react'
import back from '../../../assets/filters-back.svg'

const Filters = () => {
  return (
    <>
    <div className='filters'>
        <div className="container">
            <div className="filters__inner">
                Filters
            </div>
        </div>
    </div>
    <div style={{backgroundImage: `url(${back})`}} className="filters__bottom">
        
    </div>
    </>
  )
}

export default Filters