import React, { useState } from 'react';
import '/src/scss/Pages/main.scss'
import '/src/scss/Components/balls.scss';
import purpleBall from '/src/img/balls/purple ball.png';
import purpleLightBall from '/src/img/balls/purple light.png';
import redBall_1 from '/src/img/balls/red ball-1.png';
import redBall from '/src/img/balls/red ball.png';
import redLightBall from '/src/img/balls/red light.png';
import bk from '/src/img/balls/bg.png';

export default function Main() {
  const balls = [
    {
      id: 'purple_ball',
      image: purpleBall,
    },
    {
      id: 'purple_light',
      image: purpleLightBall,
    },
    {
      id: 'red_ball-1',
      image: redBall_1,
    },
    {
      id: 'red_ball',
      image: redBall,
    },
    {
      id: 'red_light',
      image: redLightBall,
    },
  ];
  const [services] = useState([
    {
      title: 'Виджеты',
      description: '30 готовых решений',
    },
    {
      title: 'Dashboard',
      description: 'с показателями вашего бизнеса',
    },
    {
      title: 'Skype Аудит',
      description: 'отдела продаж и CRM системы',
    },
    {
      title: '35 дней',
      description: 'использования CRM',
    },
  ]);
  return (
    <div className='main' style={{backgroundImage: `url(${bk})`}}>
        {balls.map((item, index) => (
          <div key={index} id={item.id} className="ball">
              <img src={item.image} alt="" />
          </div>
         ))}
      

      <div className='main__left'>
        <h1 className='main__left_title'>Зарабатывайте больше<span> с WELBEX</span></h1>
        <p className='main__left_text'>Развиваем и контролируем продажи за вас</p>
      </div>

      <div className='main__right'>
        <p className='main__right_title'>Вместе с<span> бесплатной консультацией </span>мы дарим:</p>
        <div className='main__right_list main__list'>
          {services.map((service, index) => (
            <div key={index} className='main__list_item'>
              <h2 className='main__list_title'>{service.title}</h2>
              <p className='main__list_text'>{service.description}</p>
            </div>
          ))}
        </div>

        <button className='main__right_button'>
          Получить консультацию
        </button>
      </div>
    </div>
  )
}