import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { TableEmployes } from '../components/TableEmployes';
import { GetInitEmployes, InitDataEmployes } from '../helpers/EmployeDB';
import { FilterEmploye } from '../components/FilterEmploye';

const HomeEmployes = () => {

    const [employes, setEmployes] = useState([]);

    const [typeCurrency, setTypeCurrency] = useState('MX');

    const [totalEmployes, setTotalEmployes] = useState(0);

    useEffect(() => {
        InitDataEmployes();
        setEmployes(GetInitEmployes());
        setTotalEmployes(employes.length);
    }, [])


    const handleChangeCurrency = () => {
        setTypeCurrency(typeCurrency === 'MX' ? 'US' : 'MX')
    }

    return (
        <div className="container pt-4">
            <Row>
                <Col md={3}>
                    <p>Total de empleados: {totalEmployes}</p>
                </Col>

                <Col md={3}>
                    <p>Salario en: {typeCurrency}</p>
                </Col>
                <Col md={6}>
                    
                    <Button href="/agregar-empleado"  className="float-right btn--animated">
                        Agregar empleado
                    </Button>

                    <Button  className="btn--animated" onClick={handleChangeCurrency}>
                        Cambio de moneda
                    </Button>

                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={12}>
                    <FilterEmploye setEmployes={setEmployes}/>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <TableEmployes employes={employes} typeCurrency={typeCurrency}/>
                </Col>
            </Row>
        </div>
    )
}

export default HomeEmployes;
