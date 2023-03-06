import React from 'react'
import instaImg from '../../assets/Images/instaImg.png'
import iphone1 from '../../assets/Images/айфон 1.png'
import iphone2 from '../../assets/Images/айфон 2.png'
import instaBackBottom from '../../assets/Images/InsagramBackbottom.png'
import Slider from '../UI/InstaSlider/Slider'

const Instagram = () => {
  return (
    <>
    <div className='instagram'>
        <div className="insta-back">
        <div className="container">
          <div className="insta-title forDF">
          <h1>Мы в Instagram</h1>
          <img src={instaImg} alt="" />
          </div>
            <div className="instagram-inner">
                <div className="insta-sides">
                        <div className="instagram-left">
                            <img className='iphone1' src={iphone1} alt="" />
                            <img className='iphone2' src={iphone2} alt="" />
                        </div> 
                        <div className="instagram-right">
                          <Slider/>
                        </div>
                </div>        
             </div>
          </div>
        </div>
    <div className="instagram-bottom"></div>
    </div>
    </>
  )
}

export default Instagram