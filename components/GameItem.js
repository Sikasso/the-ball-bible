// components/GameItem.js
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const GameItem = ({ game }) => {
  const [selectedStat, setSelectedStat] = useState('');

  const handleStatSelect = (option) => {
    setSelectedStat(option.value);
  };

  const options = [
    { value: 'ppg', label: 'PPG (Past 10 Games)' },
    { value: 'fg%', label: 'FG% (Past 5 Games)' },
  ];

  return (
    <div>
      <h2>
        {game.team1} vs {game.team2}
      </h2>
      <h3>Odds: {game.odds}</h3>
      <Dropdown options={options} onChange={handleStatSelect} placeholder="Select a Stat" />
      {selectedStat && (
        <div>
          <p>{game.team1}: {game.stats[selectedStat].team1}</p>
          <p>{game.team2}: {game.stats[selectedStat].team2}</p>
        </div>
      )}
    </div>
  );
};

export default GameItem;
