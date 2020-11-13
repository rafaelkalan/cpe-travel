import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import './Register.css';

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassord] = useState();
  const input = [
    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'email2', type: 'email', placeholder: 'Confirme o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
    { controlId: 'senha2', type: 'password', placeholder: 'Confirme a sua senha' }];

    function login(){
      alert("Bem Vindo! \n" + email);
      history.push("Home");
    }
  return (
    <div className="containerRegister">
      <div className="container">
        <div className="containerFormulario">
          <img src="/img/Icones/logoAzul.png" alt="CP&Travel" />
          <h2 className="title">Vamos começar?</h2>
          <p className="subtitle">
            Crie uma conta para utilizar os nossos serviços com facilidade
          </p>
          <Form>
            {input.map((item) => (
              <Form.Group controlId={item.controlId}>
                <Form.Control type={item.type} placeholder={item.placeholder} />
              </Form.Group>

            ))}
            <p>
              Ao se cadastrar, você aceita os Termos de Serviço e a Política de
              Privacidade
            </p>
            <Button variant="primary"  onClick={login}>Próximo</Button>
            {' '}
            <div className="fundocontainer">
              <p className="linkLogin">Já tem uma conta?</p>
              <Button variant="link" onClick={() => history.push('/login')}>
                Logar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Register;
