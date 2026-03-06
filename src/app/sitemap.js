export default async function sitemap() {
    const baseUrl = 'https://Zentavo Tech.com';

    const services = [
        'website-developer-greater-noida',
        'ecommerce-website-development',
        'seo-services-noida',
        'business-website-design',
        'wordpress-development-greater-noida',
        'app-development-services-noida',
    ];

    const serviceUrls = services.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1, },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9, },
        { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8, },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8, },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, },
    ];

    return [
        ...staticPages,
        ...serviceUrls,
    ];
}
