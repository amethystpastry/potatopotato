import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import Logo from "./Logo";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";

export default function Footer() {
  return (
    <footer className="bg-amethyst-deep text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo white height={56} />
            <p className="mt-6 text-white/70 max-w-sm leading-relaxed"><T en={site.tagline} zh="手工订制庆典蛋糕与传统节庆糕点，在新加坡新鲜烘焙。" /></p>
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
            <h4 className="eyebrow !text-gold mb-5"><T en="Shop" zh="选购" /></h4>
            <ul className="space-y-3 text-white/80">
              <li><Link className="hover:text-white" href="/cakes"><T en="Celebration Cakes" zh="庆典蛋糕" /></Link></li>
              <li><Link className="hover:text-white" href="/pastries"><T en="Festive Pastries" zh="节庆糕点" /></Link></li>
              <li><Link className="hover:text-white" href="/pastries#cny"><T en="Chinese New Year Goodies" zh="新春年饼" /></Link></li>
              <li><Link className="hover:text-white" href="/pastries#mooncake"><T en="Mid-Autumn Mooncakes" zh="中秋月饼" /></Link></li>
              <li><Link className="hover:text-white" href="/about"><T en="Our Story" zh="品牌故事" /></Link></li>
              <li><Link className="hover:text-white" href="/contact"><T en="Contact Us" zh="联系我们" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold mb-5"><T en="Visit" zh="门市" /></h4>
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
            <h4 className="eyebrow !text-gold mb-5"><T en="Contact" zh="联络" /></h4>
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
                  <T en="WhatsApp us" zh="WhatsApp 联系我们" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/55 tracking-wide">
          <p>© {new Date().getFullYear()} {site.name} 紫晶阁. <T en="All rights reserved." zh="版权所有。" /></p>
          <p><T en="Halal certified · Secure checkout powered by Stripe" zh="清真认证 · 由 Stripe 提供安全结账" /></p>
        </div>
      </div>
    </footer>
  );
}
