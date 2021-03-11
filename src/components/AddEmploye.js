import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { SaveEmploye } from '../helpers/EmployeDB';
import { IdNumber } from '../utils/IdRandom';

const AddEmploye = () => {

    let history = useHistory();

    const [employe, setEmploye] = useState({id: IdNumber(), name: '', business: '', salary: '', picture: ''});


    const handleInputChange = (event) => {
        setEmploye({
            ...employe,
            [event.target.name]: event.target.value
        });
    }

    const handleAddEmploye = (event) => {
        event.preventDefault();

        SaveEmploye(employe);

        history.push("/");
    }

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col md={6}>
                    <Form onSubmit={handleAddEmploye}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text"
                                name="name"
                                placeholder="Ingresa tu nombre completo"
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>empresa</Form.Label>
                            <Form.Control 
                                type="text"
                                name="business"
                                placeholder="Ingresa el nombre de la empresa"
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Salario</Form.Label>
                            <Form.Control 
                                type="number"
                                name="salary"
                                placeholder="Ingresa el salario"
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Button variant="outline-danger" href="/">
                            Cancelar
                        </Button>

                        <Button type="submit" className="float-right">
                            Guardar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddEmploye;