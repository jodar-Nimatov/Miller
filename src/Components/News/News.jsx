import { React, useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState({data: []})

  useEffect(() => {
    fetch(`http://localhost:3333/news-posts`)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => {
      setNews({data: res})
    })
  }, [])

  let posts = news.data

  return (
    <div className='news'>
      <div className="news-container">
        <div className="news-inner">
          <h2>Новости компании</h2>
          <div className="news-posts-row">
            {
              posts.map(item => (
                  <div className="post-item">
                    <div className="post-item-left">
                      <img className='post-img' src={item.image} alt="" />
                    </div>
                    <div className="post-right">
                      <h1 className='post-title'>{item.title}</h1>
                      <p className='post-desc'>{item.desc}</p>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;
