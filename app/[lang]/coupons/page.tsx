import LocalizedCouponsPage from '../../components/CouponsContent';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

export default async function CouponsPage({ params }: PageProps) {
    const { lang } = await params;
    return <LocalizedCouponsPage lang={lang} />;
}
