import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export const runtime = 'edge';

export default async function BlogPostRedirect({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/${defaultLocale}/blog/${slug || ''}`);
}
