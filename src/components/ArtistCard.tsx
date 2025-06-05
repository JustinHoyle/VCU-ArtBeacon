
import { Link } from 'react-router-dom';
import { Instagram, Mail, ExternalLink } from 'lucide-react';
import { Artist } from '../data/artists';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative overflow-hidden">
        <img
          src={artist.portfolio[0]}
          alt={`${artist.name}'s artwork`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {artist.acceptingCommissions && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Open for Commissions
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={artist.avatar}
            alt={artist.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{artist.name}</h3>
            <p className="text-sm text-gray-500">{artist.year} • {artist.major}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {artist.styles.slice(0, 3).map((style) => (
            <span
              key={style}
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {style}
            </span>
          ))}
          {artist.styles.length > 3 && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{artist.styles.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {artist.contacts.instagram && (
              <a
                href={artist.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={16} />
              </a>
            )}
            {artist.contacts.email && (
              <a
                href={`mailto:${artist.contacts.email}`}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Mail size={16} />
              </a>
            )}
            {artist.contacts.website && (
              <a
                href={artist.contacts.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <Link
            to={`/artists/${artist.slug}`}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
