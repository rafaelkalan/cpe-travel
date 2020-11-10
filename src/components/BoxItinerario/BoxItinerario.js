import React from 'react';
import TitleItinerario from '../TitleItinerario';
import Card from 'react-bootstrap/Card';
import './BoxItinerario.css';

function BoxItinerario(){
    return(
        <div className="globalBox">
            <TitleItinerario></TitleItinerario>
            <div className="envolveCards">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/img/Pontos_Turisticos/cardpelourinho.jpg" width="100px" height="200px"/>
                <Card.Body
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>Pelourinho e Elevador Lacerda</Card.Title>
                <Card.Text>
                Com belas construções barrocas dos séculos 17 e 18, 
                o Centro Histórico de Salvador, na Cidade Alta, 
                é Patrimônio da Humanidade pela UNESCO. Suas ladeiras contam com restaurantes, 
                lojas e bares atrás das fachadas de casarões coloridos. As festas noturnas agitam o 
                Pelourinho, especialmente na terça-feira, com a festa da Benção do Pelô. Uma maneira 
                de chegar ao bairro é pegando o Elevador Lacerda, que liga a Cidade Baixa ao Centro 
                Histórico.
                </Card.Text>
                
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/img/Pontos_Turisticos/cardForteSanta.jpg" />
                <Card.Body
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>Fortes de Santa Maria e São Diogo</Card.Title>
                <Card.Text>
                Localizados na Barra, os fortes de Santa Maria e São Diogo foram revitalizados 
                e hoje abrigam exposições, um café e uma loja de suvenir. Construídos para proteger 
                a cidade, atualmente são museus audiovisuais. O forte Santa Maria homenageia o fotógrafo 
                francês Pierre Verge, e o Forte São Diogo o artista plástico argentino Carybé. O ingresso
                 é único para as duas atrações e as visitas podem ser feitas a pé. A entrada é gratuita às
                  quartas-feiras.

                </Card.Text>
                
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/img/Pontos_Turisticos/cardIgreja.jpg" />
                <Card.Body
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>Igreja do Bonfim</Card.Title>
                <Card.Text>
                Construída em 1754 para abrigar a imagem do Senhor Bom Jesus trazida de Lisboa em 1745,
                 a igreja tem arquitetura neoclássica com fachada rococó. O santuário é um ícone da fé 
                 baiana, atraindo muitos devotos, turistas e peregrinos. As famosas fitinhas são 
                 confeccionadas desde o início do século 19 e têm a medida do comprimento do braço direito
                  até o peito da imagem do Senhor do Bonfim.

                </Card.Text>
                
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/img/Pontos_Turisticos/cardMorroSP.jpg" />
                <Card.Body 
                style={{backgroundColor:"#f5f5f5"}}>
                <Card.Title
                style={{color:" #274CA9"}}>Morro de São Paulo</Card.Title>
                <Card.Text>
                O povoado de Morro de São Paulo não permite a circulação de carros – apenas tratores, 
                jardineiras e os veículos das pousadas. Conheça a badalada Segunda Praia, frequentada 
                por gente jovem e bonita. A praia conta com barracas com música.

                </Card.Text>
                
                </Card.Body>
                </Card>
            </div>

        </div>
    )

}
export default BoxItinerario;