import React from 'react';
import {useState} from "react";
import Box from '../../components/Box';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassord] = useState();

  const handleChangeemail = (e) =>setEmail(e.target.value);

  const handleChangepassowrd = (e) =>setPassord(e.target.value);

 
  const input = [
    
    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha'},
  ];

 
  return (
    <Box
      email={email} 
      funcaoemail= {handleChangeemail}
      funcaosenha= {handleChangepassowrd}        
      title="Pronto para voar?"
      subtitle="Faça login para conferir ofertas exclusivas e os detalhaes da sua viagem!"
      nextMessage="Não tem uma conta?"
      nextButton="Cadastrar"
      input={input}
    />
  );
}

export default Login;
