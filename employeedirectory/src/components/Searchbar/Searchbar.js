import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form'

function Searchbar() {
    return (
    <Form>
        <Form.Control className="search" type="text" placeholder="Enter Search" />
    </Form>
    )}

export default Searchbar;