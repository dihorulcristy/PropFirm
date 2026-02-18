import { MetadataRoute } from 'next'
import { getAllFirmSlugs } from '@/lib/firms-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://propfirms-hub.com'

    // Base routes - use /en/, /ro/, /es/ prefixes for all languages
    // This avoids generating URLs that redirect (e.g., /blog -> /en/blog)
    const routes = [
        { path: '', changeFreq: 'daily', priority: 1 },
        { path: '/blog', changeFreq: 'daily', priority: 0.95 },
        { path: '/coupons', changeFreq: 'daily', priority: 0.95 },
        { path: '/how-to-get-funded-guide', changeFreq: 'weekly', priority: 0.9 },
    ]

    // Blog posts that exist in all 3 languages under /[lang]/blog/
    const localizedBlogPosts = [
        { slug: 'how-to-pass-prop-firm-challenge', lastMod: '2026-01-02', priority: 0.9 },
        { slug: 'pass-rates-2026', lastMod: '2026-01-07', priority: 0.9 },
        { slug: 'how-hard-is-it-to-get-funded-trading', lastMod: '2026-02-18', priority: 0.85 },
        { slug: 'what-is-prop-firm-account', lastMod: '2026-02-18', priority: 0.85 },
        { slug: 'taxes-2025', lastMod: '2026-02-18', priority: 0.8 },
        { slug: 'top-payouts', lastMod: '2026-02-18', priority: 0.8 },
    ]

    // Blog posts that exist only in English - use /en/blog/ prefix for consistency
    const englishOnlyBlogPosts = [
        { slug: 'hft-vs-swing', lastMod: '2026-02-18', priority: 0.8 },
        { slug: 'best-for-beginners', lastMod: '2026-01-31', priority: 0.9 },
        { slug: 'cheapest-prop-firms', lastMod: '2026-01-31', priority: 0.9 },
        { slug: 'best-prop-firms-usa', lastMod: '2026-01-31', priority: 0.9 },
    ]

    // Other landing pages (English only - no redirect issues)
    const landingPages = [
        { path: '/dominion-funding', lastMod: '2026-02-18', priority: 0.7 },
        { path: '/funderprofutures', lastMod: new Date(), priority: 0.8 },
        { path: '/dnafunded', lastMod: new Date(), priority: 0.8 },
    ]

    // Legal Pages - exist under /[lang]/(legal)/
    const legalPages = ['privacy-policy', 'terms-of-service', 'cookie-policy', 'affiliate-disclosure', 'contact', 'about']

    // Get all prop firm slugs
    const firmSlugs = getAllFirmSlugs()

    const sitemapEntries: MetadataRoute.Sitemap = []

    // 1. Generate core routes with explicit language prefixes (EN + RO + ES)
    // All routes now use /en/, /ro/, /es/ to avoid redirect chains
    for (const route of routes) {
        // English - use /en/ prefix, except for home page which is at root /
        const isHome = route.path === '';
        sitemapEntries.push({
            url: isHome ? baseUrl : `${baseUrl}/en${route.path}`,
            lastModified: new Date(),
            changeFrequency: route.changeFreq as any,
            priority: route.priority,
        })
        // Romanian
        sitemapEntries.push({
            url: `${baseUrl}/ro${route.path}`,
            lastModified: new Date(),
            changeFrequency: route.changeFreq as any,
            priority: route.priority,
        })
        // Spanish
        sitemapEntries.push({
            url: `${baseUrl}/es${route.path}`,
            lastModified: new Date(),
            changeFrequency: route.changeFreq as any,
            priority: route.priority,
        })
    }

    // 2. Generate localized blog routes (EN + RO + ES) - under /[lang]/blog/
    for (const post of localizedBlogPosts) {
        // English
        sitemapEntries.push({
            url: `${baseUrl}/en/blog/${post.slug}`,
            lastModified: new Date(post.lastMod),
            changeFrequency: 'weekly',
            priority: post.priority,
        })
        // Romanian
        sitemapEntries.push({
            url: `${baseUrl}/ro/blog/${post.slug}`,
            lastModified: new Date(post.lastMod),
            changeFrequency: 'weekly',
            priority: post.priority,
        })
        // Spanish
        sitemapEntries.push({
            url: `${baseUrl}/es/blog/${post.slug}`,
            lastModified: new Date(post.lastMod),
            changeFrequency: 'weekly',
            priority: post.priority,
        })
    }

    // 3. Generate English-only blog routes - use /en/blog/ for consistency
    for (const post of englishOnlyBlogPosts) {
        sitemapEntries.push({
            url: `${baseUrl}/en/blog/${post.slug}`,
            lastModified: new Date(post.lastMod),
            changeFrequency: 'weekly',
            priority: post.priority,
        })
    }

    // 4. Generate landing pages (English only - these don't redirect)
    for (const page of landingPages) {
        sitemapEntries.push({
            url: `${baseUrl}${page.path}`,
            lastModified: new Date(page.lastMod),
            changeFrequency: 'weekly',
            priority: page.priority,
        })
    }

    // 5. Add Legal Pages with correct /[lang]/ prefix (EN + RO)
    for (const page of legalPages) {
        // English - use /en/ prefix to match actual page location
        sitemapEntries.push({
            url: `${baseUrl}/en/${page}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        })
        // Romanian
        sitemapEntries.push({
            url: `${baseUrl}/ro/${page}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        })
    }

    // 6. Generate Prop Firm Pages (EN + RO + ES)
    for (const slug of firmSlugs) {
        // English
        sitemapEntries.push({
            url: `${baseUrl}/en/prop-firm/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        })
        // Romanian
        sitemapEntries.push({
            url: `${baseUrl}/ro/prop-firm/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        })
        // Spanish
        sitemapEntries.push({
            url: `${baseUrl}/es/prop-firm/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        })
    }

    return sitemapEntries
}
