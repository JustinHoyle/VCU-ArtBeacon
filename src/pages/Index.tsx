
import Header from '../components/Header';
import Hero from '../components/Hero';
import ScrollingArtGallery from '../components/ScrollingArtGallery';
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
      <ScrollingArtGallery />
      
      {/* Featured Artists Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-foreground mb-4">Featured Artists</h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group inline-flex items-center space-x-2 bg-soft-indigo hover:bg-soft-indigo/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <span>View All Artists</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-4xl font-bold text-foreground mb-6">Join Our Community</h2>
          <p className="font-inter text-xl text-gray-600 mb-12 leading-relaxed">
            Are you a VCU art student with amazing work to share? We'd love to feature your art 
            and help you connect with the community. This platform is built by students, for students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">For Artists</h3>
              <p className="font-inter text-gray-600 mb-6">
                Get featured on our platform and showcase your work to a wider audience. 
                Connect with potential clients and build your artistic reputation.
              </p>
              <a
                href="https://forms.google.com/submit-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-soft-indigo hover:bg-soft-indigo/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 inline-block shadow-sm hover:shadow-md"
              >
                Submit Your Work
              </a>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">For Art Lovers</h3>
              <p className="font-inter text-gray-600 mb-6">
                Discover incredible talent and support student artists by commissioning custom work 
                or simply sharing their amazing creations.
              </p>
              <Link
                to="/artists"
                className="bg-mint-green hover:bg-mint-green/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 inline-block shadow-sm hover:shadow-md"
              >
                Explore Artists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-soft-indigo to-mint-green rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="font-poppins text-xl font-bold">VCU Art Gallery</span>
              </div>
              <p className="font-inter text-gray-400">
                Showcasing the incredible talent of Virginia Commonwealth University art students.
              </p>
            </div>

            <div>
              <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/artists" className="block text-gray-400 hover:text-white transition-colors">
                  Browse Artists
                </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <a 
                  href="https://forms.google.com/submit-artist" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Submit Artist
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-poppins font-semibold mb-4">Support</h4>
              <p className="font-inter text-gray-400 mb-4">
                Help us maintain this platform and support VCU artists.
              </p>
              <a
                href="https://ko-fi.com/vcuart"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-soft-indigo to-mint-green text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 inline-block"
              >
                Donate on Ko-fi
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="font-inter">&copy; 2024 VCU Art Gallery. Supporting student artists at Virginia Commonwealth University.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
