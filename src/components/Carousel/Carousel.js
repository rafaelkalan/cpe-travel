import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { images } from './images';
import './Carousel.css';

function Carousel() {
  const [show, setShow] = useState('hidden');
  const getNextArrowIcon = () => (
    <div
      className="divNextArrow"
      onMouseOver={() => (setShow('visible'))}
      onMouseOut={() => (setShow('hidden'))}
      style={{ width: '50%', display: 'flex', justifyContent: 'flex-start' }}

    >
      <IoIosArrowBack
        style={{ visibility: show }}
        className="arrows"
      />
    </div>
  );
  const getPrevArrowIcon = () => (
    <div
      className="divPrevArrow"
      onMouseOver={() => (setShow('visible'))}
      onMouseOut={() => (setShow('hidden'))}
      style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}

    >
      <IoIosArrowForward
        style={{ visibility: show }}
        className="arrows"
      />
    </div>

  );
  return (
    <div className="box">
      <Slider
        autoplay
        prevArrow={getNextArrowIcon()}
        nextArrow={getPrevArrowIcon()}
      >
        {
          images.map((fotos) => (
            <div
              key={fotos.title}
            >
              <img className="image" src={fotos.image} alt={fotos.title} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Carousel;
