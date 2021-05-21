import React from 'react';
import './style.css';
import Table from 'react-bootstrap/Table'

function Card(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(results => (
                    <tr>
                        <td><img alt={results.name.first} src={results.picture.medium} /> </td>
                        <td>{results.name.last}, {results.name.first}</td>
                        <td>{results.dob.age}</td>
                        <td>{results.email}</td>
                        <td>{results.phone}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Card;