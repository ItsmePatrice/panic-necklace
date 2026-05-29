'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicyClient() {
  const { t } = useLanguage();
  const privacy = t.privacy;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">{privacy.header.label}</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
            {privacy.header.title}
          </h1>
          <p className="mt-3 text-gray-300">{privacy.header.effectiveDate}</p>
        </div>

        <section className="space-y-8 text-gray-200">
          <PrivacySection section={privacy.introduction} />
          <PrivacySection section={privacy.information} />
          <PrivacySection section={privacy.usage} />
          <PrivacySection section={privacy.thirdParty} />
          <PrivacySection section={privacy.storage} />
          <PrivacySection section={privacy.retention} />
          <PrivacySection section={privacy.rights} />
          <PrivacySection section={privacy.children} />
          <PrivacySection section={privacy.changes} />
          <PrivacySection section={privacy.contact} />
        </section>
      </div>
    </main>
  );
}

function PrivacySection({ section }: { section: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
      {section.paragraphs?.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
      {section.subsections?.map((subsection: any, index: number) => (
        <div key={index} className="space-y-3">
          <h3 className="text-xl font-medium text-white">{subsection.title}</h3>
          {subsection.paragraphs?.map((paragraph: string, subIndex: number) => (
            <p key={subIndex}>{paragraph}</p>
          ))}
          {subsection.bullets?.length ? (
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {subsection.bullets.map((bullet: string, bulletIndex: number) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {subsection.note ? <p>{subsection.note}</p> : null}
        </div>
      ))}
      {section.list?.length ? (
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {section.list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.note ? <p>{section.note}</p> : null}
    </div>
  );
}
