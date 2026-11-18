import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ClearCart from "./ClearCart";
import { getStripe } from "@/lib/stripe";
import { money } from "@/lib/format";
import { T } from "@/lib/i18n";

export const metadata: Metadata = { title: "Order confirmed" };

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let summary: { email?: string | null; total?: number | null; name?: string | null } | null = null;
  const stripe = getStripe();
  if (session_id && stripe) {
    try {
      const s = await stripe.checkout.sessions.retrieve(session_id);
      summary = { email: s.customer_details?.email, total: s.amount_total, name: s.customer_details?.name };
    } catch {
      summary = null;
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 md:py-32 text-center">
      <ClearCart />
      <CheckCircle2 size={56} strokeWidth={1.2} className="mx-auto text-amethyst" />
      <p className="eyebrow mt-6 mb-3"><T en="Thank you" zh="谢谢您" />{summary?.name ? `, ${summary.name.split(" ")[0]}` : ""}</p>
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight"><T en="Your order is in the oven" zh="您的订单已送进烤箱" /></h1>
      <p className="mt-6 text-muted text-lg leading-relaxed">
        <T zh={`我们已收到您的订单${summary?.total ? `（${money(summary.total)}）` : ""}${summary?.email ? `，收据已发送至 ${summary.email}` : ""}。我们的团队会通过 WhatsApp 与您确认设计、口味以及自取或送货日期。`} en={<>
        We’ve received your order{summary?.total ? ` of ${money(summary.total)}` : ""}
        {summary?.email ? ` and sent a receipt to ${summary.email}` : ""}. Our team will WhatsApp you to confirm the
        design, flavour and your collection or delivery date.
        </>} />
      </p>
      <div className="mt-10 flex justify-center gap-3">
        <Link href="/" className="btn btn-primary"><T en="Back to home" zh="返回首页" /></Link>
        <Link href="/cakes" className="btn btn-outline"><T en="Keep browsing" zh="继续逛逛" /></Link>
      </div>
    </div>
  );
}
