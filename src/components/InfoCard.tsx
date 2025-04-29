import React from 'react';
import styles from './InfoCard.module.css';
import AnimatedText from './AnimatedText';

interface InfoCardProps {
  name: string;
  staticText: string;
  dynamicTexts: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ name, staticText, dynamicTexts }) => {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.staticText}>
        {staticText} <AnimatedText texts={dynamicTexts} />
      </p>
    </div>
  );
};

export default InfoCard;