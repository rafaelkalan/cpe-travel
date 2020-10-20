import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <h2 style={{ color: 'blue' }}> Grupo 4 cabuloso </h2>
            <Link style={{ marginRight: '10px' }} to="/Cadastro">Cadastro</Link>
            <Link to="/Login">Login</Link>
        </>
    )

}

export default Home;