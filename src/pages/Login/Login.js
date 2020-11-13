import React from 'react';
import {useState} from "react";
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassord] = useState();
  /*const input = [
    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
  ];*/

  function login(){
    alert("Bem Vindo! \n" + email);
    history.push("Home");
    }

    function regis(){

      alert("Insira seus dados novamente para o email cadastrado:\n" + email);
      history.push("cadastro");
    }
  return (
    <div className="containerLogin">
      <div className="container">
        <div className="containerFormulario">
          <img src="/img/Icones/logoAzul.png" alt="CP&Travel" />
          <h2 className="title">Pronto para voar?</h2>
          <p className="subtitle">
            Faça login para conferir ofertas exclusivas e os detalhes da sua viagem!
          </p>
          <Form>agora
            
              <Form.Group controlId="email">
                <Form.Control type="email" 
                placeholder="Email" 
                onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
            
              
                <Form.Group controlId="senha">
                  <Form.Control type="password" 
                  placeholder="Senha" 
                  onChange={(e)=>setPassord(e.target.value)}/>
                      </Form.Group>
                    
            
            <div className="fundocontainer1">
              <Button variant="link" onClick={regis}>Esqueceu a senha?</Button>
            </div>
            <Button variant="primary" size="lg" onClick={login}>Próximo</Button>  
            {' '}
            <div className="fundocontainer2">
              <p className="linkRegister">Não tem uma conta?</p>
              <Button variant="history" onClick={() => history.push('/cadastro')}>Cadastre-se</Button>
            </div>
          </Form>
                </div>
      </div>
    </div>
  );
}

export default Login;
