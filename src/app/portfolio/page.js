import Link from 'next/link';
import { ExternalLink, Layers, Search, Code, Smartphone, CheckCircle } from 'lucide-react';

export const metadata = {
    title: "Portfolio | Our Recent Web Projects in Greater Noida",
    description: "Explore the real-world results we've delivered for Greater Noida businesses. From e-commerce stores to highly-ranked local service websites.",
};

export default function PortfolioPage() {
    const projects = [
        {
            title: "Gaur City Elite Gym",
            category: "Service Website",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
            tags: ["Next.js", "SEO", "Lead Gen"],
            results: "40% increase in monthly memberships"
        },
        {
            title: "Noida Eats Delivery",
            category: "E-commerce",
            image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=1000&auto=format&fit=crop",
            tags: ["Razorpay", "Dashboard", "Real-time"],
            results: "₹50k+ daily transaction volume"
        },
        {
            title: "Alpha Tech Consulting",
            category: "Corporate Site",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
            tags: ["Branding", "UI/UX", "High Speed"],
            results: "#1 Ranking for local tech keywords"
        },
        {
            title: "Beta-II Retail Hub",
            category: "Local Business",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
            tags: ["Tailwind", "Responsive", "Maps SEO"],
            results: "300% growth in local store visits"
        }
    ];

    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Evidence of <span className="text-primary italic">Excellence</span>
                        </h1>
                        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
                            We don't just talk about performance; we prove it. Explore our recent collaborations with visionary businesses across Noida.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-black/50 py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project, idx) => (
                            <div key={idx} className="glass overflow-hidden group border-glass-border">
                                <div className="relative h-64 overflow-hidden border-b border-glass-border">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors italic">{project.title}</h3>
                                        <ExternalLink className="text-text-muted cursor-pointer hover:text-white" size={20} />
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-black uppercase tracking-widest text-text-muted bg-white/5 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-center gap-3">
                                        <CheckCircle size={16} className="text-primary" />
                                        <span className="text-sm font-bold text-white italic">{project.results}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6 italic text-white">Your Project Could Be <span className="text-primary">Next</span></h2>
                    <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
                        Stop settling for templates. Get a custom-engineered solution that makes your business famous in Greater Noida.
                    </p>
                    <Link href="/contact" className="btn btn-primary px-16">
                        Start Your Collaboration
                    </Link>
                </div>
            </section>
        </div>
    );
}
