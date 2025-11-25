# Add UI for market type selector
$file = 'app\components\ComparisonTable.tsx'
$c = Get-Content $file -Raw

# Mobile UI - Add before Capital Filter
$mobileUI = @"

                        {/* Market Type Selector */}
                        <div className="snap-start flex-shrink-0">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelectedMarketType('all')}
                                    className={clsx(
                                        "text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                        selectedMarketType === 'all'
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                            : "bg-slate-900/80 border-white/10 text-slate-200"
                                    )}
                                >
                                    📊 All
                                </button>
                                <button
                                    onClick={() => setSelectedMarketType('forex')}
                                    className={clsx(
                                        "text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                        selectedMarketType === 'forex'
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                            : "bg-slate-900/80 border-white/10 text-slate-200"
                                    )}
                                >
                                    💱 Forex
                                </button>
                                <button
                                    onClick={() => setSelectedMarketType('futures')}
                                    className={clsx(
                                        "text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                        selectedMarketType === 'futures'
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                            : "bg-slate-900/80 border-white/10 text-slate-200"
                                    )}
                                >
                                    📈 Futures
                                </button>
                            </div>
                        </div>
"@

$c = $c.Replace(
    "                    <div className=`"flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 hide-scrollbar snap-x items-center`">`r`n`r`n                        {/* Capital Filter */}",
    "                    <div className=`"flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 hide-scrollbar snap-x items-center`">$mobileUI`r`n`r`n                        {/* Capital Filter */}"
)

# Desktop UI - Add at the beginning of desktop filters
$desktopUI = @"

                    {/* Market Type Selector */}
                    <div className="mb-6">
                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={() => setSelectedMarketType('all')}
                                className={clsx(
                                    "px-6 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                                    selectedMarketType === 'all'
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                📊 All Markets
                            </button>
                            <button
                                onClick={() => setSelectedMarketType('forex')}
                                className={clsx(
                                    "px-6 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                                    selectedMarketType === 'forex'
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                💱 Forex
                            </button>
                            <button
                                onClick={() => setSelectedMarketType('futures')}
                                className={clsx(
                                    "px-6 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                                    selectedMarketType === 'futures'
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                📈 Futures
                            </button>
                        </div>
                    </div>
"@

$c = $c.Replace(
    "                <div className=`"hidden md:block mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6`">`r`n                    {/* Level 2: Configurator Dropdowns + Sort & Reset */}",
    "                <div className=`"hidden md:block mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6`">$desktopUI`r`n                    {/* Level 2: Configurator Dropdowns + Sort & Reset */}"
)

Set-Content $file -Value $c -NoNewline
Write-Host "✅ UI components added successfully!"
