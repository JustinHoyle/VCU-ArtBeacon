
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-background to-blue-50/30 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Discover
            <span className="block bg-gradient-to-r from-soft-indigo to-mint-green bg-clip-text text-transparent">
              VCU Artists
            </span>
          </h1>
          
          <p className="font-inter text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Explore the incredible creativity of Virginia Commonwealth University art students. 
            From digital masterpieces to traditional paintings, discover emerging talent and 
            connect directly with artists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link
              to="/artists"
              className="group bg-soft-indigo hover:bg-soft-indigo/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Browse Artists</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group text-foreground px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-light-gray hover:border-soft-indigo/30 hover:text-soft-indigo transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            >
              <span>Learn More</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-indigo mb-2">50+</div>
              <div className="text-gray-600">Featured Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-green mb-2">200+</div>
              <div className="text-gray-600">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-red mb-2">15+</div>
              <div className="text-gray-600">Art Styles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
