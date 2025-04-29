import { useState, useEffect } from 'react';
import Avatar from './components/Avatar';
import InfoCard from './components/InfoCard';
import SpotifyCard from './components/SpotifyCard';
import './App.css';

function App() {
  const [gradient, setGradient] = useState('linear-gradient(to right, #a1c4fd, #c2e9fb)');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor1 = getRandomColor();
      const newColor2 = getRandomColor();
      setGradient(`linear-gradient(to right, ${newColor1}, ${newColor2})`);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="container" style={{ background: gradient }}>
      <main className="main">
        <Avatar imageUrl="/vite.svg" altText="Foto Profil" /> {/* Ganti dengan path gambar profilmu */}
        <InfoCard
          name="mrbxos"
          staticText="amateur"
          dynamicTexts={["motion designer", "web enthusiast", "creative coder"]}
        />
        <SpotifyCard />
      </main>
    </div>
  );
}

export default App;