import React from 'react';
import TitleItinerario from '../TitleItinerario';
import Card from 'react-bootstrap/Card';
import './BoxItinerario.css';

function BoxItinerario(props){
    return(
        <div className="globalBox">
            <TitleItinerario></TitleItinerario>
            <div className="envolveCards">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.itinerario.imagem1} />
                <Card.Body
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>{props.itinerario.titulo1}</Card.Title>
                <Card.Text>
                {props.itinerario.texto1}
                </Card.Text>
                
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.itinerario.imagem2} />
                <Card.Body
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>{props.itinerario.titulo2}</Card.Title>
                <Card.Text>
                {props.itinerario.texto2}
                </Card.Text>
                
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.itinerario.imagem3} />
                <Card.Body
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>{props.itinerario.titulo3}</Card.Title>
                <Card.Text>
                {props.itinerario.texto3}

                </Card.Text>
                
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.itinerario.imagem4} />
                <Card.Body 
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>{props.itinerario.titulo4}</Card.Title>
                <Card.Text>
                {props.itinerario.texto4}

                </Card.Text>
                
                </Card.Body>
                </Card>
            </div>

        </div>
    )

}
export default BoxItinerario;