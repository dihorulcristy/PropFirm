import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                        <p className="text-slate-300 mb-4">
                            We collect information that you provide directly to us, including when you use our website,
                            subscribe to our newsletter, or contact us for support.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="text-slate-300 mb-4">
                            We use the information we collect to provide, maintain, and improve our services,
                            communicate with you, and comply with legal obligations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies</h2>
                        <p className="text-slate-300 mb-4">
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information.
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                        <p className="text-slate-300 mb-4">
                            We implement appropriate technical and organizational measures to protect your personal data against
                            unauthorized or unlawful processing and against accidental loss, destruction, or damage.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                        <p className="text-slate-300 mb-4">
                            You have the right to access, correct, or delete your personal data. You may also object to processing
                            or request restriction of processing of your personal data.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
                        <p className="text-slate-300 mb-4">
                            If you have any questions about this Privacy Policy, please contact us at{' '}
                            <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 underline">
                                our contact page
                            </Link>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
