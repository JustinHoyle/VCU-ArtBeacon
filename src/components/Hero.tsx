
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BackgroundGallery from './BackgroundGallery';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGallery />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-poppins text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
          Discover
          <span className="block text-vcu-gold">
            Student Artists at VCU
          </span>
        </h1>

        <p className="font-inter text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '200ms' }}>
          Explore the creativity of student artists from Virginia Commonwealth University.
          From digital work to traditional mediums, this independent platform highlights 
          emerging talent and provides a space to connect directly with creators.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link
            to="/artists"
            className="group bg-vcu-gold text-vcu-black px-10 py-5 rounded-md font-bold text-xl shadow-2xl hover:brightness-90 transition-all duration-200 transform hover:scale-105 flex items-center space-x-3"
          >
            <span>Browse Artists</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/about"
            className="group text-white px-10 py-5 rounded-md font-bold text-xl border-2 border-white/30 backdrop-blur-sm hover:border-vcu-gold hover:text-vcu-gold hover:bg-white/10 transition-all duration-200 hover:scale-105 flex items-center space-x-3 shadow-2xl"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
