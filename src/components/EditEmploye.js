import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { GetEmployeById, UpdateDataEmploye } from '../helpers/EmployeDB';

const EditEmploye = () => {

    let history = useHistory();

    let { id } = useParams();

    const [employe, setEmploye] = useState({id: '', name: '', business: '', salary: '', picture: ''});



    useEffect(() => {
        const data = GetEmployeById(id);

        setEmploye(data);

        console.log('STATE', employe);
    }, [id])

    const handleInputChange = (event) => {
        setEmploye({
            ...employe,
            [event.target.name]: event.target.value
        });
    }

    const handleAddEmploye = (event) => {
        event.preventDefault();

        UpdateDataEmploye(employe);

        history.push("/");
    }

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col md={6}>
                    <Form onSubmit={handleAddEmploye}>
                        <Form.Group controlId={employe.name}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text"
                                name="name"
                                placeholder="Ingresa tu nombre completo"
                                value={employe.name}
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId={employe.business}>
                            <Form.Label>empresa</Form.Label>
                            <Form.Control 
                                type="text"
                                name="business"
                                placeholder="Ingresa el nombre de la empresa"
                                value={employe.business}
                                onChange={handleInputChange}
                                disabled />
                        </Form.Group>

                        <Form.Group controlId={employe.salary}>
                            <Form.Label>Salario</Form.Label>
                            <Form.Control 
                                type="number"
                                name="salary"
                                placeholder="Ingresa el salario"
                                value={employe.salary}
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

export default EditEmploye;