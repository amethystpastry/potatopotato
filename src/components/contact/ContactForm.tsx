"use client";

import { useState } from "react";
import { site } from "@/data/site";

const topics = ["Custom cake", "Bulk / corporate order", "Festive pastries", "Something else"];

const field =
  "w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-amethyst transition-colors bg-white";
const label = "text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-2 block";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot, hidden from people
  const [error, setError] = useState<string | null>(null);

  const compose = () =>
    [
      `Hi Amethyst, I'm ${name.trim()}.`,
      `Enquiry: ${topic}`,
      date ? `Date needed: ${date}` : null,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");

  const validate = () => {
    if (company) return "Something went wrong.";
    if (name.trim().length < 2) return "Please tell us your name.";
    if (message.trim().length < 10) return "Please add a few more details so we can help.";
    return null;
  };

  const send = (via: "whatsapp" | "email") => {
    const problem = validate();
    setError(problem);
    if (problem) return;
    const text = compose();
    const url =
      via === "whatsapp"
        ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${site.email}?subject=${encodeURIComponent(`${topic} enquiry from ${name.trim()}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, via === "whatsapp" ? "_blank" : "_self", "noopener");
  };

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        send("whatsapp");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="c-name">Your name</label>
          <input id="c-name" value={name} onChange={(e) => setName(e.target.value.slice(0, 80))} className={field} autoComplete="name" required />
        </div>
        <div>
          <label className={label} htmlFor="c-phone">Phone <span className="normal-case tracking-normal">(optional)</span></label>
          <input id="c-phone" value={phone} onChange={(e) => setPhone(e.target.value.slice(0, 20))} className={field} autoComplete="tel" inputMode="tel" />
        </div>
        <div>
          <label className={label} htmlFor="c-topic">What is it about</label>
          <select id="c-topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="c-date">Date needed <span className="normal-case tracking-normal">(optional)</span></label>
          <input id="c-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="c-message">Your message</label>
        <textarea
          id="c-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
          placeholder="Tell us the occasion, number of guests, design ideas or flavours you have in mind."
          className={`${field} resize-y`}
          required
        />
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="c-company">Company</label>
        <input id="c-company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-wrap gap-3 pt-2">
        <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
        <button type="button" onClick={() => send("email")} className="btn btn-outline">Send by email</button>
      </div>
      <p className="text-xs text-muted leading-relaxed">
        Your message opens in WhatsApp or your mail app, so nothing is stored on this website.
      </p>
    </form>
  );
}
