import React from 'react'
import * as FaIcons from 'react-icons/fa'
import Slider from '../components/slider/Slider'
import './css/Home.css'
import msi from '../images/msi.png';
import checkmark from '../images/checkmark.png';
import logo from '../images/logos.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            
            <Slider />

            <div className='home_features'>
                <h2 className='home__text'>Почему выбирают именно нас?</h2>
                <div className="nothing">&nbsp;</div>

                <div className="wrapper">
                    <div className="home__kingItem">

                        <div className="home_item">
                            <div className="home_item_icon style_icon">
                                <FaIcons.FaAngellist className="icon_advantage" />
                            </div>
                            <div className="home_item_text">
                                <p className="title_advantage">
                                    Ремонт берем на себя
                                </p>
                                <p className="description_advantage">
                                    Наши специалисты прошли полное обучение и ежегодно повышают свою квалификацию
                                </p>
                            </div>
                        </div>

                        <div className="home_item">
                            <div className="home_item_icon style_icon">
                                <FaIcons.FaMoneyCheck className="icon_advantage" />
                            </div>
                            <div className="home_item_text">
                                <p className="title_advantage">
                                    Удобство оплаты
                                </p>
                                <p className="description_advantage">
                                    Клиент сам выбирает как оплачивать услуги ремонта, по наличному расчету или электронному
                                </p>
                            </div>
                        </div>

                        <div className="home_item">
                            <div className="home_item_icon style_icon">
                                <FaIcons.FaRoad className="icon_advantage" />
                            </div>
                            <div className="home_item_text">
                                <p className="title_advantage">
                                    Замкадье
                                </p>
                                <p className="description_advantage">
                                    Мы забираем технику в СЦ или ремонтируем на дому не только в столице России, но и охватываем полностью Подмосковье
                                </p>
                            </div>
                        </div>

                        <div className="home_item">
                            <div className="home_item_icon style_icon">
                                <FaIcons.FaExclamation className="icon_advantage" />
                            </div>
                            <div className="home_item_text">
                                <p className="title_advantage">
                                    Гарантия
                                </p>
                                <p className="description_advantage">
                                    После ремонта компьютерной техники мастером будет предоставлена гарантия на 2 года по замененным комплектующим или их восстановления
                                </p>
                            </div>
                        </div>

                        <div className="home_item">
                            <div className="home_item_icon style_icon">
                                <FaIcons.FaCloudscale className="icon_advantage" />
                            </div>
                            <div className="home_item_text">
                                <p className="title_advantage">
                                    Скорость работы
                                </p>
                                <p className="description_advantage">
                                    В большинстве случаев компьютерная помощь на дому происходит в пределах пары часов
                                </p>
                            </div>
                        </div>

                        <div className="home_item">
                            <div className="home_item_icon style_icon">
                                <FaIcons.FaRubleSign className="icon_advantage" />
                            </div>
                            <div className="home_item_text">
                                <p className="title_advantage">
                                    Разумная стоимость
                                </p>
                                <p className="description_advantage">
                                    Наша цель не заработать как можно больше, а помочь своим клиентам и нам доверяют
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* <div className="home_pant">
                    <img src={msi} alt="" className='msi' />

                    <div className="home_block">
                        <div className="home_block__item">
                            <img src={checkmark} alt="" className="checkmark" /> <p className="text" >Лучшие цены!</p>
                        </div>
                        <div className="home_block__item">
                            <img src={checkmark} alt="" className="checkmark" /> <p className="text" >Лучшие услуги!</p>
                        </div>
                        <div className="home_block__item">
                            <img src={checkmark} alt="" className="checkmark" /> <p className="text" >Лучшие мастера!</p>
                        </div>
                    </div>

                </div> */}
            </div>

            <div className="home_icons">
                <h2 className='home__text'>что мы предлагаем</h2>
                <div className="nothing">&nbsp;</div>

                <div className="button_div">
                    <Link to="/services"><button class="slide_from_right">Каталог услуг</button></Link>
                </div>

                {/* <div className="home_icons__items">
                    <Link to="/pc">
                    <div className="home__item">
                        <p className="home_p">ремонт компьютеров</p>
                        <FaIcons.FaLaptop className="home__icon" />
                    </div>
                    </Link>
                    <div className="home__item">
                        <p className="home_p">ремонт телефонов</p>
                        <FaIcons.FaMobileAlt className="home__icon" />
                    </div>
                    <Link to="/printer">
                    <div className="home__item">
                        <p className="home_p">ремонт принтеров</p>
                        <FaIcons.FaPrint className="home__icon" />
                    </div>
                    </Link>
                </div> */}
            </div>
            
        </div>
    )
}

export default Home
