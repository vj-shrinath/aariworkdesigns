import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export default function BlogPostRedirect({ params }: { params: { slug: string } }) {
  redirect(`/${defaultLocale}/blog/${params.slug}`);
}
