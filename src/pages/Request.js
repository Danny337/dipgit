import React from 'react'
import ContactUs from '../components/form/ContactUs'
import './css/Request.css'

export default function Request() {
    return (
        <div className="req">
            <div className="contact">
                <h2 className="request_text">Оставьте заявку и мы с вами свяжемся!</h2>
                <ContactUs />
            </div>
        </div>
    )
}
