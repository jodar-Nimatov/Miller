import React, { useEffect, useState } from 'react'
import axios from 'axios'
import arrowRight from '../../../assets/Images/arrowRight.png'



const Slider = () => {

  const [posts, setPosts] = useState([])
  const [move, setMove] = useState(0)

  useEffect(()=>{ 
    axios.get('http://localhost:3333/insta-posts')
    .then(resp => {
      setPosts(resp.data)
    })
  }, [])

  // const nextHandlerSlider = (el) => {
  //   console.log('next zaebal');
  //   el.style.transition = '1000ms'
  //   el.style.transform = 'translateX(-520px)'
  // }

  return (
    <div className='Insta_Slider'>
        <div className="Insta_Slider_show">
          <div className={`Insta_Slider__inner ${move ? 'active-sl' : 'none-active'}`} style={{transform:`${move ? 'translateX(-180px)' : 'translateX(0)'}`}}>
            {
              posts.map((item) => {
                return (
                  <div key={item.id} className='insta-post-img'>
                    <img src={item.image} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
        <button className='Slider__btn__next' onClick={() => setMove(!move)}><img className={` ${move ? 'active-sl' : 'none-active'}`} style={{transform: `${move ? 'rotate(180deg)' : 'rotate(0)'}`}} src={arrowRight}/></button>
    </div>
  )
}

export default Slider;