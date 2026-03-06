"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function ContactPage() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the typical starting price for a website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our basic business websites in Greater Noida start from ₹15,000. Custom e-commerce solutions started from ₹45,000 depending on features."
                }
            },
            {
                "@type": "Question",
                "name": "How do I get a free SEO audit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply fill out the contact form below with your website URL, and our team will send you a detailed 25-point SEO audit within 24 hours."
                }
            }
        ]
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
console.log(handleSubmit);

        // Keys are now securely loaded from .env.local
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

       try {
    await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
    );

    setStatus('success');
    formRef.current.reset();

} catch (error) {
    console.error("EmailJS Error:", error);
    setStatus('error');
}
    };

    return (
        <div className="pt-32">

            <section className="pb-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight italic">
                            Let's Start Your <span className="text-primary">Digital Transformation</span>
                        </h1>
                        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto italic">
                            Based in Alpha I, Greater Noida. We're ready to build your next revenue-generating machine.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-black/50 py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -z-10" />
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                        {/* Contact Info */}
                        <div className="animate-fade-up">
                            <h2 className="text-3xl font-bold mb-10 text-white italic">Visit Our <span className="text-primary">Local Hub</span></h2>
                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-primary/10 p-5 rounded-3xl text-primary group-hover:scale-110 transition-transform">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-lg mb-2 italic">Greater Noida Office</h4>
                                        <p className="text-text-muted leading-relaxed">Sector Alpha I, Knowledge Park III,<br />Gautam Buddha Nagar, UP 201310</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-secondary/10 p-5 rounded-3xl text-secondary group-hover:scale-110 transition-transform">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-lg mb-2 italic">Direct Hotline</h4>
                                        <p className="text-text-muted text-xl font-bold">+91 75898-74564 </p>
                                        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-black">Mon - Sat | 9am - 8pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-accent/10 p-5 rounded-3xl text-accent group-hover:scale-110 transition-transform">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-lg mb-2 italic">Official Support</h4>
                                        <p className="text-text-muted">monupalji1122@gmail.com</p>
                                        <p className="text-text-muted italic opacity-60">Response within 4 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 flex gap-6">
                                <Link href="#" className="p-4 glass hover:border-primary group transition-all">
                                    <Twitter className="group-hover:text-primary" />
                                </Link>
                                <Link href="#" className="p-4 glass hover:border-primary group transition-all">
                                    <Linkedin className="group-hover:text-primary" />
                                </Link>
                                <Link href="#" className="p-4 glass hover:border-primary group transition-all">
                                    <Facebook className="group-hover:text-primary" />
                                </Link>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass p-8 md:p-12 relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                            <h3 className="text-2xl font-bold mb-8 text-white italic">Drop a <span className="text-primary italic">Message</span></h3>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-text-muted">Full Name</label>
                                        <input name="name" type="text" placeholder="John Doe" required className="input-field" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-text-muted">Email Address</label>
                                        <input name="email" type="email" placeholder="john@example.com" required className="input-field" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-text-muted">Phone Number</label>
                                        <input name="phone" type="tel" placeholder="+91 99999..." required className="input-field" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-text-muted">Est. Budget (INR)</label>
                                        <select name="budget" className="input-field appearance-none bg-glass">
                                            <option className="bg-background">₹6k - ₹15k</option>
                                            <option className="bg-background">₹15k - ₹30k</option>
                                            <option className="bg-background">₹75k - ₹2 Lakhs</option>
                                            <option className="bg-background">₹2 Lakhs+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-text-muted">Project Message</label>
                                    <textarea name="message" rows={5} placeholder="Tell us about your business goals..." required className="input-field resize-none"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn-primary w-full justify-center py-5 text-xl font-black uppercase tracking-widest disabled:opacity-50"
                                >
                                    {loading ? "Sending..." : "Send Message"} <Send size={20} className="ml-2" />
                                </button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="bg-green-500/10 border border-green-500/50 p-4 rounded-xl flex items-center gap-3 text-green-500"
                                        >
                                            <CheckCircle size={20} />
                                            <p className="text-sm font-bold italic">Thank you! We'll contact you within 4 hours.</p>
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-center gap-3 text-red-500"
                                        >
                                            <AlertCircle size={20} />
                                            <p className="text-sm font-bold italic">Something went wrong. Please try again or call us.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section Redux */}
            <section className="py-24 border-t border-glass-border">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold italic text-white underline decoration-primary/30">Common Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Do you offer website maintenance?", a: "Yes, every website comes with 3 months of free priority support and maintenance." },
                            { q: "How long does a typical project take?", a: "Business websites usually take 10-14 days. Custom e-commerce portals take 4-6 weeks." },
                            { q: "Is SEO included in development?", a: "All our websites are built 'SEO-Ready', but we offer dedicated monthly SEO plans for dominant ranking results." }
                        ].map((item, i) => (
                            <div key={i} className="glass p-6 hover:border-primary/50 transition-all cursor-default group">
                                <h4 className="font-black text-white mb-2 italic group-hover:text-primary transition-colors">{item.q}</h4>
                                <p className="text-text-muted text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
