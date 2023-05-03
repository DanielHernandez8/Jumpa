import './Tarjeta.css';
import { useState } from 'react';

function Card({ titleFront, textFront, imagenfront, titleBack, textBack, imagenBack}) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2 className='tituloFront'>{titleFront}</h2>
          <img className="imgFront" src={imagenfront}/>
        </div>
        <div className="flip-card-back">
          <img className="imgBack" src={imagenBack}/>
          <h2 className='tituloBack'>{titleBack}</h2>
          <p className="texto" dangerouslySetInnerHTML={{__html: textBack}}></p>
        </div>
      </div>
    </div>
  );
}

export default Card;