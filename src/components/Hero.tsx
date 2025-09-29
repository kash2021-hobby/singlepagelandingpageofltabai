import { ArrowRight, Star } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">Trusted by 500+ Businesses</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            #1 Digital Marketing Services in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Guwahati, Assam
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Leading digital marketing agency in Guwahati offering expert SEO, social media marketing, 
            website development & AI-powered solutions. Trusted by 500+ businesses across Assam and Northeast India.
          </p>
          
          {/* Business Explainer Video Section */}
          <div className="mb-16 w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 border border-white/20 mx-2 sm:mx-4 lg:mx-0">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">Digital Marketing Success in Guwahati</h3>
                <p className="text-blue-100 text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 lg:px-0">See how we've helped Guwahati businesses grow with our digital marketing services</p>
              </div>
              
              <div className="w-full">
                <VideoPlayer
                  videoId="hKgKChs7mGk"
                  title="Ltab ai - AI-Powered Digital Solutions"
                  description="Discover how we've helped 500+ businesses grow"
                />
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <p className="text-blue-200 text-base sm:text-lg lg:text-xl px-2 sm:px-4 lg:px-0">
                  🎥 Discover how our digital marketing services have helped 500+ businesses in Guwahati and Northeast India
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              Get Free Digital Marketing Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-sm text-blue-200">
              ✓ Free Digital Marketing Strategy • ✓ Guwahati Local Experts
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10+</div>
              <div className="text-sm text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}