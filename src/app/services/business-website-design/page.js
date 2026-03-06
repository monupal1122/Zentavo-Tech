import Link from 'next/link';
import { Palette, Layers, Eye, Layout, ArrowRight, MousePointer2, Smartphone, PenTool } from 'lucide-react';

export const metadata = {
    title: "Modern Business Website Design | Premium UI/UX Agency",
    description: "Elevate your brand with award-winning business website design. We create stunning, high-conversion UI/UX designs tailored for Noida's top startups and established businesses.",
    alternates: {
        canonical: "https://Zentavo Tech.com/services/business-website-design",
    },
};

export default function DesignServices() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design",
        "provider": {
            "@id": "https://Zentavo Tech.com"
        },
        "description": "Premium business website design focusing on brand identity, user experience, and conversion rate optimization (CRO)."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How important is UI/UX for a business website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UI/UX is critical. A well-designed site builds trust and keeps users engaged. Research shows that 88% of users are less likely to return to a site after a bad user experience."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer branding services along with web design?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our web design packages often include branding elements like logo design, color palette selection, and typography to ensure a cohesive digital identity."
                }
            }
        ]
    };

    return (
        <div className="pt-32">

            {/* Hero Section */}
            <section className="pb-20 relative overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-10 blur-[150px] rounded-full" />
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Aesthetics Meets <span className="text-primary">Performance</span> in Web Design
                        </h1>
                        <p className="text-xl text-text-muted mb-10">
                            We design premium digital experiences that capture your brand's essence and turn visitors into lifelong customers.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary px-10 py-4">Start Designing</Link>
                            <Link href="/contact" className="btn btn-outline">See Portfolio</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Showcase / Principles */}
            <section className="bg-[#080808]">
                <div className="container max-w-4xl">
                    <div className="prose prose-invert lg:prose-xl">
                        <h2 className="text-3xl font-bold mb-8 text-white">The Art and Science of Business Website Design</h2>
                        <p className="mb-6 text-text-muted">
                            In 2026, a "good-looking" website is the bare minimum. To truly stand out in Noida's competitive business landscape, your website needs to be a masterpiece of <strong>UI (User Interface)</strong> and <strong>UX (User Experience)</strong>. We blend artistic creativity with psychological design principles to guide your users toward taking action.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                            {[
                                { icon: <Palette className="text-primary" />, title: "Brand Identity", desc: "Crafting a unique visual language that resonates with your target demographic in Greater Noida." },
                                { icon: <Layers className="text-primary" />, title: "Intuitive UX", desc: "Making complex information easy to navigate with logical flows and clear hierarchies." },
                                { icon: <Layout className="text-primary" />, title: "Conversion Centric", desc: "Strategically placed CTAs and trust signals that boost your conversion rates significantly." },
                                { icon: <Eye className="text-primary" />, title: "Visual Hierarchy", desc: "Using contrast, spacing, and typography to ensure users see your most important value prop first." }
                            ].map((p, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="bg-primary/10 p-4 rounded-2xl">{p.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                                        <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold mb-8 text-white">Mobile-First, Always</h2>
                        <p className="mb-6 text-text-muted">
                            With over 80% of local traffic in India coming from mobile devices, we design with a <strong>Smartphone-First</strong> philosophy. This ensures that your business website looks stunning and functions flawlessly whether it's viewed on a high-end iPhone or a budget Android device.
                        </p>

                        <div className="relative glass p-4 my-12 rotate-1 shadow-2xl overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
                                alt="UI/UX Design Process"
                                className="rounded-lg w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                                <p className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Precision Engineering for Every Pixel</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-8 text-white">Our Signature Design Elements</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-16">
                            {[
                                { icon: <Smartphone size={16} />, text: "Responsive Fluid Layouts" },
                                { icon: <MousePointer2 size={16} />, text: "Interactive Micro-interactions" },
                                { icon: <Layers size={16} />, text: "Content-First Structure" },
                                { icon: <PenTool size={16} />, text: "Custom Typography Systems" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-glass p-4 rounded-xl text-sm font-medium">
                                    <span className="text-primary">{item.icon}</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-primary p-1 rounded-2xl mb-16">
                            <div className="bg-background p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">Elevate Your Brand Today</h3>
                                <p className="text-text-muted mb-6">
                                    Ready to move away from generic templates? Let's build a bespoke digital presence that's as unique as your business.
                                </p>
                                <Link href="/contact" className="btn btn-primary">Start Your Design Project</Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-10 text-white">Design FAQs</h2>
                        <div className="space-y-6 mb-20">
                            <div className="glass p-6">
                                <h4 className="font-bold mb-2">How many design revisions do you offer?</h4>
                                <p className="text-text-muted">We offer unlimited minor revisions until you are 100% satisfied with the mockup. We believe in getting it perfect.</p>
                            </div>
                            <div className="glass p-6">
                                <h4 className="font-bold mb-2">Can you design for dark mode?</h4>
                                <p className="text-text-muted">Yes, we specialize in high-end dark mode aesthetics, but we also ensure your site is perfectly legible and accessible in light mode.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
