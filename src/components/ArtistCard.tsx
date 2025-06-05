
import { Link } from 'react-router-dom';
import { Instagram, Mail, ExternalLink } from 'lucide-react';
import { Artist } from '../data/artists';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className="group bg-card rounded-md shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-vcu-gray/30 hover:border-vcu-gold/50 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={artist.portfolio[0]}
          alt={`${artist.name}'s artwork`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        {artist.acceptingCommissions && (
          <div className="absolute top-3 right-3 bg-vcu-gold text-vcu-black text-xs px-3 py-1 rounded font-bold shadow-sm">
            Open for Commissions
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={artist.avatar}
            alt={artist.name}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h3 className="font-poppins font-bold text-lg text-vcu-black">{artist.name}</h3>
            <p className="font-inter text-sm text-vcu-gray">{artist.year} • {artist.major}</p>
          </div>
        </div>

        <p className="font-inter text-vcu-black/80 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {artist.styles.slice(0, 3).map((style) => (
            <span
              key={style}
              className="bg-vcu-gold/20 text-vcu-black text-xs px-3 py-1 rounded font-medium"
            >
              {style}
            </span>
          ))}
          {artist.styles.length > 3 && (
            <span className="text-vcu-gray text-xs px-3 py-1">
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
                className="text-vcu-gray hover:text-vcu-gold transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
            )}
            {artist.contacts.email && (
              <a
                href={`mailto:${artist.contacts.email}`}
                className="text-vcu-gray hover:text-vcu-gold transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            )}
            {artist.contacts.website && (
              <a
                href={artist.contacts.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-vcu-gray hover:text-vcu-gold transition-colors duration-200"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <Link
            to={`/artists/${artist.slug}`}
            className="bg-vcu-gold text-vcu-black px-5 py-2 rounded font-bold text-sm shadow-sm hover:brightness-90 transition-all duration-200 transform hover:scale-105"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
