import React from 'react';
import { Form } from 'react-bootstrap';
import './input.css';

function Input({ input, funcaoemail,funcaosenha }) {
  return (
    <div>
      {input.map((item) => {
        
        const change= item.controlId === 'email'? funcaoemail:funcaosenha;
        return(
        <Form.Group controlId={item.controlId} className="formInput" key={item.placeholder} alt="input">
          <Form.Control size="sm" className="inputLogin" onChange={change} type={item.type} placeholder={item.placeholder} alt="formatInput" />
        </Form.Group>
      );
        }
      )
  }
    </div>
  );
}

export default Input;



           