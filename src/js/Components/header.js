import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/img/logo_welbex.svg';
import phone from '/src/js/Elements/phone';
import networks from '/src/js/Elements/networks';
import '/src/scss/Components/header.scss'

export default function Header(props) {
    const [headerNavItems] = useState([
        {
          title: 'Услуги',
          link: '/services',
        },
        {
          title: 'Виджеты',
          link: '/widgets',
        },
        {
          title: 'Интеграции',
          link: '/integrations',
        },
        {
          title: 'Кейсы',
          link: '/cases',
        },
        {
          title: 'Сертификаты',
          link: '/certificates',
        },
    ]);

    return (
      <div className='header__conteiner'>
        <div className='header'>
            <Link to='/'>
                <div className='header__logo'>
                    <img src={logo} alt='' />
                    <p className='header__logo_text'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                </div>
            </Link>
            <nav className='header__menu'>
                {headerNavItems.map((item, index) => (
                    <Link to={item.link} key={index} className='header__menu_item'>{item.title}</Link>
                ))}
            </nav>
            <div className='header__phone'>{phone}</div>
            <div className='header__networks'>
              {networks.map((item, index) => (
                <a key={index} className='header__networks_item' target='_blank' href={item.link}>
                  <img src={item.icon} alt='' />
                </a>
              ))}
            </div>
        </div>
      </div>
    );
};