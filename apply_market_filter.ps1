# Complete script to add Forex/Futures filter with UI
$file = 'app\components\ComparisonTable.tsx'
$c = Get-Content $file -Raw

# 1. Add marketType to interface
$c = $c.Replace(
    "    challengeType: '2-Step' | '1-Step' | 'Instant';`r`n    instantFunding: boolean;",
    "    challengeType: '2-Step' | '1-Step' | 'Instant';`r`n    marketType: 'forex' | 'futures';`r`n    instantFunding: boolean;"
)

# 2. Add marketType to all firms
$c = $c.Replace("        challengeType: '2-Step',`r`n        instantFunding:", "        challengeType: '2-Step',`r`n        marketType: 'forex',`r`n        instantFunding:")
$c = $c.Replace("        challengeType: '1-Step',`r`n        instantFunding:", "        challengeType: '1-Step',`r`n        marketType: 'forex',`r`n        instantFunding:")
$c = $c.Replace("        challengeType: 'Instant',`r`n        instantFunding:", "        challengeType: 'Instant',`r`n        marketType: 'forex',`r`n        instantFunding:")

# 3. Add state management
$c = $c.Replace(
    "    const [selectedChallengeType, setSelectedChallengeType] = useState<string>('all');`r`n`r`n    // Level 1:",
    "    const [selectedChallengeType, setSelectedChallengeType] = useState<string>('all');`r`n    const [selectedMarketType, setSelectedMarketType] = useState<'all' | 'forex' | 'futures'>('all');`r`n`r`n    // Level 1:"
)

# 4. Add filtering logic
$c = $c.Replace(
    "            if (selectedChallengeType !== 'all' && firm.challengeType !== selectedChallengeType) return false;`r`n`r`n            // Level 1 filters",
    "            if (selectedChallengeType !== 'all' && firm.challengeType !== selectedChallengeType) return false;`r`n            if (selectedMarketType !== 'all' && firm.marketType !== selectedMarketType) return false;`r`n`r`n            // Level 1 filters"
)

# 5. Update useMemo dependencies
$c = $c.Replace(
    "    }, [selectedCapital, selectedPlatform, selectedChallengeType, quickFilters, sortBy]);",
    "    }, [selectedCapital, selectedPlatform, selectedChallengeType, selectedMarketType, quickFilters, sortBy]);"
)

# 6. Update reset buttons
$c = $c.Replace(
    "                setSelectedCapital('all');`r`n                setSelectedPlatform('all');`r`n                setSelectedChallengeType('all');",
    "                setSelectedCapital('all');`r`n                setSelectedPlatform('all');`r`n                setSelectedChallengeType('all');`r`n                setSelectedMarketType('all');"
)

Set-Content $file -Value $c -NoNewline
Write-Host "✅ All modifications applied successfully!"
Write-Host "Note: UI components still need to be added manually - see walkthrough.md"
