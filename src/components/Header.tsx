
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-vcu-black text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-vcu-gold rounded-md flex items-center justify-center">
              <span className="text-vcu-black font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-white">ArtBeacon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-vcu-gold transition-colors">
              Home
            </Link>
            <Link to="/artists" className="text-white hover:text-vcu-gold transition-colors">
              Artists
            </Link>
            <Link to="/about" className="text-white hover:text-vcu-gold transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-vcu-gray">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-vcu-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/artists" 
                className="text-white hover:text-vcu-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Artists
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-vcu-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://ko-fi.com/vcuart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-vcu-gold text-vcu-black px-4 py-2 rounded-md font-bold text-center hover:brightness-90 transition-all duration-300"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
