import React from "react";
import images from "./FilterIMages";
import coffeblog from "../../assets/blog/6VhPY27jdps.svg";
import img2 from "../../assets/blog/pnmRtTHWqDM.svg";
import img3 from "../../assets/blog/pnmRtTHWqDM.svg";
import { BsArrowRightShort } from "react-icons/bs";
import newscoffe from "../../assets/blog/image 6.png";
import { Link } from "react-router-dom";
import faqimg from "../../assets/blog/coffeFAQ.svg";
import Accordion from "./Accordion";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef(null)
  const refQA = useRef(null)
  const scrollToNews = () => {
    ref.current?.scrollIntoView({'behavor': 'smooth'})
  }
  const scrollToQA = () => {
    refQA.current?.scrollIntoView({'behavor': 'smooth'})
  }
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
              <button onClick={scrollToNews} className="btn_switchnews">Новости</button>
              <button onClick={scrollToQA} className="btn_switchches">Частые вопросы</button>
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
            <div ref={ref} className="forref"></div>
            <div className="coffe_news">
              <h1 style={{ marginTop: "30px" }}>Новости:</h1>
              <div className="button_tag">
                <button className="button_numb">Тег №1</button>
                <button className="button_numbtwo">Тег №2</button>
                <button className="button_numbtag3">Тег №3</button>
                <button className="button_numbtag4">Тег №4</button>
                <button className="button_numbtag5">Тег №5</button>
              </div>
              <div className="posts-above">
                <div className="post-card">
                  <div className="post-left">
                    <div className="post-img">
                      <img
                        src={newscoffe}
                        style={{ marginTop: "45px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="post-right">
                    <h2>
                      Танзанийский кофе. Откуда он взялся и почему мы его так
                      любим?
                    </h2>
                    <p className="post-p">
                      Танзания – красивая африканская страна. Именно здесь
                      расположены легендарные географические объекты – вулкан
                      Килиманджаро и озеро Виктория.
                    </p>
                    <p>
                      Но наш интерес вызван не столько природными красотами,
                      сколько кофе...
                    </p>
                    <Link to="">
                      <span>
                        Подробнее{" "}
                        <div className="arrow-right">
                          <BsArrowRightShort />
                        </div>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="posts-above">
                <div className="post-card">
                  <div className="post-left">
                    <div className="post-img">
                      <img
                        src={newscoffe}
                        style={{ marginTop: "30px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="post-right_two">
                    <h2>
                      Танзанийский кофе. Откуда он взялся и почему мы его так
                      любим?
                    </h2>
                    <p className="post-p">
                      Танзания – красивая африканская страна. Именно здесь
                      расположены легендарные географические объекты – вулкан
                      Килиманджаро и озеро Виктория.
                    </p>
                    <p>
                      Но наш интерес вызван не столько природными красотами,
                      сколько кофе...
                    </p>
                    <Link to="">
                      <span>
                        Подробнее{" "}
                        <div className="arrow-right_two">
                          <BsArrowRightShort />
                        </div>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="posts-above">
                <div className="post-card">
                  <div className="post-left">
                    <div className="post-img">
                      <img
                        src={newscoffe}
                        style={{ marginTop: "30px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="post-right_three">
                    <h2>
                      Танзанийский кофе. Откуда он взялся и почему мы его так
                      любим?
                    </h2>
                    <p className="post-p">
                      Танзания – красивая африканская страна. Именно здесь
                      расположены легендарные географические объекты – вулкан
                      Килиманджаро и озеро Виктория.
                    </p>
                    <p>
                      Но наш интерес вызван не столько природными красотами,
                      сколько кофе...
                    </p>
                    <Link to="">
                      <span>
                        Подробнее{" "}
                        <div className="arrow-right">
                          <BsArrowRightShort />
                        </div>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="full_news">
                <span  ref={refQA}  >Показать еще</span>
              </div>
              <div className="linia_span"></div>
              <div className="FAQ">
                <h1 className="faq_ac">Частые вопросы:</h1>
              </div>
              <div className="faq_img">
                <img src={faqimg} alt="" />
              </div>
              <div className="accordion_faq">
                <Accordion
                  title="Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?"
                  content="Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития"
                />
                <Accordion
                  title="Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?"
                  content="Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития"
                />
                <Accordion
                  title="Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?"
                  content="Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития"
                />
                <Accordion
                  title="Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?"
                  content="Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития"
                />
                <Accordion
                  title="Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?"
                  content="Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
