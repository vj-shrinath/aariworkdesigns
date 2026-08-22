import type { Metadata } from 'next';
import Header from '@/components/Header'; import Footer from '@/components/Footer'; import CompliancePage, { styles } from '@/components/CompliancePage'; import type { Locale } from '@/lib/i18n'; import { complianceMetadata, organizationJsonLd, SUPPORT_EMAIL } from '@/lib/compliance';

export const runtime = 'edge';

interface PageParams {
  locale: Locale;
}

export function generateMetadata({ params }: { params: PageParams }): Metadata { return complianceMetadata('About AARI Work Designs', 'Learn about AARI Work Designs, a digital tracing design platform and source of embroidery resources.', `/${params.locale}/about`); }

export default function AboutPage({ params }: { params: PageParams }) { return <><Header/><CompliancePage locale={params.locale} eyebrow="Our story" title="About AARI Work Designs" intro="AARI Work Designs is a digital tracing design platform for makers, embroiderers, and anyone turning a pattern into beautiful fabric work." sections={[{heading:'What we do',paragraphs:['We provide digital tracing tools, Aari work traces, embroidery resources, and practical design content. Our browser-based tools help you position, scale, and trace designs directly from a screen.']},{heading:'Our mission',paragraphs:['Our mission is to make embroidery planning more accessible, portable, and useful—so creators can spend less time preparing patterns and more time making.']},{heading:'Business information',bullets:['Brand: AARI Work Designs','Business model: Online digital products and tools','Location: India · serving users online','Support email: '+SUPPORT_EMAIL,'Support hours: Monday–Saturday, 10:00–18:00 IST']}]}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/><Footer/></>; }
