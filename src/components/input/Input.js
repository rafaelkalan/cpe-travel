import React from 'react';
import { Form } from 'react-bootstrap';
import './input.css';

function Input({ input }) {
  return (
    <div>
      {input.map((item) => (
        <Form.Group controlId={item.controlId} className="formInput" key={item.placeholder} alt="input">
          <Form.Control size="sm" className="inputLogin" type={item.type} placeholder={item.placeholder} alt="formatInput" />
        </Form.Group>
      ))}
    </div>
  );
}

export default Input;
