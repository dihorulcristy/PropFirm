'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What is a prop trading firm?",
        answer: "A proprietary trading firm (prop firm) provides capital to talented traders to trade on financial markets. In exchange for an evaluation fee and demonstrating your skills, traders can keep a significant percentage of the profits generated (usually between 80% and 90%)."
    },
    {
        question: "How does the evaluation process work?",
        answer: "Most firms require traders to pass a 1 or 2-phase evaluation. You need to reach a profit target without violating drawdown rules (maximum loss). Once you pass the test, you receive a funded account."
    },
    {
        question: "What are the main rules?",
        answer: "Common rules include: Maximum Daily Drawdown (how much you can lose in a day), Maximum Total Drawdown (how much you can lose in total from the account), and sometimes trading restrictions during major economic news events."
    },
    {
        question: "How fast can I withdraw profits?",
        answer: "Each firm has its own policy. Some allow withdrawals every 14 days, others monthly, and some even weekly or on-demand after the first withdrawal."
    },
    {
        question: "Is automated trading (EA) allowed?",
        answer: "Many firms allow the use of Expert Advisors (EAs), but often with the condition that it must be your own strategy and not a public arbitrage EA or HFT (High Frequency Trading) that exploits server latency."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Answers to the most common questions about prop trading firms and the funding process.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-slate-800 rounded-xl bg-[#0A0A0A] overflow-hidden transition-all duration-200 hover:border-slate-700"
                    >
                        <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-medium text-lg text-slate-200">{faq.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-blue-400" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-500" />
                            )}
                        </button>

                        <div
                            className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="text-slate-400 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
