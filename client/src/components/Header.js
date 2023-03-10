import React from 'react';
import dice from '../Images/dice-logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <h1>Dice & Paper</h1>
            <img src={dice} className="App-logo" alt="logo" />
            <Navigation/>
            <Link to="/login" className='loginBtn btn'>Login / Logout</Link>
        </div>
    )
}

export default Header;