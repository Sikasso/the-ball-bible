import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { fetchNBAGames } from '../utils/api';

const HomePage = () => {
  const [nbaGames, setNBAGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await fetchNBAGames();
        setNBAGames(games);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch NBA games:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderGames = () => {
    return nbaGames.map((game) => (
      <div key={game.id} className={styles.game}>
        <h2>{game.homeTeam.name} vs. {game.awayTeam.name}</h2>
        <p>Date: {game.date}</p>
        <p>Spread: {game.spread}</p>
        <p>Over/Under: {game.overUnder}</p>
        {/* Add more game properties if needed */}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>The Ball Bible</title>
        <meta name="description" content="Get the latest NBA games and betting odds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.gamesList}>
            {renderGames()}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default HomePage;
