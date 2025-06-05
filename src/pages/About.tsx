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
            About ArtBeacon
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A digital showcase celebrating the talent and creativity of student artists currently studying at Virginia Commonwealth University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover Talent</h3>
            <p className="text-gray-600">
              Explore diverse styles and mediums from student artists currently enrolled at VCU.
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Artists</h3>
            <p className="text-gray-600">
              Connect directly with student artists for commissions and collaborations.
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Celebrate Creativity</h3>
            <p className="text-gray-600">
              Discover the incredible creative output from students in VCU’s arts programs.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mission</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Virginia Commonwealth University hosts one of the top-ranked art and design programs in the country. Students there produce amazing work across many disciplines.
            </p>
            <p>
              ArtBeacon is built and maintained by a student to highlight that creativity. It's designed to help student artists gain visibility and connect with a wider audience.
            </p>
            <p>
              Whether you’re interested in commissioning work, browsing for inspiration, or just supporting the arts, this platform is a window into the creativity coming out of the VCU community.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-4">Are You a Student Artist at VCU?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Share your work and be featured. Submit your profile to be included in our growing gallery of student creatives.
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

        <div className="bg-white rounded-xl p-8 shadow-sm mb-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Have Questions or Suggestions?</h3>
          <p className="text-gray-600 mb-6">
            If you have general inquiries, in need of a profile update, or want to get involved, feel free to reach out.
          </p>
          <a
            href="mailto:your@email.com"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-block"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
