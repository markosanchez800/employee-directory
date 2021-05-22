import React from 'react';
import './style.css';
import Table from 'react-bootstrap/Table'

function Card(props) {
    return (
        <Table striped bordered hover>
            <tbody>
                    <tr>
                        <td><img src={props.photo} alt={props.name} /> </td>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{props.email}</td>
                        <td>{props.phone}</td>
                    </tr>
            </tbody>
        </Table>
    )
}

export default Card;