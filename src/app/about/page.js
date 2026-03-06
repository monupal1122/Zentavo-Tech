import Link from 'next/link';
import { Target, Heart, Award, Users, CheckCircle } from 'lucide-react';

export const metadata = {
    title: "About WebNoida | Premier Web Agency in Greater Noida",
    description: "Learn about WebNoida Digital Agency. Based in Greater Noida, we are a team of expert developers and SEO specialists dedicated to growing local businesses.",
};

export default function AboutPage() {
    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="pb-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Crafting Digital <span className="text-primary italic">Success Stories</span> in Greater Noida
                        </h1>
                        <p className="text-xl text-text-muted mb-10 leading-relaxed">
                            We are more than a development agency; we are your local partners in digital transformation, building high-performance websites since 2018.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Story */}
            <section className="bg-black/50 py-24">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 italic">Our Origin <span className="text-primary">Story</span></h2>
                            <div className="space-y-6 text-text-muted leading-relaxed">
                                <p>
                                    Founded in the heart of **Greater Noida**, WebNoida emerged from a simple realization: local small businesses were being underserved by large, impersonal agencies.
                                </p>
                                <p>
                                    We started in a small office in Alpha-I with a goal to provide world-class web technology—Next.js, React, and Technical SEO—at prices that local gyms, restaurants, and startups could actually afford.
                                </p>
                                <p>
                                    Today, we have helped over 250+ clients across Gautam Buddha Nagar dominate their digital space, ensuring they aren't just "online," but "audible" to their customers.
                                </p>
                            </div>
                        </div>
                        <div className="glass p-10 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-8 text-white italic">Our Core Values</h3>
                            <div className="space-y-6">
                                {[
                                    { icon: <Heart size={20} className="text-primary" />, title: "Client Obsessed", desc: "Your growth is our only metric of success." },
                                    { icon: <Target size={20} className="text-primary" />, title: "Performance First", desc: "No slow sites. Ever. We build for speed." },
                                    { icon: <Award size={20} className="text-primary" />, title: "Integrity", desc: "Transparent pricing and honest SEO advice." }
                                ].map((v, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">{v.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white">{v.title}</h4>
                                            <p className="text-sm text-text-muted">{v.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Launch Year", value: "2018" },
                            { label: "Successful Projects", value: "250+" },
                            { label: "Local Businesses", value: "180+" },
                            { label: "Coffee Consumed", value: "9,000+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-8 glass group hover:border-primary transition-all">
                                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-xs uppercase tracking-widest font-bold text-text-muted">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Redux */}
            <section className="bg-glass/5 py-24 border-y border-glass-border">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 italic">The <span className="text-primary">WebNoida</span> Difference</h2>
                        <p className="text-text-muted">Why Noida's smartest entrepreneurs choose us for their digital journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            "Direct access to lead developers, no middlemen.",
                            "Weekly transparent reporting on SEO progress.",
                            "Built-in conversion rate optimization (CRO).",
                            "Localized content strategy for Gautam Buddha Nagar.",
                            "Advanced Next.js App Router architectures.",
                            "Secure, low-maintenance hosting solutions."
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-black/30 p-5 rounded-2xl border border-glass-border shadow-inner">
                                <CheckCircle className="text-primary shrink-0" size={20} />
                                <span className="font-medium text-white">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 italic">Let's Build Your <span className="gradient-text italic">Legacy</span></h2>
                    <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the ranks of Noida's most successful digital-first businesses. Your transformation starts with a single conversation.
                    </p>
                    <Link href="/contact" className="btn btn-primary px-16 py-4 text-xl">
                        Start Your Story
                    </Link>
                </div>
            </section>
        </div>
    );
}
