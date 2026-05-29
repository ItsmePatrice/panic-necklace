'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function AccountDeletionClient() {
  const { t } = useLanguage();
  const content = t.accountDeletion;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="account-deletion-title">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">{content.header.label}</p>
          <h1 id="account-deletion-title" className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
            {content.header.title}
          </h1>
          <p className="mt-4 text-gray-300">{content.header.description}</p>
        </header>

        <section className="space-y-8" aria-labelledby="steps-title">
          <div className="rounded-3xl border border-gray-800 bg-gray-950/50 p-8 shadow-xl shadow-black/20">
            <h2 id="steps-title" className="text-2xl font-semibold text-white">{content.stepsTitle}</h2>
            <ol className="mt-6 space-y-6 list-decimal pl-6 text-gray-200">
              {content.steps.map((step: any) => (
                <li key={step.number} className="rounded-2xl border border-gray-800 bg-black/70 p-6">
                  <p className="text-xl font-medium text-white">{step.title}</p>
                  <p className="mt-2 text-gray-300">{step.description}</p>
                  {step.detail ? (
                    <p className="mt-4">
                      <a
                        href={`mailto:${step.detail}`}
                        className="break-words rounded-xl bg-gray-900 px-4 py-3 text-sm text-purple-200 underline focus:outline-none focus:ring-2 focus:ring-purple-400"
                        aria-label={`${step.detail} email`}
                      >
                        {step.detail}
                      </a>
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-950/50 p-8 shadow-xl shadow-black/20">
            <h2 id="deletions-title" className="text-2xl font-semibold text-white">{content.deletionsTitle}</h2>
            <dl className="mt-6 space-y-4 text-gray-200">
              {content.deletions.map((item: any) => (
                <div key={item.item} className="rounded-2xl border border-gray-800 bg-black/70 px-6 py-4">
                  <dt className="text-base text-white">{item.item}</dt>
                  <dd className="mt-2 flex items-center justify-between text-sm font-semibold text-white">
                    <span>{item.status}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </main>
  );
}
