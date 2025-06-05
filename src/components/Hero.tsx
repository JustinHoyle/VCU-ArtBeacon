
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BackgroundGallery from './BackgroundGallery';

const Hero = () => {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center overflow-hidden">
      <BackgroundGallery />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold text-vcu-black mb-6 animate-fade-in">
            Discover
            <span className="block text-vcu-gold">
              VCU Artists
            </span>
          </h1>
          
          <p className="font-inter text-xl text-vcu-black/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Explore the incredible creativity of Virginia Commonwealth University art students. 
            From digital masterpieces to traditional paintings, discover emerging talent and 
            connect directly with artists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link
              to="/artists"
              className="group bg-vcu-gold text-vcu-black px-8 py-4 rounded-md font-bold text-lg shadow-md hover:brightness-90 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Browse Artists</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group text-vcu-black px-8 py-4 rounded-md font-bold text-lg border-2 border-vcu-gray hover:border-vcu-gold hover:text-vcu-gold transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            >
              <span>Learn More</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-vcu-gold mb-2">50+</div>
              <div className="text-vcu-black/70">Featured Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vcu-gold mb-2">200+</div>
              <div className="text-vcu-black/70">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vcu-gold mb-2">15+</div>
              <div className="text-vcu-black/70">Art Styles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
