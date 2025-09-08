import './aboutUs.scss'
import aboutUsImg from '../../shared/img/aboutUs__img.png';

export const AboutUs = () => {
  return (
    <div id='about' className='container about'>
        <img className='about__img' src={aboutUsImg} alt="" />

        <div className="about__info">
            <h1 className='about__info__title'>О нас</h1>

            <p className='about__info__text'>Nazzy — это YouTube-канал, где сам Нейзи и его друзья создают увлекательные мини-режимы по Minecraft, а также делают атмосферные анимации по любимому блочному миру. Мы объединяем творчество, юмор и командную работу, чтобы радовать зрителей интересным контентом и вдохновлять сообщество майнкрафтеров по всему миру.</p>
        </div>
    </div>
  )
}
