import { 
  Globe, 
  Search, 
  Share2, 
  Target, 
  PenTool, 
  Video,
  Palette,
  Bot,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Create stunning, responsive websites that convert visitors into customers. From simple landing pages to complex e-commerce platforms, we build digital experiences that drive results.',
    features: ['Responsive Design', 'Fast Loading Speed', 'SEO Optimized', 'Mobile-First Approach'],
    videoPlaceholder: 'website-development-explainer.mp4'
  },
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your online visibility and rank higher on Google with our proven SEO strategies. We help your business get found by customers actively searching for your services.',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Local SEO'],
    videoPlaceholder: 'seo-explainer.mp4'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build a strong social media presence that engages your audience and drives business growth. We create compelling content and manage your social media campaigns across all platforms.',
    features: ['Content Creation', 'Community Management', 'Paid Social Campaigns', 'Analytics & Reporting'],
    videoPlaceholder: 'social-media-explainer.mp4'
  },
  {
    icon: Target,
    title: 'Google Ads',
    description: 'Maximize your ROI with expertly managed Google Ads campaigns. We create targeted campaigns that reach your ideal customers at the right moment with the right message.',
    features: ['Campaign Setup', 'Keyword Targeting', 'Ad Copy Creation', 'Performance Optimization'],
    videoPlaceholder: 'google-ads-explainer.mp4'
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Create valuable, relevant content that attracts and engages your target audience. Our content marketing strategies help establish your brand as an industry authority.',
    features: ['Blog Writing', 'Email Marketing', 'Content Strategy', 'Lead Magnets'],
    videoPlaceholder: 'content-marketing-explainer.mp4'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Professional graphic design services that bring your brand to life. From logos to marketing materials, we create visually stunning designs that communicate your message effectively.',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics'],
    videoPlaceholder: 'graphic-design-explainer.mp4'
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing services to create engaging content for your marketing campaigns. We transform raw footage into compelling stories that captivate your audience.',
    features: ['Professional Editing', 'Motion Graphics', 'Color Correction', 'Audio Enhancement'],
    videoPlaceholder: 'video-editing-explainer.mp4'
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Leverage cutting-edge AI technology to automate processes and enhance your business operations. We implement AI solutions that save time and improve efficiency.',
    features: ['Process Automation', 'AI Chatbots', 'Data Analysis', 'Custom AI Tools'],
    videoPlaceholder: 'ai-solutions-explainer.mp4'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive digital marketing strategies tailored to your business goals. We analyze your market, competitors, and audience to create winning strategies.',
    features: ['Market Analysis', 'Competitor Research', 'Strategy Development', 'Performance Tracking'],
    videoPlaceholder: 'digital-strategy-explainer.mp4'
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
    </section>
  );
}