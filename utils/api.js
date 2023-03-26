const API_KEY = '15cf2a8a14a175eeef9f5f3e6648b9ed';
const API_BASE_URL = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds'; // Replace with the API base URL

export async function fetchNbaGames(date) {
  const response = await fetch(
    `${API_BASE_URL}/path/to/endpoint?date=${date}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchBettingOdds(gameId) {
  const response = await fetch(
    `${API_BASE_URL}/path/to/endpoint?game_id=${gameId}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchNbaStatistics(gameId) {
  const response = await fetch(
    `${API_BASE_URL}/path/to/endpoint?game_id=${gameId}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}
