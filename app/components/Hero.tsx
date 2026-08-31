'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProduct = () => {
    const productSection = document.querySelector('#product-section');
    productSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.32em] text-slate-300 backdrop-blur-sm">
              Discreta
            </div>
          </div>

          <div className="mb-8 animate-fade-in-up">
            <Image
              src="/white_logo_for_website.png"
              alt="Brand logo"
              width={221}
              height={72}
              priority
              className="mx-auto h-auto w-40 sm:w-52 md:w-56"
            />
          </div>

          <div className="animate-fade-in-up">
            <h1 className="mx-auto max-w-5xl text-4xl font-light leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.mainText}
            </h1>
          </div>

          <div className="mt-6 animate-fade-in-up animation-delay-300">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
              {t.hero.emphasis}
            </p>
          </div>


        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={scrollToProduct}
          className="flex flex-col items-center text-slate-300 transition hover:text-white"
        >
          <span className="mb-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">{t.hero.scrollHint}</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v14m0 0l-5-5m5 5l5-5" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.75s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}