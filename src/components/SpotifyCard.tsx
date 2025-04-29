import React from 'react';
import styles from './SpotifyCard.module.css';
import { FaSpotify, FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const SpotifyCard: React.FC = () => {
  return (
    <div className={styles.spotifyCard}>
      <div className={styles.header}>
        <FaSpotify className={styles.spotifyIcon} />
        <p>Spotify</p>
      </div>
      <div className={styles.content}>
        <p className={styles.status}>Currently not playing Spotify</p>
        {/* Bagian info lagu (akan diisi jika ada data) */}
        {/* <div className={styles.songInfo}>
          <p className={styles.title}>Judul Lagu Placeholder</p>
          <p className={styles.artist}>Nama Artis Placeholder</p>
        </div> */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progress} style={{ width: '0%' }}></div>
        </div>
        <div className={styles.time}>
          <span>00:00</span>
          <span>00:00</span>
        </div>
        {/* Kontrol (opsional) */}
        { <div className={styles.controls}>
          <button><FaBackward /></button>
          <button><FaPause /></button>
          <button><FaPlay /></button>
          <button><FaForward /></button>
        </div>}
      </div>
    </div>
  );
};

export default SpotifyCard;