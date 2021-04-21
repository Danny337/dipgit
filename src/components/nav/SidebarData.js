import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'главная',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'переход',
        path: '/services',
        icon: <FaIcons.FaHandsHelping />,
        class: 'nav-text'
    },
    {
        title: 'ремонт компьютеров',
        path: '/pc',
        icon: <FaIcons.FaLaptopCode />,
        class: 'nav-text'
    },
    {
        title: 'ремонт принтеров',
        path: '/printer',
        icon: <AiIcons.AiFillTool />,
        class: 'nav-text'
    },
    {
        title: 'ремонт мониторов',
        path: '/price',
        icon: <AiIcons.AiFillTool />,
        class: 'nav-text'
    },
    {
        title: 'ремонт телефонов',
        path: '/price',
        icon: <AiIcons.AiFillTool />,
        class: 'nav-text'
    },
    {
        title: 'ремонт ноутбуков',
        path: '/price',
        icon: <AiIcons.AiFillTool />,
        class: 'nav-text'
    },
    {
        title: 'контакты',
        path: '/contacts',
        icon: <FaIcons.FaAddressCard />,
        class: 'nav-text'
    },
    {
        title: 'оставить заявку',
        path: '/request',
        icon: <AiIcons.AiOutlineMail />,
        class: 'nav-text'
    },

]