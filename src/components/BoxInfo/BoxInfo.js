import React from 'react';
import SpecialInfo from '../SpecialInfoTitle';


import Card from 'react-bootstrap/Card';
import './BoxInfo.css';

function BoxInfo(props){
    return(
        <div className="englobaTudo">
            <div className="boxInfo">
            <SpecialInfo></SpecialInfo>
            <img src={props.inf.info}></img>
            </div>
            
        </div>
    );

}
export default BoxInfo;