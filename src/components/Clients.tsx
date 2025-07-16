import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { clients } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Guerrero',
      company: 'MegaHogar',
      role: t('clients.testimonials.ceo'),
      content: t('clients.testimonials.testimonial1'),
      rating: 5
    },
    {
      id: 2,
      name: 'Vanessa Rengifo',
      company: 'Jirehfarma',
      role: t('clients.testimonials.operations'),
      content: t('clients.testimonials.testimonial2'),
      rating: 5
    },
    {
      id: 3,
      name: 'Jinna Hurtado',
      company: 'Central Aluminios',
      role: t('clients.testimonials.production'),
      content: t('clients.testimonials.testimonial3'),
      rating: 5
    }
  ];

  return (
    <section id="clients" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('clients.title')} <span className="text-primary-600">{t('clients.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client) => {
            const IconComponent = client.icon;
            
            return (
              <div 
                key={client.id}
                className="bg-white rounded-xl p-6 shadow-lg card-hover border border-gray-100 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                </div>

                {/* Client Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {client.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-primary-600 font-medium mb-3">
                  {client.category}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            {t('clients.testimonials.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('clients.metrics.title')}
            </h3>
            <p className="text-lg text-gray-600">
              {t('clients.metrics.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">150%</div>
              <div className="text-gray-600">{t('clients.metrics.sales')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-gray-600">{t('clients.metrics.efficiency')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600">{t('clients.metrics.uptime')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('clients.metrics.support')}</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('clients.cta.title')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('clients.cta.subtitle')}
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary group inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>{t('clients.cta.button')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;