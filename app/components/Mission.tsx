'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Mission() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-white/5 bg-[#0a1020] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <Image
                src="/founder_picture.jpeg"
                alt="Founder portrait"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-5 space-y-2 text-center lg:text-left">
              <p className="text-xl font-medium text-white">{t.mission.founder.name}</p>
              <p className="text-sm leading-relaxed text-slate-300">{t.mission.founder.title}</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-6 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-sky-300">
            Mission
          </div>
          <h2 className="mb-6 text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            {t.mission.title}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {[
              t.mission.content.line1,
              t.mission.content.line2,
              t.mission.content.line3,
              t.mission.content.line4,
              t.mission.content.line5,
              t.mission.content.line6,
              t.mission.content.line7,
            ].map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}