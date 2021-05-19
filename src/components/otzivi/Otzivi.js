import React from 'react'
import '../otzivi/Otzivi.css'
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
                    <p className="otziv_p">Danek Uragan</p>
                    <p>Быстрый и честный ремонт! Всем друзьям и знакомым теперь рекомендую эту мастерскую!</p>
                </div>
                <div className="otziv_item itemMid">
                    <img src={chel} alt="" className="otzivi_img" />
                    <p className="otziv_p">Slava Hokage</p>
                    <p>Все качественно и без обмана, делают очень быстро в отличии от многих сервисов</p>
                </div>
                <div className="otziv_item">
                    <img src={pe} alt="" className="otzivi_img" />
                    <p className="otziv_p">Pulya</p>
                    <p>Отличный сервис, за 5 минут починил ноут. Мастер приятный в общении и внушает доверие.</p>
                </div>
            </div>
        </div>
    )
}
