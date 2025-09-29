import { Star, TrendingUp, Users, Award } from 'lucide-react';

const successStories = [
  {
    company: 'Dermanext',
    industry: 'Healthcare',
    result: '300% increase in online consultations',
    description: 'Transformed their digital presence with AI-powered website and automated booking system.',
    metrics: {
      growth: '300%',
      timeframe: '6 months',
      metric: 'Online Consultations'
    },
    testimonial: 'Ltabai revolutionized our patient engagement. The AI-powered solutions increased our online consultations by 300% in just 6 months.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face'
  },
  {
    company: 'Bene Kleed',
    company: 'Bene Cleed',
    industry: 'Fashion',
    result: '250% boost in social media engagement',
    description: 'Automated social media campaigns and AI video ads drove massive engagement and sales.',
    metrics: {
      growth: '250%',
      timeframe: '4 months',
      metric: 'Social Engagement'
    },
    testimonial: 'The social media automation and AI video ads created by Ltabai transformed our brand presence completely.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face'
  },
  {
    company: 'Minto Bay',
    industry: 'Retail',
    result: '400% increase in online sales',
    description: 'Custom AI-powered e-commerce solution with personalized shopping experience.',
    metrics: {
      growth: '400%',
      timeframe: '8 months',
      metric: 'Online Sales'
    },
    testimonial: 'Our online sales quadrupled after implementing Ltabai\'s AI-powered e-commerce solution. Incredible results!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
  }
];

const achievements = [
  {
    icon: TrendingUp,
    number: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered across industries'
  },
  {
    icon: Users,
    number: '98%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations'
  },
  {
    icon: Award,
    number: '5+',
    label: 'Years Experience',
    description: 'Proven track record of success'
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-600 font-semibold text-sm">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from <span className="text-blue-600">Real Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped businesses like yours 
            achieve remarkable growth through our AI-powered digital solutions.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Company Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                  <p className="text-sm text-blue-600 font-medium">{story.industry}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-white rounded-xl p-4 mb-6 border border-blue-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{story.metrics.growth}</div>
                  <div className="text-sm text-gray-600 mb-1">{story.metrics.metric}</div>
                  <div className="text-xs text-gray-500">in {story.metrics.timeframe}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{story.description}</p>

              {/* Testimonial */}
              <div className="border-t border-blue-200 pt-6">
                <div className="flex items-start space-x-3">
                  <img
                    src={story.avatar}
                    alt="Client"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      "{story.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Numbers don't lie. Here's what we've achieved for our clients over the years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <div className="text-sm text-blue-100">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}