import React from 'react'
import millerLogo from "../../assets/Header/millerLofo.svg";
import basketlogo from "../../assets/Header/basket.svg";
import userlogo from "../../assets/Header/user.svg";    
import BGtellIcon from "../../assets/Images/BGtellIcon.png"
import BGinstaIcon from "../../assets/Images/InstagramIcon.png"
import {TfiClose} from "react-icons/tfi"
import { Link } from 'react-router-dom';
import { MdExitToApp } from "react-icons/md";

const BurgerSD = ({BurgerMenu, setBurgerMenu, handleSignOut}) => {
    return (
            <div className="burger-menu" style={{display: BurgerMenu ? 'flex':'none'}}>
            <div className="burger-menu-inner">
              <div className="burger-menu-above">
                <Link onClick={() => setBurgerMenu(false)} to=''>
                <img className="burger-menu-logo" src={millerLogo} alt="" />
                    </Link>
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
                  <MdExitToApp className="exitIcon bg-so" onClick={handleSignOut}></MdExitToApp>
                </div>
                <div className="burger-menu-feedback">
                  <p>import@miller.com</p>
                  <div className="burger-menu-feedback-icons">
                    <Link onClick={() => setBurgerMenu(false)} to='/contacts'><img src={BGtellIcon} alt="" /></Link>
                    <a href='https://www.instagram.com/miller_coffeeandmore/'><img src={BGinstaIcon} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default BurgerSD