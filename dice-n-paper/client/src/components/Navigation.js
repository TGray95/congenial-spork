import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/active-groups">Active Groups</Link></li>
            <li><Link to="/create-group">Create New Group</Link></li>
            <li><Link to="/me">Profile</Link></li>
        </div>
    )
}

export default Navigation;