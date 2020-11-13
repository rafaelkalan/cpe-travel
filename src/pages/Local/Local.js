import React from 'react';
import "./Local.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import BoxImages from '../../components/BoxImages';
import BoxText from '../../components/BoxText';
import BoxInfo from '../../components/BoxInfo';
import BoxItinerario from '../../components/BoxItinerario'; 


function Local(){
    return(
        <>
        <Header/>
        <BoxImages>          
        </BoxImages>
        <BoxText>            
        </BoxText>
        <BoxItinerario>            
        </BoxItinerario>
        <BoxInfo>            
        </BoxInfo>
        <Footer></Footer>
       
        </>
    );

}
export default Local;