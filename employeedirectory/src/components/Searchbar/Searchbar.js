import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form'

function Searchbar(props) {
    return (
    <Form>
        <Form.Control onChange={props.handleInputChange} value={props.search} className="search" type="text" placeholder="Enter Search" />
    </Form>
    )}

export default Searchbar;