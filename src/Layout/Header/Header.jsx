import React from "react";
import '../Header/Header.scss'
import millerLogo from "../../assets/image 25.svg"
import searchlogo from "../../assets/Vector.svg"
import basketlogo from "../../assets/Vector (1).svg"
import userlogo from "../../assets/Vector (2).svg"

const Header = () => {
  // const getSearcher = () => {
  //   return (
  //     <div class="search">
  //       <input type="text" class="search-field" placeholder="Введите поисковый запрос или URL"/>
  //       <img src={searchlogo} alt="" class="search-icon"/>
  //     </div>
  //   )
  // }
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <img src={millerLogo} width='260px' height='116px' alt="" />
          </div>
          <div className="header-menu">
            <ul>
              <li><a href="#">Каталог товаров</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className="header-icons">
            <div className="search-icon">
              <img src={searchlogo} alt="" className='header-searchIcon header-icon' />
            </div>
            <div className="basket-icon">
              <img src={basketlogo} alt="" className='header-basketIcon header-icon'/>
            </div>
            <div className="user-icon">
              <img src={userlogo} alt="" className='header-userIcon header-icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;