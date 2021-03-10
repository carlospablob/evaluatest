import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FormatCurrency } from './../utils/FormatCurrency';

export const TableEmployes = ({employes, typeCurrency}) => {

    return (
        <div className="container mt-4">

            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Salario</th>
                        <th>Foto</th>
                        <th>Operación</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employes.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.business}</td>
                                <td>{FormatCurrency(emp.salary, typeCurrency)}</td>
                                <td>{emp.picture}</td>
                                <td>
                                    <Button >
                                        Editar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>

        </div>
    )
}
