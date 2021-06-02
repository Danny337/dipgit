import React from 'react'
import '../otzivi/Otzivi.css'
import * as FaIcons from 'react-icons/fa'
import boroda from '../../images/boroda.png'
import chel from '../../images/chel.png'
import pe from '../../images/pe.png'

export default function Otzivi() {
    return (
        <div className="otziviForh2">
            <h2 className='home__text'>Отзывы о нас</h2>
            <div className="nothing">&nbsp;</div>
            <div className="otzivi_block">
                <div className="otziv_item">
                    <img src={boroda} alt="" className="otzivi_img" />
                    <p className="otziv_p">Игорь Новиков</p>
                    <FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" />
                    <p>Быстрый и честный ремонт! Всем друзьям и знакомым теперь рекомендую эту мастерскую!</p>
                </div>
                <div className="otziv_item itemMid">
                    <img src={chel} alt="" className="otzivi_img" />
                    <p className="otziv_p">Дима Кузнецов</p>
                    <FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" />
                    <p>Все качественно и без обмана, делают очень быстро в отличии от многих сервисов.</p>
                </div>
                <div className="otziv_item">
                    <img src={pe} alt="" className="otzivi_img" />
                    <p className="otziv_p">Илья Михеев</p>
                    <FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStar className="otzivi_icon" /><FaIcons.FaStarHalfAlt className="otzivi_icon" />
                    <p>Отличный сервис, за 5 минут починил ноут. Мастер приятный в общении и внушает доверие.</p>
                </div>
            </div>
        </div>
    )
}
