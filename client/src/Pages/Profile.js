import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import profileImage from '../Images/Avatars/Avatar2.png';
import "../styles/Profile.css"
  
  const Profile = () => {
    const {userId }= useParams()
    const { loading, data } = useQuery(
      userId ? QUERY_USER : QUERY_ME,
      {
        variables: { userId: userId },
      }
    );
    console.log(data?.me)

  
  
    if (loading) {
      return <div>Loading profile...</div>
    }
    //displays user's info if user is logged in and no params are found in url. if neither are true, returns an empty object
    const user = data?.me || data?.user || {};
  if (!Auth.loggedIn()) {
    return (
      <div className="noProfile">Please log in to view profile</div>
    )
  }
    return (
      <div className="Profile">
        <img src={profileImage} alt="Profile Avatar" />
        <div className="profileContent">
          <h2>Welcome, {user.username}!</h2>
          <h4>Location: </h4>
          <h4>Games: {user.profile.games}</h4>
          <h4>Bio: {user.profile.bio}</h4>
          <h4>Friends: {user.friends.map((friend) => friend.username + " ")}</h4>
        </div>
      </div>
    );
  }

  export default Profile