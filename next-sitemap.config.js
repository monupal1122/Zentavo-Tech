/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://https://zentavo-tech-hub.vercel.app/',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            // If you have dynamic sitemaps, add them here
        ],
    },
    exclude: ['/server-sitemap.xml'], // exclude dynamic sitemap from static generation
}
