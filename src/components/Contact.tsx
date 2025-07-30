import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Globe,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    t('contact.services.custom'),
    t('contact.services.web'),
    t('contact.services.mobile'),
    t('contact.services.automation'),
    t('contact.services.ai'),
    t('contact.services.chatbots'),
    t('contact.services.crm'),
    t('contact.services.billing'),
    t('contact.services.other')
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')} <span className="text-primary-600">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.getInTouch.title')}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('contact.getInTouch.description')}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.location')}</h4>
                  <p className="text-gray-600">{t('contact.info.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.website')}</h4>
                  <a 
                    href="https://modware.lat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    modware.lat
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.email')}</h4>
                  <a 
                    href="mailto:co.devpaul@gmail.com" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    info@modware.lat
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.hours')}</h4>
                  <p className="text-gray-600">{t('contact.info.hoursWeekdays')}</p>
                  <p className="text-gray-600">{t('contact.info.hoursSaturday')}</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">{t('contact.quickContact.title')}</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:co.devpaul@gmail.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t('contact.quickContact.email')}</span>
                </a>
                <a 
                  href="tel:+573043162313"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('contact.quickContact.call')}</span>
                </a>
                <a 
                  href="https://wa.me/573043162313?text=Hola%20Modware%20Lat!%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('contact.quickContact.chat')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('contact.form.title')}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">{t('contact.form.selectService')}</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group inline-flex items-center justify-center space-x-2"
                >
                  <span>{t('contact.form.submit')}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('contact.form.successTitle')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.form.successMessage')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;