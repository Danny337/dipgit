import React from 'react';
import * as FaIcons from 'react-icons/fa'
import servicesimg from '../images/service.png'
import pc from '../images/legacy.png'
import minipc from '../images/minipc.png'
import miniiphone from '../images/miniiphone.png'
import miniprinter from '../images/miniprinter.png'
import './css/Services.css';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="ssservices">
            <div className="services_topBlock">
                <div className="topBlock_text">
                    <p className="services_mainText">Ремонт Техники</p>
                    <p className="services_purpText">Ремонт и Обслуживание</p>
                    <p className="services_jtext">Любая техника нуждается в периодическом ремонте или апргейде, для усовершенствования работоспособности и улучшения производительности. Ваш компьютер - не исключение. Мы готовы осуществить ремонт компьютерной техники в Москве любой сложности. От замены клавиатуры до BGA компонентного ремонта. Всё это в сервисном центре Keyboard service делаем с гарантией 100 дней. Стоимость ремонта варьируется по моделям и зависит от года выпуска и характера неисправности.</p>
                </div>
                <div className="topBlock_img">
                    <img src={pc} alt="" className="services_pc" />
                </div>
            </div>

            <div className="services_select">

                <div className="select_text">
                    <p>Популярные виды ремонтов:</p>
                </div>
                <div className="nothing">&nbsp;</div>

                <div className="select_items">
                    <div className="select_items_block">
                        <div className="select_item">
                            <div className="select_item_miniimg">
                                <img src={minipc} alt="" className="miniImg" />
                            </div>
                            {/* <div className="home_item_icon style_icon">
                                <FaIcons.FaRubleSign className="icon_advantage" />
                            </div> */}
                            <div className="select_item_text">
                                <p className="select_item_text_p1">Компьютер</p>
                                <Link to="/pc"><p className="select_item_text_p2">Чистка, замена термопасты</p></Link>
                                <Link to="/pc"><p className="select_item_text_p2">Установка Windows</p></Link>
                                <Link to="/pc"><p className="select_item_text_p2">Замена видеокарты</p></Link>
                            </div>
                        </div>

                        <div className="select_item">
                            <div className="select_item_miniimg">
                                <img src={miniiphone} alt="" className="miniImg" />
                            </div>
                            {/* <div className="home_item_icon style_icon">
                                <FaIcons.FaLaughWink className="icon_advantage" />
                            </div> */}
                            <div className="select_item_text">
                                <p className="select_item_text_p1">Телефон</p>
                                <Link to="/mobile"><p className="select_item_text_p2">Замена стекла</p></Link>
                                <Link to="/mobile"><p className="select_item_text_p2">Замена аккумулятора</p></Link>
                                <Link to="/mobile"><p className="select_item_text_p2">Чистка после воды</p></Link>
                            </div>
                        </div>
                        
                        <div className="select_item">
                            <div className="select_item_miniimg">
                                <img src={miniprinter} alt="" className="miniImg" />
                            </div>
                            {/* <div className="home_item_icon style_icon">
                                <FaIcons.FaThumbsUp className="icon_advantage" />
                            </div> */}
                            <div className="select_item_text">
                                <p className="select_item_text_p1">Принтер</p>
                                <Link to="/printer"><p className="select_item_text_p2">Ремонт платы форматера</p></Link>
                                <Link to="/printer"><p className="select_item_text_p2">Чистка лазера</p></Link>
                                <Link to="/printer"><p className="select_item_text_p2">Прошивка принтера</p></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services

{/* <div className='services'>
            <h1>Ремонт и обслуживание:</h1>
            <a href="/price"><h2>Компьютеров</h2></a> 
            <h2>Телефонов</h2>
            <h2>Принтеров</h2>
    </div> */

    /* <div className="services">
            <div className="top_text">
                <h2 className="h2_text">Услуги ремонта и обслуживания техники в сервисном центре <br/> "Keyboard service"</h2>
            </div>

            <div className="about_company">
                <p className="p_about">Наш сервисный центр оказывает работы по гарантийному, постгарантийному обслуживанию компьютерной и офисной техники, а также проведению ремонтных работ на платной основе.
                На данный момент в списке авторизованного гарантийного обслуживания у нас более 100 компаний с мировым именем. Такие компании как ACER, Lenovo, HP, EPSON, Canon, APC, NOKIA и др., знакомы большинству пользователей современной техники.
                Производим ремонт: ноутбуков, компьютеров, смартфонов, планшетов, принетров, мфу, копиров, сканеров, проекторов, источников бесперебойного питания, стабилизаторов, аудио-колонок и много-много другого оборудования.</p>
                <img src={servicesimg} alt="" className="img" />
            </div>

            <div className="katalog">
                <div className="services_items">
                    <h3 className="h3_items">Ремонт</h3>
                    <div className="nothing">&nbsp;</div>
                    <div className="items">
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">ремонт пк</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">ремонт телефонов</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">ремонт планшентов</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">ремонт принтеров</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">ремонт принтеров</p>
                        </div>
                    </div>
                </div>

                <div className="services_items">
                    <h3 className="h3_items">Обслуживание</h3>
                    <div className="nothing">&nbsp;</div>
                    <div className="items">
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">обслуживание принтеров</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">обслуживание сетей</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">обслуживание серверов</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">обслуживание сканеров</p>
                        </div>
                        <div className="item">
                            <FaIcons.FaLaptop className="item_icon" />
                            <p className="p_item">обслуживание сканеров</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right_photo"></div>
        </div> */
        
}
