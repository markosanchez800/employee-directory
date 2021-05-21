import React from 'react';
import './style.css';


function Card(props){
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.picture} /> 
            </div>
            <div className='name'>{props.lastname},{props.firstname}</div>
            <div className='age'>{props.age}</div>
            <div className='email'>{props.email}</div>
            <div className='phone'>{props.phone}</div>
       </div>
    );
}

export default Card;