
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { ArrowLeft, RefreshCw, LogOut } from 'lucide-react';

type Stats = {
    total: number;
    summary: Record<string, number>;
    clicks: any[];
};

export default function DashboardPage() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState<'today' | 'yesterday' | '7d' | '30d' | 'all'>('all');
    const router = useRouter();

    const fetchStats = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/analytics/stats?period=${period}`);
            if (res.status === 401) {
                router.push('/admin/login');
                return;
            }
            const data = await res.json();
            setStats(data);
        } catch (error) {
            console.error('Failed to fetch stats');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, [period]);

    const topFirm = stats && Object.keys(stats.summary).length > 0
        ? Object.entries(stats.summary).sort(([, a], [, b]) => b - a)[0]
        : ['None', 0];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
            <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <span className="font-bold text-xl">PropFirmHub Analytics</span>
                    <button
                        onClick={() => router.push('/')}
                        className="text-sm text-slate-400 hover:text-white flex items-center gap-2"
                    >
                        <ArrowLeft size={16} /> Back to Site
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>

                    <div className="flex flex-wrap items-center gap-2">
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value as any)}
                            className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-500"
                        >
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="7d">Last 7 Days</option>
                            <option value="30d">Last 30 Days</option>
                            <option value="all">All Time</option>
                        </select>
                        <button
                            onClick={fetchStats}
                            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                        >
                            <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                        </button>
                    </div>
                </div>

                {loading && !stats ? (
                    <div className="text-center py-20 text-slate-500">Loading stats...</div>
                ) : stats ? (
                    <div className="space-y-8">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                                <div className="text-slate-400 text-sm mb-1">Total Clicks</div>
                                <div className="text-3xl font-bold text-emerald-400">{stats.total}</div>
                                <div className="text-xs text-slate-500 mt-2">In selected period</div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                                <div className="text-slate-400 text-sm mb-1">Top Performing Firm</div>
                                <div className="text-3xl font-bold text-blue-400 truncate">{topFirm[0]}</div>
                                <div className="text-xs text-slate-500 mt-2">{topFirm[1]} clicks</div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                                <div className="text-slate-400 text-sm mb-1">Active Firms</div>
                                <div className="text-3xl font-bold text-purple-400">{Object.keys(stats.summary).length}</div>
                                <div className="text-xs text-slate-500 mt-2">With at least 1 click</div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <div className="p-6 border-b border-slate-800">
                                <h2 className="text-xl font-bold">Performance by Firm</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-950/50 text-slate-400 text-sm">
                                            <th className="p-4">Firm Name</th>
                                            <th className="p-4 text-right">Clicks</th>
                                            <th className="p-4 text-right">% of Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800">
                                        {Object.entries(stats.summary)
                                            .sort(([, a], [, b]) => b - a)
                                            .map(([firm, count]) => (
                                                <tr key={firm} className="hover:bg-slate-800/50 transition-colors">
                                                    <td className="p-4 font-medium">{firm}</td>
                                                    <td className="p-4 text-right font-mono text-emerald-400">{count}</td>
                                                    <td className="p-4 text-right text-slate-500 text-sm">
                                                        {stats.total > 0 ? ((count / stats.total) * 100).toFixed(1) : 0}%
                                                    </td>
                                                </tr>
                                            ))}
                                        {Object.keys(stats.summary).length === 0 && (
                                            <tr>
                                                <td colSpan={3} className="p-8 text-center text-slate-500">
                                                    No data for this period
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : null}
            </main>
        </div>
    );
}
