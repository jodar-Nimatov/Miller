import React, {useState} from 'react';
import millerLogo from '../../assets/image 25.png'
import coffeImg from '../../assets/footerImg.png'
import coffeBackImg from '../../assets/footerImgB.png'

const Footer = () => {

  const [email, setEmail] = useState('')

  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-inner">
          <div className="footer-left-content">
          <h2>Подписка на новости и рассылку</h2>
          <p>
            Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.
          </p>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='footer-input'
           type="email" 
           placeholder='Ваш Email'
           />
           <button>
            Подписаться 
           </button>
           <br />
           <span>Нажимая на кнопку “Подписаться”, вы принимаете правила <i style={{color: 'yellow'}}>пользовательского соглашения</i></span>
           </div>
           <div className="footer-right-img">
            <img className='footer-coffe-img1' src={coffeImg} alt="" />
            <img className='footer-coffe-img2' src={coffeBackImg} alt="" />
           </div>
        </div>
        <div className="footer-bottom">
          <img src={millerLogo} alt="" />
          <div className="footer-bottom-menu">
            <ul>
              <li>Каталог товаров</li>
              <li>Блог</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer