import Link from 'next/link';
import { Globe, Smartphone, BarChart, Palette, Rocket, ArrowRight, Zap, Target, Code } from 'lucide-react';

export const metadata = {
    title: "Services | Website Development & SEO Greater Noida",
    description: "Explore our full range of digital services in Greater Noida. From custom web development and e-commerce to dominant SEO and premium UI/UX design.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "WordPress Development",
            slug: "wordpress-development-greater-noida",
            icon: <Globe className="text-secondary" />,
            price: "From ₹8,000",
            desc: "Custom WordPress themes and plugins designed for speed and local SEO. Perfect for small businesses and blogs.",
            features: ["Speed Optimized", "Mobile Ready", "Easy Admin Panel"]
        },
        {
            title: "Custom Web Development",
            slug: "website-developer-greater-noida",
            icon: <Code className="text-primary" />,
            price: "From ₹15,000",
            desc: "High-performance, scalable websites built with Next.js and React. Optimized for Core Web Vitals and user engagement.",
            features: ["Next.js 15 Arch", "Zero-Latent Loading", "Full Scaleability"]
        },
        {
            title: "App Development",
            slug: "app-development-services-noida",
            icon: <Smartphone className="text-accent" />,
            price: "From ₹25,000",
            desc: "Native and cross-platform mobile apps that provide a seamless experience for your users on iOS and Android.",
            features: ["React Native", "Offline Support", "Push Notifications"]
        },
        {
            title: "SEO & Growth Dominance",
            slug: "seo-services-noida",
            icon: <BarChart className="text-primary" />,
            price: "Growth Focused",
            desc: "Dominant keyword rankings and technical SEO to scale your organic visibility in Noida and beyond.",
            features: ["Localized Keywords", "Technical Audit", "Authority Building"]
        }
    ];

    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Our Digital <span className="text-primary italic">Expertise</span>
                        </h1>
                        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
                            We provide end-to-end digital solutions designed to help Greater Noida businesses scale profitably in a digital-first economy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-black/50 py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {services.map((service, idx) => (
                            <Link
                                href={`/services/${service.slug}`}
                                key={idx}
                                className="glass p-12 group hover:bg-glass/10 transition-all border-b-4 border-b-transparent hover:border-b-primary flex flex-col md:flex-row gap-8 items-start"
                            >
                                <div className="bg-white/5 p-6 rounded-3xl shrink-0 group-hover:rotate-12 transition-transform">
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                                        <span className="bg-primary/20 text-primary px-4 py-1 rounded-lg text-sm font-black uppercase tracking-widest">{service.price}</span>
                                    </div>
                                    <p className="text-text-muted mb-8 leading-relaxed italic">{service.desc}</p>
                                    <ul className="flex flex-wrap gap-3 mb-8">
                                        {service.features.map((f, i) => (
                                            <li key={i} className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-tighter">
                                        Explore Details <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-Sell Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container relative z-10 glass p-12 md:p-20 bg-gradient-to-br from-primary/10 to-transparent flex flex-col items-center text-center">
                    <Zap className="text-primary mb-8 animate-pulse" size={48} />
                    <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Need a Custom <span className="text-primary">Strategy?</span></h2>
                    <p className="text-xl text-text-muted mb-10 max-w-2xl leading-relaxed italic">
                        Every business is different. We offer custom digital roadmap sessions where we analyze your specific market in Greater Noida and provide a tailored execution plan.
                    </p>
                    <Link href="/contact" className="btn btn-primary px-16 py-4 italic font-black">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
