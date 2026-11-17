import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { queue } from "@/lib/queue";
import SectionHeading from "@/components/ui/SectionHeading";
import InstagramIcon from "@/components/ui/InstagramIcon";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Amethyst Pastry & Cakes for custom cake enquiries, bulk festive orders and collection at our Greenridge and Woodlands outlets.",
};

const faqs = [
  { q: "How far ahead should I order a cake?", a: "Three days for standard designs, and a week for sculpted or heavily themed cakes so we can source toppers and colours." },
  { q: "Do you deliver?", a: "Yes, island-wide delivery is available at checkout, or collect for free at Greenridge or Woodlands." },
  { q: "Can I order in bulk for a company or event?", a: "Absolutely. Send us the quantity and date below and we will quote within a working day." },
  { q: "Are your pastries Halal?", a: "Our festive pastries are Halal certified. Ask us about specific cakes and we will advise." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Contact us · {site.chineseName}</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
              Let’s plan something <em className="italic">sweet</em>
            </h1>
            <p className="mt-7 text-lg text-muted leading-relaxed max-w-xl">
              Custom cake ideas, bulk festive orders, or just checking whether your favourite pineapple balls are back
              in stock. The fastest way to reach us is WhatsApp; we reply within the day.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp us</a>
              <a href={`tel:+65${site.phone.replace(/\s/g, "")}`} className="btn btn-outline">Call {site.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] lg:aspect-[4/5] rounded-xl overflow-hidden">
            <Image src="/images/hero/celebration-cakes-trio.webp" alt="Celebration cakes by Amethyst" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-contain bg-amethyst-soft p-6" priority />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-10">
            <Reveal>
              <p className="eyebrow mb-4">Reach us</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight text-ink">We’re a message away</h2>
            </Reveal>
            <Reveal delay={0.05} className="space-y-5 text-ink/85">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="flex gap-4 items-start group">
                <Phone size={20} className="shrink-0 mt-0.5 text-amethyst" />
                <span><span className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted">WhatsApp / mobile</span><span className="text-lg group-hover:text-amethyst transition-colors">{site.mobile}</span></span>
              </a>
              <a href={`tel:+65${site.phone.replace(/\s/g, "")}`} className="flex gap-4 items-start group">
                <Phone size={20} className="shrink-0 mt-0.5 text-amethyst" />
                <span><span className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted">Shop line</span><span className="text-lg group-hover:text-amethyst transition-colors">{site.phone}</span></span>
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-4 items-start group">
                <Mail size={20} className="shrink-0 mt-0.5 text-amethyst" />
                <span><span className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted">Email</span><span className="text-lg group-hover:text-amethyst transition-colors">{site.email}</span></span>
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="flex gap-4 items-start group">
                <InstagramIcon size={20} className="shrink-0 mt-0.5 text-amethyst" />
                <span><span className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted">Instagram</span><span className="text-lg group-hover:text-amethyst transition-colors">{site.instagramHandle}</span></span>
              </a>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.outlets.map((o, i) => (
                <Reveal key={o.name} from="left" delay={queue(i, 2)} className="rounded-xl bg-amethyst-mist p-7">
                  <h3 className="font-display text-xl">{o.name}</h3>
                  <p className="mt-3 flex gap-3 text-sm text-ink/80"><MapPin size={16} className="shrink-0 mt-0.5 text-amethyst" /><span>{o.address}<br />{o.postal}</span></p>
                  <p className="mt-2 flex gap-3 text-sm text-muted"><Clock size={16} className="shrink-0 mt-0.5 text-amethyst" />{o.hours}</p>
                  <a href={site.googleMapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block text-[0.7rem] tracking-[0.22em] uppercase text-amethyst hover:underline">Get directions</a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="rounded-xl border border-line p-7 md:p-10">
            <p className="eyebrow mb-3">Enquiry form</p>
            <h2 className="font-display text-2xl md:text-3xl leading-tight text-ink">Tell us about your occasion</h2>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              We never ask for payment details here. Orders are paid securely through our checkout only.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-amethyst-mist py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Good to know" title="Questions we hear most" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} from="left" delay={queue(i, 2)} className="rounded-xl bg-white p-8">
                <h3 className="font-display text-xl">{f.q}</h3>
                <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
