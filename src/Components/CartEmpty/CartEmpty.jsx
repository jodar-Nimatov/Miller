import React from 'react'
import { Link, useNavigate} from "react-router-dom";
import Close from "../../pages/Cart/Check-photo/CloseCartEmpty.svg"

const CartEmpty = ({see, setSee}) => {

  const navigate = useNavigate

  const exitCart = (e) => {
    if (e.target.classList.contains('CartEmpty')) {
      setSee(false)
    }
  }

  return (
    <div onClick={exitCart} style={{display: see ? 'flex':'none'}} className='CartEmpty'>
        <div className='CartEmpty-inner'>
            <h2 className='CartEmpty-title'>Корзина пустая</h2>
             <button type='button' onClick={() => <Link to='/catalog/coffee'/>} className='CartEmpty-btn'>Посмотреть каталог</button>
             <span onClick={() => setSee(false)} className='CartEmpty-close'>
                <img src={Close} alt="" />
             </span>
        </div>
    </div>
  )
}

export default CartEmpty