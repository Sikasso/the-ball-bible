import React, { useState } from 'react';
import GameStats from './GameStats';

const GameItem = ({ game }) => {
  const [showStats, setShowStats] = useState(false);

  const handleClick = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="game-item" onClick={handleClick}>
      <h3>{game.home_team} vs {game.away_team}</h3>
      {showStats && <GameStats homeTeamId={game.home_team_id} awayTeamId={game.away_team_id} />}
      <style jsx>{`
        .game-item {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default GameItem;
