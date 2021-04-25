import React from 'react'
import './css/Printer.css'
import printer from '../images/printer.jpg';
import epson from '../images/epson.png';

export default function Printer() {
    return (
        <section className="printer_price">
            <div className="printer_info">
                <div className="printer_text">
                    <p className="red_text_main">Ремонт лазерных принтеров в Москве и областе</p>
                    <p>Сбои время от времени могут быть присущи любым механизмам или приборам. И печатающая техника, конечно же, в их числе. </p> 

                    <p><b>Мы производим срочный ремонт принтеров HP, Canon, Samsung, Ricoh, Xerox, Kyocera и др.</b> 
                    Наиболее экономным и надежным способом вернуть к жизни ваш принтер, будет обратиться за помощью к нам в сервисный центр. Наши специалисты знают толк в ремонте лазерных принтеров разных марок. Но доводить свое печатающее устройство до такого состояния все же не стоит, гораздо лучше сделать профилактическую работу при малейших признаках неисправностей.</p>

                    <p>Ремонт выполняется быстро, но небольшой заминки следует ожидать, если необходимой запасной части для вашей техники не нашлось в нашем сервисе и ее требуется заказать.</p>

                    <div className="printer_textImg">
                        <div className="printer_t">
                            <p className="red_text">Основные причины неисправности лазерных принтеров:</p>
                            <ul>
                                <li>выход из строя резинового вала</li>
                                <li>износ ролика захвата бумаги</li>
                                <li>неправильные режимы работы печки</li>
                                <li>механические повреждения фотобарабана</li>
                                <li>выход из строя одной из электронных плат принтера</li>
                            </ul>
                            <p>Мы выполним все этапы диагностики и ремонта принтера с должным уровнем профессионализма, а цена нашей работы при этом будет наиболее привлекательной в Домодедово.</p>
                            <p>В целом, независимо от характера и сложности неисправностей, мы гарантируем, что ремонт лазерных принтеров пройдет в полном соответствии с необходимыми техническими процессами и в максимально сжатые сроки.</p>
                        </div>
                        <div className="printer_img">
                            <img src={epson} alt="" className="printer_jpg" />
                        </div>
                    </div>

                </div>
            </div>

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
                            <td>Замена термопленки</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Замена резинового вала</td>
                            <td>1300</td>
                        </tr>
                        <tr className="tr">
                            <td>4</td>
                            <td>Замена ролика захвата бумаги</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Замена тормозной площадки</td>
                            <td>500</td>
                        </tr>
                        <tr className="tr">
                            <td>6</td>
                            <td>Чистка лазера</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Замена USB разъема</td>
                            <td>1000</td>
                        </tr>
                        <tr className="tr">
                            <td>8</td>
                            <td>Прошивка принтера</td>
                            <td>900</td>
                        </tr>
                    </table>
                </div>

            </div>
        </section>
    )
}
