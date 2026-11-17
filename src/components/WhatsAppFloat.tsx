import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { site } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Amethyst! I'd like to order a cake.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] flex items-center justify-center hover:scale-105 transition-transform"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
