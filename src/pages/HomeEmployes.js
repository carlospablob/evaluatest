import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { TableEmployes } from '../components/TableEmployes';
import { GetInitEmployes, InitDataEmployes } from '../helpers/EmployeDB';
import { FilterEmploye } from '../components/FilterEmploye';

const HomeEmployes = () => {

    const [employes, setEmployes] = useState([]);


    useEffect(() => {
        InitDataEmployes();
        setEmployes(GetInitEmployes());
    }, [])

    return (
        <div className="container pt-4">
            <Row>
                <Col md={3}>
                    <p>Total de empleados: 18</p>
                </Col>

                <Col md={3}>
                    <p>Salario en: MX | US</p>
                </Col>
                <Col md={6}>
                    
                    <Button href="/agregar-empleado"  className="float-right">
                        Agregar empleado
                    </Button>

                    <Button  className="float-right">
                        Cambio de moneda
                    </Button>

                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <FilterEmploye setEmployes={setEmployes}/>
                </Col>
            </Row>
            <TableEmployes employes={employes}/>
        </div>
    )
}

export default HomeEmployes;
