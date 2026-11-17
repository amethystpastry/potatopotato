"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { useCart } from "@/lib/store";

export default function CheckoutButton({ className = "" }: { className?: string }) {
  const items = useCart((s) => s.items);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map(({ slug, variantId, qty, message }) => ({ slug, variantId, qty, message })) }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Checkout unavailable");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <button type="button" onClick={checkout} disabled={loading || items.length === 0} className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
        <Lock size={14} /> {loading ? "Redirecting to Stripe…" : "Secure checkout"}
      </button>
      {error && <p className="mt-3 text-sm text-red-600 text-center">{error}</p>}
      <p className="mt-3 text-center text-[0.65rem] tracking-[0.15em] uppercase text-muted">
        PayNow · Cards · Apple Pay · Google Pay
      </p>
    </div>
  );
}
