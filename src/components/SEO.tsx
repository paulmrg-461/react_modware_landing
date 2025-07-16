import React from 'react';
import { Smartphone, Globe, Brain, Building2, CheckCircle, MapPin, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SEO: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="seo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Content Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('seo.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('seo.subtitle')}
            </p>
          </div>

        {/* SEO Rich Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('seo.mobile.title')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('seo.mobile.description')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('seo.web.title')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('seo.web.description')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('seo.ai.title')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('seo.ai.description')}
            </p>
          </div>
        </div>

        {/* Company Information SEO */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('seo.company.title')}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('seo.company.about.title')}</h4>
              <p className="text-gray-600 mb-4">
                {t('seo.company.about.description')}
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{t('seo.company.about.location')}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="w-4 h-4 mr-2" />
                <span>{t('seo.company.about.team')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-4 h-4 mr-2" />
                <span>{t('seo.company.about.projects')}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('seo.company.services.title')}</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{t('seo.company.services.mobile')}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{t('seo.company.services.web')}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{t('seo.company.services.ai')}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{t('seo.company.services.consulting')}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{t('seo.company.services.support')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Modware",
              "description": "Empresa colombiana de desarrollo de software especializada en aplicaciones móviles, web y soluciones de inteligencia artificial.",
              "url": "https://modware.co",
              "logo": "https://modware.co/android-chrome-512x512.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+57-300-123-4567",
                "contactType": "customer service",
                "availableLanguage": ["Spanish", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO",
                "addressLocality": "Colombia"
              },
              "sameAs": [
                "https://linkedin.com/company/modware",
                "https://github.com/modware"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Servicios de desarrollo de software personalizado",
                "category": "Software Development"
              }
            })
          }}
        />
      </div>
    </section>
  );
};

export default SEO;