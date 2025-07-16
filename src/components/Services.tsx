import React from 'react';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Cog, 
  Brain, 
  MessageCircle, 
  Users, 
  Receipt,
  ArrowRight,
  Check
} from 'lucide-react';
import { services } from '../data';

const Services: React.FC = () => {
  const serviceIcons = {
    1: Code,
    2: Globe,
    3: Smartphone,
    4: Cog,
    5: Brain,
    6: MessageCircle,
    7: Users,
    8: Receipt
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            We offer comprehensive software development services to help your business 
            thrive in the digital age. From custom applications to AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-lg card-hover border border-gray-100"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our expertise can help you achieve your digital goals. 
              Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-primary group inline-flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-secondary"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 'Flutter', 
              'AWS', 'Firebase', 'PostgreSQL', 'MongoDB', 'Docker'
            ].map((tech) => (
              <span 
                key={tech}
                className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;