import React from 'react';
import { BiSearchAlt2 } from 'react-icons/all';
import "./SearchBar.css";


function SearchBar(){

    return(
        <div className="SearchBar">
            <div className="envolvelupa">
            <BiSearchAlt2 className="lupa"/>            
            </div>        
            <input className="imputSearch"
            placeholder="Digite o local de Destino">
            </input>          
        </div>
    );
}
export default SearchBar;