import './getInTouch.scss';
import { FaTelegramPlane } from 'react-icons/fa';

export const GetInTouch = () => {
  return (
    <div className='container get'>
        <h1 className='get__title'>Свяжитесь со мной</h1>

        <h2 className='get__mail'>Деловые запросы: <a target='blank' href="mailto:contact@nazzychannel.com">contact@nazzychannel.com</a></h2>

        <a target='blank' href="https://t.me/NZ_msg"><button className='flex get__btn'><FaTelegramPlane size={25} color="#750000" />Свяжитесь со мной в телеграмм</button></a>
    </div>
  )
}
