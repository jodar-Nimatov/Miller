import React from "react";
import images from "./FilterIMages";
import coffeblog from "../../assets/blog/6VhPY27jdps.svg";
import img2 from "../../assets/blog/pnmRtTHWqDM.svg";
import img3 from "../../assets/blog/pnmRtTHWqDM.svg";
import newscoffe from "../../assets/blog/image 6.png";
const Blog = () => {
  // const liStyle = {
  //   width: "574px",
  //   height: "23px",
  //   fontStyle: "normal",
  //   fontSize: "18px",
  // };

  return (
    <div className="blog">
      <div className="container">
        <div className="blog_inner">
          <div className="blog_ul">
            <li>Главная</li>
            <li>Блог</li>
          </div>
          <div className="switch_btn">
            <div className="button_switch">
              <button className="btn_switch">Обучение</button>
              <button className="btn_switchnews">Новости</button>
              <button className="btn_switchches">Частые вопросы</button>
            </div>
            <div className="text_center">
              <h1 className="text_centerh1">
                Приготовление кофе разными способами
              </h1>
            </div>
            <div className="filters-bottom-blocks">
              {images.map((item) => (
                <div key={item.id} className="filters-bottom-blocks-item">
                  <div className="filters-bottom-blocks-item-inner">
                    <p>{item.text}</p>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="info_text">
              <h1 className="text_infoh1">Как сварить кофе в турке:</h1>
              <p className="text_infop">
                Разнообразный и богатый опыт новая модель организационной
                деятельности позволяет оценить значение позиций, занимаемых
                участниками в отношении поставленных задач. Значимость этих
                проблем настолько очевидна, что дальнейшее развитие различных
                форм деятельности в значительной степени обуславливает создание
                модели развития.
                <br /> <br />
                <br /> Задача организации, в особенности же рамки и место
                обучения кадров способствует подготовки и реализации систем
                массового участия. Таким образом укрепление и развитие структуры
                способствует подготовки и реализации направлений прогрессивного
                развития. <br /> <br /> <br /> Товарищи! реализация намеченных
                плановых заданий обеспечивает широкому кругу (специалистов)
                участие в формировании соответствующий условий активизации. С
                другой стороны реализация намеченных плановых заданий требуют от
                нас анализа существенных финансовых и административных условий.
              </p>
            </div>
            <div className="coffe_logoblog">
              <img className="coffe_logo_blog" src={coffeblog} alt="" />
            </div>
            <div className="info_text">
              <h1 className="text_infoh1">Название темы</h1>
              <p className="text_infop">
                Разнообразный и богатый опыт новая модель организационной
                деятельности позволяет оценить значение позиций, занимаемых
                участниками в отношении поставленных задач. Значимость этих
                проблем настолько очевидна, что дальнейшее развитие различных
                форм деятельности в значительной степени обуславливает создание
                модели развития.
                <br /> <br />
                <br /> Задача организации, в особенности же рамки и место
                обучения кадров способствует подготовки и реализации систем
                массового участия. Таким образом укрепление и развитие структуры
                способствует подготовки и реализации направлений прогрессивного
                развития. <br /> <br /> <br /> Товарищи! реализация намеченных
                плановых заданий обеспечивает широкому кругу (специалистов)
                участие в формировании соответствующий условий активизации. С
                другой стороны реализация намеченных плановых заданий требуют от
                нас анализа существенных финансовых и административных условий.
              </p>
            </div>
            <div className="coffe_logoblog">
              <img className="coffe_logo_blog" src={img2} alt="" />
            </div>
            <div className="info_text">
              <h1 className="text_infoh1">Название темы</h1>
              <p className="text_infop">
                Разнообразный и богатый опыт новая модель организационной
                деятельности позволяет оценить значение позиций, занимаемых
                участниками в отношении поставленных задач. Значимость этих
                проблем настолько очевидна, что дальнейшее развитие различных
                форм деятельности в значительной степени обуславливает создание
                модели развития.
                <br /> <br />
                <br /> Задача организации, в особенности же рамки и место
                обучения кадров способствует подготовки и реализации систем
                массового участия. Таким образом укрепление и развитие структуры
                способствует подготовки и реализации направлений прогрессивного
                развития. <br /> <br /> <br /> Товарищи! реализация намеченных
                плановых заданий обеспечивает широкому кругу (специалистов)
                участие в формировании соответствующий условий активизации. С
                другой стороны реализация намеченных плановых заданий требуют от
                нас анализа существенных финансовых и административных условий.
              </p>
            </div>
            <div className="coffe_logoblog">
              <img className="coffe_logo_blog3" src={img3} alt="" />
            </div>{" "}
            <div className="coffe_news">
              <h1 style={{ marginTop: "30px" }}>Новости:</h1>
              <div className="button_tag">
                <button className="button_numb">Тег №1</button>
                <button className="button_numbtwo">Тег №2</button>
                <button className="button_numbtag3">Тег №3</button>
                <button className="button_numbtag4">Тег №4</button>
                <button className="button_numbtag5">Тег №5</button>
              </div>
              <div className="card_news">
                <img
                  style={{ width: "280px", height: "283px", marginTop: "45px" }}
                  src={newscoffe}
                  alt=""
                />
                <div className="text_news">
                  <ul className="ul_linews">
                    <li>
                      Танзанийский кофе. Откуда он взялся и почему мы его так
                      любим?
                    </li>
                    <li>
                      Танзания – красивая африканская страна. Именно здесь
                      расположены легендарные географические объекты – вулкан
                      Килиманджаро и озеро Виктория. Но наш интерес вызван не
                      столько природными красотами, сколько кофе...
                    </li>
                    <li>Автор статьи: Иван Иванов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
