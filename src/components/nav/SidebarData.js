import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Главная',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'О компании',
        path: '/services',
        icon: <FaIcons.FaHandsHelping />,
        class: 'nav-text'
    },
    {
        title: 'Ремонт компьютеров',
        path: '/pc',
        icon: <FaIcons.FaLaptopCode />,
        class: 'nav-text'
    },
    {
        title: 'Ремонт принтеров',
        path: '/printer',
        icon: <AiIcons.AiFillPrinter />,
        class: 'nav-text'
    },
    // {
    //     title: 'Ремонт мониторов',
    //     path: '/price',
    //     icon: <FaIcons.FaDesktop />,
    //     class: 'nav-text'
    // },
    {
        title: 'Ремонт телефонов',
        path: '/mobile',
        icon: <FaIcons.FaMobileAlt />,
        class: 'nav-text'
    },
    // {
    //     title: 'Ремонт ноутбуков',
    //     path: '/price',
    //     icon: <FaIcons.FaLaptop />,
    //     class: 'nav-text'
    // },
    {
        title: 'Контакты',
        path: '/contacts',
        icon: <FaIcons.FaAddressCard />,
        class: 'nav-text'
    },
    {
        title: 'Оставить заявку',
        path: '/request',
        icon: <AiIcons.AiOutlineMail />,
        class: 'nav-text'
    },

]