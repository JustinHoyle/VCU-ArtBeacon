
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
  
  // Duplicate the array to create seamless infinite scroll
  const duplicatedArtworks = [...shuffledArtworks, ...shuffledArtworks];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="flex animate-scroll-left">
        {duplicatedArtworks.map((artwork, index) => (
          <div
            key={`${artwork.id}-${index}`}
            className="flex-shrink-0 mx-3"
          >
            <div className="w-72 h-48 rounded-lg overflow-hidden">
              <img
                src={artwork.image}
                alt="Student artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default BackgroundGallery;
