import { 
  Video,
  Bot,
  Globe,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'AI Video Ads',
    description: 'Create compelling video advertisements powered by artificial intelligence. Our AI-driven approach produces high-converting video ads that capture attention and drive results for your business.',
    features: ['AI-Generated Scripts', 'Automated Video Creation', 'Performance Optimization', 'Multi-Platform Ready'],
    videoPlaceholder: 'ai-video-ads-explainer.mp4'
  },
  {
    icon: Bot,
    title: 'Social Media Automation',
    description: 'Automate your social media presence with intelligent AI-powered tools. Schedule, create, and manage your social media content across all platforms while maintaining authentic engagement.',
    features: ['Automated Posting', 'Content Generation', 'Engagement Analytics', 'Multi-Platform Management'],
    videoPlaceholder: 'social-media-automation-explainer.mp4'
  },
  {
    icon: Globe,
    title: 'AI Powered Websites',
    description: 'Build intelligent websites that adapt and respond to your visitors. Our AI-powered websites provide personalized user experiences, automated customer support, and dynamic content optimization.',
    features: ['Personalized User Experience', 'AI Chatbots', 'Dynamic Content', 'Smart Analytics'],
    videoPlaceholder: 'ai-powered-websites-explainer.mp4'
  },
  {
    icon: Zap,
    title: 'Custom AI Powered Software',
    description: 'Develop custom software solutions powered by artificial intelligence tailored to your specific business needs. From automation tools to intelligent data processing systems.',
    features: ['Custom Development', 'AI Integration', 'Process Automation', 'Scalable Solutions'],
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
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col lg:flex-row gap-6 items-start"
              >
                {/* Video Section */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl h-64 flex items-center justify-center relative overflow-hidden border border-blue-100">
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full mb-4 mx-auto w-fit">
                        <Video className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-sm font-medium text-blue-700">Explainer Video</p>
                      <p className="text-xs text-blue-500 mt-1">Coming Soon</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10"></div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col">
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