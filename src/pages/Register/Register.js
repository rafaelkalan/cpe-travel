import React from 'react';
import { useHistory } from 'react-router-dom';

import "./Register.css";

function Register() {
  const history = useHistory();

  return (
    <div className="containerRegister">
      <h1>Register</h1>
      <button type="button" onClick={() => history.goBack()}>Voltar</button>

    </div>
  );
}

export default Register;
