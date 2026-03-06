import Link from 'next/link';
import { CheckCircle, ArrowRight, MessageSquare, Code, Globe, Zap, Shield, Smartphone } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: "Website Developer in Greater Noida & Ecommerce Agency India",
    description: "Expert website development in Greater Noida & Noida. We build high-performance Next.js sites and e-commerce solutions for global clients and local businesses.",
    keywords: ["website developer Greater Noida", "web development company India", "ecommerce website development", "Next.js developers Noida", "custom web design India"],
    alternates: {
        canonical: "https://Zentavo Tech.com/services/website-developer-greater-noida",
    },
};

export default function GreaterNoidaWebDev() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Web Development",
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
            { "@type": "City", "name": "Greater Noida" },
            { "@type": "City", "name": "Noida" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "USA" },
            { "@type": "Country", "name": "Canada" }
        ],
        "description": "High-performance web development using Next.js, React, and modern UI/UX principles for local and international brands."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does a website cost in India for international clients?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our custom web development packages start at $200 (₹15,000) for basic business sites. Enterprise-grade Next.js solutions and complex e-commerce platforms range from $1,000 to $5,000 based on requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Why choose WebNoida for offshore web development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer global quality engineering at Indian pricing. Our team specializes in Next.js 15, ensuring your site meets world-class performance and SEO standards while saving you up to 70% in development costs."
                }
            },
            {
                "@type": "Question",
                "name": "Serving local businesses in Greater Noida?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! We are deeply rooted in Greater Noida, serving businesses across Alpha-I, Knowledge Park, Pari Chowk, and Greater Noida West with personalized, face-to-face consultancy."
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
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold mb-6 text-primary tracking-widest uppercase">
                            Global Tech Stack • Local Expertise
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
                            Elite <span className="text-primary italic">Web development</span> in Greater Noida
                        </h1>
                        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
                            We don't just build websites; we engineer digital revenue engines using the world's most advanced web technologies.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary px-10 py-4">Start Your Project</Link>
                            <Link href="/portfolio" className="btn btn-outline">Check Our Portfolio</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-12 border-y border-glass-border bg-glass/5">
                <div className="container">
                    <p className="text-center text-xs font-black tracking-[0.3em] uppercase mb-8 text-text-muted italic">Powering Digital Empires Across Borders</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale">
                        <div className="font-black text-2xl italic text-white flex items-center gap-2"><Globe size={20} /> GLOBAL-TECH</div>
                        <div className="font-black text-2xl italic text-white flex items-center gap-2"><Zap size={20} /> VITE-FLOW</div>
                        <div className="font-black text-2xl italic text-white flex items-center gap-2"><Smartphone size={20} /> APP-X</div>
                        <div className="font-black text-2xl italic text-white flex items-center gap-2"><Code size={20} /> NEXT-DEV</div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-black/30 py-24 leading-relaxed">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-10 text-white italic">The Next-Gen <span className="text-primary underline decoration-primary/30">Development Standard</span></h2>
                            <p className="mb-6 text-lg text-text-muted">
                                Greater Noida is evolving, and your web presence should too. From the high-rises of Greater Noida West to the educational hubs of Knowledge Park, we provide specialized <strong>website development in Greater Noida</strong> that stands out.
                            </p>
                            <p className="mb-8 text-lg text-text-muted italic">
                                For our international clients, we serve as a high-authority offshore development partner, delivering "Silicon Valley" quality at "Noida" prices.
                            </p>

                            <div className="space-y-6">
                                <div className="glass p-6 border-l-4 border-l-primary">
                                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Zap className="text-primary" size={20} /> Sub-Second Loading</h4>
                                    <p className="text-sm text-text-muted">Optimized for Core Web Vitals to ensure your users never wait and Google loves your site.</p>
                                </div>
                                <div className="glass p-6 border-l-4 border-l-primary">
                                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Smartphone className="text-primary" size={20} /> Mobile-First UI/UX</h4>
                                    <p className="text-sm text-text-muted">90% of local traffic is on mobile. We design for thumb-friendly, high-conversion experiences.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tighter">Localized Digital Impact</h3>
                            <ul className="space-y-6">
                                {[
                                    { area: "Greater Noida West", desc: "Complex portals for the booming residential and commercial sector." },
                                    { area: "Knowledge Park", desc: "Educational and dynamic management systems for institutions." },
                                    { area: "Alpha & Delta Sectors", desc: "Modern e-commerce for retail and boutique service providers." },
                                    { area: "Ecotech / Industrial", desc: "Corporate-grade industrial branding and B2B platforms." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                                        <div>
                                            <span className="font-bold text-white block">{item.area}</span>
                                            <span className="text-sm text-text-muted">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-8 glass border-primary/20 bg-primary/5">
                                <h4 className="text-xl font-bold mb-4 italic">Free Tech Roadmap</h4>
                                <p className="text-sm text-text-muted mb-6">Not sure which tech stack to choose? Let's sit down at Alpha-I or jump on a Zoom call to map out your digital future.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Claim Free Strategy Session</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step-by-Step */}
            <section className="py-24 border-y border-glass-border">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-black mb-20 text-center italic">Our Development <span className="text-primary">Lifecycle</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Strategy", desc: "Deep analysis of your local Noida competitors and global benchmarks." },
                            { step: "02", title: "Architecture", desc: "Designing high-performance site structures and high-conversion UI." },
                            { step: "03", title: "Engineering", desc: "Clean coding with Next.js 15, optimized for speed and crawlability." },
                            { step: "04", title: "Domination", desc: "Launch with full SEO optimization and location-based schema." }
                        ].map((s, idx) => (
                            <div key={idx} className="text-center group">
                                <span className="text-6xl font-black text-primary/10 block mb-4 group-hover:text-primary/30 transition-all">{s.step}</span>
                                <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                                <p className="text-sm text-text-muted italic">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center italic text-white">Project <span className="text-primary">FAQ</span></h2>
                    <div className="space-y-6">
                        {faqSchema.mainEntity.map((faq, idx) => (
                            <div key={idx} className="glass p-8 border-primary/10 hover:border-primary/30 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                                    <span className="text-primary opacity-50">Q.</span> {faq.name}
                                </h4>
                                <p className="text-text-muted leading-relaxed italic">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 container">
                <div className="glass p-16 md:p-24 text-center bg-gradient-to-tr from-primary/10 to-transparent">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 text-white italic">Ready to <span className="text-primary underline">Level Up?</span></h2>
                    <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto italic">
                        Join 250+ businesses who trusted Greater Noida's best developers to build their digital presence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/contact" className="btn btn-primary px-16 py-5 text-xl">
                            Talk to Us Now
                        </Link>
                        <a href="tel:+917589874564" className="btn btn-outline px-16 py-5 text-xl">
                            Instant Call
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
