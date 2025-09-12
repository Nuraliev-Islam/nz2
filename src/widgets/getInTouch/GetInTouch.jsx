import './getInTouch.scss';
import { FaTelegramPlane } from 'react-icons/fa';

export const GetInTouch = () => {
  return (
    <div className='container get'>
        <h1 className='get__title'>Свяжитесь со мной</h1>

        <h2 className='get__mail'>Деловые запросы: <a target='blank' href="mailto:nzadsmail@gmail.com">nzadsmail@gmail.com</a></h2>

        <a className='btn' target='blank' href="https://t.me/NZ_msg"><FaTelegramPlane size={25} color="#750000" />Свяжитесь со мной в телеграмм</a>
    </div>
  )
}
