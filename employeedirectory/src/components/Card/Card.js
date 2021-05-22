import React from 'react';
import './style.css';

function Card(props) {
    return (
                    <tr>
                        <td><img src={props.photo} alt={props.name} /> </td>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{props.email}</td>
                        <td>{props.phone}</td>
                    </tr>
    )
}

export default Card;