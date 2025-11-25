import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://propfirmhub.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog/hft-vs-swing`,
            lastModified: new Date('2025-11-25'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/taxes-2025`,
            lastModified: new Date('2025-11-25'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/top-payouts`,
            lastModified: new Date('2025-11-25'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dominion-funding`,
            lastModified: new Date('2025-11-24'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ]
}
