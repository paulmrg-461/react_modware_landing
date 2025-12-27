import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoHorizontal from '../assets/images/logo_horizontal.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('header.home'), href: '#home' },
    { name: t('header.services'), href: '#services' },
    { name: t('header.team'), href: '#team' },
    { name: t('header.clients'), href: '#clients' },
    { name: t('header.contact'), href: '#contact' }
  ];

  const services = [
    t('services.data.1.title'),
    t('services.data.2.title'),
    t('services.data.3.title'),
    t('services.data.4.title'),
    t('services.data.5.title'),
    t('services.data.6.title')
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' }
    // { icon: Linkedin, href: 'https://www.linkedin.com/in/paul-realpe-631b17a6', label: 'LinkedIn' },
    // { icon: Github, href: 'https://github.com/paulmrg-461', label: 'GitHub' },
    // { icon: Twitter, href: 'https://x.com/devpaul_co', label: 'Twitter' },
    // { icon: Instagram, href: 'https://www.instagram.com/devpaul_co', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={logoHorizontal} 
                alt="Modware" 
                className="h-8 md:h-10 w-auto transition-opacity duration-300"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Popayán, Cauca, Colombia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-5 h-5 text-primary-400" />
                <a 
                  href="https://modware.lat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  modware.lat
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.getInTouch')}</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <a 
                  href="mailto:co.devpaul@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@modware.lat
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <a 
                  href="tel:+573107254077"
                  className="hover:text-primary-400 transition-colors"
                >
                  +57 310 725 4077
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-400">{t('footer.followUs')}</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>
                © {currentYear} Modware. All rights reserved.
              </p>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <a href="https://modware.lat" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">by Modware</a> 
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </footer>
  );
};

export default Footer;