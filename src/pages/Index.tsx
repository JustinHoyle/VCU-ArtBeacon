
import Header from '../components/Header';
import Hero from '../components/Hero';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Show featured artists (first 3)
  const featuredArtists = artists.slice(0, 3);

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
              Meet some of the incredible talent from VCU's art programs. Each artist brings 
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
            Are you a VCU art student with amazing work to share? We'd love to feature your art 
            and help you connect with the community. This platform is built by students, for students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-md p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-vcu-gray/20">
              <h3 className="font-poppins text-xl font-bold text-vcu-black mb-4">For Artists</h3>
              <p className="font-inter text-vcu-black/80 mb-6">
                Get featured on our platform and showcase your work to a wider audience. 
                Connect with potential clients and build your artistic reputation.
              </p>
              <a
                href="https://forms.google.com/submit-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vcu-gold text-vcu-black px-6 py-3 rounded font-bold transition-all duration-200 hover:brightness-90 hover:scale-105 inline-block shadow-sm"
              >
                Submit Your Work
              </a>
            </div>

            <div className="bg-card rounded-md p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-vcu-gray/20">
              <h3 className="font-poppins text-xl font-bold text-vcu-black mb-4">For Art Lovers</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-vcu-gold rounded-md flex items-center justify-center">
                  <span className="text-vcu-black font-bold text-sm">V</span>
                </div>
                <span className="font-poppins text-xl font-bold">VCU Student Art Showcase</span>
              </div>
              <p className="font-inter text-white/80">
                Showcasing the incredible talent of Virginia Commonwealth University art students.
              </p>
            </div>

            <div>
              <h4 className="font-poppins font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/artists" className="block text-white/80 hover:text-vcu-gold transition-colors">
                  Browse Artists
                </Link>
                <Link to="/about" className="block text-white/80 hover:text-vcu-gold transition-colors">
                  About Us
                </Link>
                <a 
                  href="https://forms.google.com/submit-artist" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-vcu-gold transition-colors"
                >
                  Submit Artist
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-poppins font-bold mb-4">Support</h4>
              <p className="font-inter text-white/80 mb-4">
                Help us maintain this platform and support VCU artists.
              </p>
              <a
                href="https://ko-fi.com/vcuart"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vcu-gold text-vcu-black px-4 py-2 rounded font-bold hover:brightness-90 transition-all duration-200 hover:scale-105 inline-block"
              >
                Donate on Ko-fi
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p className="font-inter">&copy; 2024 VCU Student Art Showcase. Supporting student artists at Virginia Commonwealth University.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
