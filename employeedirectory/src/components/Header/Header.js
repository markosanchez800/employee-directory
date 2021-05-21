import React from 'react';
import './style.css';

function Header(){
    return (
        <div className='jumbotron'>
            <div className='title'>Employee Directory</div>
            <div className='title'>Use the searchbar to specify your query through our database</div>
        </div>
    );
}

export default Header;