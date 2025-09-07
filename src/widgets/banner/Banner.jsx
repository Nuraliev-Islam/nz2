import './banner.scss';
import banner from '../../shared/img/upscalemedia-transformed.png';


export const Banner = () => {

  return (
    <div id='home' className='container banner'>
        
      <div className="banner__info">
        <h1 className='banner__info__title'>Nazzy</h1>

        <h3 className='banner__info__text'>Создатель анимаций, сериалов, фильмов и уникальных игровых режимов во вселенной Minecraft.</h3>

        <a target='_blank' href="https://www.youtube.com/@NazzyChannel"><button className='banner__info__btn'>Смотреть на YouTube</button></a>
      </div>

      <img className='banner__img' src={banner} alt="" loading='lazy' />
    </div>
  )
}
