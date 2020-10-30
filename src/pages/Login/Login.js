import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

function Login() {
  const history = useHistory();

  const input = [
    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
  ];

  return (
    <div className="containerLogin">
      <div className="container">
        <div className="containerFormulario">
          <img src="/img/Icones/logoAzul.png" alt="CP&Travel" />
          <h2 className="title">Pronto para voar?</h2>
          <p className="subtitle">
            Faça login para conferir ofertas exclusivas e os detalhes da sua viagem!
          </p>
          <Form>
            {input.map((item) => (
              <Form.Group controlId={item.controlId}>
                <Form.Control type={item.type} placeholder={item.placeholder} />
              </Form.Group>
            ))}
            <div className="fundocontainer1">
              <Button variant="link">Esqueceu a senha?</Button>
            </div>
            <Button variant="primary" size="lg">Próximo</Button>
            {' '}
            <div className="fundocontainer2">
              <p className="linkRegister">Não tem uma conta?</p>
              <Button variant="link" onClick={() => history.push('/cadastro')}>Cadastre-se</Button>
            </div>
          </Form>
                  </div>
      </div>
    </div>
  );
}

export default Login;
