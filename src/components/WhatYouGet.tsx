import { CheckCircle, TrendingUp, Clock, Shield, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Guaranteed Growth',
    description: 'See measurable results within 30 days or get your money back. We deliver on our promises.',
    highlight: '30-Day Results'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick project delivery without compromising quality. Most projects completed within 2-4 weeks.',
    highlight: '2-4 Week Delivery'
  },
  {
    icon: Shield,
    title: 'Complete Security',
    description: 'Your data and business information are 100% secure with enterprise-grade protection.',
    highlight: '100% Secure'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'A dedicated team of AI specialists, designers, and marketers working exclusively on your project.',
    highlight: 'Expert Team'
  },
  {
    icon: Zap,
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence technology to automate and optimize your business processes.',
    highlight: 'Latest AI Tech'
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Support',
    description: '24/7 customer support and regular optimization to ensure continued success and growth.',
    highlight: '24/7 Support'
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">VALUE PROPOSITION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You <span className="text-blue-600">Get</span> with Ltab ai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you partner with us, you're not just getting a service provider – 
            you're getting a complete growth solution designed to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300 mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="bg-yellow-100 px-3 py-1 rounded-full">
                    <span className="text-yellow-700 text-xs font-semibold">{benefit.highlight}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Ltab ai Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful businesses who have transformed their digital presence with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm text-green-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                No Setup Fees
              </div>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Money-Back Guarantee
              </div>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}