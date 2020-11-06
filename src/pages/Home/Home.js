import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Carousel/Carousel';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="boxSubtitle">
        <h1>Guia de Destinos</h1>
        <hr className="linha" />
      </div>
      <div className="boxMessage">
        <p>Procure as melhores localidades e os preços mais baixos da viagem dos seus sonhos!</p>
      </div>
    </>
  );
}

export default Home;
