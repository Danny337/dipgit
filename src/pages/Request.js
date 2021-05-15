import React from 'react'
import ContactUs from '../components/form/ContactUs'
import './css/Request.css'

export default function Request() {
    return (
        <div className="req">
            <div className="contact">
                <h2 className="request_text">Оставить заявку онлайн</h2>
                <p className="request_p">В данном разделе вы можете оставить заявку на ремонт компьютеров, телефонов, принтеров и другой компьютерной техники. <br /> <span className="req_span">Заполните поля формы и наш специалист с Вами свяжется.</span></p>
                <ContactUs />
                <p className="request_p">Вы можете обратиться к нам с любым вопросом.

                Наш абонентский отдел обработает заявку и при необходимости свяжется с Вами. Пожалуйста опишите Ваш вопрос как можно подробнее.

                Так же Вы можете оставить свои пожелания по улучшению работы сервиса.</p>
            </div>
        </div>
    )
}
