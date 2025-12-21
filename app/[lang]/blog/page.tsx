import BlogContent from '../../components/BlogContent';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { lang } = await params;
    return <BlogContent lang={lang} />;
}
