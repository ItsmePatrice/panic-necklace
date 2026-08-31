'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#040816] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-light tracking-[-0.04em] text-white">{t.footer.brandName}</h3>
            <p className="text-slate-300">{t.footer.tagline}</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">
            <span>{t.footer.copyright}</span>
            <span className="text-slate-600">|</span>
            <a href="/privacy" className="transition hover:text-white underline-offset-2 hover:underline">{t.footer.privacyPolicy}</a>
            <span className="text-slate-600">|</span>
            <a href="/terms" className="transition hover:text-white underline-offset-2 hover:underline">{t.footer.termsOfService}</a>
            <span className="text-slate-600">|</span>
            <a href="/support" className="transition hover:text-white underline-offset-2 hover:underline">{t.footer.support}</a>
            <span className="text-slate-600">|</span>
            <a href="/account-deletion" className="transition hover:text-white underline-offset-2 hover:underline">{t.footer.accountDeletion}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}