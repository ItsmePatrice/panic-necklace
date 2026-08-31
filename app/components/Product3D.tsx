'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Product3D() {
  const { t } = useLanguage();

  const gallery = [
    'login-page.jpeg',
    'home-page.jpg',
    'contact-alert.jpg',
    'instructions.jpg',
    'profil.jpg',
    'profile-language.jpg',
    'flic-button.jpg'
  ];

  return (
    <section id="product-section" className="bg-[#050816] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            {t.product.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            {t.product.subtitle}
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-[0_35px_80px_rgba(15,23,42,0.5)] sm:p-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((img) => (
              <figure key={img} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-3">
                <div className="relative h-80 w-full overflow-hidden rounded-[1rem] sm:h-96 lg:h-[26rem]">
                  {(() => {
                    const alt = img === 'flic-button.jpg' ? 'discreet button' : img.replace(/[-.]/g, ' ');
                    return (
                      <Image
                        src={`/${img}`}
                        alt={alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        priority={img === 'flic-button.jpg'}
                      />
                    );
                  })()}
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              {t.product.whatYouGet.title}
            </h3>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {t.product.whatYouGet.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-sky-400/30 hover:bg-slate-900/80"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-xl text-sky-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-medium text-white">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-medium text-white">{t.product.features.connectivity.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{t.product.features.connectivity.description}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M4.93 16.07A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 7.07-3.93M4.93 7.93A7.97 7.97 0 0 1 12 4a7.97 7.97 0 0 1 7.07 3.93" />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-medium text-white">{t.product.features.design.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{t.product.features.design.description}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-medium text-white">{t.product.features.protection.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{t.product.features.protection.description}</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-center sm:p-8">
          <p className="text-base text-slate-200 sm:text-lg">
            {t.product.cta.line1} <span className="font-medium text-white">{t.product.cta.line2} <a href="tel:5148305176" className="text-sky-300 underline underline-offset-2">{t.product.cta.phone}</a> {t.product.cta.line3}</span>
          </p>
        </div>
      </div>
    </section>
  );
}