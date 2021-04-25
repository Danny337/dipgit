import React from 'react'
import './css/Pc.css'
import checkmark from '../images/checkmark.png';
import msi from '../images/msi.png';

export default function Pc() {
    return (
        <section className="pc_rehab">

                <div className="main_pc">
                    <div className="pc_logotext">
                        <h2 className='pc__text'>Ремонт компьютеров</h2>
                        <div className="nothing">&nbsp;</div>
                    </div>

                    <div className="main_zaeb">
                        <div className="zaebalo">
                            <p className="zaebalo_p">Мы предлагаем следующие виды работ:</p>
                            <div className="zaeb_item">
                                <img src={checkmark} alt="" className="checkmark" />
                                <p className="zaeb_p">переустановку и обновление операционной системы;</p>
                            </div>
                            <div className="zaeb_item">
                                <img src={checkmark} alt="" className="checkmark" />
                                <p className="zaeb_p">установку и наладку нужного программного обеспечения, а так же проверка работоспособности уже установленных программ;</p>
                            </div>
                            <div className="zaeb_item">
                                <img src={checkmark} alt="" className="checkmark" />
                                <p className="zaeb_p">установку и обновление антивирусов, как платных так и бесплатных;</p>
                            </div>
                        </div>
                    </div>

                    <div className="materinka">
                        <div className="materinka_text">
                        <p>Даже если вы разбираетесь в компьютерной технике на уровне продвинутого пользователя не стоить самостоятельно пытаться починить компьютер в случае его поломки.Лучше доверить это дело профессионалам, таким которые работают в компании «X service»Срочный и недорогой ремонт копьютерной техники - это наша работа, которую мы делаем хорошо.Мы выезжаем на обслуживание в дома и офисы и на месте ремонтируем компьютеры и забираем технику в наш сервисный центр только в случае такой поломки, исправить которую в домашних условиях не представляется возможным.</p>
                        </div>
                        <div className="materinka_img">
                            <img src={msi} alt="" className="info_img"/>
                        </div>
                    </div>
                </div>
            {/* <div className="pc__info">
                <div className="info_text">
                    <h2 className='pc__text'>Ремонт копьютеров</h2>
                    <div className="nothing">&nbsp;</div>
                    
                    <div className="lel">
                        <div className="info_galki">
                            <p className="pc_tt">Мы предлагаем следующие виды работ:</p>
                            <div className="info_item">
                                <img src={checkmark} alt="" className="checkmark"/>
                                <p>переустановку и обновление операционной системы;</p>
                            </div>
                            <div className="info_item">
                                <img src={checkmark} alt="" className="checkmark"/>
                                <p>установку и наладку нужного программного обеспечения, а так же проверка работоспособности уже установленных программ;</p>
                            </div>
                            <div className="info_item">
                                <img src={checkmark} alt="" className="checkmark"/>
                                <p>установку и обновление антивирусов, как платных так и бесплатных;</p>
                            </div>
                        </div>

                        <div className="info_textImg">
                            <p className="info_b_p">Даже если вы разбираетесь в компьютерной технике на уровне продвинутого пользователя не стоить самостоятельно пытаться починить компьютер в случае его поломки.Лучше доверить это дело профессионалам, таким которые работают в компании «X service»Срочный и недорогой ремонт копьютерной техники - это наша работа, которую мы делаем хорошо.Мы выезжаем на обслуживание в дома и офисы и на месте ремонтируем компьютеры и забираем технику в наш сервисный центр только в случае такой поломки, исправить которую в домашних условиях не представляется возможным.</p>
                            <img src={msi} alt="" className="info_img" />
                        </div>
                    </div>
                </div> 
            </div> */}

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
                            <td>Удаление вирусов</td>
                            <td>990</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Прошивка микросхемы Bios с использованием программатора</td>
                            <td>1500</td>
                        </tr>
                        <tr className="tr">
                            <td>4</td>
                            <td>Чистка системной платы после попадания влаги ультразвуком</td>
                            <td>990</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Замена или установка материнской платы</td>
                            <td>900</td>
                        </tr>
                        <tr className="tr">
                            <td>6</td>
                            <td>Замена или установка комплектующих в системном блоке + настройка</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Замена термопасты + профилактика электронных компонентов и системы охлаждения</td>
                            <td>990</td>
                        </tr>
                        <tr className="tr">
                            <td>8</td>
                            <td>Установка и обновление всех драйверов</td>
                            <td>550</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Подключение переферийного устройства</td>
                            <td>450</td>
                        </tr>
                        <tr className="tr">
                            <td>10</td>
                            <td>Ремонт системной платы после попадания влаги ультразвуком</td>
                            <td>990</td>
                        </tr>
                    </table>
                </div>

            </div>
        </section>
    )
}
