import type { Metadata } from 'next';
import SupportClient from './SupportClient';

export const metadata: Metadata = {
  title: 'Support | Discreta',
  description: 'Get setup, safety, and troubleshooting help for Discreta before, during, and after your showings.',
};

export default function SupportPage() {
  return <SupportClient />;
}
