import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GROUPS, QUERY_ME } from "../utils/queries";
import { ADD_GROUP_MEMBER, REMOVE_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";
import groupArt from "../Images/diceandpaper_homepage_image.png";
import "../styles/Groups.css";

const ActiveGroups = () => {
  const { loading, data } = useQuery(QUERY_GROUPS);
  const groups = data?.groups || [];
  const [addGroupMember, { error }] = useMutation(ADD_GROUP_MEMBER);
  const [removeGroup, { err }] = useMutation(REMOVE_GROUP);

  const deleteGroup = async (event) => {
    event.preventDefault();
    const groupId = event.target.value;
    console.log(groupId)
    try {
      const { data } = removeGroup({
        variables: {
          groupId: groupId,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();

    console.log(event.target);
    console.log(event.target.value);
    const groupId = event.target.value;
    console.log(groupId);
    try {
      const { data } = addGroupMember({
        variables: {
          groupId: groupId,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (!groups.length) {
    return <h3 className="noGroups">No Groups Yet</h3>;
  }
  
  return (
    <div className="groupPage">
      <div className="groupCard">
        <img src={groupArt} alt="Group Playing D&D"></img>
        <h3>Check Out These Groups:</h3>
        {groups &&
          groups.map((group) => (
            <div key={group._id} className="groups">
              <h3> {group.groupName}</h3>
              <h4>Game: {group.game}</h4>
              <h4>Group Creator: {group.groupCreator}</h4>
              <div className="groupInfo">
                <p>{group.description}</p>
                <p>
                  Group Members:{" "}
                  {group.members.map((member) => member.username + " ")}
                </p>
              </div>
              {Auth.loggedIn() && (
                <div>
                  <button
                    className="btn btn-light"
                    value={group._id}
                    onClick={handleButtonClick}
                  >
                    Join Group!
                  </button>
                  <br></br>
                  <button
                  id="deleteButton"
                  className="btn"
                  value={group._id}
                  onClick={deleteGroup}
                >
                  Delete Group
                </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ActiveGroups;
