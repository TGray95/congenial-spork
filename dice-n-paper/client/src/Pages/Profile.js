import React, { createElement, getElementById } from 'react';
import { useState } from 'react';
// import Avatar from 'idk where yet';
// import username from 'idk where yet';
// import userGames from 'idk where yet';
// import Location from 'idk where yet';
// import userBio from 'idk where yet';

const handleFormSubmit = (e) => {
    //prevent page from refreshing
    e.preventDefault();
  
    // code to direct page to update email or password
  
  };
  
  export default function Profile() {
    return (
      <div className="Profile">
        <img src="" alt="Profile Image" />
        <h2>username</h2>
        <h4>Location</h4>
        <h4>Games: games</h4>
        <p>Bio: test bio</p>
        <button type="button" onClick={handleFormSubmit}>Change Email/Password</button>
      </div>
    );
  }