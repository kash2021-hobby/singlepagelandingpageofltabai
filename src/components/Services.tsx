import { 
  Globe, 
  Search, 
  Share2, 
  Target, 
  PenTool, 
  Video, 
  Zap,
  TrendingUp,
  Users
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites that convert visitors into customers with modern design and seamless functionality.',
    features: ['Responsive Design', 'Fast Loading', 'SEO Optimized']
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Boost your online visibility and rank higher on Google with our proven SEO strategies and techniques.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building']
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand awareness across all major social media platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Campaigns']
  },
  {
    icon: Target,
    title: 'Google Ads Management',
    description: 'Maximize your ROI with expertly managed Google Ads campaigns that drive qualified leads.',
    features: ['Campaign Setup', 'Optimization', 'Performance Tracking']
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Create compelling content that tells your brand story and drives customer engagement.',
    features: ['Blog Writing', 'Email Marketing', 'Content Strategy']
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing services to create engaging content for your marketing campaigns.',
    features: ['Motion Graphics', 'Color Correction', 'Audio Enhancement']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive digital marketing strategies tailored to your business goals and target audience.',
    features: ['Market Analysis', 'Competitor Research', 'Growth Planning']
  },
  {
    icon: Users,
    title: 'Brand Development',
    description: 'Build a strong brand identity that resonates with your audience and stands out from competitors.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
  },
  {
    icon: Zap,
    title: 'AI Solutions',
    description: 'Leverage cutting-edge AI technology to automate processes and enhance your business operations.',
    features: ['Automation', 'AI Integration', 'Process Optimization']
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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
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
    </section>
  );
}