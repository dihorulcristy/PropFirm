import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-slate-800 mt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="PropFirmHub Logo"
                                width={32}
                                height={32}
                                className="rounded-lg"
                            />
                            <h3 className="text-white font-bold text-lg">PropFirmHub</h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            Your trusted source for comparing proprietary trading firms. Find the best prop firm for your trading style.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/#compare" className="text-slate-400 hover:text-emerald-400 transition-colors">Compare Firms</Link></li>
                            <li><Link href="/#deal" className="text-slate-400 hover:text-emerald-400 transition-colors">Deal of the Week</Link></li>
                            <li><Link href="/how-to-get-funded-guide" className="text-slate-400 hover:text-emerald-400 transition-colors">How to Get Funded</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy-policy" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="text-slate-400 hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/affiliate-disclosure" className="text-slate-400 hover:text-emerald-400 transition-colors">Affiliate Disclosure</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Email: support@propfirmhub.com</li>
                            <li>Address: 123 Trading St, Suite 100</li>
                            <li>Dubai, UAE</li>
                            <li><Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">Contact Form →</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Google Ads Compliant Risk Disclaimer */}
                <div className="border-t border-slate-800 pt-8 mb-8">
                    <div className="bg-black/60 border border-slate-800 rounded-lg p-6">
                        <h5 className="text-white font-semibold text-sm mb-3">⚠️ Risk Disclaimer</h5>
                        <p className="text-slate-400 text-xs leading-relaxed mb-3">
                            <strong className="text-slate-300">All trading activities involve significant risks and are not suitable for all investors.</strong> PropFirmHub does not provide investment services or financial advice. All accounts offered by the listed firms are demo accounts (simulated) with virtual funds. No transactions occur in the real market. Past performance does not guarantee future results.
                        </p>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            <strong className="text-slate-300">Simulated Trading Environment:</strong> All proprietary trading firm evaluations and funded accounts operate in a simulated trading environment. Traders receive virtual capital allocation and trade on demo accounts. Profit splits are based on performance in this simulated environment.
                        </p>
                    </div>
                </div>

                {/* Enhanced Affiliate Disclosure */}
                <div className="border-t border-slate-800 pt-6 mb-6">
                    <p className="text-slate-400 text-xs text-center leading-relaxed">
                        <strong className="text-slate-300">Affiliate Disclosure:</strong> Some links on this site are affiliate links. If you purchase a service through these links, we may receive a commission at no additional cost to you. This helps us maintain the site free of charge. We only recommend evaluation programs we believe will add value to traders.
                    </p>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 pt-6 text-center">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} PropFirmHub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
