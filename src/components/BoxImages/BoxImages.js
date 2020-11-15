import React from 'react';
import './BoxImages.css';

function BoxImages(props){
    return(
        <div className="boxDestino">
            <img src={props.foto.capa} height='100%' width='100%'></img>

        </div>
    );

}
export default BoxImages;