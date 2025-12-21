'use client';

import { useState, use } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "Contact Us",
        intro: "Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
        labels: {
            name: "Name *",
            email: "Email *",
            subject: "Subject *",
            message: "Message *"
        },
        placeholders: {
            name: "Your name",
            email: "your@email.com",
            subject: "What's this about?",
            message: "Your message..."
        },
        buttons: {
            send: "Send Message",
            sending: "Sending...",
            sent: "✓ Sent!"
        },
        success: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        otherWays: "Other Ways to Reach Us",
        emailLabel: "Email:"
    },
    ro: {
        title: "Contactați-ne",
        intro: "Aveți o întrebare sau feedback? Ne-ar plăcea să auzim de la dumneavoastră. Completați formularul de mai jos și vă vom răspunde cât mai curând posibil.",
        labels: {
            name: "Nume *",
            email: "Email *",
            subject: "Subiect *",
            message: "Mesaj *"
        },
        placeholders: {
            name: "Numele dumneavoastră",
            email: "dumneavoastra@email.com",
            subject: "Despre ce este vorba?",
            message: "Mesajul dumneavoastră..."
        },
        buttons: {
            send: "Trimite Mesaj",
            sending: "Se trimite...",
            sent: "✓ Trimis!"
        },
        success: "Vă mulțumim! Mesajul dumneavoastră a fost trimis cu succes. Vă vom răspunde în curând.",
        otherWays: "Alte Moduri de a Ne Contacta",
        emailLabel: "Email:"
    }
};

export default function Contact({ params }: PageProps) {
    const { lang } = use(params);
    const t = translations[lang] || translations.en;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
                <p className="text-slate-300 mb-8">{t.intro}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            {t.labels.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder={t.placeholders.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            {t.labels.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder={t.placeholders.email}
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                            {t.labels.subject}
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder={t.placeholders.subject}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                            {t.labels.message}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                            placeholder={t.placeholders.message}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold hover:shadow-lg hover:shadow-emerald-900/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? t.buttons.sending : status === 'success' ? t.buttons.sent : t.buttons.send}
                    </button>

                    {status === 'success' && (
                        <div className="p-4 bg-emerald-900/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm">
                            {t.success}
                        </div>
                    )}
                </form>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <h2 className="text-xl font-semibold text-white mb-4">{t.otherWays}</h2>
                    <p className="text-slate-300">
                        {t.emailLabel} <a href="mailto:support@propfirms-hub.com" className="text-emerald-400 hover:text-emerald-300">support@propfirms-hub.com</a>
                    </p>
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
