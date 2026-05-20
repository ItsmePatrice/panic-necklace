'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function WhatYoureProbablyDoingRightNow() {
  const { t } = useLanguage();

  const scenarios = t.whatYoureProbablyDoingRightNow.scenarios;
  const consequence = t.whatYoureProbablyDoingRightNow.consequence;

  return (
    <section id="reality-check" className="py-16 sm:py-20 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
            {t.whatYoureProbablyDoingRightNow.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            {t.whatYoureProbablyDoingRightNow.intro}
          </p>
        </div>

        {/* Scenarios Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-800/50 rounded-xl p-6 sm:p-8 hover:border-red-700/80 transition-colors"
            >
              {/* Scenario Number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-600/30 border border-red-500/60 flex items-center justify-center">
                  <span className="text-red-300 font-semibold text-sm">{index + 1}</span>
                </div>
              </div>

              {/* Scenario Title */}
              <h3 className="text-lg sm:text-xl font-medium text-white mb-4">
                "{scenario.title}"
              </h3>

              {/* Problem Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {scenario.description}
              </p>

              {/* Problem Icon */}
              <div className="mt-6 pt-6 border-t border-red-800/30">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a9 9 0 1 1 9.84 0" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Consequence Section */}
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-600/60 rounded-2xl p-8 sm:p-12">
          <div className="flex gap-4 sm:gap-6">
            {/* Warning Icon */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-orange-600/40">
                <svg className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Consequence Text */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-100 mb-4">
                {consequence.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                {consequence.description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Note */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
              {t.whatYoureProbablyDoingRightNow.bridge}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
