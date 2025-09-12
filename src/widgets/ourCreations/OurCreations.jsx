import './ourCreations.scss';
import { CreationsCard } from '../../features';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const data = [
    {
        img: 'https://i.ytimg.com/vi/Ivco8Ysbg0Y/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLx4lF1XyM5v3FT9mVMab0gRrkHQ',
        title: 'Я ЗАПЕРТ С МОНСТРОМ В ЗАКУЛИСЬЕ. BACKROOMS',
        description: 'Бэкрумс - это крайне необычное место, которое будто бы генерируется случайным образом. Чем дальше ты продвигаешься по закулисью, тем более страннее становится окружающее пространство.',
        link: 'https://www.youtube.com/watch?v=Ivco8Ysbg0Y'
    },
    {
        img: 'https://i.ytimg.com/vi/wtz4UNSp5ss/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgZyroF_QJifZ1atcy6u439-nIHw',
        title: 'Один из НАС - ЗАРАЖЁН. Но Кто? INFECTED',
        description: '☣️ INFECTED - Это психологическая игра на основе Minecraft, похожая на Мафию (или же Deceit, Among Us).',
        link: 'https://www.youtube.com/watch?v=wtz4UNSp5ss'
    },
    {
        img: 'https://i.ytimg.com/vi/2PypizmakHA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAUkJqp7eLFbn-tQRBKjBrXsd90Rw',
        title: "НЕ ХОДИ ТУДА. DON'T GO THERE... [пилотный эпизод сериала]",
        description: `Главный герой устраивается на работу в глухую тайгу смотрителем геологической базы под названием "SEVER". Все неудобства компенсируются хорошей заработной платой, поэтому Чарли Кларк легко соглашается с условиями.
        Но согласился ли он, если бы сразу узнал, что тут происходит на самом деле?`,
        link: 'https://www.youtube.com/watch?v=2PypizmakHA'
    },
    {
        img: 'https://i.ytimg.com/vi/oliw8A5puJ8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbPuE7J8-4oTL_Qzdf1Nh80buA4A',
        title: 'Я ОХОЧУСЬ на ДЕМОНА в Отеле. HOTEL',
        description: '💀HOTEL - Это кооперативный хоррор на движке Minecraft, где ты с остальными игроками берёшь на себя роль охотника на демонов.',
        link: 'https://www.youtube.com/watch?v=oliw8A5puJ8&t=6s'
    },
    {
        img: 'https://i.ytimg.com/vi/-KVNLq6wggs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6iIDZRdgL3rnQ8gYN-zu6NVoqRQ',
        title: 'ОХОТА на МЕНЯ НАЧАЛАСЬ! - В лесу с ДОЛГАМИ и ЗВЕРЕМ',
        description: 'Debt Hunt — это режим в Minecraft, где моя цель - выжить, заработать деньги и выплатить огромный долг, преследующий на протяжении всего пути. Всё было бы не так сложно, если бы меня не пытался поймать ночной монстр, который выходит на охоту с закатом солнца.',
        link: 'https://www.youtube.com/watch?v=-KVNLq6wggs&t=24s'
    },
    {
        img: 'https://i.ytimg.com/vi/Dwc39bLb_mM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLjgKDSaYmnP20S7ISUkympvSNTw',
        title: 'ТАЙНА ЛЕСНОГО МОНСТРА - Анимация Minecraft',
        description: 'Наши герои вынуждены выплатить штраф выписанный подозрительным смотрителем леса. Что скрывает лес и его обитатели? Кто знает...',
        link: 'https://www.youtube.com/watch?v=Dwc39bLb_mM&t=290s'
    }
]

export const OurCreations = () => {

    return (
        <div className='container creations'>
            <h1 className='creations__text'>Наши видео</h1>

            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    992: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CreationsCard
                            img={item.img}
                            title={item.title}
                            desc={item.description}
                            link={item.link}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}
