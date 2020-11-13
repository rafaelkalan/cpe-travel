import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Carousel';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="searchDiv">
        <SearchBar />
      </div>
      <div className="boxSubtitle">
        <h1>Guia de Destinos</h1>
        <hr className="linha" />
      </div>
      <div className="boxMessage">
        <div>
          Procure as melhores localidades e os preços mais baixos da viagem dos seus sonhos!
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
