const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/nba', async (req, res) => {
  try {
    const { year, month, day } = req.query;
    const GAME_STATS_API_KEY = 'h2snh9qkbt35x8fxtzzbjchu';
    const BASE_URL = 'https://api.sportradar.us/';
    const NBA_URL = `${BASE_URL}nba/trial/v7/en/games/${year}/${month}/${day}/schedule.json?api_key=${GAME_STATS_API_KEY}`;
    const ODDS_URL = `${BASE_URL}odds_comparison/v1/odds/`;

    const gamesResponse = await axios.get(NBA_URL);
    res.send(gamesResponse.data);
  } catch (error) {
    console.error('Error fetching games data:', error);
    res.status(500).send('Error fetching games data');
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
