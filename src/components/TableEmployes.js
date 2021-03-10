import React from 'react';
import { Table } from 'react-bootstrap';
import { FormatCurrency } from './../utils/FormatCurrency';

const TableEmployes = () => {

    return (
        <div className="container mt-4">

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Empresa</th>
                    <th>Salario</th>
                    <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>{FormatCurrency(16900)}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>{FormatCurrency(16900.333)}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>{FormatCurrency(3000)}</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default TableEmployes;