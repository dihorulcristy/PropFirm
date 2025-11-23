import Link from 'next/link';
import { Search, BarChart3 } from 'lucide-react';

export default function Header() {
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
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                        <Link href="#top-firms" className="hover:text-emerald-500 transition-colors text-emerald-500">Top Firms</Link>
                        <Link href="#compare" className="hover:text-emerald-500 transition-colors">Compare</Link>
                        <Link href="#coupons" className="hover:text-emerald-500 transition-colors">Coupons</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                        <input
                            type="search"
                            placeholder="Search"
                            className="h-9 w-64 rounded-md border border-slate-800 bg-black/60 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
