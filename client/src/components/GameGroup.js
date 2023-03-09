import React from 'react';

const GameGroup = ({ name, game, schedule, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Game: {game}</h3>
      <p>Schedule: {schedule}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default GameGroup;