import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GROUPS, QUERY_ME } from "../utils/queries";
import { ADD_GROUP_MEMBER, REMOVE_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";

const ActiveGroups = () => {
  const { loading, data } = useQuery(QUERY_GROUPS);
  const groups = data?.groups || [];
  const [addGroupMember, { error }] = useMutation(ADD_GROUP_MEMBER);
  const [removeGroup, { err }] = useMutation(REMOVE_GROUP);

  const deleteGroup = async (event) => {
    event.preventDefault();
    const groupId = event.target.value;
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
    return <h3>No Groups Yet</h3>;
  }

  return (
    <div className="row">
      <h3>Groups</h3>
      {groups &&
        groups.map((group) => (
          <div key={group._id} className="card col-6 mb-3">
            <h4 className="card-header bg-dark text-light p-2 m-0">
              {group.groupName} <br />
              <span style={{ fontSize: "1rem" }}>
                Group Creator: {group.groupCreator} -- Game: {group.game}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{group.description}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>
                Group Members:{" "}
                {group.members.map((member) => member.username + " ")}
              </p>
            </div>
            {Auth.loggedIn && (
              <div>
                <button
                  className="btn btn-outline-secondary"
                  value={group._id}
                  onClick={handleButtonClick}
                >
                  Join Group!
                </button>
                <br/>
                <button
                  className="btn btn-outline-danger"
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
  );
};

export default ActiveGroups;
