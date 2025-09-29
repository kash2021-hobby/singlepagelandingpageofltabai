import { Globe, MapPin, Users } from 'lucide-react';

const countries = [
  {
    name: 'India',
    flag: '🇮🇳',
    clients: '200+',
    description: 'Our home base with the largest client portfolio'
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    clients: '50+',
    description: 'Growing presence in Southeast Asian markets'
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    clients: '30+',
    description: 'Expanding reach in European markets'
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    clients: '40+',
    description: 'Strong presence in Middle Eastern business hub'
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    clients: '60+',
    description: 'Serving innovative American businesses'
  },
  {
    name: 'Bangladesh',
    flag: '🇧🇩',
    clients: '25+',
    description: 'Supporting emerging market growth'
  }
];

const globalStats = [
  {
    icon: Globe,
    number: '6',
    label: 'Countries',
    description: 'Global presence across continents'
  },
  {
    icon: Users,
    number: '400+',
    label: 'International Projects',
    description: 'Businesses served worldwide'
  },
  {
    icon: MapPin,
    number: '24/7',
    label: 'Global Support',
    description: 'Round-the-clock assistance'
  }
];

export default function GlobalReach() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Globe className="w-5 h-5 text-blue-300 mr-2" />
            <span className="text-blue-300 font-semibold text-sm">GLOBAL REACH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Worldwide</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, we're proud to serve clients across 6 countries, 
            delivering exceptional AI-powered digital solutions that transcend borders.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {globalStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <IconComponent className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{country.flag}</div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {country.name}
                  </h3>
                  <div className="flex items-center text-blue-300">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{country.clients} clients</span>
                  </div>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {country.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Go Global with Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our international community of successful businesses. No matter where you are, 
              we're here to help you grow with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center text-green-400 font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Multi-timezone Support
              </div>
              <div className="flex items-center text-green-400 font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Local Market Expertise
              </div>
              <div className="flex items-center text-green-400 font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Cultural Understanding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}