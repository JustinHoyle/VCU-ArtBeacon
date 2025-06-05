
import { useParams, Link } from 'react-router-dom';
import { Instagram, Mail, ExternalLink, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import { artists } from '../data/artists';

const ArtistProfile = () => {
  const { slug } = useParams();
  const artist = artists.find(a => a.slug === slug);

  if (!artist) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artist Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The artist you're looking for doesn't exist.
            </p>
            <Link
              to="/artists"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Browse All Artists
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/artists"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Artists</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Artist Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-8 sticky top-24">
              <div className="text-center mb-6">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{artist.name}</h1>
                <p className="text-lg text-gray-600">{artist.year} • {artist.major}</p>
                
                {artist.acceptingCommissions && (
                  <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mt-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Open for Commissions
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{artist.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {artist.styles.map((style) => (
                    <span
                      key={style}
                      className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
                <div className="flex space-x-4">
                  {artist.contacts.instagram && (
                    <a
                      href={artist.contacts.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-100 transition-colors"
                    >
                      <Instagram size={18} />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  )}
                  {artist.contacts.email && (
                    <a
                      href={`mailto:${artist.contacts.email}`}
                      className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Mail size={18} />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  )}
                  {artist.contacts.website && (
                    <a
                      href={artist.contacts.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio</h2>
              <p className="text-gray-600">
                Explore {artist.name}'s collection of artwork showcasing their unique style and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artist.portfolio.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <img
                    src={image}
                    alt={`${artist.name}'s artwork ${index + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Commission CTA */}
            {artist.acceptingCommissions && (
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in Custom Work?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  {artist.name} is currently accepting commission work. Get in touch to discuss 
                  your project and bring your vision to life with their unique artistic style.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {artist.contacts.email && (
                    <a
                      href={`mailto:${artist.contacts.email}?subject=Commission Inquiry`}
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Send Email
                    </a>
                  )}
                  {artist.contacts.instagram && (
                    <a
                      href={artist.contacts.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors"
                    >
                      Message on Instagram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
