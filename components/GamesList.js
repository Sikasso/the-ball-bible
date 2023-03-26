// components/GamesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameItem from './GameItem';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      // Replace the following URL with the actual API endpoint
      const response = await axios.get('https://api.example.com/nba/games');
      setGames(response.data.games);
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
