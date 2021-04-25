import React from 'react'
import './css/Mobile.css'
import iphone from '../images/iphone12.png'

export default function Mobile() {
    return (
        <section>
            <div className="remont_mobile">
                <div className="mobile_mainBlock">
                    <div className="mobile_img">
                        <img src={iphone} alt="" className="mobile_iphone" />
                    </div>
                    <div className="mobile_text">
                        <p className="mob_pm">Ремонт телефонов</p>
                        <p className="mob_pp">Со смартфоном произошла неприятность? — Разбился экран, заднее стекло, начал быстро разряжаться или перестал реагировать на подключение зарядки? Специалисты сервисного центра «Keyboard service», проведут ремонт за 30 минут и предоставят гарантию — до 180 дней. Комплексная проверка гаджета и выезд мастера по Москве — Бесплатные. Мы работаем ежедневно, в праздники и без перерывов. Готовы проинформировать вас по любому вопросу, по телефону и предоставить скидку по предварительной записи.</p>
                    </div>
                </div>
            </div>

            <div className="price_mobile">
                <div className="pc__price">
                    <div className="topText">
                        <h2 className='home__text'>Ниже представлены цены на ремонт</h2>
                        <div className="nothing">&nbsp;</div>
                    </div>

                    <div className="pc_div_table">
                        <table>
                            <tr className="tr_top">
                                <td>№</td>
                                <td>Услуга</td>
                                <td>Цена, руб.</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Диагностика</td>
                                <td>Бесплатно</td>
                            </tr>
                            <tr className="tr">
                                <td>2</td>
                                <td>Чистка после попадания влаги</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Замена аккумулятора</td>
                                <td>1000</td>
                            </tr>
                            <tr className="tr">
                                <td>4</td>
                                <td>Замена стекла</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Замена слухового динамика</td>
                                <td>900</td>
                            </tr>
                            <tr className="tr">
                                <td>6</td>
                                <td>Замена камеры</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Замена модуля Wi-Fi</td>
                                <td>1600</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )
}
