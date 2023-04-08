import React, { useState, useEffect } from 'react';
import { fetchTeamStatsById } from '../utils/api';

const GameStats = ({ homeTeamId, awayTeamId }) => {
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);

  useEffect(() => {
    const fetchHomeTeamData = async () => {
      const fetchedHomeTeam = await fetchTeamStatsById(homeTeamId);
      setHomeTeam(fetchedHomeTeam);
    };

    const fetchAwayTeamData = async () => {
      const fetchedAwayTeam = await fetchTeamStatsById(awayTeamId);
      setAwayTeam(fetchedAwayTeam);
    };

    fetchHomeTeamData();
    fetchAwayTeamData();
  }, [homeTeamId, awayTeamId]);

  if (!homeTeam || !awayTeam) {
    return <p>Loading...</p>;
  }

  // You need to replace the following lines with actual stats
  // from the Ball Don't Lie API response.
  const homePPG = homeTeam.statistics.latest.ppg;
  const awayPPG = awayTeam.statistics.latest.ppg;
  const homeFGP = homeTeam.statistics.latest.fgp;
  const awayFGP = awayTeam.statistics.latest.fgp;

  return (
    <div>
      <h4>Team Statistics:</h4>
      <p>{homeTeam.full_name} PPG: {homePPG}, FG%: {homeFGP}%</p>
      <p>{awayTeam.full_name} PPG: {awayPPG}, FG%: {awayFGP}%</p>
    </div>
  );
};

export default GameStats;
