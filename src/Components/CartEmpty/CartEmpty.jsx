import React from 'react'
import Close from "../../pages/Cart/Check-photo/CloseCartEmpty.svg"

const CartEmpty = ({see, setSee}) => {
  return (
    <div style={{display: see ? 'flex':'none'}} className='CartEmpty'>
        <div className='CartEmpty-inner'>
            <h2 className='CartEmpty-title'>Корзина пустая</h2>
             <button className='CartEmpty-btn'>Посмотреть каталог</button>
             <span className='CartEmpty-close'>
                <img src={Close} alt="" />
             </span>
        </div>
    </div>
  )
}

export default CartEmpty