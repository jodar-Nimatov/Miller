import React from 'react'
import millerLogo from "../../assets/Header/millerLofo.svg";
import basketlogo from "../../assets/Header/basket.svg";
import userlogo from "../../assets/Header/user.svg";    
import {TfiClose} from "react-icons/tfi"
import { Link } from 'react-router-dom';

const BurgerSD = ({BurgerMenu, setBurgerMenu}) => {
    return (
            <div className="burger-menu" style={{display: BurgerMenu ? 'flex':'none'}}>
            <div className="burger-menu-inner">
              <div className="burger-menu-above">
                <img className="burger-menu-logo" src={millerLogo} alt="" />
                <div className="close-burger-menu" onClick={() => setBurgerMenu(false)}>
                  <TfiClose/>
                </div>
              </div>
              <div className="burger-menu-bellow">
                <div className="burger-menu-nav-list">
                  <ul>
                    <li onClick={() => setBurgerMenu(false)}><Link to='/catalog/coffee'>Каталог товаров</Link></li>
                    <li onClick={() => setBurgerMenu(false)}><Link to='/blog'>Блог</Link></li>
                    <li onClick={() => setBurgerMenu(false)}><Link to='/contacts'>Контакты</Link></li>
                  </ul>
                </div>
                <div className="burger-menu-icons">
                  <Link onClick={() => setBurgerMenu(false)} to='/cart'><img src={basketlogo} alt="" /></Link>
                  <Link onClick={() => setBurgerMenu(false)} to='/profile'><img src={userlogo} alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
    )
}

export default BurgerSD