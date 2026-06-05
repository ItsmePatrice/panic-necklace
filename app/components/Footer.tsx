'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-white mb-2">
              {t.footer.brandName}
            </h3>
            <p className="text-gray-300">
              {t.footer.tagline}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            {t.footer.copyright}
            <span className="mx-2">|</span>
            <a href="/privacy" className="text-gray-400 hover:text-white underline">
              {t.footer.privacyPolicy}
            </a>
            <span className="mx-2">|</span>
            <a href="/terms" className="text-gray-400 hover:text-white underline">
              {t.footer.termsOfService}
            </a>
            <span className="mx-2">|</span>
            <a href="/support" className="text-gray-400 hover:text-white underline">
              {t.footer.support}
            </a>
            <span className="mx-2">|</span>
            <a href="/account-deletion" className="text-gray-400 hover:text-white underline">
              {t.footer.accountDeletion}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}