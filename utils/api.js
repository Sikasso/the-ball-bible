const API_KEY = '15cf2a8a14a175eeef9f5f3e6648b9ed';
const API_BASE_URL = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds';

export async function fetchNbaGames(date) {
  const response = await fetch(
    `${API_BASE_URL}?date=${date}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchBettingOdds(gameId) {
  // For Odds API, odds data is already included in the response of fetchNbaGames function.
  // So, you can use that data instead of fetching it separately.
  // However, if you need to fetch odds data for a specific gameId, you'll need another API or endpoint that supports it.
}
