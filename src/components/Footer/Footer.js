import React from 'react';
import './Footer.css';

function Footer(){

const footerItens = [
    {
      path: '/',
      text: 'Siga nos nas redes sociais',
    },
];
return (
  <div className="fundoFooter" >
    <div className = "iconesFooter" >
    <div  className="containerFormulario">  
    <div className="site-footer">  </div>
        <p className="linkRedesocial">Siga-nos em nossas Redes Sociais:</p>
    <img src="/img/Icones/redes-sociais.png" width="279" height="58" />
    </div>
    </div>
    </div>

)
}
export default Footer;


