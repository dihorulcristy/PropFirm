import { redirect } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale; slug: string }>;
}

// Redirect to English blog article since articles are not translated
export default async function LocalizedBlogArticle({ params }: PageProps) {
    const { slug } = await params;
    redirect(`/blog/${slug}`);
}
