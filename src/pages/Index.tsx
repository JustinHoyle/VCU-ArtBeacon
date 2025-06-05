import Header from '../components/Header';
import Hero from '../components/Hero';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Show featured artists (randomized 3)
  const featuredArtists = [...artists].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Artists Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-vcu-black mb-4">Featured Artists</h2>
            <p className="font-inter text-xl text-vcu-black/80 max-w-3xl mx-auto">
              Meet some of the incredible talent from the art programs at Virginia Commonwealth University. Each artist brings 
              their unique vision and style to create amazing works of art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/artists"
              className="group inline-flex items-center space-x-2 bg-vcu-gold text-vcu-black px-8 py-4 rounded-md font-bold text-lg shadow-md hover:brightness-90 transition-all duration-200 transform hover:scale-105"
            >
              <span>View All Artists</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-4xl font-bold text-vcu-black mb-6">Join Our Community</h2>
          <p className="font-inter text-xl text-vcu-black/80 mb-12 leading-relaxed">
            Are you an art student at Virginia Commonwealth University? We'd love to feature your work 
            and help you connect with the community. This platform is built by students, for students.
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-md p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-vcu-gray/20">
              <h3 className="font-poppins text-xl font-bold text-vcu-black mb-4">For Artists</h3>
              <p className="font-inter text-vcu-black/80 mb-6">
                Show your work to a bigger audience and grow your presence.
                Connect with people who are interested in your art or are looking to collaborate.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd514TYOL_8SJTlZX2yp6_TrPvsnCRG_zRjvKPR39GkQk97JQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vcu-gold text-vcu-black px-6 py-3 rounded font-bold transition-all duration-200 hover:brightness-90 hover:scale-105 inline-block shadow-sm"
              >
                Submit Your Work
              </a>
            </div>

            <div className="bg-card rounded-md p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-vcu-gray/20">
              <h3 className="font-poppins text-xl font-bold text-vcu-black mb-4">Support Artists</h3>
              <p className="font-inter text-vcu-black/80 mb-6">
                Discover incredible talent and support student artists by commissioning custom work 
                or simply sharing their amazing creations.
              </p>
              <Link
                to="/artists"
                className="bg-vcu-black text-white px-6 py-3 rounded font-bold transition-all duration-200 hover:bg-vcu-black/90 hover:scale-105 inline-block shadow-sm"
              >
                Explore Artists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vcu-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-16 text-center md:text-left">
            
            {/* ArtBeacon Section */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-vcu-gold rounded-md flex items-center justify-center">
                  <span className="text-vcu-black font-bold text-sm">V</span>
                </div>
                <span className="font-poppins text-xl font-bold">ArtBeacon</span>
              </div>
              <p className="font-inter text-white/80 max-w-md">
                Showcasing work from student artists studying at Virginia Commonwealth University.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h4 className="font-poppins font-bold mb-2">Quick Links</h4>
              <Link to="/artists" className="text-white/80 hover:text-vcu-gold transition-colors">
                Browse Artists
              </Link>
              <Link to="/about" className="text-white/80 hover:text-vcu-gold transition-colors">
                About Us
              </Link>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd514TYOL_8SJTlZX2yp6_TrPvsnCRG_zRjvKPR39GkQk97JQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-vcu-gold transition-colors"
              >
                Submit Work
              </a>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p className="font-inter">ArtBeacon. Supporting student artists at Virginia Commonwealth University.</p>
            <p className="font-inter text-xs text-white/60 mt-2">
              This site is student-led and not officially affiliated with Virginia Commonwealth University.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
