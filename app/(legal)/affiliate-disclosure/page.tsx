import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AffiliateDisclosure() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Affiliate Disclosure</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Affiliate Relationships</h2>
                        <p className="text-slate-300 mb-4">
                            PropFirmHub participates in affiliate marketing programs. This means that we may receive a commission
                            when you click on links to products or services and make a purchase.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">How It Works</h2>
                        <p className="text-slate-300 mb-4">
                            When you click on an affiliate link and make a purchase, the company pays us a commission.
                            This comes at no additional cost to you. The price you pay is the same whether you use our affiliate link or not.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to You</h2>
                        <p className="text-slate-300 mb-4">
                            We only recommend products and services that we believe will add value to our readers.
                            Our affiliate relationships do not influence our editorial independence or the accuracy of our reviews.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Transparency</h2>
                        <p className="text-slate-300 mb-4">
                            We are committed to transparency. All affiliate links are clearly marked, and we disclose our affiliate relationships
                            in accordance with FTC guidelines and applicable laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Current Affiliate Partners</h2>
                        <p className="text-slate-300 mb-4">
                            We currently have affiliate relationships with the following proprietary trading firms:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>FTMO</li>
                            <li>TradingCult</li>
                            <li>FundedX</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
