import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form'

function Searchbar() {
    return (
    <Form>
        <Form.Control type="text" placeholder="Enter Search" />
    </Form>
    )}

export default Searchbar;