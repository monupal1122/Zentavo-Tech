import Link from 'next/link';
import { Globe, CheckCircle, Zap, Shield, Target, Smartphone, Rocket, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "WordPress Developer Greater Noida | Custom Themes & SEO",
    description: "Affordable WordPress development in Greater Noida. Starting from ₹8,000. Custom themes, speed optimization, and SEO-ready websites for local businesses.",
};

export default function WordPressDevPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does a WordPress website cost in Greater Noida?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our basic WordPress packages start from ₹8,000, which includes a professional design, mobile responsiveness, and basic SEO. Custom high-end business sites range up to ₹25,000."
                }
            },
            {
                "@type": "Question",
                "name": "Is WordPress good for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! WordPress is one of the best platforms for SEO. Combined with our technical optimization and Greater Noida local SEO strategy, we help your site reach the first page of Google."
                }
            }
        ]
    };

    return (
        <div className="pt-32">

            {/* Hero Section */}
            <section className="pb-24 border-b border-glass-border">
                <div className="container">
                    <div className="max-w-4xl">
                        <span className="inline-block py-1.5 px-6 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-black mb-8 text-secondary tracking-widest uppercase">
                            Budget-Friendly Excellence
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 text-white italic">
                            WordPress <span className="text-secondary italic">Dominance</span>
                        </h1>
                        <p className="text-2xl text-text-muted mb-12 max-w-2xl leading-relaxed">
                            Get a professional, high-speed WordPress website for your Greater Noida business. Starting from just <span className="text-white font-bold">₹8,000</span>.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/contact" className="btn btn-primary px-12 py-5 text-xl font-black shadow-secondary/20" style={{ background: 'var(--secondary)' }}>
                                Start At ₹8,000
                            </Link>
                            <Link href="/portfolio" className="btn btn-outline px-12 py-5 text-xl font-bold">
                                See Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why WordPress Section */}
            <section className="py-24 bg-glass/5">
                <div className="container">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 italic text-white text-center">Why Choose <span className="text-secondary">WordPress?</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: <Zap className="text-secondary" />, title: "Auto Optimization", desc: "We use lightweight themes and premium caching for sub-2s load times." },
                            { icon: <Shield className="text-secondary" />, title: "Security First", desc: "Advanced firewall and daily backups mean your data is always safe." },
                            { icon: <Target className="text-secondary" />, title: "SEO Driven", desc: "Pre-configured for local Noida rankings with Yoast and Schema integration." }
                        ].map((item, idx) => (
                            <div key={idx} className="glass p-10 hover:border-secondary/50 transition-all group">
                                <div className="mb-6 p-4 bg-secondary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-white uppercase italic">{item.title}</h3>
                                <p className="text-text-muted text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-10 text-white">Full-Control Content Management</h2>
                            <p className="text-xl text-text-muted mb-10 leading-relaxed italic">
                                We don't just hand over a site and disappear. Our WordPress solutions are built to be managed by YOU. No coding skills required.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Custom Elementor Design",
                                    "WooCommerce Ready",
                                    "Speed & Cache Optimization",
                                    "Local SEO Integration",
                                    "WhatsApp API Setup",
                                    "Lead Capture Forms"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg font-bold text-white">
                                        <CheckCircle size={20} className="text-secondary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass p-4 rotate-3 hover:rotate-0 transition-transform duration-700 bg-secondary/5">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" alt="WordPress Dashboard" className="rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing CTA */}
            <section className="py-24">
                <div className="container">
                    <div className="glass p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-secondary/10 to-transparent">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 italic text-white">Ready to Go Live?</h2>
                        <p className="text-2xl text-text-muted mb-12 italic underline decoration-secondary/30">
                            The most affordable premium tech in Greater Noida. Your business deserves a better face online.
                        </p>
                        <Link href="/contact" className="btn btn-primary px-16 py-6 text-2xl font-black uppercase italic tracking-widest shadow-xl shadow-secondary/20" style={{ background: 'var(--secondary)' }}>
                            Launch Site @ ₹8,000
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
