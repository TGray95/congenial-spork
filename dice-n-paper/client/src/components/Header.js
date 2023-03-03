import React from 'react';
import dice from '../Images/dice-logo.png';
import Navigation from './Navigation';

function Header(){
    return(
        <div className='header'>
            <button className='loginBtn'>Login / Logout</button>
            <h1>Dice & Paper</h1>
            <img src={dice} className="App-logo" alt="logo" />
            <Navigation/>
        </div>
    )
}

export default Header;