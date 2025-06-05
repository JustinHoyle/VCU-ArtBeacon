
import { useState, useEffect } from 'react';
import { artists } from '../data/artists';

const BackgroundGallery = () => {
  // Create a randomized array of all artworks
  const allArtworks = artists.flatMap(artist => 
    artist.portfolio.map(artwork => ({
      image: artwork,
      id: `${artist.id}-${artwork}`
    }))
  );

  // Shuffle the artworks for random display
  const shuffledArtworks = allArtworks.sort(() => Math.random() - 0.5);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((prev) => (prev + 1) % shuffledArtworks.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex, shuffledArtworks.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current Image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src={shuffledArtworks[currentImageIndex]?.image}
          alt="Student artwork background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Next Image (for smooth transition) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={shuffledArtworks[nextImageIndex]?.image}
          alt="Student artwork background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle blur overlay for better text readability */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
};

export default BackgroundGallery;
