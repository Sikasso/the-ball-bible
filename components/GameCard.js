import React from 'react';

const GameCard = ({ game }) => {
  const homeTeam = game.teams.home;
  const awayTeam = game.teams.away;

  const spreadOdds = game.markets.spreads;
  const totalOdds = game.markets.totals;

  return (
    <div>
      <h3>
        {awayTeam.name} @ {homeTeam.name}
      </h3>
      <p>Date: {game.commence_time}</p>
      <p>
        Spread: {spreadOdds.points} ({spreadOdds.odds})
      </p>
      <p>
        Total: {totalOdds.points} ({totalOdds.odds})
      </p>
    </div>
  );
};

export default GameCard;
