
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

const ScrollingArtGallery = () => {
  // Create a randomized array of all artworks with artist info
  const allArtworks = artists.flatMap(artist => 
    artist.portfolio.map(artwork => ({
      image: artwork,
      artist: artist,
      id: `${artist.id}-${artwork}`
    }))
  );

  // Shuffle the artworks for random display
  const shuffledArtworks = allArtworks.sort(() => Math.random() - 0.5);
  
  // Duplicate the array to create seamless infinite scroll
  const duplicatedArtworks = [...shuffledArtworks, ...shuffledArtworks];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
          Student Artwork Gallery
        </h2>
        <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing artwork from our talented VCU students. Click any piece to learn more about the artist.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedArtworks.map((artwork, index) => (
            <Link
              key={`${artwork.id}-${index}`}
              to={`/artists/${artwork.artist.slug}`}
              className="flex-shrink-0 group mx-3"
            >
              <div className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <img
                  src={artwork.image}
                  alt={`Artwork by ${artwork.artist.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <p className="font-semibold text-sm">{artwork.artist.name}</p>
                  <p className="text-xs opacity-90">{artwork.artist.styles[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ScrollingArtGallery;
