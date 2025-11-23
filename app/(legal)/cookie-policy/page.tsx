import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CookiePolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
                        <p className="text-slate-300 mb-4">
                            Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                        <p className="text-slate-300 mb-4">
                            We use cookies to understand how you use our website and to improve your experience. This includes personalizing content and advertising.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
                        <p className="text-slate-300 mb-4">
                            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
                            and you can set most browsers to prevent them from being placed.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
