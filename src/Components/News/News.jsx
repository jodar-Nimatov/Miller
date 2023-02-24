import React from 'react';
import { Link } from 'react-router-dom';
import postImg from '../../assets/Images/postImg.png'

const News = () => {
  
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-inner">
          <h2>Новости компании</h2>
          <div className="news-posts-row">
            <div className="posts-above">
            <div className="post-card">
              <div className="post-left">
                <div className="post-img">
                  <img src={postImg} alt="" />
                </div>
              </div>
              <div className="post-right">
                <h2>Танзанийский кофе. Откуда он взялся и почему мы его так любим?</h2>
                <p className='post-p'>Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.</p>
                <p>Но наш интерес вызван не столько природными красотами, сколько кофе...</p>
                <Link to=''><span>Подробнее</span></Link>
              </div>
            </div>
            <div className="post-card">
              <div className="post-second">
                <h2>Африканский кофе Кения АА</h2>
                <p>Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.</p>
                <Link to=''><span>Подробнее</span></Link>
              </div>
            </div>
            </div>
            <div className="posts-bellow">
            <div className="post-card">
              <div className="post-second">
                <h2>Африканский кофе Кения АА</h2>
                <p>Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.</p>
                <Link to=''><span>Подробнее</span></Link>
              </div>
            </div>
            <div className="post-card">
              <div className="post-left">
                <div className="post-img">
                  <img src={postImg} alt="" />
                </div>
              </div>
              <div className="post-right">
                <h2>Танзанийский кофе. Откуда он взялся и почему мы его так любим?</h2>
                <p className='post-p'>Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.</p>
                <p>Но наш интерес вызван не столько природными красотами, сколько кофе...</p>
                <Link to=''><span>Подробнее</span></Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
