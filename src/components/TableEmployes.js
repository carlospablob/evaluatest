import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FormatCurrency } from './../utils/FormatCurrency';

export const TableEmployes = ({employes, typeCurrency}) => {

    return (
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
                                <td className={emp.salary > 10000 ? "text-right salary-green" : "text-right salary-red"}>
                                    {FormatCurrency(emp.salary, typeCurrency)}
                                </td>
                                <td>{emp.picture}</td>
                                <td>
                                    <Button className="btn" href={ '/editar-empleado/' + emp.id }>
                                        Editar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
    )
}
