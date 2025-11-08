'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center bg-white/10 backdrop-blur rounded-full p-1 border border-white/20">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'en'
              ? 'bg-white text-gray-900'
              : 'text-white hover:text-gray-300'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'fr'
              ? 'bg-white text-gray-900'
              : 'text-white hover:text-gray-300'
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
}