import React from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Mind & Wellness</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600">{t('nav.home')}</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600">{t('nav.services')}</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">{t('nav.about')}</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">{t('nav.testimonials')}</a>
            <a href="#contact" className="text-indigo-600 font-medium px-4 py-2 rounded-md border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">
              {t('nav.bookSession')}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">{t('nav.home')}</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">{t('nav.services')}</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">{t('nav.about')}</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">{t('nav.testimonials')}</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">{t('nav.bookSession')}</a>
          </div>
        </div>
      )}
    </nav>
  );
}