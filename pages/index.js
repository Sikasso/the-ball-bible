// pages/index.js

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { fetchNbaGames } from '../utils/api';

const HomePage = () => {
  const [nbaGames, setNbaGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await fetchNbaGames();
        setNbaGames(games);
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
        <h2>{game.home_team} vs. {game.away_team}</h2>
        <p>Date: {game.start_time}</p>
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
