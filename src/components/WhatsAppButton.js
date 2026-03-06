"use client";
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "917589874564"; // Replace with real number
    const message = "Hi WebNoida, I'm interested in your website development services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} fill="currentColor" />
        </a>
    );
}
