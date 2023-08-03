import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import address from '/src/js/Elements/address';
import phone from '/src/js/Elements/phone';
import networks from '/src/js/Elements/networks';
import '/src/scss/Components/footer.scss'

export default function Header(props) {
    const [footerSections] = useState([
        {
          title: 'О компании',
          items: [
              {
                title: 'Партнёрская программа',
                link: '/partner',
              },
              {
                title: 'Вакансии',
                link: '/vacancies',
              },
          ],
        },
        {
          title: 'Меню',
          items: [
              {
                title: 'Расчёт стоимости',
                link: '/calculate',
              },
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
                title: 'Наши клиенты',
                link: '/clients',
              },
              {
                title: 'Кейсы',
                link: '/cases',
              },
              {
                title: 'Благодарственные письма',
                link: '/letters',
              },
              {
                title: 'Сертификаты',
                link: '/certificates',
              },
              {
                title: 'Блог на Youtube',
                link: '/blog',
              },
              {
                title: 'Вопрос / Ответ',
                link: '/questions',
              },
          ],
        },
    ]);
    
    return (
      <div className='footer__conteiner'>
        <div className='footer'>
            <div className='footer__top'>
                {footerSections.map((section, index) => (
                    <div key={index} className={'footer__top_section footer__top_section-'+index}>
                    <h3 className='footer__top_title'>{section.title}</h3>
                    <nav className='footer__top_menu'>
                        {section.items.map((item, index) => (
                                <Link key={index} to={item.link} className='footer__top_item'>{item.title}</Link>
                        ))}
                    </nav>
                    </div>
                ))}
                <div className='footer__top_section'>
                    <h3 className='footer__top_title'>Контакты</h3>

                    <div className='footer__top_phone'>{phone}</div>
                    <div className='footer__top_networks'>
                        {networks.map((item, index) => (
                            <a key={index} className='header__networks_item' target='_blank' href={item.link}>
                            <img src={item.icon} alt='' />
                            </a>
                        ))}
                    </div>
                    <div className='footer__top_address'>{address}</div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__bottom_text'>©WELBEX 2022. Все права защищены. <a href=''>Политика конфиденциальности</a></p>
            </div>
        </div>
      </div>
    );
};