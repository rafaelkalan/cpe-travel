import React from 'react';
import { images } from '../../constantes/Images';
import { useHistory } from "react-router-dom";
import Local from '../../pages/Local/Local';

import './Cards.css';

function Cards() {
  const history= useHistory();
  
  return (
    <div className="cardContainer">
      {
        images.map((card) => (
          <button key={card.key} type="button" className="cardButton" onClick={ (props) => (history.push(card.key)) } >
            <div className="divCardImage">
              <img src={card.cards} alt={card.key} className="cardImage" />
            </div>
            <div className="cardTitle">
              {card.title}
            </div>
            <div className="cardSubtitleContainer">
              <hr className="cardSubtitleLine" />
              <div className="cardSubtitle">
                {card.subtitle}
              </div>
              <hr className="cardSubtitleLine" />
            </div>
          </button>
        ))
      }
    </div>
  );
}

export default Cards;
