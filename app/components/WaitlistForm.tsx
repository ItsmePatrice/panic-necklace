'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WaitlistForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        console.log('Successfully joined the waitlist');
      } else {
        const data = await response.json();
        setError(data.message || t.waitlist.errors.server);
      }
    } catch (err) {
      setError(t.waitlist.errors.network);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-light text-white mb-4">
              {t.waitlist.successTitle}
            </h2>
            <p className="text-lg text-gray-300">
              {t.waitlist.successMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4">
          {t.waitlist.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 px-2">
          {t.waitlist.subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.waitlist.emailPlaceholder}
              required
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-full border-0 bg-white/10 backdrop-blur text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
            >
              {isSubmitting ? t.waitlist.submitting : t.waitlist.submitButton}
            </button>
          </div>
          {error && (
            <p className="text-red-400 text-sm mt-4">{error}</p>
          )}
        </form>
        
        <p className="text-sm text-gray-400 mt-8">
          {t.waitlist.disclaimer}
        </p>
      </div>
    </section>
  );
}