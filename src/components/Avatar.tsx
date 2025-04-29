import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  imageUrl: string;
  altText?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className={styles.avatarContainer}>
      <img src={imageUrl} alt={altText} className={styles.avatar} />
    </div>
  );
};

export default Avatar;