import React from 'react';
import Table from 'react-bootstrap/Table'

function TableHead (){
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

</Table>
);
}

export default TableHead;