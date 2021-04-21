import React from 'react'
import '../pages/css/Footer.css'
import * as FaIcons from 'react-icons/fa'
import logo from '../images/logos.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <Link to="/"><img src={logo} alt="" className='logo' /></Link>
                <FaIcons.FaVk className="footer__icon" />
                <FaIcons.FaInstagram className="footer__icon inst" />
                <FaIcons.FaYoutube className="footer__icon" />
                <p className="nomer_footer">+7(999)-228-13-37</p>
            </footer>
        </div>
    )
}

export default Footer
