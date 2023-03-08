import React from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'
  
  const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME,)

    const user = data?.me || {};
    console.log(user);
    console.log(Auth.loggedIn())
    if (loading) {
      return <div>Loading profile...</div>
    }
    return (
      <div className="Profile">
        <img src="" alt="Profile Image" />
        <h2>username: {user.username}</h2>
        <h4>Location</h4>
        <h4>Games: games</h4>
        <p>Bio: test bio</p>
      </div>
    );
  }

  export default Profile