import React from 'react';
import './BoxPrice.css';
import TitlePrice from '../../components/TitlePrice';

function BoxPrice(){
    return(
        <div className="envolveTextos">
        <TitlePrice/>
        <div className="texto">
        <p className="descricaoLocal">                                             
        Pacotes com passagem e hospedagem a partir de R$ 499,98 à vista
ou em 10x 49,99 sem juros. 
</p>
          </div>
        </div>
    );
}
export default BoxPrice;