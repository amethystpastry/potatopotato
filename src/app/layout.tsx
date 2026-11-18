import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/shop/CartDrawer";
import Preloader from "@/components/Preloader";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/data/site";
import { LangSync } from "@/lib/i18n";

// Headlines: bold geometric sans. Body and nav stay in Jost.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Handcrafted Cakes & Festive Pastries, Singapore`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    images: ["/images/custom/elegant-trio-of-artisan-celebration-cakes.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jost.variable}`} suppressHydrationWarning>
      {/* Browser extensions (e.g. Grammarly) inject attributes here before React loads; ignore those diffs. */}
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <LangSync />
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
