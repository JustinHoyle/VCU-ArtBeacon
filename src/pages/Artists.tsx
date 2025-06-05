
import { useState } from 'react';
import Header from '../components/Header';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';

const Artists = () => {
  const [selectedStyle, setSelectedStyle] = useState('All');
  
  // Get all unique styles
  const allStyles = ['All', ...Array.from(new Set(artists.flatMap(artist => artist.styles)))];
  
  // Filter artists based on selected style
  const filteredArtists = selectedStyle === 'All' 
    ? artists 
    : artists.filter(artist => artist.styles.includes(selectedStyle));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Artists</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible talent of VCU art students. Each artist brings their unique 
            perspective and style to create amazing works of art.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allStyles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedStyle === style
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredArtists.length} artist{filteredArtists.length !== 1 ? 's' : ''}
            {selectedStyle !== 'All' && ` in ${selectedStyle}`}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.084-2.291"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No artists found</h3>
            <p className="text-gray-600">Try selecting a different style filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
