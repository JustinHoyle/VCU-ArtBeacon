import { useState, useEffect, useMemo } from 'react';
import { artists } from '../data/artists';

const BackgroundGallery = () => {
  const allArtworks = useMemo(() => artists.flatMap(artist =>
    artist.portfolio.map(artwork => ({
      image: artwork,
      id: `${artist.id}-${artwork}`
    }))
  ), []);

  const shuffledArtworks = useMemo(() => {
    const copy = [...allArtworks];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, 10); // limit to 10 images for performance
  }, [allArtworks]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % shuffledArtworks.length);
    }, 8000); // 3s display, 3s fade

    return () => clearInterval(interval);
  }, [shuffledArtworks.length]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {shuffledArtworks.map((art, index) => (
        <img
          key={art.id}
          src={art.image}
          alt={`Artwork ${index}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ease-in-out will-change-opacity ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Optional blur for text readability */}

    </div>
  );
};

export default BackgroundGallery;
