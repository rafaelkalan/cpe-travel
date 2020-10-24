import React from 'react';
import { TiPlaneOutline } from 'react-icons/ti';
import { BiBed } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import Button from '../Button';
import Logo from '../Logo';
import './Header.css';

function Header() {
  const headerItens = [
    {
      icon: <TiPlaneOutline className="icons" />,
      path: '/',
      text: 'Passagens',
    },
    {
      icon: <BiBed className="icons" />,
      path: '/',
      text: 'Hotéis',
    },
    {
      icon: <RiSuitcaseLine className="icons" />,
      path: '/',
      text: 'Pacotes',
    },
  ];
  const margin = '0px 20px 0px 0px';

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Logo />
        {headerItens.map((item) => (
          <div className="divButton" key={item.text}>
            {item.icon}
            <Button configMargin={margin} page={item.path}>{item.text}</Button>
          </div>
        ))}
      </div>
      <div className="rightContainer">
        <Button configMargin="0px 5px 0px 0px" page="/cadastro">Cadastre-se</Button>
        <p className="bar">|</p>
        <Button configMargin="0px 0px 0px 5px" page="/login">Entrar</Button>
      </div>
    </div>
  );
}

export default Header;
