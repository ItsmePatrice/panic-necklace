import type { Metadata } from 'next';
import AccountDeletionClient from './AccountDeletionClient';

export const metadata: Metadata = {
  title: 'Account Deletion | Discreta',
  description: 'Instructions for requesting permanent deletion of your Discreta account and personal data.',
};

export default function AccountDeletionPage() {
  return <AccountDeletionClient />;
}
