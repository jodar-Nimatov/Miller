import React from 'react'
import cupCoffe from '../../assets/Images/cup.png'
import beancoffe from '../../assets/Images/beancoffe.png'
import cofeIcon from '../../assets/Images/icon1a.png'
import priceIcon from '../../assets/Images/icon2a.png'
import comunIcon from '../../assets/Images/icon3a.png'
import Slider from '../../Components/UI/Slider/Slider'
import CoffeImg from '../../assets/Images/CatalogCoffe.png'
import CatalogTea from '../../assets/Images/CatalogTea.png'
import CoffeMachine from '../../assets/Images/CoffeMachine.png'
import CatalogKasha from '../../assets/Images/CatalogKasha.png'

const Main = () => {
    return (
        <div className='wrapper'>
            <div className="fresh-coffe">
                <div className="container">
                    <div className="fresh-coffe-inner">
                        <div className="fresh-coffe-left">
                            <h1>
                                Свежеобжаренный кофе
                            </h1>
                            <p>
                                Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.
                            </p>
                            <br />
                            <span>
                                Мы обжариваем кофе <b>каждые выходные</b>.
                            </span>
                            <br />
                            <button>
                                Посмотреть каталог
                            </button>
                        </div>
                        <div className="fresh-right">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog-products">
                <div className="container">

                <div className="catalog-inner">
                    <h2>Каталоги нашей продукции</h2>
                    <div className="catalog-items">
                        <div className="catalog-card">
                            <div className="catalog-card_img">
                                <img src={CoffeImg} alt="" />
                            </div>
                            <div className="catalog-card_title">
                                <p>Свежеобжаренный кофе</p>
                            </div>
                            <br />
                            <button className="catalog-card_button">
                                Купить
                            </button>
                        </div>
                        <div className="catalog-card">
                            <div className="catalog-card_img">
                                <img className='ct-tea-img' src={CatalogTea} alt="" />
                            </div>
                            <div className="catalog-card_title">
                                <p>Чай и кофейные напитки</p>
                            </div>
                            <br />
                            <button className="catalog-card_button">
                                Купить
                            </button>
                        </div>
                        <div className="catalog-card">
                            <div className="catalog-card_img">
                                <img src={CoffeMachine} alt="" />
                            </div>
                            <div className="catalog-card_title">
                                <p>Продукция для вендинга</p>
                            </div>
                            <br />
                            <button className="catalog-card_button">
                                Купить
                            </button>
                        </div>
                        <div className="catalog-card">
                            <div className="catalog-card_img">
                                <img src={CatalogKasha} alt="" />
                            </div>
                            <div className="catalog-card_title">
                                <p>Здоровое питание</p>
                            </div>
                            <br />
                            <button className="catalog-card_button">
                                Купить
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sale-items">
                <div className="container">
                    <div className="sale-items-inner">
                        <h1>
                            Товары со скидкой
                        </h1>
                        <p>
                            Наша компания предлагает покупать товар со скидкой не только в дни распродаж
                            или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!
                        </p>
                        <div className="sale-items-slider">

                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages">
                <div className="container">
                    <div className="advantages-inner">
                        <div className="advantages-left">
                            <img className='img2' src={beancoffe} alt="" />
                            <img className='img1' src={cupCoffe} alt="" />
                        </div>
                        <div className="advantages-right">
                            <h2>
                                Почему стоит работать именно с нами?
                            </h2>

                            <div className="advantages-block">
                                <img className='advent-imgs' src={cofeIcon} alt="" />
                                <div className="ad-block-content">
                                    <h3>Всегда свежая обжарка</h3>
                                    <p>Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
                                </div>
                            </div>
                            <div className="advantages-block">
                                <img className='advent-imgs' src={priceIcon} alt="" />
                                <div className="ad-block-content">
                                    <h3>Лучшие цены на продукцию</h3>
                                    <p>Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию</p>
                                </div>
                            </div>
                            <div className="advantages-block">
                                <img className='advent-imgs' src={comunIcon} alt="" />
                                <div className="ad-block-content">
                                    <h3>Консультации 24/7</h3>
                                    <p>Наши специалисты готовы всегда помочь
                                        и подсказать вам с выбором кофе или другой продукции.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roast-coffe">
                <div className="container">
                    <div className="roast-coffe-inner">
                        <h2>Как мы обжариваем наш кофе:</h2>
                        <p>
                            Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
                            в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
                            для производства растворимой продукции.
                        </p>
                        <p>
                            Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом.
                            У нас свой подход к каждой партии зерна.
                        </p>
                        <br />
                        <span>
                            Мы раскрываем вкус каждого сорта кофе.
                        </span>
                        <br />
                        <button>Перейти в каталог</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main