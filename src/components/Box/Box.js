import React from 'react';
import { useHistory } from 'react-router-dom';
import './Box.css';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import Input from '../Input';

function Box({
  title, subtitle, nextMessage, nextButton, input,
}) {
  const history = useHistory();
  const marginLogin = nextButton === 'Cadastrar' ? '100px' : '0px';
  const url = nextButton === 'Cadastrar' ? '/img/Icones/novofundo_login.png' : '/img/Icones/novofundo-cadastro.png';

  return (
    <div className="containerRegister" style={{ backgroundImage: `url(${url})` }}>
      <div className="baseRegister">
        <div className="boxContainer">
          <BiArrowBack className="back_button" type="button" onClick={() => history.push('/home')} />
          <img src="img/Icones/logoAzul.png" alt="Logo Azul" />
        </div>
        <div style={{ marginTop: marginLogin }}>
          <h2 className="H2title">{title}</h2>
          <p className="text">
            {subtitle}
          </p>
          <Input input={input} />

          {nextButton === 'Cadastrar'
          && (
          <div className="fundocontainer1" alt="Help">
            <Button variant="link">Esqueceu a senha?</Button>
          </div>
          )}

          {nextButton === 'Logar' && (
          <p className="subtitle">
            Ao se cadastrar, você aceita os Termos de Serviço e a Política de
            Privacidade
          </p>
          )}

          <div className="next_button">
            <Button variant="primary" type="Proximo">
              Próximo
            </Button>
          </div>
          <div className="fundocontainer">
            <p className="linkLogin">{nextMessage}</p>
            <Button
              variant="link"
              onClick={() => {
                if (nextButton === 'Cadastrar') history.push('/cadastro');
                else history.push('/login');
              }}
            >
              {nextButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
