import React from "react";
import Rate from "../../assets/Images/RewiesRate.png";
import UserIcon from "../../assets/Images/RWuserIcon.png";

const Rewievs = () => {
  return (
    <div className="Rewievs">
      <div className="container">
        <div className="Rewievs__inner">
          <div className="Rewievs__inner__title">
            <h2>Отзывы</h2>
          </div>
          <div className="Rewievs__row">
            <div className="Rewievs__block">
              Z{" "}
              <div className="Rewievs__block__inner">
                <div className="Rewievs__block__inner__above">
                  <h1>Отличный вкус!</h1>
                  <img src={Rate} alt="rate" />
                  <p>
                    Без базара вкусный кофе. Буду всегда у вас заказывать,
                    доставка очень быстрая. Сайт очень удобный. Видно нам ним
                    старались а тимлид вообще красавчик.
                  </p>
                  <hr />
                </div>
                <div className="Rewievs__block__inner__bellow">
                  <div className="Rewievs__block__inner__bellow__inner">
                    <div>
                      <img src={UserIcon} alt="" />
                    </div>
                    <div className="bellow__inner_right">
                      <h3>Ирина</h3>
                      <h4>Г. Москва</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Rewievs__block">
              <div className="Rewievs__block__inner">
                <div className="Rewievs__block__inner__above">
                  <h1>Отличный вкус!</h1>
                  <img src={Rate} alt="rate" />
                  <p>
                    Товарищи! реализация намеченных плановых заданий
                    обеспечивает широкому кругу (специалистов) участие в
                    формировании соответствующий условий активизации.
                  </p>
                  <hr />
                </div>
                <div className="Rewievs__block__inner__bellow">
                  <div className="Rewievs__block__inner__bellow__inner">
                    <div>
                      <img src={UserIcon} alt="" />
                    </div>
                    <div className="bellow__inner_right">
                      <h3>Ирина</h3>
                      <h4>Г. Москва</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Rewievs__block">
              <div className="Rewievs__block__inner">
                <div className="Rewievs__block__inner__above">
                  <h1>Отличный вкус!</h1>
                  <img src={Rate} alt="rate" />
                  <p>
                    Товарищи! реализация намеченных плановых заданий
                    обеспечивает широкому кругу (специалистов) участие в
                    формировании соответствующий условий активизации.
                  </p>
                  <hr />
                </div>

                <div className="Rewievs__block__inner__bellow">
                  <div className="Rewievs__block__inner__bellow__inner">
                    <div>
                      <img src={UserIcon} alt="" />
                    </div>
                    <div className="bellow__inner_right">
                      <h3>Ирина</h3>
                      <h4>Г. Москва</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewievs;
