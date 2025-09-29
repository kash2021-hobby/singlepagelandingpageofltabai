import { Award, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    number: '10+',
    description: '5+ years of experience delivering exceptional digital marketing results for businesses across industries.'
  },
  {
    icon: Shield,
    title: 'Trusted Partner',
    description: 'We prioritize transparency, reliability, and long-term partnerships with our clients.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support to ensure your business never misses an opportunity.'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'A team of certified professionals committed to your success and growth.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Ltabai</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              10+ years of experience delivering exceptional digital marketing results for businesses across industries.
              dedicated to transforming your business through innovative digital solutions and 
              data-driven strategies.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower businesses with cutting-edge digital marketing solutions 
              that drive measurable results. We combine creativity with analytics to deliver 
              campaigns that not only look great but perform exceptionally.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Trusted Partner</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Results-driven approach with measurable outcomes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Transparent reporting and regular communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Customized strategies for your unique business needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Continuous optimization and improvement</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-500">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}