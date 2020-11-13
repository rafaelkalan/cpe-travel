import React from 'react';
import "./Local.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import BoxImages from '../../components/BoxImages';
import BoxText from '../../components/BoxText';
import BoxInfo from '../../components/BoxInfo';
import BoxItinerario from '../../components/BoxItinerario'; 
import { images } from '../../constantes/Images';
import { propTypes } from 'react-bootstrap/esm/Image';


function Local({local}){
    
    var lugar=0;

    for(var i=0; i<9; i++)
    {
        if( local === images[i].key){
            lugar=images[i];
        }
    }
    
    return(
        <>
        <Header/>
        <BoxImages foto={lugar}>          
        </BoxImages>
        <BoxText texto={lugar}>            
        </BoxText>
        <BoxItinerario itinerario={lugar}>            
        </BoxItinerario>
        <BoxInfo inf={lugar}>            
        </BoxInfo>
        <Footer></Footer>
       
        </>
    );

}
export default Local;