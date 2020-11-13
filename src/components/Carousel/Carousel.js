import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../constantes/Images';
import './Carousel.css';

function SliderCarousel() {
  const [show, setShow] = useState('hidden');
  const getPrevArrowIcon = () => (
    <div className="divPrevArrow">
      <IoIosArrowBack
        style={{ visibility: show }}
        className="arrowsCarousel"
      />
    </div>
  );
  const getNextArrowIcon = () => (
    <div className="divNextArrow">
      <IoIosArrowForward
        style={{ visibility: show }}
        className="arrowsCarousel"
      />
    </div>
  );
  return (
    <Carousel
      indicators={false}
      nextIcon={getNextArrowIcon()}
      prevIcon={getPrevArrowIcon()}
      onMouseOver={() => (setShow('visible'))}
      onMouseOut={() => (setShow('hidden'))}
      className="boxCarousel"
    >
      {
        images.map((fotos) => (
          <Carousel.Item
            key={fotos.key}
            interval={3000000}
          >
            <div className="imageCarousel" style={{ backgroundImage: `url(${fotos.carousel})` }} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default SliderCarousel;
