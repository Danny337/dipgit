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
        title: 'Ремонт пк',
        path: '/services',
        icon: <AiIcons.AiFillTool />,
        class: 'nav-text'
    },
    {
        title: 'Цены',
        path: '/price',
        icon: <FaIcons.FaMoneyBillWave />,
        class: 'nav-text'
    },
    {
        title: 'Контакты',
        path: '/contacts',
        icon: <FaIcons.FaAddressCard />,
        class: 'nav-text'
    },

]