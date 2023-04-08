import axios from 'axios';

const BASE_URL = 'https://www.balldontlie.io/api/v1';

export async function getTeamStats(team_id) {
  try {
    const response = await axios.get(`${BASE_URL}/season_averages`, {
      params: {
        season: 2023, // Replace this with the current season
        player_ids: [team_id],
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching team stats:', error);
    return [];
  }
}
