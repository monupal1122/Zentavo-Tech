import Link from 'next/link';
import { ShoppingBag, CreditCard, ShieldCheck, BarChart3, ArrowRight, Zap, Smartphone, Settings } from 'lucide-react';

export const metadata = {
    title: "E-commerce Website Development India | Build Scaleable Online Stores",
    description: "Premier E-commerce website development in India. We build high-conversion online stores using Next.js and React. Secure payments, inventory management, and SEO integrated.",
    alternates: {
        canonical: "https://Zentavo Tech.com/services/ecommerce-website-development",
    },
};

export default function EcommerceDev() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "E-commerce Development",
        "provider": {
            "@id": "https://Zentavo Tech.com"
        },
        "description": "Custom e-commerce solutions including multi-vendor marketplaces, shopping cart development, and payment gateway integration."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which platform is best for e-commerce in 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For performance and scalability, a custom Next.js e-commerce store with a headless CMS is often superior to traditional platforms. It offers unmatched page speed and SEO flexibility."
                }
            },
            {
                "@type": "Question",
                "name": "Do you integrate Indian payment gateways?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we integrate all major Indian payment gateways including Razorpay, Paytm, Cashfree, and CCAvenue, ensuring secure and seamless transactions."
                }
            }
        ]
    };

    return (
        <div className="pt-32">

            {/* Hero Section */}
            <section className="pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 blur-[120px] rounded-full -z-10" />
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Scale Your Sales with <span className="text-secondary">E-commerce</span> Excellence
                        </h1>
                        <p className="text-xl text-text-muted mb-10">
                            From startups to enterprises, we build conversion-focused online stores that provide a seamless shopping experience across all devices.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary px-10 py-4" style={{ background: 'var(--secondary)' }}>Start Selling Online</Link>
                            <Link href="/contact" className="btn btn-outline">Request a Demo</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-[#080808]">
                <div className="container max-w-4xl">
                    <div className="prose prose-invert lg:prose-xl">
                        <h2 className="text-3xl font-bold mb-8 text-white">The Future of Digital Commerce is High-Performance</h2>
                        <p className="mb-6 text-text-muted">
                            In the competitive world of online retail, every millisecond counts. Amazon famously found that every 100ms of latency cost them 1% in sales. Our <strong>e-commerce website development</strong> services focus on extreme performance, ensuring your store loads instantly even on poor mobile connections.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            {[
                                { icon: <Zap className="text-secondary" />, title: "Ultra-Fast Checkout", desc: "A streamlined, single-page checkout process designed to minimize cart abandonment." },
                                { icon: <Smartphone className="text-secondary" />, title: "Mobile-First UX", desc: "Over 70% of Indian shoppers use mobile. Our designs are built for the thumb-first era." },
                                { icon: <ShieldCheck className="text-secondary" />, title: "Bank-Grade Security", desc: "SSL encryption, secure API integrations, and PCI-DSS compliance as standard." },
                                { icon: <BarChart3 className="text-secondary" />, title: "Data Analytics", desc: "Deep integration with Google Analytics 4 and Facebook Pixel to track every conversion." }
                            ].map((feature, idx) => (
                                <div key={idx} className="glass p-8 hover:bg-white/5 transition-colors">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-text-muted">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold mb-8 text-white">Comprehensive E-commerce Solutions</h2>
                        <p className="mb-8 text-text-muted">
                            We provide end-to-end solutions that cover all aspects of digital retail:
                        </p>

                        <div className="space-y-6 mb-16">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-2 rounded-lg mt-1"><ShoppingBag size={20} className="text-secondary" /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Inventory Management</h4>
                                    <p className="text-text-muted">Real-time tracking of stock levels with automated alerts and seamless bulk upload capabilities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-2 rounded-lg mt-1"><CreditCard size={20} className="text-secondary" /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Multi-Gateway Integration</h4>
                                    <p className="text-text-muted">Support for Razorpay, Paytm, Credit/Debit cards, Net Banking, and UPI payments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-2 rounded-lg mt-1"><Settings size={20} className="text-secondary" /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Admin Dashboard</h4>
                                    <p className="text-text-muted">A powerful, intuitive control panel to manage orders, customers, coupons, and reports.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Our Next.js E-commerce Stack?</h2>
                        <p className="mb-6 text-text-muted">
                            While platforms like Shopify and WooCommerce are popular, they often suffer from "plugin bloat" which slows down your site. Our custom-coded approach using <strong>Next.js and Tailwind CSS</strong> gives you:
                        </p>
                        <ul className="list-disc pl-6 mb-12 text-text-muted space-y-3">
                            <li><strong>SEO Supremacy:</strong> Server-side rendering (SSR) ensures every product page is indexed perfectly by Google.</li>
                            <li><strong>Total Design Control:</strong> We build the layout specifically for your brand, not restricted by template layouts.</li>
                            <li><strong>Scale with Ease:</strong> Our architecture can handle 100 products or 100,000 without compromising performance.</li>
                            <li><strong>Lower Long-term Costs:</strong> No expensive monthly app subscriptions or per-transaction fees (other than your payment gateway).</li>
                        </ul>

                        <div className="bg-glass p-8 rounded-2xl border-l-4 border-secondary my-16">
                            <h3 className="text-2xl font-bold mb-4">Start Your Digital Storefront Today</h3>
                            <p className="text-text-muted mb-6">
                                Ready to take your local Noida shop to a national or global audience? Let's build an e-commerce platform that doesn't just list products, but builds a brand.
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--secondary)' }}>Book a Free Consultation</Link>
                        </div>

                        <h2 className="text-3xl font-bold mb-10 text-white">E-commerce FAQs</h2>
                        <div className="space-y-6 mb-20">
                            <div className="glass p-6">
                                <h4 className="font-bold mb-2">Can you migrate my existing store to Next.js?</h4>
                                <p className="text-text-muted">Absolutely. We have extensive experience migrating data from Shopify, Magento, and WooCommerce to modern, faster stacks while preserving your SEO rankings.</p>
                            </div>
                            <div className="glass p-6">
                                <h4 className="font-bold mb-2">Is the website mobile-friendly?</h4>
                                <p className="text-text-muted">Yes, we follow a strict mobile-first development approach. Your e-commerce store will provide an app-like experience on smartphones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
