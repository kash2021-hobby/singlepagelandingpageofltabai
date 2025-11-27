import { 
  Video,
  Bot,
  Globe,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Marketing & AI Ads',
    description: 'Professional video marketing services in Guwahati. Create compelling video advertisements powered by AI for local businesses. Our video marketing drives results across social media platforms.',
    features: ['Local Video Production', 'AI-Generated Content', 'Social Media Videos', 'YouTube Marketing'],
    videoPlaceholder: 'ai-video-ads-explainer.mp4'
  },
  {
    icon: Bot,
    title: 'Social Media Marketing Guwahati',
    description: 'Expert social media marketing services in Guwahati. Grow your local business with targeted Facebook, Instagram & LinkedIn campaigns. Automated posting and engagement for Assam businesses.',
    features: ['Facebook Marketing', 'Instagram Growth', 'Local Audience Targeting', 'Content Creation'],
    videoPlaceholder: 'social-media-automation-explainer.mp4'
  },
  {
    icon: Globe,
    title: 'Website Development Guwahati',
    description: 'Professional website development services in Guwahati. Build responsive, SEO-optimized websites for local businesses. AI-powered features and mobile-friendly designs that convert visitors.',
    features: ['Responsive Design', 'SEO Optimization', 'Local Business Focus', 'Mobile-First Approach'],
    videoPlaceholder: 'ai-powered-websites-explainer.mp4'
  },
  {
    icon: Zap,
    title: 'SEO Services Guwahati',
    description: 'Professional SEO services in Guwahati to rank your business on Google. Local SEO optimization for Assam businesses. Increase online visibility and drive organic traffic.',
    features: ['Local SEO', 'Google My Business', 'Keyword Optimization', 'Technical SEO'],
    videoPlaceholder: 'custom-ai-software-explainer.mp4'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth 
            and establish a dominant online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
                  index === 0 ? 'flex flex-col' : 'flex flex-col lg:flex-row gap-6 items-start'
                }`}
              >
                {/* Video Section */}
                <div className={index === 0 ? 'w-full mb-6' : 'w-full lg:w-1/2 flex-shrink-0'}>
                  {index === 0 ? (
                    // Video Marketing Service - Use the professional image
                    <div className="rounded-xl h-64 relative overflow-hidden border border-blue-100">
                      <img
                        src="/video marketing.webp"
                        alt="Professional Video Marketing & AI Ads"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 1 ? (
                    // Social Media Marketing Service - Use the professional image
                    <div className="rounded-xl h-64 relative overflow-hidden border border-blue-100">
                      <img
                        src="/guwahati.png"
                        alt="Social Media Marketing Services in Guwahati"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 2 ? (
                    // Website Development Service - Use the professional image
                    <div className="rounded-xl h-64 relative overflow-hidden border border-blue-100">
                      <img
                        src="/ChatGPT Image Sep 29, 2025, 07_13_01 PM.png"
                        alt="Website Development Services in Guwahati"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    // Other services - Keep the placeholder
                    // SEO Services - Use the professional image
                    <div className="rounded-xl h-64 relative overflow-hidden border border-blue-100">
                      <img
                        src="/ChatGPT Image Sep 29, 2025, 07_16_53 PM.png"
                        alt="SEO Services in Guwahati"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={index === 0 ? 'w-full flex flex-col' : 'w-full lg:w-1/2 flex flex-col'}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300 mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}