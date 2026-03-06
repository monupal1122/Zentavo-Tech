"use client";
import Link from 'next/link';
import { Rocket, Shield, Zap, CheckCircle, ArrowRight, Star, Globe, Smartphone, BarChart, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from '@/components/Counter';
import GridScan from '@/components/GridScan';
import SplitText from '@/components/SplitText';

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WebNoida Digital Agency",
    "image": "https://Zentavo Tech.com/logo.png",
    "@id": "https://Zentavo Tech.com",
    "url": "https://Zentavo Tech.com",
    "telephone": "+917589874564",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector Alpha I",
      "addressLocality": "Greater Noida",
      "postalCode": "201310",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "priceRange": "₹15,000 - ₹2,00,000",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  const services = [
    { title: "Custom Web Development", icon: <Globe className="text-primary" />, link: "/services/website-developer-greater-noida" },
    { title: "E-commerce Solutions", icon: <Smartphone className="text-secondary" />, link: "/services/ecommerce-website-development" },
    { title: "SEO & Growth", icon: <BarChart className="text-accent" />, link: "/services/seo-services-noida" }
  ];

  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#a855f7"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />

        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[110px] rounded-full" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1.5 px-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-black mb-8 text-primary tracking-[0.2em] uppercase">
              #1 Tech Hub Greater Noida
            </span>

            <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] text-white">
              <SplitText
                text="Launch Your"
                className="block"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              />
              <span className="gradient-text italic">
                <SplitText
                  text="Digital Empire"
                  delay={80}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                />
              </span>
            </h1>

            <p className="text-2xl text-text-muted mb-12 max-w-lg font-medium leading-relaxed italic">
              Empowering local brands with elite Web development, SEO dominance, and visual excellence.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/contact" className="btn btn-primary px-10">
                Get Free Quote <Rocket size={18} />
              </Link>
              <Link href="/services" className="btn btn-outline px-10">
                View Services
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-2 border-background ring-2 ring-primary/20" alt="Client" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-text-muted font-medium">Trusted by 250+ Local Startups</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="glass p-3 rotate-2 hover:rotate-0 transition-all duration-700 shadow-3xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="WebNoida Growth Dashboard"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-6 shadow-2xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full text-green-500"><Zap size={24} /></div>
                <div>
                  <div className="text-3xl font-black text-white italic">99+</div>
                  <div className="text-xs text-text-muted font-bold tracking-tighter">SEO SCORE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-glass/5 py-20 border-y border-glass-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Years Experience", value: 5, suffix: "+" },
              { label: "Projects Delivered", value: 500, suffix: "+" },
              { label: "Happy Clients", value: 250, suffix: "+" },
              { label: "Success Rate", value: 99, suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl md:text-7xl font-black text-primary mb-4 transition-transform group-hover:scale-110">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-black text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black/50 py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Why <span className="text-primary italic">Zentavo Tech?</span></h2>
            <p className="text-lg text-text-muted">We don't just build sites; we build revenue engines tailored for the Indian landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-primary" />, title: "Lighting Fast", desc: "Our Next.js 15 architecture ensures sub-second loading for lower bounce rates." },
              { icon: <Shield className="text-primary" />, title: "SEO Optimized", desc: "Every line of code is written to rank you on Page 1 of Google Noida results." },
              { icon: <Users className="text-primary" />, title: "Local Expertise", desc: "We understand the Greater Noida market better than anyone else." }
            ].map((item, idx) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={idx}
                className="glass p-10 hover:border-primary/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Digital <br /><span className="gradient-text italic">Masterpieces</span></h2>
              <p className="text-text-muted text-lg">From Alpha-I to Knowledge Park, we're serving the best tech to Greater Noida.</p>
            </div>
            <Link href="/services" className="btn btn-outline group">
              View All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link href={service.link} key={idx} className="glass p-10 group hover:bg-glass/10 transition-all border-b-4 border-b-transparent hover:border-b-primary">
                <div className="mb-8 p-5 bg-white/5 rounded-3xl w-fit group-hover:rotate-12 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-text-muted mb-8 italic">Custom tailored for Noida's high-growth business ecosystem.</p>
                <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Get Started <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-glass/5 py-24 border-y border-glass-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic text-white">Clients Love Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", company: "Gaur City Gym", text: "WebNoida transformed our offline business. Our website now brings in 40% of our new memberships monthly." },
              { name: "Priya V.", company: "Noida Boutique", text: "The SEO services are exceptional. We reached the first page for 'boutiques in Noida' in 4 months." },
              { name: "Amit K.", company: "Tech Solutions", text: "Their e-commerce expertise saved us lakhs in development costs. Highly recommend!" }
            ].map((t, idx) => (
              <div key={idx} className="glass p-8 relative flex flex-col justify-between">
                <MessageSquare className="absolute top-6 right-8 opacity-10 text-primary" size={40} />
                <p className="italic text-lg mb-8 leading-relaxed text-white">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-text-muted uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative">
        <div className="container">
          <div className="glass p-16 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-white">Ready for <span className="text-primary italic">Digital Dominance?</span></h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto italic underline decoration-primary/30">
              Book your free tech audit today and let's map out your path to the top of Google.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn btn-primary px-16 py-5 text-xl">
                Contact Us Now
              </Link>
              <a href="tel:+917589874564" className="btn btn-outline px-16 py-5 text-xl">
                Call Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
