'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Mission() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 sm:mb-8">
          {t.mission.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2">
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
    </section>
  );
}