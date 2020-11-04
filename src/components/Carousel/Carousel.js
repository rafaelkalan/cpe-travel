import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-bootstrap/Carousel';
import { images } from './images';
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
    >
      {
        images.map((fotos) => (
          <Carousel.Item
            key={fotos.title}
            interval={3000}
          >
            <img className="imageCarousel" src={fotos.image} alt={fotos.title} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default SliderCarousel;
