'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function SupportClient() {
  const { t } = useLanguage();
  const support = t.support;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">{support.label}</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
            {support.title}
          </h1>
          <p className="mt-4 max-w-3xl text-gray-300">
            {support.subtitle}
          </p>
        </header>

        <section className="space-y-10 text-gray-200">
          <article className="rounded-3xl border border-gray-800 bg-gray-950/60 p-6 shadow-xl shadow-black/30 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">{support.sections.beforeShowing.heading}</h2>
            <p className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-100">
              <strong>Important:</strong> {support.sections.beforeShowing.important}
            </p>

            <div className="mt-6 space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-white">{support.sections.beforeShowing.step1.title}</h3>
                <p className="mt-3">{support.sections.beforeShowing.step1.description}</p>
                <div className="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  <div className="rounded-2xl border border-gray-800 bg-black/60 p-5">
                    <h4 className="text-lg font-semibold text-white">{support.sections.beforeShowing.step1.iosTitle}</h4>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-300">
                      {support.sections.beforeShowing.step1.iosSteps.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl border border-gray-800 bg-black/60 p-5">
                    <h4 className="text-lg font-semibold text-white">{support.sections.beforeShowing.step1.androidTitle}</h4>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-300">
                      {support.sections.beforeShowing.step1.androidSteps.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white">{support.sections.beforeShowing.step2.title}</h3>
                <p className="mt-3">{support.sections.beforeShowing.step2.description}</p>
                <div className="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  <div className="rounded-2xl border border-gray-800 bg-black/60 p-5">
                    <h4 className="text-lg font-semibold text-white">{support.sections.beforeShowing.step2.iosTitle}</h4>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-300">
                      {support.sections.beforeShowing.step2.iosSteps.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl border border-gray-800 bg-black/60 p-5">
                    <h4 className="text-lg font-semibold text-white">{support.sections.beforeShowing.step2.androidTitle}</h4>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-300">
                      {support.sections.beforeShowing.step2.androidSteps.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white">{support.sections.beforeShowing.step3.title}</h3>
                <p className="mt-3">{support.sections.beforeShowing.step3.description}</p>
              </section>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-800 bg-gray-950/60 p-6 shadow-xl shadow-black/30 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">{support.sections.duringShowing.heading}</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-200">
              {support.sections.duringShowing.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-gray-800 bg-gray-950/60 p-6 shadow-xl shadow-black/30 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">{support.sections.troubleshooting.heading}</h2>

            <div className="mt-6 space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-white">{support.sections.troubleshooting.button.title}</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-200">
                  {support.sections.troubleshooting.button.items.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white">{support.sections.troubleshooting.alert.title}</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-200">
                  {support.sections.troubleshooting.alert.items.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white">{support.sections.troubleshooting.background.title}</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-200">
                  {support.sections.troubleshooting.background.items.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-800 bg-gray-950/60 p-6 shadow-xl shadow-black/30 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">{support.sections.contact.heading}</h2>
            <p className="mt-4 text-gray-200">{support.sections.contact.description}</p>
            <p className="mt-4 text-purple-200">
              <a href="mailto:patriceammah@gmail.com" className="underline decoration-purple-400 underline-offset-4">
                {support.sections.contact.emailLabel}
              </a>
            </p>
            <p className="mt-2 text-gray-300">{support.sections.contact.note}</p>
          </article>
        </section>
      </div>
    </main>
  );
}
