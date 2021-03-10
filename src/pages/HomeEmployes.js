import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { TableEmployes } from '../components/TableEmployes';
import { GetInitEmployes, InitDataEmployes } from '../helpers/EmployeDB';
import { FilterEmploye } from '../components/FilterEmploye';

const HomeEmployes = () => {

    const [employes, setEmployes] = useState([]);

    const [typeCurrency, setTypeCurrency] = useState('MX');

    useEffect(() => {
        InitDataEmployes();
        setEmployes(GetInitEmployes());
    }, [])


    const handleChangeCurrency = () => {
        setTypeCurrency(typeCurrency === 'MX' ? 'US' : 'MX')
    }

    return (
        <div className="container pt-4">
            <Row>
                <Col md={3}>
                    <p>Total de empleados: 18</p>
                </Col>

                <Col md={3}>
                    <p>Salario en: {typeCurrency}</p>
                </Col>
                <Col md={6}>
                    
                    <Button href="/agregar-empleado"  className="float-right">
                        Agregar empleado
                    </Button>

                    <Button  className="float-right" onClick={handleChangeCurrency}>
                        Cambio de moneda
                    </Button>

                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <FilterEmploye setEmployes={setEmployes}/>
                </Col>
            </Row>
            <TableEmployes employes={employes} typeCurrency={typeCurrency}/>
        </div>
    )
}

export default HomeEmployes;
