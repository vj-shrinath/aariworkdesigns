import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export default function TraceRedirect() {
  redirect(`/${defaultLocale}/trace`);
}
