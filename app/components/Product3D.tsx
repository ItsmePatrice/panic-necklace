'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Product3D() {
  const { t } = useLanguage();

  return (
    <section id="product-section" className="py-16 sm:py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4">
            {t.product.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            {t.product.subtitle}
          </p>
        </div>
        
        {/* Product Images: show both versions */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 p-4 sm:p-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <figure className="w-full flex flex-col items-center justify-center">
              <Image
                src="/earliest_best_prototype.png"
                alt={t.product.images?.necklace?.title ?? 'Necklace'}
                width={800}
                height={600}
                className="max-w-full h-auto object-contain"
                priority
              />
              <figcaption className="text-center mt-3">
                <div className="text-sm font-semibold text-white">{t.product.images.necklace.title}</div>
                {t.product.images.necklace.caption ? (
                  <div className="text-xs text-gray-400">{t.product.images.necklace.caption}</div>
                ) : null}
              </figcaption>
            </figure>

            <figure className="w-full flex flex-col items-center justify-center">
              <Image
                src="/best_prototype_bracelet_all_gold.png"
                alt={t.product.images?.bracelet?.title ?? 'Bracelet'}
                width={800}
                height={600}
                className="max-w-full h-auto object-contain"
                priority
              />
              <figcaption className="text-center mt-3">
                <div className="text-sm font-semibold text-white">{t.product.images.bracelet.title}</div>
                {t.product.images.bracelet.caption ? (
                  <div className="text-xs text-gray-400">{t.product.images.bracelet.caption}</div>
                ) : null}
              </figcaption>
            </figure>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
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
      </div>
    </section>
  );
}