'use client';

import Link from 'next/link';
import { Search, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-500">
                            <BarChart3 className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold text-white font-display">PropFirmHub</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                        <button onClick={() => scrollToSection('hero')} className="hover:text-emerald-500 transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('comparison')} className="hover:text-emerald-500 transition-colors">
                            Compare
                        </button>
                        <button onClick={() => scrollToSection('blog')} className="hover:text-emerald-500 transition-colors">
                            Blog
                        </button>
                        <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-500 transition-colors">
                            FAQ
                        </button>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Search */}
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                        <input
                            type="search"
                            placeholder="Search firms..."
                            className="h-9 w-64 rounded-md border border-slate-800 bg-black/60 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900 border-l border-slate-800 md:hidden animate-slide-in">
                        <nav className="flex flex-col p-4 gap-2">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('comparison')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                Compare
                            </button>
                            <button
                                onClick={() => scrollToSection('blog')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                Blog
                            </button>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                FAQ
                            </button>

                            {/* Mobile Search */}
                            <div className="relative mt-4">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                <input
                                    type="search"
                                    placeholder="Search firms..."
                                    className="w-full h-10 rounded-lg border border-slate-700 bg-slate-800 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
}
