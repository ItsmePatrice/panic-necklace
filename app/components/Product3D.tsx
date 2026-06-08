'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Product3D() {
  const { t } = useLanguage();

  // Ordered images (left-to-right, top-to-bottom)
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
    <section id="product-section" className="py-16 sm:py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4">
            {t.product.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            {t.product.subtitle}
          </p>
        </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 p-4 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gallery.map((img) => (
              <figure key={img} className="w-full flex flex-col items-center justify-center">
                <div className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[30rem] relative">
                  {
                    (() => {
                      const alt = img === 'flic-button.jpg' ? 'discreet button' : img.replace(/[-.]/g, ' ');
                      return (
                        <Image
                          src={`/${img}`}
                          alt={alt}
                          fill
                          className="object-contain rounded-lg shadow-lg"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                          priority={img === 'flic-button.jpg'}
                        />
                      );
                    })()
                  }
                </div>
              </figure>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="mt-10 sm:mt-12">
            <h3 className="text-center text-xl sm:text-2xl font-semibold text-white mb-6">
              {t.product.whatYouGet.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {t.product.whatYouGet.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:scale-[1.01] transition-transform">
                  <div className="text-3xl leading-none">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-10 text-center border-t border-gray-700 pt-6">
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-4">
              {t.product.cta.line1} <span className="font-semibold">{t.product.cta.line2} <a href="tel:5148305176" className="underline">{t.product.cta.phone}</a> {t.product.cta.line3}</span>
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">{t.product.cta.note}</p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium text-white mb-2">{t.product.features.connectivity.title}</h3>
            <p className="text-sm text-gray-400">{t.product.features.connectivity.description}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-white mb-2">{t.product.features.design.title}</h3>
            <p className="text-sm text-gray-400">{t.product.features.design.description}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-white mb-2">{t.product.features.protection.title}</h3>
            <p className="text-sm text-gray-400">{t.product.features.protection.description}</p>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-light text-white">
              {t.product.pricing.title}
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="rounded-3xl border border-gray-700 bg-gray-900/80 p-8 shadow-lg">
              <p className="text-sm uppercase tracking-[0.26em] text-blue-300 mb-3">
                {t.product.pricing.individualPlan.title}
              </p>
              <p className="text-4xl sm:text-5xl font-semibold text-white mb-6">
                {t.product.pricing.individualPlan.price}
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                {t.product.pricing.individualPlan.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3 text-sm sm:text-base">
                    <span className="mt-1 text-blue-400">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {t.product.pricing.individualPlan.trial ? (
                <p className="text-sm text-gray-400 mb-2">{t.product.pricing.individualPlan.trial}</p>
              ) : null}
              <p className="text-sm text-gray-400 mb-6">{t.product.pricing.individualPlan.minTerm}</p>
            </div>

            <div className="rounded-3xl border border-gray-700 bg-gray-900/80 p-8 shadow-lg">
              <p className="text-sm uppercase tracking-[0.26em] text-purple-300 mb-3">
                {t.product.pricing.agencyPlan.title}
              </p>
              <p className="text-lg text-white mb-6">{t.product.pricing.agencyPlan.subtitle}</p>
              <div className="overflow-hidden rounded-3xl border border-gray-800">
                <div className="grid grid-cols-[2fr_1fr] bg-gray-950 px-5 py-3 text-xs uppercase tracking-[0.18em] text-gray-400">
                  <span>{t.product.pricing.agencyPlan.volumeHeader}</span>
                  <span>{t.product.pricing.agencyPlan.priceHeader}</span>
                </div>
                <div className="divide-y divide-gray-800">
                  {t.product.pricing.agencyPlan.tiers.map((tier, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr] px-5 py-4 text-sm text-gray-200">
                      <span>{tier.range}</span>
                      <span className="font-semibold text-white">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-400">{t.product.pricing.agencyPlan.note}</p>
              {t.product.pricing.agencyPlan.minTerm ? (
                <p className="text-sm text-gray-400 mt-3">{t.product.pricing.agencyPlan.minTerm}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}