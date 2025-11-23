import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-300 mb-4">
                            By accessing and using PropFirmHub, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                        <p className="text-slate-300 mb-4">
                            Permission is granted to temporarily access the materials on PropFirmHub for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
                        <p className="text-slate-300 mb-4">
                            The materials on PropFirmHub are provided on an 'as is' basis. PropFirmHub makes no warranties, expressed or implied,
                            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
                        <p className="text-slate-300 mb-4">
                            In no event shall PropFirmHub or its suppliers be liable for any damages arising out of the use or inability to use the materials on PropFirmHub.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Affiliate Links</h2>
                        <p className="text-slate-300 mb-4">
                            PropFirmHub contains affiliate links to third-party websites. We may receive compensation when you click on these links.
                            This does not affect the price you pay or our editorial independence.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
