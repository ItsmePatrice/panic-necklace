'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Mission() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="w-full max-w-sm text-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src="/founder_picture.jpeg"
                alt="Founder portrait"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 space-y-1 px-2">
              <p className="text-lg sm:text-xl font-medium text-white">
                {t.mission.founder.name}
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {t.mission.founder.title}
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 sm:mb-8">
            {t.mission.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2 lg:px-0">
            {t.mission.content.line1}
            <br /><br />
            {t.mission.content.line2}
            <br /><br />
            {t.mission.content.line3}
            <br /><br />
            {t.mission.content.line4}
            <br /><br />
            {t.mission.content.line5}
            <br /><br />
            {t.mission.content.line6}
            <br />
            {t.mission.content.line7}
          </p>
        </div>
      </div>
    </section>
  );
}