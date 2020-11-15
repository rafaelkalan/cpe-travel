import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Carousel';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import './Home.css';

function Home() {
  const [search, setSearch] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8080/locals';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setImages([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <>
      <Header />
      <Slider images={images} />
      <div className="searchDiv">
        <SearchBar handleChange={handleChange} />
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
      <Cards search={search} images={images} />
      <Footer />
    </>
  );
}

export default Home;
