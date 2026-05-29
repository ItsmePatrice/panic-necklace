import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service | Discreta',
  description: 'Read the Discreta Terms of Service for account requirements, subscriptions, acceptable use, liability, and dispute resolution.',
};

export default function TermsPage() {
  return <TermsClient />;
}
