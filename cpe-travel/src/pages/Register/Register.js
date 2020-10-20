import React from 'react';
import { useHistory } from 'react-router-dom'


function Register() {
    const history = useHistory();

    return (
        <div>
            <h1>Register</h1>
            <button onClick={() => history.goBack()}>Voltar</button>
        </div>
    );
}

export default Register;