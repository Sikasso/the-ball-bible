const API_KEY = '15cf2a8a14a175eeef9f5f3e6648b9ed';
const API_BASE_URL = 'https://api.the-odds-api.com';

export async function fetchNbaGames(date) {
  const response = await fetch(
    `${API_BASE_URL}/v4/sports/basketball_nba/odds?apiKey=${API_KEY}&regions=us&markets=spreads,totals&oddsFormat=american&date=${date}`
  );
  const data = await response.json();
  return data;
}

export async function fetchTeamStatsById(teamId) {
  const response = await axios.get(`https://www.balldontlie.io/api/v1/teams/${teamId}`);
  return response.data;
}

