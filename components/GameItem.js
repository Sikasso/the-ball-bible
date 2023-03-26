// components/GameItem.js
import React, { useEffect, useState } from 'react';
import { fetchBettingOdds } from '../utils/api';

const GameItem = ({ game }) => {
  const [bettingOdds, setBettingOdds] = useState(null);

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const odds = await fetchBettingOdds(game.id);
        setBettingOdds(odds);
      } catch (error) {
        console.error('Error fetching betting odds:', error);
      }
    };
    fetchOdds();
  }, [game.id]);

  return (
    <div>
      <h3>{game.title}</h3>
      {
  bettingOdds &&
    Object.keys(bettingOdds).map((key) => (
      <div key={key}>
        <p>
          {key}: {bettingOdds[key]}
        </p>
      </div>
    ));
}

    </div>
  );
};

export default GameItem;
