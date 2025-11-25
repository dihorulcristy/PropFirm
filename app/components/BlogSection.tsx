import Link from 'next/link';
import { TrendingUp, FileText, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >

                    {/* Card 1: HFT vs Swing */}
                    <motion.div variants={cardVariants}>
                        <Link
                            href="/blog/hft-vs-swing"
                            className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all block hover-lift"
                        >
                            <div className="overflow-hidden">
                                <motion.div
                                    className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                                    <TrendingUp className="h-12 w-12 text-emerald-500 relative z-10" />
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">HFT vs Swing</h3>
                                <p className="mt-2 text-sm text-slate-400">
                                    We compare and test innovation. HFT vs Swing and the impact on profitability.
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Card 2: Taxes 2025 */}
                    <motion.div variants={cardVariants}>
                        <Link
                            href="/blog/taxes-2025"
                            className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all block hover-lift"
                        >
                            <div className="overflow-hidden">
                                <motion.div
                                    className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
                                    <FileText className="h-12 w-12 text-slate-300 relative z-10" />
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Taxes 2025</h3>
                                <p className="mt-2 text-sm text-slate-400">
                                    Compare taxes and fees for 2025. Complete guide for traders.
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Card 3: Top Payouts */}
                    <motion.div variants={cardVariants}>
                        <Link
                            href="/blog/top-payouts"
                            className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all block hover-lift"
                        >
                            <div className="overflow-hidden">
                                <motion.div
                                    className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-emerald-900/20 opacity-20 mix-blend-overlay"></div>
                                    <DollarSign className="h-12 w-12 text-emerald-400 relative z-10" />
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Top Payouts</h3>
                                <p className="mt-2 text-sm text-slate-400">
                                    Top 10 payouts processed last month. See who pays the fastest.
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
