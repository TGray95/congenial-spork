import React, { createElement, getElementById } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GROUP } from "../utils/mutations";
import otherLogo from "../Images/other-logo.png";
import beybladeLogo from "../Images/beyblade-logo.png";
import catanLogo from "../Images/catan-logo.png";
import dndLogo from "../Images/dnd-logo.png";
import magicLogo from "../Images/magic-logo.png";

function CreateGroup() {
  const [players, setPlayers] = useState("");
  const [game, setGame] = useState("");
  const [gameLogo, setGameLogo] = useState("");
  const [inPerson, setInPerson] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupCreator, setGroupCreator] = useState("");

  const [addGroup, { error }] = useMutation(ADD_GROUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    try {
      const { data } = addGroup({
        variables: {
          game: game,
          groupName: groupName,
          groupCreator: groupCreator,
        },
      });
      console.log(game, groupName, groupCreator);
        window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  //Adds game logo image to group
  function changeLogo() {
    if (game === "--Select one--" || game === "Other" || game === "") {
      return otherLogo;
    }
    if (game === "Dungeons & Dragons") {
      return dndLogo;
    }
    if (game === "Magic The Gathering") {
      return magicLogo;
    }
    if (game === "Catan") {
      return catanLogo;
    }
    if (game === "Beyblade") {
      return beybladeLogo;
    }
  }

  //Adds new input field for a unique game
  function OtherGame() {
    if (game === "Other") {
      return <input type="text" placeholder="Game Title" />;
    }
  }

  //Add new input field for meeting location
  function OtherLoaction() {
    if (inPerson === "Meet in Person") {
      return <input type="text" placeholder="Location" />;
    }
  }

  //Addes new input for virtual meeting platform
  function OtherPlatform() {
    if (inPerson === "Online / Virtual") {
      return <input type="text" placeholder="Platform" />;
    }
  }

  return (
    <div className="createGroup">
      {/* Image asigned to quickly identify groups by game */}
      <img src={changeLogo()} />
      {/* Input for group name (visible in group search) */}
      <input
        type="text"
        onChange={(e) => setGroupName(e.target.value)}
        name="name"
        placeholder="Group Name"
      />

      <input
        type="text"
        onChange={(e) => setGroupCreator(e.target.value)}
        name="group author"
        placeholder="Your name here"
      />

      {/* Input for number of players */}
      <input
        type="number"
        value={players}
        onChange={(e) => setPlayers(e.target.value)}
        placeholder=" Number of Players"
      />
      {/* Input to selct game type */}
      <p>Game</p>
      <select value={game} onChange={(e) => setGame(e.target.value)}>
        <option>--Select one--</option>
        <option>Dungeons & Dragons</option>
        <option>Magic The Gathering</option>
        <option>Catan</option>
        <option>Beyblade</option>
        <option>Other</option>
      </select>

      {/* Adds text field for unique game title if needed */}
      {OtherGame()}

      {/* Input to select if the group meets in person or online */}
      <p>Meeting Type</p>
      <select value={inPerson} onChange={(e) => setInPerson(e.target.value)}>
        <option>--Select one--</option>
        <option>Meet in Person</option>
        <option>Online / Virtual</option>
      </select>

      {/* Adds a new field for location or virtual platform */}
      {OtherLoaction()}
      {OtherPlatform()}

      {/* Creates groups and addes it to the database */}
      <button onClick={handleFormSubmit}>Create Group</button>
    </div>
  );
}

export default CreateGroup;
