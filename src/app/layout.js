import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://ZentavoTech.com"),
  title: {
    default: "WebNoida | #1 Web Development & SEO Agency India",
    template: "%s | WebNoida Digital",
  },
  description: "Global web development agency specializing in Next.js, E-commerce, and SEO. We deliver premium digital solutions for international clients and local businesses in Noida & Greater Noida.",
  keywords: [
    "website developer Greater Noida",
    "SEO services Noida",
    "international web development India",
    "ecommerce development company India",
    "Next.js developers India",
    "business website design",
    "local SEO Greater Noida",
    "affordable web agency India"
  ],
  authors: [{ name: "WebNoida Team" }],
  creator: "WebNoida Digital",
  publisher: "WebNoida Digital",
  alternates: {
    canonical: "https://Zentavo Tech.com",
    languages: {
      'en-US': 'https://Zentavo Tech.com',
      'en-IN': 'https://Zentavo Tech.com',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://Zentavo Tech.com",
    siteName: "WebNoida",
    title: "WebNoida - Web Development & SEO Dominance",
    description: "Empowering businesses with custom web solutions and dominant SEO strategies. Serving clients globally from our Greater Noida tech hub.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNoida - #1 Web & SEO Agency",
    description: "Build your digital empire with world-class web development and SEO experts.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
