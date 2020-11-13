import React from 'react';
import './BoxText.css';
import TitleLocal from '../../components/TitleLocal';

function BoxText(props){
    return(
        <div className="envolveTextos">
        <TitleLocal teste={props.texto.title}/>
        <div className="texto">
        <p className="descricaoLocal">{props.texto.descricao} </p>
          </div>
        </div>
    );
}
export default BoxText;