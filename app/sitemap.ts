import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://propfirms-hub.com'

    // Base routes and their localized versions
    const routes = [
        { path: '', changeFreq: 'daily', priority: 1 },
        { path: '/blog', changeFreq: 'daily', priority: 0.95 },
        { path: '/coupons', changeFreq: 'daily', priority: 0.95 },
        { path: '/how-to-get-funded-guide', changeFreq: 'weekly', priority: 0.9 },
    ]

    // Blog posts
    const blogPosts = [
        { slug: 'how-to-pass-prop-firm-challenge', lastMod: '2026-01-02', priority: 0.9 },
        { slug: 'how-hard-is-it-to-get-funded-trading', lastMod: '2025-11-27', priority: 0.85 },
        { slug: 'what-is-prop-firm-account', lastMod: '2025-12-02', priority: 0.85 },
        { slug: 'hft-vs-swing', lastMod: '2025-11-27', priority: 0.8 },
        { slug: 'taxes-2025', lastMod: '2025-11-27', priority: 0.8 },
        { slug: 'top-payouts', lastMod: '2025-11-27', priority: 0.8 },
    ]

    // Other landing pages
    const landingPages = [
        { path: '/dominion-funding', lastMod: '2025-11-24', priority: 0.7 },
        { path: '/funderprofutures', lastMod: new Date(), priority: 0.8 },
    ]

    const sitemapEntries: MetadataRoute.Sitemap = []

    // 1. Generate core routes (EN + RO + ES)
    for (const route of routes) {
        // English (default)
        sitemapEntries.push({
            url: `${baseUrl}${route.path}`,
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

    // 2. Generate blog routes (EN + RO + ES)
    for (const post of blogPosts) {
        // English
        sitemapEntries.push({
            url: `${baseUrl}/blog/${post.slug}`,
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

    // 3. Generate landing pages (EN only for now if not localized)
    // Assuming these are specific landing pages that might not have /ro versions yet
    // If they ARE localized, move them to the 'routes' array or handle similar to above.
    // Based on previous context, these seem to be English-only or external LP style.
    for (const page of landingPages) {
        sitemapEntries.push({
            url: `${baseUrl}${page.path}`,
            lastModified: new Date(page.lastMod),
            changeFrequency: 'weekly',
            priority: page.priority,
        })
    }

    // 4. Add Legal Pages (EN + RO) because we just localized them
    const legalPages = ['privacy-policy', 'terms-of-service', 'cookie-policy', 'affiliate-disclosure', 'contact']

    for (const page of legalPages) {
        // English
        sitemapEntries.push({
            url: `${baseUrl}/${page}`,
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

    return sitemapEntries
}
