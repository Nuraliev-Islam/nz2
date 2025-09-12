import './connect.scss';
import { FaYoutube, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import vk from '../../shared/icon/vk.svg';
import boosty from '../../shared/icon/boosty.svg';

export const Connect = () => {
    return (
        <div id='cont' className='container connect'>
            <h1 className='connect__title'>Контакты Nazzy</h1>

            <div className="connect__link">
                <a target='blank' href="https://www.youtube.com/@NazzyChannel">
                    <div className='flex'>
                        <FaYoutube size={30} color="white" />
                        <h1>YouTube</h1>
                    </div>
                </a>

                <a target='blank' href="https://t.me/nazzy_ch">
                    <div className='flex'>
                        <FaTelegramPlane size={30} color="white" />
                        <h1>Telegram</h1>
                    </div>
                </a>
                    

                <a target='blank' href="https://discord.gg/pgxw3he">
                    <div className='flex'>
                        <FaDiscord size={30} color="white" />
                        <h1>Discord</h1>
                    </div>
                </a>

                <a target='blank' href="https://vk.com/nazzydiatriche">
                    <div className='flex'>
                        <img src={vk} alt="" loading='lazy' />
                        <h1>VK</h1>
                    </div>
                </a>

                <a target='blank' href="https://boosty.to/nazzych">
                    <div className='flex'>
                        <img src={boosty} alt="" loading='lazy' />
                        <h1>Boosty</h1>
                    </div>
                </a>
            </div>
        </div>
    )
}
