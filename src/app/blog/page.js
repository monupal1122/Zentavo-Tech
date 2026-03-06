import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, BookOpen, Search } from 'lucide-react';

export const metadata = {
    title: "Web Development & SEO Blog | Insights from WebNoida",
    description: "Expert insights on Next.js, SEO dominance, and digital growth. Helping Noida businesses and international clients scale profitably with modern tech.",
    keywords: [
        "web development blog",
        "SEO strategy India",
        "Next.js trends 2026",
        "digital marketing Noida",
        "international SEO agency india"
    ],
};

export default function BlogPage() {
    const blogs = [
        {
            title: "How to Rank Your Greater Noida Business on Google Page 1",
            slug: "rank-greater-noida-google-page-1",
            date: "Feb 24, 2026",
            author: "Admin",
            tag: "SEO",
            excerpt: "Discover the exact technical and local SEO steps required to dominate your niche in Gautam Buddha Nagar."
        },
        {
            title: "International SEO vs Local SEO: Finding Your Perfect Mix",
            slug: "international-vs-local-seo",
            date: "Feb 20, 2026",
            author: "SEO Lead",
            tag: "Strategy",
            excerpt: "Why staying local might be limiting your growth, and how to attract global high-ticket clients from Noida."
        },
        {
            title: "Why Next.js 15 is the Best Choice for Fast E-commerce",
            slug: "why-nextjs-15-for-ecommerce",
            date: "Feb 15, 2026",
            author: "Admin",
            tag: "Development",
            excerpt: "Performance matters. Explore why we use the Next.js App Router for every conversion-focused online store."
        }
    ];

    const upcomingTopics = [
        "Mastering Core Web Vitals in 2026",
        "Scaling Shopify vs Custom Next.js for Global Sales",
        "Local SEO for Restaurants in Greater Noida West",
        "Hiring a Web Agency in India: A Global Guide",
        "Why Page Speed is Your Best Sales Tool"
    ];

    return (
        <div className="pt-32 pb-24">
            <section className="mb-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold mb-6 text-primary tracking-widest uppercase italic">
                            Digital Intelligence Hub
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 italic text-white leading-tight">
                            Knowledge <span className="text-primary italic">Central</span>
                        </h1>
                        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto italic">
                            Expert perspectives on engineering search dominance and visual excellence for world-class brands.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-black/40 py-24 border-y border-glass-border">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-12">
                            <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tighter italic">Latest Updates</h3>
                            {blogs.map((blog, idx) => (
                                <div key={idx} className="glass p-10 group hover:border-primary/50 transition-all flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 text-xs text-text-muted mb-4 uppercase tracking-widest font-bold">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-md">{blog.tag}</span>
                                        </div>
                                        <h2 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors text-white italic leading-tight">{blog.title}</h2>
                                        <p className="text-text-muted mb-8 leading-relaxed italic text-lg line-clamp-2">
                                            {blog.excerpt}
                                        </p>
                                        <Link href={`/blog/${blog.slug}`} className="flex items-center gap-2 text-white font-black group-hover:gap-4 transition-all uppercase tracking-tighter">
                                            Dive Deeper <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <aside className="space-y-12">
                            <div className="glass p-10 border-primary/20 bg-primary/5">
                                <h3 className="text-2xl font-black mb-8 text-white italic uppercase tracking-tighter">Growth Map</h3>
                                <ul className="space-y-6">
                                    {upcomingTopics.map((topic, i) => (
                                        <li key={i} className="flex gap-4 items-start group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
                                            <span className="text-text-muted group-hover:text-white transition-colors text-sm font-bold italic leading-tight">
                                                {topic}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                                    <p className="text-sm font-bold text-white mb-6 italic">Need a custom technical roadmap?</p>
                                    <Link href="/contact" className="btn btn-primary w-full py-4 text-xs font-black uppercase tracking-widest italic">
                                        Request Guide
                                    </Link>
                                </div>
                            </div>

                            <div className="glass p-10 text-center">
                                <Search className="text-primary mx-auto mb-6 opacity-30" size={40} />
                                <h4 className="text-xl font-bold mb-4">Search Knowledge</h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Find a strategy..."
                                        className="w-full bg-black/40 border border-glass-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary font-bold"
                                    />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
