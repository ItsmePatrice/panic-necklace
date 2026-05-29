import PrivacyPolicyClient from './PrivacyPolicyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Discreta',
  description: 'Read Discreta’s privacy policy covering account data, location sharing, emergency contacts, and third-party services.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
