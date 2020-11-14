import React from 'react';
import './TitleLocal.css';

function TitleLocal({teste}){
    return(
        <div className="englobaTitulo">
        <h1>Sobre {teste}</h1>
        <hr className="sublinhado"/>
        </div>
    );

}
export default TitleLocal;