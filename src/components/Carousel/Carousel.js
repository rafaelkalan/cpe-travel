import React from 'react';
import Slider from 'infinite-react-carousel';
import RioDeJaneiro from '../../assets/img/Pontos_Turisticos/rj.png';
import Salvador from '../../assets/img/Pontos_Turisticos/pelourinho.png';
import Olinda from '../../assets/img/Pontos_Turisticos/olinda_certa.png';
import Amsterdam from '../../assets/img/Pontos_Turisticos/amsterdam_certa.png';
import Paris from '../../assets/img/Pontos_Turisticos/paris_certa.png';
import Porto from '../../assets/img/Pontos_Turisticos/porto_certa.png';
import NY from '../../assets/img/Pontos_Turisticos/ny.png';
import PhiPhi from '../../assets/img/Pontos_Turisticos/phiphi.png';
import MLake from '../../assets/img/Pontos_Turisticos/mlake.png';

function Carousel() {
  return (
    <Slider autoplay>
      <div>
        <img src={RioDeJaneiro} alt="RioDeJaneiro" />
      </div>
      <div>
        <img src={Salvador} alt="Salvador" />
      </div>
      <div>
        <img src={Olinda} alt="Salvador" />
      </div>
      <div>
        <img src={Amsterdam} alt="Salvador" />
      </div>
      <div>
        <img src={NY} alt="Salvador" />
      </div>
      <div>
        <img src={Paris} alt="Salvador" />
      </div>
      <div>
        <img src={Porto} alt="Salvador" />
      </div>
      <div>
        <img src={PhiPhi} alt="Salvador" />
      </div>
      <div>
        <img src={MLake} alt="Salvador" />
      </div>
    </Slider>
  );
}

export default Carousel;
