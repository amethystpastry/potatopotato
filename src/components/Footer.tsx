import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-amethyst-deep text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo white height={56} />
            <p className="mt-6 text-white/70 max-w-sm leading-relaxed">{site.tagline}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-white/85 hover:text-gold transition-colors"
            >
              <InstagramIcon size={16} /> {site.instagramHandle}
            </a>
          </div>

          <div>
            <h4 className="eyebrow !text-gold mb-5">Shop</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link className="hover:text-white" href="/cakes">Celebration Cakes</Link></li>
              <li><Link className="hover:text-white" href="/pastries">Festive Pastries</Link></li>
              <li><Link className="hover:text-white" href="/pastries#cny">Chinese New Year Goodies</Link></li>
              <li><Link className="hover:text-white" href="/pastries#mooncake">Mid-Autumn Mooncakes</Link></li>
              <li><Link className="hover:text-white" href="/about">Our Story</Link></li>
              <li><Link className="hover:text-white" href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold mb-5">Visit</h4>
            <ul className="space-y-5 text-white/80 text-sm leading-relaxed">
              {site.outlets.map((o) => (
                <li key={o.name} className="flex gap-3">
                  <MapPin size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-gold" />
                  <span>
                    <strong className="text-white font-medium">{o.name}</strong>
                    <br />
                    {o.address}
                    <br />
                    {o.postal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-gold" /> {site.phone}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-gold" /> {site.mobile} (WhatsApp)
              </li>
              <li className="pt-3">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost-light !py-3 !px-5 text-[0.7rem]"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/55 tracking-wide">
          <p>© {new Date().getFullYear()} {site.name} 紫晶阁. All rights reserved.</p>
          <p>Halal certified · Secure checkout powered by Stripe</p>
        </div>
      </div>
    </footer>
  );
}
