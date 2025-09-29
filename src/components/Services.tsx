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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Video Placeholder - Will be replaced with actual videos */}
                <div className="mb-6 bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Video className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Explainer Video</p>
                    <p className="text-xs text-gray-400 mt-1">Coming Soon</p>
                  </div>
                  {/* This will be replaced with actual video embed later */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}