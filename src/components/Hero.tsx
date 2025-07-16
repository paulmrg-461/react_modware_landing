
import { ArrowRight, MapPin, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location Badge */}
        <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mt-4 mb-4 border border-white/20">
          <MapPin className="w-4 h-4 text-primary-300" />
          <span className="text-white/90 text-sm font-medium">{t('hero.location')}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {t('hero.title')}{' '}
          <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
            {t('hero.titleHighlight')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('services')}
            className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
          >
            {t('hero.exploreServices')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {t('hero.startProject')}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-3 mx-auto">
              <Users className="w-6 h-6 text-primary-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-white/70 text-sm">{t('hero.developers')}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-3 mx-auto">
              <Award className="w-6 h-6 text-primary-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-white/70 text-sm">{t('hero.projects')}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-3 mx-auto">
              <Users className="w-6 h-6 text-primary-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">6+</div>
            <div className="text-white/70 text-sm">{t('hero.clients')}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-3 mx-auto">
              <Clock className="w-6 h-6 text-primary-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">6+</div>
            <div className="text-white/70 text-sm">{t('hero.experience')}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;