import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css";

function Login() {
  const history = useHistory();

  return (
    <div className="containerLogin">
      <h1>Login</h1>
      <button type="button" onClick={() => history.push('/home')}>Voltar</button>
    </div>
  );
}

export default Login;
