import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompliancePage, { type ComplianceSection } from '@/components/CompliancePage';
import type { Locale } from '@/lib/i18n';
import { complianceMetadata, SUPPORT_EMAIL } from '@/lib/compliance';

export const runtime = 'edge';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return complianceMetadata('Privacy Policy', 'How AARI Work Designs collects, uses, and protects personal information.', `/${params.locale}/privacy-policy`);
}

const sections: ComplianceSection[] = [
  { heading: 'Information we collect', bullets: ['Account details such as email address and authentication identifiers when you create an account.', 'Contact details you submit for support or checkout, including name, email address, and phone number.', 'Technical information such as browser, device, approximate location, and pages visited.'] },
  { heading: 'Cookies and analytics', paragraphs: ['We may use essential cookies to remember language and authentication preferences. Analytics services, including Google Analytics where enabled, may use cookies or similar technologies to understand website usage. You can control cookies through your browser settings.'] },
  { heading: 'Payments and third parties', paragraphs: ['Cashfree Payments processes eligible transactions. We do not store complete card, UPI, or bank credentials. Payment providers may process information under their own privacy policies. Supabase may provide authentication and account data storage. Razorpay is not currently used by the website; if that changes, this policy will be updated.'] },
  { heading: 'Use, retention, and security', paragraphs: ['We use information to provide digital tools, process payments, maintain accounts, prevent abuse, answer support requests, and meet legal obligations. We retain information only as needed for these purposes. We use HTTPS in production and access controls, but no online service can guarantee absolute security.'] },
  { heading: 'Refunds and contact', paragraphs: [`Refund requests are handled under our Refund Policy. For privacy questions or data requests, email ${SUPPORT_EMAIL}.`] },
];

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  return <><Header /><CompliancePage locale={params.locale} eyebrow="Legal" title="Privacy Policy" intro="This policy explains how AARI Work Designs handles information when you use our website, tracing tools, accounts, and payment services." sections={sections} /><Footer /></>;
}
