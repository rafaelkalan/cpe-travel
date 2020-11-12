import React from 'react';
import Box from '../../components/Box';

function Register() {
  const input = [
    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'email2', type: 'email', placeholder: 'Confirme o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
    { controlId: 'senha2', type: 'password', placeholder: 'Confirme a sua senha' },
  ];
  return (
    <Box
      title="Vamos começar?"
      subtitle="Crie uma conta para utilizar os nossos serviços com facilidade."
      nextMessage="Já tem uma conta?"
      nextButton="Logar"
      input={input}
    />
  );
}

export default Register;
