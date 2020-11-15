import React from 'react';
import './Local.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BoxImages from '../../components/BoxImages';
import BoxText from '../../components/BoxText';
import BoxInfo from '../../components/BoxInfo';
import BoxItinerario from '../../components/BoxItinerario';

function Local({ local, images }) {
  let lugar = 0;
  for (let i = 0; i < 9; i += 1) {
    if (local === images[i].key) {
      lugar = images[i];
    }
  }

  return (
    <>
      <Header />
      <BoxImages foto={lugar} />
      <BoxText texto={lugar} />
      <BoxItinerario itinerario={lugar} />
      <BoxInfo inf={lugar} />
      <Footer />

    </>
  );
}
export default Local;
