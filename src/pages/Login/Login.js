import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <button type="button" onClick={() => history.push('/home')}>Voltar</button>
    </div>
  );
}

export default Login;
