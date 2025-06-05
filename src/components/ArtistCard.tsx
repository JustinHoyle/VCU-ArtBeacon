
import { Link } from 'react-router-dom';
import { Instagram, Mail, ExternalLink } from 'lucide-react';
import { Artist } from '../data/artists';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-light-gray hover:border-soft-indigo/30 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={artist.portfolio[0]}
          alt={`${artist.name}'s artwork`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        {artist.acceptingCommissions && (
          <div className="absolute top-3 right-3 bg-mint-green text-white text-xs px-3 py-1 rounded-xl font-medium shadow-sm">
            Open for Commissions
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={artist.avatar}
            alt={artist.name}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <h3 className="font-poppins font-semibold text-lg text-foreground">{artist.name}</h3>
            <p className="font-inter text-sm text-gray-500">{artist.year} • {artist.major}</p>
          </div>
        </div>

        <p className="font-inter text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {artist.styles.slice(0, 3).map((style) => (
            <span
              key={style}
              className="bg-soft-indigo/10 text-soft-indigo text-xs px-3 py-1 rounded-xl font-medium"
            >
              {style}
            </span>
          ))}
          {artist.styles.length > 3 && (
            <span className="text-gray-400 text-xs px-3 py-1">
              +{artist.styles.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {artist.contacts.instagram && (
              <a
                href={artist.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-coral-red transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
            )}
            {artist.contacts.email && (
              <a
                href={`mailto:${artist.contacts.email}`}
                className="text-gray-400 hover:text-soft-indigo transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            )}
            {artist.contacts.website && (
              <a
                href={artist.contacts.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint-green transition-colors duration-200"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <Link
            to={`/artists/${artist.slug}`}
            className="bg-soft-indigo hover:bg-soft-indigo/90 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
