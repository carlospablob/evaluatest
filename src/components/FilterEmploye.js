import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { FilterEmployeByNameOrBusiness } from '../helpers/EmployeDB';

export const FilterEmploye = ({setEmployes}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        setEmployes(FilterEmployeByNameOrBusiness(inputValue) );

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputValue);
        setEmployes(FilterEmployeByNameOrBusiness(inputValue) );
        // setInputValue('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Col md={6}>
                    <Form.Label>Filtrar por:</Form.Label>
                    <Form.Control 
                        type="search"
                        placeholder="Nombre o empresa"
                        value={inputValue}
                        onChange={handleInputChange} />
                </Col>
            </Form.Row>
        </Form>
    )
}