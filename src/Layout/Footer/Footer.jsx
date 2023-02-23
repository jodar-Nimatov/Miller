import React from "react";
import millerLogo from "../../assets/Header/millerLofo.svg";
import footerImg1 from "../../assets/Footer/footer-coffee.png";
import footerImg2 from "../../assets/Footer/footer-cup.png";

const Footer = () => {
  return (
    <>
      <div className="footer-back-top"></div>
      <footer className="footer">
        <div className="footer-back">
          <div className="footer__content">
            <div className="footer__container">
              <div className="footer__subscription">
                <div className="footer__subscription-left">
                  <h3 className="footer__subscription-left-title">
                    Подписка на новости и рассылку
                  </h3>
                  <h5 className="footer__subscription-left-subTitle">
                    Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе
                    новых поставок, скидок и эксклюзивных предложений.
                  </h5>
                  <form className="subForm">
                    <input
                      type="email"
                      className="footer-input"
                      placeholder="Ваш email"
                    />
                    <button type="submit" className="footer-button">
                      Подписаться
                    </button>
                    <p className="subscription-description">
                      Нажимая на кнопку “Подписаться”, вы принимаете правила{" "}
                      <a href="#" className="subLink">
                        пользовательского соглашения
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__image">
          <img className="footer__image-bottom" src={footerImg1} alt="" />
          <img className="footer__image-top" src={footerImg2} alt="" />
        </div>
      </footer>
      <div className="footer__bottom-block">
        <div className="footer__container">
          <div className="footer__bottom">
            <div className="footer__bottom-left">
              <a href="#">
                <img src={millerLogo} width="179px" alt="" />
              </a>
            </div>
            <div className="footer__bottom-right">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#">Каталог товаров</a>
                </li>
                <li className="footer__item">
                  <a href="#">Блог</a>
                </li>
                <li className="footer__item">
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
