import './aboutUs.scss'
import aboutUsImg from '../../shared/img/aboutUs__img.png';

export const AboutUs = () => {
  return (
    <div id='about' className='container about'>
        <img className='about__img' src={aboutUsImg} alt="" />

        <div className="about__info">
            <h1 className='about__info__title'>О нас</h1>

            <p className='about__info__text'>Nazzy — ваш главный источник высококачественной, захватывающей анимации Minecraft, захватывающих сериалов и полнометражных фильмов. Мы оживляем ваши любимые блочные миры с помощью потрясающей графики, захватывающих сюжетов и страсти к творческому повествованию. Наша команда преданных своему делу специалистов стремится создавать контент, который развлекает и вдохновляет поклонников всех возрастов по всему миру.</p>
        </div>
    </div>
  )
}
