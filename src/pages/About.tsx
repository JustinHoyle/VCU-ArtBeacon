import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About VCU ArtBeacon
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A digital showcase celebrating the incredible talent and creativity of
            Virginia Commonwealth University art students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover Talent</h3>
            <p className="text-gray-600">
              Explore the diverse artistic styles and mediums of VCU's most promising students.
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Artists</h3>
            <p className="text-gray-600">
              Connect directly with artists for commissions and collaborations.
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Celebrate Creativity</h3>
            <p className="text-gray-600">
              Showcase the incredible work being created in VCU's art programs.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
           <p>
              Virginia Commonwealth University has one of the most prestigious art schools in the country,
              consistently ranked among the top art and design programs nationally. Our students create
              incredible work across diverse mediums and styles.
            </p>
            <p>
              This platform was created and is maintained by a fellow VCU student to help showcase that work. 
              It serves as a bridge between emerging artists and the broader community—providing visibility,
              celebrating creativity, and making it easy to discover and connect with student talent.
            </p>
            <p>
              Whether you're looking for custom artwork, exploring creative collaboration, or simply supporting
              the arts, this gallery highlights the next generation of creative professionals from within the VCU community.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a VCU Artist?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Showcase your work and get discovered. Submit your profile to be featured in our growing gallery of VCU talent.
            Whether you're open for commissions or just want to share your art, we’d love to include you.
          </p>
          <p className="text-blue-100 mb-8 text-lg">
            Note: A valid VCU email address is required to submit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd514TYOL_8SJTlZX2yp6_TrPvsnCRG_zRjvKPR39GkQk97JQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Submit Your Profile</span>
              <ArrowRight size={18} />
            </a>
            <Link
              to="/artists"
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Browse Current Artists
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support This Project</h3>
            <p className="text-gray-600 mb-6">
              Help us maintain and improve this platform by supporting hosting costs and development.
            </p>
            <a
              href="https://ko-fi.com/vcuart"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Support on Ko-fi
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Have Questions or Suggestions?</h3>
          <p className="text-gray-600 mb-6">
            If you have general inquiries, artist recommendations, or want to get involved, feel free to reach out.
          </p>
          <a
            href="mailto:your@email.com"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
