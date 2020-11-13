import React from 'react';
import './BoxText.css';
import TitleLocal from '../../components/TitleLocal';

function BoxText(){
    return(
        <div className="envolveTextos">
        <TitleLocal/>
        <div className="texto">
        <p className="descricaoLocal">  Terra de todos os santos, com muito axé, sol e mar. 
        Essa é <strong>Salvador</strong>, que ostentou o título de capital do Brasil por mais de 200 anos. 
        Seja nas ruas de pedra do Pelourinho, no alto do Elevador Lacerda ou nas diversas praias da cidade,
         a capital da Bahia encanta com seu visual histórico. E durante o Carnaval,
          não existe lugar no país mais animado do que esta cidade. 
          Veja o nosso pacote de viagem e se divirta como nunca!</p>
          </div>
        </div>
    );
}
export default BoxText;