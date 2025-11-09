'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const emphasizeBold = (t as any)?.hero?.emphasizeBold ?? false;

  const scrollToProduct = () => {
    const productSection = document.querySelector('#product-section');
    productSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/25 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-white/10 rounded-full animate-pulse delay-700"></div>
        
        {/* Subtle gradient animations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading with staggered animation */}
        <div className="animate-fade-in-up">
          <h1 className={`text-4xl sm:text-5xl md:text-7xl tracking-tight text-white mb-4 sm:mb-6 ${emphasizeBold ? 'font-bold' : 'font-light'}`}>
            {t.hero.title}{' '}
            {emphasizeBold ? (
              <span className="font-bold text-white">{t.hero.titleHighlight}</span>
            ) : (
              <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            )}
          </h1>
        </div>
        
        {/* Subtitle with delay */}
        <div className="animate-fade-in-up animation-delay-300">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 mb-8 sm:mb-12">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Call-to-action button */}
        <div className="animate-fade-in-up animation-delay-600">
          <button
            onClick={scrollToProduct}
            className="group inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="mr-2">{t.hero.ctaButton}</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors cursor-pointer" onClick={scrollToProduct}>
          <span className="text-sm mb-2 hidden sm:block">{t.hero.scrollHint}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}