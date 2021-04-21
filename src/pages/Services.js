import React from 'react';
import * as FaIcons from 'react-icons/fa'
import servicesimg from '../images/service.png'
import './css/Services.css';

function Services() {
    return (
        <div className="services">
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
                    </div>
                </div>
            </div>

            <div className="right_photo"></div>
        </div>
    )
}

export default Services

{/* <div className='services'>
            <h1>Ремонт и обслуживание:</h1>
            <a href="/price"><h2>Компьютеров</h2></a> 
            <h2>Телефонов</h2>
            <h2>Принтеров</h2>
        </div> */}
