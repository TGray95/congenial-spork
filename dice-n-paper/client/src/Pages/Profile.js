import React from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth'
import { useParams } from 'react-router-dom';
  
  const Profile = () => {
    const {userId }= useParams()
    const { loading, data } = useQuery(
      userId ? QUERY_USER : QUERY_ME,
      {
        variables: { userId: userId },
      }
    );

  
  
    if (loading) {
      return <div>Loading profile...</div>
    }
    const user = data?.me || data?.user || {};
  
    return (
      <div className="Profile">
        <img src="" alt="Profile Image" />
        <h2>username: {user.username}</h2>
        <h4>Location</h4>
        <h4>Games: {user.profile.games}</h4>
        <p>Bio: {user.profile.bio}</p>
        <p>Friends: {user.friends}</p>
      </div>
    );
  }

  export default Profile