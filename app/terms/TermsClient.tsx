'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function TermsClient() {
  const { t } = useLanguage();
  const terms = t.terms;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">{terms.header.label}</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
            {terms.header.title}
          </h1>
          <p className="mt-4 text-sm text-gray-400">{terms.header.effectiveDate}</p>
        </div>

        <section className="space-y-10 text-gray-200">
          {terms.sections.map((section, index) => (
            <TermsSection key={index} section={section} />
          ))}
        </section>
      </div>
    </main>
  );
}

function TermsSection({ section }: { section: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
      {section.paragraphs?.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
      {section.bullets?.length ? (
        <ul className="list-disc list-inside space-y-2 text-gray-300 pl-6">
          {section.bullets.map((bullet: string, bulletIndex: number) => (
            <li key={bulletIndex}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.list?.length ? (
        <ul className="list-disc list-inside space-y-2 text-gray-300 pl-6">
          {section.list.map((item: string, itemIndex: number) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.note ? <p>{section.note}</p> : null}
      {section.subsections?.map((subsection: any, subIndex: number) => (
        <div key={subIndex} className="space-y-3 pl-4 border-l border-gray-700">
          <h3 className="text-xl font-medium text-white">{subsection.title}</h3>
          {subsection.paragraphs?.map((paragraph: string, paragraphIndex: number) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
          {subsection.bullets?.length ? (
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-6">
              {subsection.bullets.map((bullet: string, bulletIndex: number) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {subsection.note ? <p>{subsection.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
