import Link from 'next/link';
import { Search, TrendingUp, Target, BarChart, ArrowRight, MousePointer2, Globe, Monitor } from 'lucide-react';

export const metadata = {
    title: "Professional SEO Services in Noida | Rank #1 on Google",
    description: "Boost your visibility with the best SEO services in Noida. We specialize in local SEO, technical optimization, and high-authority link building to dominate Noida search results.",
    alternates: {
        canonical: "https://Zentavo Tech.com/services/seo-services-noida",
    },
};

import Link from 'next/link';
import { Search, TrendingUp, Target, BarChart, ArrowRight, MousePointer2, Globe, Monitor, Shield, Zap } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: "SEO Services in Noida & International SEO India | WebNoida",
    description: "Rank #1 on Google with the best SEO agency in Noida. We provide local SEO, technical audits, and international SEO strategies to scale businesses globally.",
    keywords: ["SEO services Noida", "International SEO agency India", "local SEO Greater Noida", "technical SEO audit", "search engine optimization India"],
    alternates: {
        canonical: "https://Zentavo Tech.com/services/seo-services-noida",
    },
};

export default function SeoServices() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "SEO & Search Engine Optimization",
        "provider": {
            "@type": "LocalBusiness",
            "name": "WebNoida Digital",
            "url": "https://Zentavo Tech.com",
            "logo": "https://Zentavo Tech.com/logo.png",
            "image": "https://Zentavo Tech.com/og-image.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector Alpha I",
                "addressLocality": "Greater Noida",
                "addressRegion": "UP",
                "postalCode": "201310",
                "addressCountry": "IN"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Noida" },
            { "@type": "City", "name": "Greater Noida" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "USA" },
            { "@type": "Country", "name": "UK" }
        ],
        "description": "Premium SEO services including technical audits, keyword research, and global link building strategies."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does SEO take to show results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a long-term strategy. Typically, you can see initial movement in 3 months, with significant organic traffic growth usually occurring between 6 to 12 months."
                }
            },
            {
                "@type": "Question",
                "name": "Why is Local SEO important for Noida businesses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Local SEO helps you appear in 'Near Me' searches and Google Maps, which is critical for physical businesses like restaurants, gyms, and local services in Noida and Greater Noida."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer international SEO for global clients?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We specialize in helping businesses expand their reach across international borders using multi-regional SEO, hreflang implementation, and global keyword targeting."
                }
            }
        ]
    };

    return (
        <div className="pt-32">
            <JsonLd data={serviceSchema} />
            <JsonLd data={faqSchema} />

            {/* Hero Section */}
            <section className="pb-20 relative">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold mb-6 text-accent tracking-widest uppercase">
                            Global Quality • Indian Pricing
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
                            Dominate Search Results with <span className="text-accent italic">Elite SEO</span>
                        </h1>
                        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
                            Whether you're a local startup in Greater Noida or a global enterprise, our data-driven SEO strategies put you where your customers are.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary px-10 py-4 bg-accent hover:bg-accent/80 border-none">Get Free SEO Audit</Link>
                            <Link href="/portfolio" className="btn btn-outline border-accent/30 text-accent">View Case Studies</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-12 border-y border-glass-border bg-glass/5">
                <div className="container">
                    <p className="text-center text-xs font-black tracking-[0.3em] uppercase mb-8 text-text-muted">Trusted by Industries Worldwide</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="font-black text-2xl italic text-white">TECH-X</div>
                        <div className="font-black text-2xl italic text-white">ECOM-FLOW</div>
                        <div className="font-black text-2xl italic text-white">HEALTH-PLUS</div>
                        <div className="font-black text-2xl italic text-white">FIN-STREAM</div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-black text-accent mb-2">93%</div>
                            <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Search Start Rate</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-accent mb-2">75%</div>
                            <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Page 1 Priority</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-accent mb-2">400%+</div>
                            <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Average ROI</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-accent mb-2">MAX</div>
                            <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Global Reach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-black/40 py-24">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-10 text-white italic">Why SEO is Your <span className="text-accent underline decoration-accent/30">Growth Engine</span></h2>
                            <p className="mb-6 text-lg text-text-muted leading-relaxed">
                                From local "near me" searches in Delta-II to global competitive terms, SEO is the most sustainable way to grow your business. Our <strong>SEO services in Noida</strong> combine technical excellence with cutting-edge content strategies.
                            </p>
                            <p className="mb-8 text-lg text-text-muted leading-relaxed italic">
                                We help international clients leverage Indian talent to dominate high-competition markets in the USA, UK, and Europe at a fraction of local costs.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 glass p-4 border-accent/20">
                                    <div className="bg-accent/20 p-2 rounded-lg text-accent"><Zap size={20} /></div>
                                    <span className="font-bold">Lightning Fast Load Times (Core Web Vitals)</span>
                                </div>
                                <div className="flex items-center gap-4 glass p-4 border-accent/20">
                                    <div className="bg-accent/20 p-2 rounded-lg text-accent"><Shield size={20} /></div>
                                    <span className="font-bold">White-Hat Link Building Strategies</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { icon: <Search className="text-accent" />, title: "Intelligence & Research", desc: "Discovering high-intent keywords that your competitors are missing." },
                                { icon: <Monitor className="text-accent" />, title: "Technical Optimization", desc: "Optimizing Schema, Site Structure, and Core Web Vitals." },
                                { icon: <Target className="text-accent" />, title: "Content Strategy", desc: "Authoritative content that converts visitors into leads." },
                                { icon: <TrendingUp className="text-accent" />, title: "Authority Building", desc: "Building your digital footprint with high-quality backlinks." }
                            ].map((step, idx) => (
                                <div key={idx} className="glass p-8 hover:bg-accent/5 transition-all border-l-4 border-l-accent">
                                    <div className="mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-text-muted">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center italic text-white">Common <span className="text-accent">Queries</span></h2>
                    <div className="space-y-6">
                        {faqSchema.mainEntity.map((faq, idx) => (
                            <div key={idx} className="glass p-8 border-accent/10 hover:border-accent/30 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                                    <span className="text-accent opacity-50">Q.</span> {faq.name}
                                </h4>
                                <p className="text-text-muted leading-relaxed line-clamp-3 hover:line-clamp-none transition-all cursor-pointer italic">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Audit */}
            <section className="py-24 container">
                <div className="glass p-16 md:p-24 text-center bg-gradient-to-br from-accent/10 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <h2 className="text-4xl md:text-6xl font-black mb-10 text-white italic">Ready for <span className="text-accent">First Page?</span></h2>
                    <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto italic">
                        Get a detailed 25-point technical audit of your website and a roadmap to outrank your competitors.
                    </p>
                    <Link href="/contact" className="btn btn-primary px-16 py-5 text-xl bg-accent hover:bg-accent/80 border-none">
                        Claim Your Free Audit
                    </Link>
                </div>
            </section>
        </div>
    );
}
