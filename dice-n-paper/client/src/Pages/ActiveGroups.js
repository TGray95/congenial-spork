import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GROUPS } from "../utils/queries";

const ActiveGroups = () => {
  const { loading, data } = useQuery(QUERY_GROUPS);
  const groups = data?.groups || [];

  if (!groups.length) {
    return <h3>No Groups Yet</h3>;
  }

  return (
    <div>
      <h3>Groups</h3>
      {groups &&
        groups.map((group) => (
          <div key={group._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
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
          </div>
        ))}
    </div>
  );
};

export default ActiveGroups;
