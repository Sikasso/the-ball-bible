// components/GamesList.js
import React, { useEffect, useState } from 'react';
import GameItem from './GameItem';
import { fetchNbaGames } from '../utils/api';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const fetchedGames = await fetchNbaGames(today);
      setGames(fetchedGames);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <div>
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesList;
