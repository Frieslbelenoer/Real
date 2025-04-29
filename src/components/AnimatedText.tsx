import React, { useState, useEffect } from 'react';
import styles from './AnimatedText.module.css'; // Pastikan impor ini ada

interface AnimatedTextProps {
  texts: string[];
  interval?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup timer
  }, [texts, interval]);

  return (
    <span className={styles.animatedText}> {/* Gunakan styles.animatedText */}
      {texts[currentIndex]}
    </span>
  );
};

export default AnimatedText;