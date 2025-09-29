import { Building2 } from 'lucide-react';

const brands = [
  {
    name: 'Tata',
    logo: '/tata jpg.png',
    category: 'Conglomerate'
  },
  {
    name: 'Yamaha',
    logo: '/yamaha.jpg',
    category: 'Automotive'
  },
  {
    name: 'TVS Motors',
    logo: '/tvs motors.jpg',
    category: 'Automotive'
  },
  {
    name: 'First Abu Dhabi Bank',
    logo: '/dubai.png',
    category: 'Banking'
  },
  {
    name: 'Amazon',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
    category: 'E-commerce'
  },
  {
    name: 'Myntra',
    logo: '/myntra.jpg',
    category: 'Fashion'
  },
  {
    name: 'Flipkart',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png',
    category: 'E-commerce'
  },
  {
    name: 'Dermanext',
    logo: '/derma next.jpg',
    category: 'Healthcare'
  },
  {
    name: 'Bene Cleed',
    logo: '/bene kleed.png',
    category: 'Fashion'
  },
  {
    name: 'Minto Bay',
    logo: '/minto bay.png',
    category: 'Retail'
  }
];

export default function TrustedBrands() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Trusted Partnership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've had the privilege of partnering with industry leaders across various sectors, 
            delivering exceptional digital solutions that drive growth and success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-sm text-gray-600 font-medium">Leading Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-gray-600 font-medium">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600 font-medium">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Support</div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="aspect-[3/2] flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=${brand.name.replace(' ', '+')}`;
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-gray-500">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Leading Brands Choose Ltabai
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-sm text-gray-600">Consistent delivery of measurable outcomes across all campaigns</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI-Powered Innovation</h4>
                <p className="text-sm text-gray-600">Cutting-edge AI technology for superior digital solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Dedicated Partnership</h4>
                <p className="text-sm text-gray-600">Long-term commitment to your brand's growth and success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}