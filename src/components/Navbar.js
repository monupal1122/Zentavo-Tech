"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Phone, ChevronDown, Monitor, Code, Smartphone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '/services',
            dropdown: [
                { name: 'WordPress Dev', href: '/services/website-developer-greater-noida', desc: 'Starting from ₹8,000', icon: <Globe size={16} /> },
                { name: 'Web Development', href: '/services/website-developer-greater-noida', desc: 'Starting from ₹15,000', icon: <Code size={16} /> },
                { name: 'App Development', href: '/services/website-developer-greater-noida', desc: 'Starting from ₹25,000', icon: <Smartphone size={16} /> },
                { name: 'SEO & Marketing', href: '/services/seo-services-noida', desc: 'Dominating Rankings', icon: <Monitor size={16} /> },
            ]
        },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300 top-0",
            scrolled ? "bg-nav-bg backdrop-blur-md py-4 shadow-xl border-b border-glass-border" : "bg-transparent py-6"
        )}>
            <div className="container flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    
                    <span className="text-3xl font-bold tracking-tight text-white"><span className="text-primary">Zentavo Tech</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group/nav"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="text-lg font-bold text-text-muted hover:text-white transition-colors flex items-center gap-1.5"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={16} className="opacity-50 group-hover/nav:rotate-180 transition-transform" />}
                            </Link>

                            {link.dropdown && (activeDropdown === link.name) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full left-[-20px] pt-4 w-72"
                                >
                                    <div className="glass p-5 grid gap-2 shadow-2xl border-primary/20 bg-black/90 scale-105 origin-top">
                                        {link.dropdown.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-all"
                                            >
                                                <div className="bg-white/5 p-2 rounded-lg text-primary group-hover/item:scale-110 transition-transform">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-white font-bold text-sm">{sub.name}</div>
                                                    <div className="text-[10px] uppercase font-black tracking-widest text-primary opacity-80">{sub.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                    <Link href="/contact" className="btn btn-primary text-md py-3 px-8 font-black uppercase tracking-widest">
                        FREE Audit
                    </Link>
                </div>

                {/* Mobile Toggle & CTA */}
                <div className="flex items-center gap-4 md:hidden">
                    <a href="tel:+917589874564" className="p-2.5 bg-glass rounded-full text-primary border border-glass-border">
                        <Phone size={22} />
                    </a>
                    <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="md:hidden fixed inset-x-0 top-[88px] bottom-0 bg-background/98 backdrop-blur-2xl border-t border-glass-border p-8 shadow-2xl overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black py-2 text-white flex items-center justify-between"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="mt-4 grid grid-cols-1 gap-3 ml-4 border-l-2 border-primary/20 pl-6">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="py-2"
                                                >
                                                    <div className="text-white/90 font-bold">{sub.name}</div>
                                                    <div className="text-[10px] text-primary font-black uppercase tracking-widest">{sub.desc}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary justify-center py-5 text-xl font-black italic">
                                    Get Started
                                </Link>
                                <div className="flex justify-center gap-8 py-4 opacity-60 font-bold">
                                    <Phone size={20} className="text-primary" /> (+91) 9999 000 000
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

