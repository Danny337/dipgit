import React from 'react'
import './css/Price.css'

function Price() {
    return (
        <div className='price'>
            <div className="price_toptext">
                <h2 className="toptext">Обслуживание техники</h2>
            </div>

            <div className="div_table">
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
                        <td>Установка программного обеспечения</td>
                        <td>550</td>
                    </tr>
                    <tr className="tr">
                        <td>6</td>
                        <td>Установка программного обеспечения</td>
                        <td>550</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Установка программного обеспечения</td>
                        <td>550</td>
                    </tr>
                    <tr className="tr">
                        <td>8</td>
                        <td>Установка программного обеспечения</td>
                        <td>550</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Установка программного обеспечения</td>
                        <td>550</td>
                    </tr>
                    <tr className="tr">
                        <td>10</td>
                        <td>Установка программного обеспечения</td>
                        <td>550</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Price
