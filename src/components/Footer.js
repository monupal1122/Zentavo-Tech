import Link from 'next/link';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#080808] border-t border-glass-border pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Rocket size={32} className="text-primary group-hover:rotate-12 transition-transform" />
                            <span className="text-3xl font-black text-white tracking-tight">Zentavo Tech</span>
                        </Link>
                        <p className="text-lg text-text-muted mb-6 leading-relaxed">
                            Premium website development and SEO agency based in **Greater Noida**. We empower small businesses, gyms, and restaurants with world-class digital solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-4 bg-glass border border-glass-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-lg"><Twitter size={20} /></Link>
                            <Link href="#" className="p-4 bg-glass border border-glass-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-lg"><Linkedin size={20} /></Link>
                            <Link href="#" className="p-4 bg-glass border border-glass-border rounded-xl hover:border-primary hover:text-primary transition-all shadow-lg"><Facebook size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-2xl font-black mb-8 text-white italic">Our Services</h4>
                        <ul className="flex flex-col gap-4 text-lg font-medium text-text-muted">
                            <li><Link href="/services/website-developer-greater-noida" className="hover:text-primary transition-colors flex items-center gap-2"><ExternalLink size={16} /> Web Dev (from ₹15k)</Link></li>
                            <li><Link href="/services/website-developer-greater-noida" className="hover:text-primary transition-colors flex items-center gap-2"><ExternalLink size={16} /> WordPress (from ₹8k)</Link></li>
                            <li><Link href="/services/ecommerce-website-development" className="hover:text-primary transition-colors flex items-center gap-2"><ExternalLink size={16} /> E-commerce</Link></li>
                            <li><Link href="/services/seo-services-noida" className="hover:text-primary transition-colors flex items-center gap-2"><ExternalLink size={16} /> SEO & Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-2xl font-black mb-8 text-white italic">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-lg font-medium text-text-muted">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Our Agency</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Web Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Expert</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-2xl font-black mb-8 text-white italic">Local Office</h4>
                        <ul className="flex flex-col gap-6 text-lg font-medium text-text-muted">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={24} />
                                <span>Sector Alpha I, Knowledge Park, <br />Greater Noida, UP 201310</span>
                            </li>
                            <li className="flex items-center gap-3 font-black text-white">
                                <Phone className="text-primary shrink-0" size={24} />
                                <span>+91 7589874564</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={24} />
                                <span>monupalji1122@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-md font-bold text-text-muted uppercase tracking-tighter">
                    <p>© {currentYear} WebNoida Digital. Premium Development Hub.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
