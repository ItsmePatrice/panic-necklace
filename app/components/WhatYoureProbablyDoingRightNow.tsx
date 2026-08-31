'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function WhatYoureProbablyDoingRightNow() {
  const { t } = useLanguage();

  const scenarios = t.whatYoureProbablyDoingRightNow.scenarios;
  const consequence = t.whatYoureProbablyDoingRightNow.consequence;

  return (
    <section id="reality-check" className="bg-[#090f1d] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-amber-300">
            Reality check
          </div>
          <h2 className="text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            {t.whatYoureProbablyDoingRightNow.title}
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            {t.whatYoureProbablyDoingRightNow.intro}
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3 sm:mb-16">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_15px_50px_rgba(15,23,42,0.28)] transition-all duration-300 hover:border-sky-400/30 hover:bg-slate-900/80"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-sm font-semibold text-amber-300">
                  {index + 1}
                </div>
              </div>

              <h3 className="mb-4 text-xl font-medium text-white">{scenario.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{scenario.description}</p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent p-8 shadow-[0_25px_80px_rgba(251,146,60,0.12)] sm:p-12">
          <div className="flex gap-4 sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/10 sm:h-14 sm:w-14">
              <svg className="h-6 w-6 text-amber-300 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-xl font-semibold text-amber-50 sm:text-2xl">{consequence.title}</h3>
              <p className="text-base leading-relaxed text-slate-200 sm:text-lg">{consequence.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
