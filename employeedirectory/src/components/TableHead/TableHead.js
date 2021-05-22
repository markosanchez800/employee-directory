import React from 'react';

function TableHead(props){
return (
<thead>
<tr>
    <th>Photo</th>
    <th onClick={props.sortUsers}>Name</th>
    <th>Age</th>
    <th>Email</th>
    <th>Phone</th>
</tr>
</thead>


);
}

export default TableHead;