'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

// Translations inline for client component
const translations = {
    en: {
        title: "Frequently Asked Questions",
        subtitle: "Answers to the most common questions about prop trading firms and the funding process.",
        questions: [
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
        ]
    },
    ro: {
        title: "Întrebări Frecvente",
        subtitle: "Răspunsuri la cele mai comune întrebări despre firmele de prop trading și procesul de finanțare.",
        questions: [
            {
                question: "Ce este o firmă de prop trading?",
                answer: "O firmă de tranzacționare proprietară (prop firm) oferă capital traderilor talentați pentru a tranzacționa pe piețele financiare. În schimbul unei taxe de evaluare și a demonstrării abilităților, traderii pot păstra un procent semnificativ din profiturile generate (de obicei între 80% și 90%)."
            },
            {
                question: "Cum funcționează procesul de evaluare?",
                answer: "Majoritatea firmelor necesită ca traderii să treacă o evaluare în 1 sau 2 faze. Trebuie să atingi un obiectiv de profit fără a încălca regulile de drawdown (pierdere maximă). Odată ce treci testul, primești un cont finanțat."
            },
            {
                question: "Care sunt regulile principale?",
                answer: "Regulile comune includ: Drawdown Zilnic Maxim (cât poți pierde într-o zi), Drawdown Total Maxim (cât poți pierde în total din cont) și uneori restricții de tranzacționare în timpul știrilor economice majore."
            },
            {
                question: "Cât de repede pot retrage profiturile?",
                answer: "Fiecare firmă are propria politică. Unele permit retrageri la fiecare 14 zile, altele lunar, iar unele chiar săptămânal sau la cerere după prima retragere."
            },
            {
                question: "Este permis tradingul automat (EA)?",
                answer: "Multe firme permit utilizarea Expert Advisors (EAs), dar adesea cu condiția să fie propria strategie și nu un EA de arbitraj public sau HFT (High Frequency Trading) care exploatează latența serverului."
            }
        ]
    },
    es: {
        title: "Preguntas Frecuentes",
        subtitle: "Respuestas a las preguntas más comunes sobre firmas de prop trading y el proceso de financiación.",
        questions: [
            {
                question: "¿Qué es una firma de prop trading?",
                answer: "Una firma de trading propietario (prop firm) proporciona capital a traders talentosos para operar en los mercados financieros. A cambio de una tarifa de evaluación y demostrar tus habilidades, los traders pueden quedarse con un porcentaje significativo de las ganancias generadas (generalmente entre el 80% y el 90%)."
            },
            {
                question: "¿Cómo funciona el proceso de evaluación?",
                answer: "La mayoría de las firmas requieren que los traders pasen una evaluación de 1 o 2 fases. Necesitas alcanzar un objetivo de ganancias sin violar las reglas de pérdida (pérdida máxima). Una vez que pasas la prueba, recibes una cuenta financiada."
            },
            {
                question: "¿Cuáles son las reglas principales?",
                "answer": "Las reglas comunes incluyen: Pérdida Diaria Máxima (cuánto puedes perder en un día), Pérdida Total Máxima (cuánto puedes perder en total de la cuenta) y a veces restricciones de trading durante eventos económicos importantes."
            },
            {
                question: "¿Qué tan rápido puedo retirar ganancias?",
                answer: "Cada firma tiene su propia política. Algunas permiten retiros cada 14 días, otras mensualmente, y algunas incluso semanalmente o bajo demanda después del primer retiro."
            },
            {
                question: "¿Se permite el trading automatizado (EA)?",
                answer: "Muchas firmas permiten el uso de Asesores Expertos (EAs), pero a menudo con la condición de que debe ser tu propia estrategia y no un EA de arbitraje público o HFT (Trading de Alta Frecuencia) que explote la latencia del servidor."
            }
        ]
    }
};

interface FAQProps {
    lang?: Locale;
}

export default function FAQ({ lang = 'en' }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = translations[lang] || translations.en;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {t.title}
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {t.questions.map((faq, index) => (
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
