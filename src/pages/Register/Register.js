import React from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import "./Register.css";

function Register() {
  const history = useHistory();

  return (
    <div className="base">
          <div className="container">
            <div>
              <img src="/img/icones/completo_azul.png" alt="CP&Travel"/>
              <h2>Vamos começar?</h2>
              <br/>
              <p className="subtitle">Crie uma conta para utilizar os nossos serviços com facilidade</p>
              <Form className ="inputs">
                

                <Form.Group controlId="email">
                  <Form.Control type="email" placeholder="Digite o seu email" />
                </Form.Group>
                <Form.Group controlId="email2">
                  <Form.Control type="email" placeholder="Digite o seu email novamente" />
                </Form.Group>
                <Form.Group controlId="senha">
                  <Form.Control type="password" placeholder="Digite a sua senha" />
                </Form.Group>
                <Form.Group controlId="senha2">
                  <Form.Control type="password" placeholder="Digite a sua senha novamente" />
                </Form.Group>

                <p>Ao se cadastrar, você aceita os Termos de Serviço e a Política de Privacidade</p>
                <Button variant="primary">Próximo</Button>{' '}
                <br/><br/>
                <p>Já tem uma conta?</p>
                <Button variant="link">Logar</Button>

              </Form>

              <button type="button" onClick={() => history.goBack()}>Voltar</button>
            </div>
          </div>
        </div>
  );
}

export default Register;
