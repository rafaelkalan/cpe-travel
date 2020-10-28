import React from 'react';
import { useHistory } from 'react-router-dom';
//import Input from "../../components/input/Input";
import {Form, Button} from "react-bootstrap";
import "./Login.css";

function Login() {
  const history = useHistory();

  return (
    <div className="base">
      <div className="container">
        <div className="principal">
          <img src="/img/icones/completo_azul.png" alt="CP&Travel"/>
          <h2>Pronto para voar?</h2>
          <br/>
          <p className="subtitle">Faça login para conferir ofertas exclusivas e os detalhes da sua viagem!</p>
          <Form className ="inputs">
            

            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Digite o seu email" />
            </Form.Group>
            <Form.Group controlId="senha">
              <Form.Control type="password" placeholder="Digite a sua senha" />
            </Form.Group>
            <Button variant="link">Esqueceu a senha?</Button><br/>
            
            <Button variant="primary" size="lg">Próximo</Button>{' '}
            <br/><br/>
            <p>Não tem uma conta?</p>
            <Button variant="link">Cadastre-se</Button>

          </Form>

          <button type="button" onClick={() => history.goBack()}>Voltar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
