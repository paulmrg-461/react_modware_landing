import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import logoHorizontal from '../assets/images/logo_horizontal.png';
import logoHorizontalGray from '../assets/images/logo_horizontal_gray.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t('header.home'), id: 'hero' },
    { label: t('header.services'), id: 'services' },
    { label: t('header.team'), id: 'team' },
    { label: t('header.clients'), id: 'clients' },
    { label: t('header.contact'), id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={isScrolled ? logoHorizontalGray : logoHorizontal} 
              alt="Modware" 
              className="h-8 md:h-10 w-auto transition-opacity duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle isScrolled={isScrolled} />
            <button 
              onClick={() => scrollToSection('contact')}
              className=" btn-primary"
            >
              {t('header.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2 space-y-2">
                <div className="flex justify-center">
                  <LanguageToggle isScrolled={true} />
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full"
                >
                  {t('header.getStarted')}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;