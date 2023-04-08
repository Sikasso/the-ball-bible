// pages/api/nba-games/[date].js
import axios from 'axios';

const NBA_STATS_API_KEY = 'h2snh9qkbt35x8fxtzzbjchu';

async function fetchNbaGames(date) {
  const response = await axios.get(
    `https://api.sportradar.us/nba/trial/v7/en/games/${date}/schedule.json?api_key=${NBA_STATS_API_KEY}`
  );
  return response.data;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { date } = req.query;
    try {
      const data = await fetchNbaGames(date);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching NBA games:', error);
      res.status(500).json({ error: 'Failed to fetch NBA games' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
