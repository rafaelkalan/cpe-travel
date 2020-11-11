import React from "react";
import { Form } from "react-bootstrap"
import "./input.css"
function Input({ input }){
  
 
    return ( 
        <div>
            {input.map((item) => (
                <Form.Group controlId={item.controlId} className="Inputslogin" alt="inpt">
                  <Form.Control type={item.type} placeholder={item.placeholder} className="marginForm" alt="formatInput"/>
                </Form.Group>
            ))}
        </div>
    );
}

export default Input;