'use client';

import Link from 'next/link';
import { TrendingUp, FileText, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Locale } from '@/lib/i18n/config';

// Translations
const translations = {
    en: {
        blogs: [
            {
                slug: "how-to-pass-prop-firm-challenge",
                title: "Pass Prop Firm Challenge",
                description: "10 proven steps to pass your prop firm evaluation and get funded."
            },
            {
                slug: "taxes-2025",
                title: "Taxes 2026",
                description: "Compare taxes and fees for 2026. Complete guide for traders."
            },
            {
                slug: "top-payouts",
                title: "Top Payouts",
                description: "Top 10 payouts processed last month. See who pays the fastest."
            }
        ]
    },
    ro: {
        blogs: [
            {
                slug: "how-to-pass-prop-firm-challenge",
                title: "Treci Challenge-ul Prop",
                description: "10 pași dovediți pentru a trece evaluarea prop firm și a fi finanțat."
            },
            {
                slug: "taxes-2025",
                title: "Taxe 2026",
                description: "Compară taxele și comisioanele pentru 2026. Ghid complet pentru traderi."
            },
            {
                slug: "top-payouts",
                title: "Top Plăți",
                description: "Top 10 plăți procesate luna trecută. Vezi cine plătește cel mai rapid."
            }
        ]
    },
    es: {
        blogs: [
            {
                slug: "how-to-pass-prop-firm-challenge",
                title: "Pasa el Desafío Prop",
                description: "10 pasos probados para pasar tu evaluación prop firm y obtener financiación."
            },
            {
                slug: "taxes-2025",
                title: "Impuestos 2026",
                description: "Compara impuestos y tarifas para 2026. Guía completa para traders."
            },
            {
                slug: "top-payouts",
                title: "Mejores Pagos",
                description: "Top 10 pagos procesados el mes pasado. Mira quién paga más rápido."
            }
        ]
    }
};

interface BlogSectionProps {
    lang?: Locale;
}

export default function BlogSection({ lang = 'en' }: BlogSectionProps) {
    const t = translations[lang] || translations.en;
    const basePath = lang === 'en' ? '' : `/${lang}`;

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

    const icons = [TrendingUp, FileText, DollarSign];
    const iconColors = ['text-emerald-500', 'text-slate-300', 'text-emerald-400'];

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
                    {t.blogs.map((blog, index) => {
                        const Icon = icons[index];
                        const iconColor = iconColors[index];

                        return (
                            <motion.div key={blog.slug} variants={cardVariants}>
                                <Link
                                    href={`${basePath}/blog/${blog.slug}`}
                                    className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all block hover-lift"
                                >
                                    <div className="overflow-hidden">
                                        <motion.div
                                            className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
                                            <Icon className={`h-12 w-12 ${iconColor} relative z-10`} />
                                        </motion.div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{blog.title}</h3>
                                        <p className="mt-2 text-sm text-slate-400">
                                            {blog.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
