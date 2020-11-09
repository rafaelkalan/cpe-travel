import React from 'react';
import SpecialInfo from '../SpecialInfoTitle';
import './BoxInfo.css';

function BoxInfo(){
    return(
        <div className="englobaTudo">
            <div className="boxInfo">
            <SpecialInfo></SpecialInfo>
            <img src="/img/Pontos_Turisticos/InfoSalvador.png"></img>
            </div>
        </div>
    );

}
export default BoxInfo;