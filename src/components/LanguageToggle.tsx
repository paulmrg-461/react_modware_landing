import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  isScrolled?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
        isScrolled 
          ? 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200' 
          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
      }`}
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageToggle;