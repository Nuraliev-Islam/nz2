import "./creationsCard.scss";

export const CreationsCard = ({ img, title, desc, link }) => {

  const handleText = (text) => {
    if (text.length <= 220) return text;

    let trimmed = text.slice(0, 170);
    const lastSpace = trimmed.lastIndexOf(' ');
    if (lastSpace > 0) {
      trimmed = trimmed.slice(0, lastSpace);
    }

    return trimmed + '...';
  };

  return (
    <div className='creationsCard'>
      <img className='creationsCard__img' src={img} alt='' loading='lazy' />

      <div className="creationsCard__desc">
        <h1 className='creationsCard__desc__title'>{title}</h1>
        <p className='creationsCard__desc__desc'>{handleText(desc)}</p>
      </div>
        <a className='creationsCard__link btn' target="blank" href={link}>Смотреть сейчас</a>
    </div>
  )
}
