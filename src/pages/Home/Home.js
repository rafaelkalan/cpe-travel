import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Carousel';
import Cards from '../../components/Cards';

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <h1>Home</h1>
      <Cards />
    </>
  );
}

export default Home;
