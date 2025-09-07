import './header.scss';
import logo from '../../shared/img/NZ_logo.jpg';

export const Header = () => {
  return (
    <div className='container header'>
      <a className='header__logo' href="">
        <img className='header__logo__img' src={logo} alt="" loading='lazy'/>
      </a>
      

      <nav className="header__nav">
        <ul className='header__nav__links'>
          <a href='#home' className='header__nav__links__link'>Главная</a>
          <a href='#about' className='header__nav__links__link'>О нас</a>
          <a href='#cont' className='header__nav__links__link'>Контакты</a>
        </ul>
      </nav>
    </div>
  )
}
