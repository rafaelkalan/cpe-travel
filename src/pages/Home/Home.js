import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Carousel';
import Cards from '../../components/Cards';
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
      <Cards />
    </>
  );
}

export default Home;
