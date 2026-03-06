import Link from 'next/link';
import { Smartphone, CheckCircle, Zap, Shield, Rocket, Monitor, ArrowRight, Layers } from 'lucide-react';

export const metadata = {
    title: "App Development Noida & Greater Noida | iOS & Android",
    description: "Premium mobile app development services in Noida. Hybrid and Native apps for businesses and startups. High performance, secure, and conversion-focused.",
};

export default function AppDevPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you develop apps for both iOS and Android?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in cross-platform development using React Native and Flutter, allowing you to launch on both Apple App Store and Google Play Store with a single codebase."
                }
            },
            {
                "@type": "Question",
                "name": "What is the cost of app development in Noida?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "App development costs vary depending on features. Our basic business app packages start from ₹25,000. Complex enterprise solutions with backend integration start from ₹75,000."
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
                        <span className="inline-block py-1.5 px-6 rounded-full bg-accent/10 border border-accent/20 text-sm font-black mb-8 text-accent tracking-widest uppercase">
                            Enterprise Mobility
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 text-white italic">
                            Next-Gen <br /><span className="text-accent italic">App Hub</span>
                        </h1>
                        <p className="text-2xl text-text-muted mb-12 max-w-2xl leading-relaxed">
                            Transform your business vision into a high-performance mobile application. Serving Noida's startups and established icons.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/contact" className="btn btn-primary px-12 py-5 text-xl font-black shadow-accent/20" style={{ background: 'var(--accent)' }}>
                                Build Your App
                            </Link>
                            <Link href="/portfolio" className="btn btn-outline px-12 py-5 text-xl font-bold">
                                View Technical Stack
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 bg-glass/5">
                <div className="container">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 italic text-white text-center">Engineered for <span className="text-accent underline decoration-4">Speed</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: <Layers className="text-accent" />, title: "React Native", desc: "Native performance with cross-platform efficiency for budget-conscious brands." },
                            { icon: <Shield className="text-accent" />, title: "Secure Backend", desc: "Encrypted data storage and secure API integration for fintech and retail." },
                            { icon: <Rocket className="text-accent" />, title: "Cloud Scale", desc: "Automated scaling on AWS/Google Cloud to handle thousands of concurrent users." }
                        ].map((item, idx) => (
                            <div key={idx} className="glass p-10 hover:border-accent/50 transition-all group">
                                <div className="mb-6 p-4 bg-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
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
                        <div className="order-2 lg:order-1 glass p-4 -rotate-2 hover:rotate-0 transition-transform duration-700 bg-accent/5">
                            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" alt="Mobile App UI" className="rounded-xl shadow-2xl" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black mb-10 text-white leading-tight">Beyond Simple <br />Screen Taps</h2>
                            <p className="text-xl text-text-muted mb-10 leading-relaxed italic">
                                We craft immersive digital experiences. Every transition, every button, and every micro-interaction is optimized for conversion.
                            </p>
                            <ul className="grid grid-cols-1 gap-6 mb-12">
                                {[
                                    "Real-time Push Notifications",
                                    "Biometric Authentication (FaceID/Fingerprint)",
                                    "Offline-First Capability",
                                    "Seamless Payment Gateway Integration",
                                    "Native Device API Access (Camera, GPS, Motion)",
                                    "Deep Analytics & Crash Reporting"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg font-bold text-white">
                                        <CheckCircle size={20} className="text-accent shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing CTA */}
            <section className="py-24">
                <div className="container">
                    <div className="glass p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-accent/10 to-transparent">
                        <Monitor className="text-accent mb-8 mx-auto opacity-10" size={100} />
                        <h2 className="text-4xl md:text-7xl font-black mb-8 italic text-white leading-none">Dominate the App Store</h2>
                        <p className="text-2xl text-text-muted mb-12 italic tracking-tighter max-w-3xl mx-auto">
                            Stop being just another website. Be an icon on your customer's home screen.
                        </p>
                        <Link href="/contact" className="btn btn-primary px-16 py-6 text-2xl font-black uppercase italic tracking-widest shadow-xl shadow-accent/20" style={{ background: 'var(--accent)' }}>
                            Launch Your App Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
