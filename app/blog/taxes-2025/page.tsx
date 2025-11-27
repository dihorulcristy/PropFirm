import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, FileText, DollarSign, Calculator, AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prop Firm Taxes 2025: Complete Guide for Funded Traders | PropFirmHub',
    description: 'Complete tax guide for prop firm traders. Learn about tax status, rates by country, deductions, quarterly payments, and optimization strategies to maximize your earnings in 2025.',
    keywords: 'prop firm taxes, funded trader taxes, prop trading taxation, self-employed trader taxes, prop firm tax deductions, trading taxes 2025',
    openGraph: {
        title: 'Prop Firm Taxes 2025: Complete Guide for Funded Traders',
        description: 'Everything you need to know about prop firm taxation, deductions, and optimization strategies for 2025.',
        type: 'article',
        publishedTime: '2025-11-25T00:00:00Z',
    },
};

export default function Taxes2025() {
    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-16 max-w-4xl">
                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Prop Firm Taxes 2025: Complete Guide for Traders
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span>November 25, 2025</span>
                            <span>•</span>
                            <span>PropFirmHub Team</span>
                            <span>•</span>
                            <span>18 min read</span>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-invert prose-emerald max-w-none">
                        {/* Introduction */}
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Taxes on prop firm profits can be confusing. Are you an employee or independent contractor? How much will you actually keep? This complete guide answers all your questions about prop firm taxation in 2025.
                        </p>

                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                            <h3 className="text-lg font-bold text-white mt-0 mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-400" />
                                Disclaimer
                            </h3>
                            <p className="text-slate-300 text-sm mb-0">
                                This guide provides general tax information. Always consult with a qualified tax professional in your jurisdiction for personalized advice. Tax laws vary by country and change frequently.
                            </p>
                        </div>

                        {/* Tax Status Explanation */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Your Tax Status: Independent Contractor</h2>
                        
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-white">Key Fact:</strong> As a prop firm trader, you're classified as an <strong className="text-emerald-400">independent contractor</strong>, not an employee. This means:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mt-0 mb-4">❌ You're NOT:</h3>
                                <ul className="text-slate-300 space-y-2 text-sm mb-0">
                                    <li>• An employee of the prop firm</li>
                                    <li>• Entitled to employee benefits</li>
                                    <li>• Having taxes withheld automatically</li>
                                    <li>• Receiving W-2 forms (US)</li>
                                    <li>• Protected by employment laws</li>
                                </ul>
                            </div>

                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mt-0 mb-4">✅ You ARE:</h3>
                                <ul className="text-slate-300 space-y-2 text-sm mb-0">
                                    <li>• Running your own business</li>
                                    <li>• Responsible for ALL taxes</li>
                                    <li>• Required to file quarterly taxes</li>
                                    <li>• Receiving 1099 forms (US)</li>
                                    <li>• Eligible for business deductions</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tax Rates by Country */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4 flex items-center gap-2">
                            <Globe className="h-8 w-8 text-blue-400" />
                            Tax Rates by Country
                        </h2>

                        {/* United States */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-6">
                            <h3 className="text-xl font-bold text-white mt-0 mb-4">🇺🇸 United States</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white font-bold mb-2">Federal Income Tax (Progressive):</h4>
                                    <div className="bg-black/30 rounded-lg p-4 text-sm text-slate-300 space-y-1">
                                        <p>• 10% on income up to $11,000</p>
                                        <p>• 12% on $11,001 - $44,725</p>
                                        <p>• 22% on $44,726 - $95,375</p>
                                        <p>• 24% on $95,376 - $182,100</p>
                                        <p>• 32% on $182,101 - $231,250</p>
                                        <p>• 35% on $231,251 - $578,125</p>
                                        <p>• 37% on $578,126+</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-2">Self-Employment Tax:</h4>
                                    <p className="text-slate-300 text-sm">15.3% (Social Security 12.4% + Medicare 2.9%)</p>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-2">State Tax:</h4>
                                    <p className="text-slate-300 text-sm">0-13.3% depending on state (CA highest, TX/FL/NV have $0)</p>
                                </div>

                                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                                    <p className="text-white font-bold mb-2">Example: $100,000 prop firm earnings in California:</p>
                                    <div className="text-sm text-slate-300 space-y-1">
                                        <p>• Federal Income Tax: ~$18,000 (22% effective)</p>
                                        <p>• Self-Employment Tax: ~$14,130 (after deduction)</p>
                                        <p>• California State Tax: ~$6,000</p>
                                        <p className="text-emerald-400 font-bold pt-2 border-t border-emerald-500/30">
                                            Total Tax: ~$38,130 (38.1%)<br/>
                                            Take-Home: ~$61,870
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* United Kingdom */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-6">
                            <h3 className="text-xl font-bold text-white mt-0 mb-4">🇬🇧 United Kingdom</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white font-bold mb-2">Income Tax (Self-Employed):</h4>
                                    <div className="bg-black/30 rounded-lg p-4 text-sm text-slate-300 space-y-1">
                                        <p>• 0% on income below £12,570 (personal allowance)</p>
                                        <p>• 20% on £12,571 - £50,270 (basic rate)</p>
                                        <p>• 40% on £50,271 - £125,140 (higher rate)</p>
                                        <p>• 45% on £125,141+ (additional rate)</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-2">National Insurance (Class 2 & 4):</h4>
                                    <p className="text-slate-300 text-sm">Class 2: £3.45/week<br/>Class 4: 9% on profits £12,570-£50,270, then 2%</p>
                                </div>

                                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                                    <p className="text-white font-bold mb-2">Example: £60,000 prop firm earnings:</p>
                                    <div className="text-sm text-slate-300 space-y-1">
                                        <p>• Income Tax: ~£11,432</p>
                                        <p>• National Insurance: ~£4,253</p>
                                        <p className="text-emerald-400 font-bold pt-2 border-t border-emerald-500/30">
                                            Total Tax: ~£15,685 (26.1%)<br/>
                                            Take-Home: ~£44,315
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* European Union */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-6">
                            <h3 className="text-xl font-bold text-white mt-0 mb-4">🇪🇺 European Union (Selected Countries)</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇩🇪 Germany</h4>
                                    <p className="text-slate-300 text-sm">
                                        Income Tax: 14-45%<br/>
                                        Solidarity Surcharge: 5.5%<br/>
                                        <strong className="text-emerald-400">Total: 15-48%</strong>
                                    </p>
                                </div>

                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇫🇷 France</h4>
                                    <p className="text-slate-300 text-sm">
                                        Income Tax: 0-45%<br/>
                                        Social Contributions: 17.2%<br/>
                                        <strong className="text-emerald-400">Total: 17-62%</strong>
                                    </p>
                                </div>

                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇪🇸 Spain</h4>
                                    <p className="text-slate-300 text-sm">
                                        Income Tax: 19-47%<br/>
                                        Social Security: ~30%<br/>
                                        <strong className="text-emerald-400">Total: 25-50%</strong>
                                    </p>
                                </div>

                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇮🇹 Italy</h4>
                                    <p className="text-slate-300 text-sm">
                                        Income Tax: 23-43%<br/>
                                        INPS (social): ~26%<br/>
                                        <strong className="text-emerald-400">Total: 30-50%</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tax Deductions Guide */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4 flex items-center gap-2">
                            <Calculator className="h-8 w-8 text-emerald-400" />
                            Tax Deductions: Maximize Your Savings
                        </h2>

                        <p className="text-slate-300 leading-relaxed mb-6">
                            As a self-employed trader, you can deduct ordinary and necessary business expenses. Here's what you can write off:
                        </p>

                        <div className="space-y-4 my-8">
                            {/* Home Office */}
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mt-0 mb-2">Home Office Deduction</h3>
                                        <p className="text-slate-300 text-sm mb-2">
                                            Deduct a portion of your rent/mortgage, utilities, internet, and insurance based on the percentage of your home used exclusively for trading.
                                        </p>
                                        <div className="bg-black/30 rounded-lg p-3 text-sm text-slate-300">
                                            <strong className="text-emerald-400">Example:</strong> 200 sq ft office in 2,000 sq ft home = 10% deduction<br/>
                                            Monthly rent: $2,000 × 10% = $200/month = $2,400/year deduction
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Equipment & Software */}
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mt-0 mb-2">Equipment & Software</h3>
                                        <p className="text-slate-300 text-sm mb-2">
                                            100% deductible in the year of purchase or depreciated over time:
                                        </p>
                                        <ul className="text-slate-300 text-sm space-y-1 mt-2">
                                            <li>• Computer & monitors ($3,000-$5,000)</li>
                                            <li>• Trading software subscriptions ($500-$2,000/year)</li>
                                            <li>• News/data feeds (Bloomberg, Reuters, etc.)</li>
                                            <li>• Trading platforms (TradingView, NinjaTrader)</li>
                                            <li>• VPS hosting for EAs ($50-$200/month)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3className="text-lg font-bold text-white mt-0 mb-2">Education & Training</h3>
                                        <p className="text-slate-300 text-sm">
                                            Trading courses, books, webinars, conferences, and mentorship programs directly related to improving your trading skills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Services */}
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mt-0 mb-2">Professional Services</h3>
                                        <p className="text-slate-300 text-sm">
                                            Accountant fees, tax preparation software, legal consultations, and business formation costs (LLC, etc.).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quarterly Estimated Taxes */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Quarterly Estimated Taxes</h2>

                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
                            <h3 className="text-lg font-bold text-white mt-0 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-400" />
                                Important: Pay as You Earn
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Unlike employees, you don't have taxes withheld automatically. You must pay estimated taxes quarterly to avoid penalties.
                            </p>

                            <div className="bg-black/30 rounded-lg p-4">
                                <h4 className="text-white font-bold mb-2 text-sm">US Quarterly Deadlines (2025):</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                                    <div>• Q1: April 15, 2025</div>
                                    <div>• Q2: June 15, 2025</div>
                                    <div>• Q3: September 15, 2025</div>
                                    <div>• Q4: January 15, 2026</div>
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm mt-4 mb-0">
                                <strong className="text-emerald-400">Pro Tip:</strong> Set aside 25-40% of each payout for taxes. Open a separate "tax savings" account and transfer funds immediately.
                            </p>
                        </div>

                        {/* Tax Optimization Strategies */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Tax Optimization Strategies</h2>

                        <div className="space-y-6">
                            {/* LLC */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-white mt-0 mb-3">Form an LLC or S-Corp</h3>
                                <p className="text-slate-300 text-sm mb-4">
                                    Once you're consistently profitable ($75,000+/year), consider forming a business entity:
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-black/30 rounded-lg p-4">
                                        <h4 className="text-white font-bold mb-2">LLC (Limited Liability Company)</h4>
                                        <p className="text-slate-300 text-sm">
                                            ✅ Asset protection<br/>
                                            ✅ Pass-through taxation<br/>
                                            ✅ Simple to manage<br/>
                                            ❌ Still pay full self-employment tax
                                        </p>
                                    </div>

                                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                                        <h4 className="text-white font-bold mb-2">S-Corp Election</h4>
                                        <p className="text-slate-300 text-sm">
                                            ✅ Pay yourself reasonable salary<br/>
                                            ✅ Take remaining as distributions<br/>
                                            ✅ <strong className="text-emerald-400">Save 10-15% on taxes!</strong><br/>
                                            ❌ More complex accounting
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                                    <p className="text-white font-bold mb-2">Example S-Corp Savings:</p>
                                    <div className="text-sm text-slate-300 space-y-1">
                                        <p>Earnings: $100,000/year</p>
                                        <p>• Salary: $60,000 (pay full SE tax)</p>
                                        <p>• Distribution: $40,000 (NO SE tax)</p>
                                        <p className="text-emerald-400 font-bold pt-2 border-t border-emerald-500/30">
                                            Tax Savings: ~$6,000/year (15.3% × $40,000)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Retirement Accounts */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-white mt-0 mb-3">Max Out Retirement Contributions</h3>
                                <p className="text-slate-300 text-sm mb-4">
                                    Self-employed retirement accounts offer huge tax deductions:
                                </p>
                                
                                <div className="bg-black/30 rounded-lg p-4 space-y-3 text-sm text-slate-300">
                                    <div>
                                        <strong className="text-white">Solo 401(k):</strong> Contribute up to $69,000/year (2025)<br/>
                                        <span className="text-xs text-slate-400">Best for high earners</span>
                                    </div>
                                    <div>
                                        <strong className="text-white">SEP IRA:</strong> Contribute up to 25% of net earnings<br/>
                                        <span className="text-xs text-slate-400">Simpler setup than Solo 401(k)</span>
                                    </div>
                                    <div>
                                        <strong className="text-white">Traditional IRA:</strong> $7,000/year ($8,000 if 50+)<br/>
                                        <span className="text-xs text-slate-400">Anyone can contribute</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mt-0">Do I pay taxes on challenge fees?</h3>
                                <p className="text-slate-300 mb-0">
                                    No. Challenge fees are business expenses and are tax-deductible. You only pay taxes on actual payouts you receive from the prop firm.
                                </p>
                            </div>

                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mt-0">Can I deduct trading losses?</h3>
                                <p className="text-slate-300 mb-0">
                                    With prop firms, you're not trading your own capital, so traditional trading loss deductions don't apply. However, challenge fees and business expenses are fully deductible.
                                </p>
                            </div>

                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mt-0">What if my prop firm is in another country?</h3>
                                <p className="text-slate-300 mb-0">
                                    You still report income where YOU live and pay taxes there. The prop firm's location doesn't change your tax obligations. Always report all worldwide income.
                                </p>
                            </div>

                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mt-0">How do I track everything for taxes?</h3>
                                <p className="text-slate-300 mb-0">
                                    Use accounting software (QuickBooks, FreshBooks, Wave) or spreadsheets. Track all payouts, expenses, and save receipts. Consider hiring a trading-specialized accountant.
                                </p>
                            </div>
                        </div>

                        {/* Tax Planning Calendar */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Tax Planning Calendar 2025</h2>

                        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-6 my-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-white font-bold mb-3">January - March</h4>
                                    <ul className="text-slate-300 text-sm space-y-2">
                                        <li>✅ Gather previous year tax documents</li>
                                        <li>✅ Review and categorize expenses</li>
                                        <li>✅ Meet with accountant</li>
                                        <li>✅ File taxes by April 15</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-3">April - June</h4>
                                    <ul className="text-slate-300 text-sm space-y-2">
                                        <li>✅ Pay Q1 estimated taxes (April 15)</li>
                                        <li>✅ Set up quarterly tax savings system</li>
                                        <li>✅ Pay Q2 estimated taxes (June 15)</li>
                                        <li>✅ Mid-year financial review</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-3">July - September</h4>
                                    <ul className="text-slate-300 text-sm space-y-2">
                                        <li>✅ Pay Q3 estimated taxes (Sept 15)</li>
                                        <li>✅ Review tax optimization strategies</li>
                                        <li>✅ Consider LLC/S-Corp formation</li>
                                        <li>✅ Update expense tracking</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-3">October - December</h4>
                                    <ul className="text-slate-300 text-sm space-y-2">
                                        <li>✅ Max out retirement contributions</li>
                                        <li>✅ Purchase needed equipment (deduction)</li>
                                        <li>✅ Year-end tax planning meeting</li>
                                        <li>✅ Pay Q4 estimated taxes (Jan 15)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Final Thoughts */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8 my-12">
                            <h2 className="text-2xl font-bold text-white mt-0 mb-4">Key Takeaways</h2>
                            <ul className="text-slate-300 space-y-2 mb-0">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>You're self-employed - plan to pay 25-40% of earnings in taxes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Save tax money separately from every payout immediately</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Track ALL expenses - home office, equipment, software, education</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Pay quarterly estimated taxes to avoid penalties</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Consider LLC/S-Corp at $75,000+ income for tax savings</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Hire a trading-specialized accountant - the ROI is worth it</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 my-8 text-center">
                            <h3 className="text-2xl font-bold text-white mt-0 mb-4">Ready to Start Earning?</h3>
                            <p className="text-slate-300 mb-6">
                                Now that you understand the tax implications, compare prop firms and start your funded trading journey.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                            >
                                Compare Prop Firms →
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div >
    );
}
