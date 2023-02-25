import React from 'react'
import instaImg from '../../assets/Images/instaImg.png'
import iphone1 from '../../assets/Images/айфон 1.png'
import iphone2 from '../../assets/Images/айфон 2.png'

const Instagram = () => {
  return (
    <div className='instagram'>
        <div className="container">
            <div className="instagram-inner">
                <div className="insta-title">
                        <h1>Мы в инстаграм</h1>
                        <img src={instaImg} alt="" />
                </div>
                        <div className="instagram-left">
                            <img className='iphone1' src={iphone1} alt="" />
                            <img className='iphone2' src={iphone2} alt="" />
                        </div> 
                        <div className="instagram-right"></div>
             </div>
        </div>
    </div>
  )
}

export default Instagram