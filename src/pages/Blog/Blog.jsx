import React, {useState, useEffect} from "react";
import images from "./FilterIMages";
import coffeblog from "../../assets/blog/6VhPY27jdps.svg";
import img2 from "../../assets/blog/pnmRtTHWqDM.svg";
import img3 from "../../assets/blog/pnmRtTHWqDM.svg";

const Blog = () => {
  const [news, setNews] = useState({ data: [] });

  useEffect(() => {
    fetch(`http://localhost:3333/news-posts`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => {
        setNews({ data: res });
      });
  }, []);

  let posts = news.data;

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
            </div>
            <div className="news-posts-row">
              {posts.map((item) => (
                <div className="post-item">
                  <div className="post-item-left">
                    <img className="post-img" src={item.image} alt="" />
                  </div>
                  <div className="post-right">
                    <h1 className="post-title">{item.title}</h1>
                    <p className="post-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
