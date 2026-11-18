"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n";

const topics = ["Custom cake", "Bulk / corporate order", "Festive pastries", "Something else"];
const topicsZh: Record<string, string> = {
  "Custom cake": "订制蛋糕",
  "Bulk / corporate order": "大量 / 企业订购",
  "Festive pastries": "节庆糕点",
  "Something else": "其他",
};

const field =
  "w-full rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-amethyst transition-colors bg-white";
const label = "text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-2 block";

export default function ContactForm() {
  const t = useT();
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
    if (company) return t("Something went wrong.", "出了点问题。");
    if (name.trim().length < 2) return t("Please tell us your name.", "请告诉我们您的名字。");
    if (message.trim().length < 10) return t("Please add a few more details so we can help.", "请多写一些细节，方便我们为您服务。");
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
          <label className={label} htmlFor="c-name">{t("Your name", "您的名字")}</label>
          <input id="c-name" value={name} onChange={(e) => setName(e.target.value.slice(0, 80))} className={field} autoComplete="name" required />
        </div>
        <div>
          <label className={label} htmlFor="c-phone">{t("Phone", "电话")} <span className="normal-case tracking-normal">{t("(optional)", "（选填）")}</span></label>
          <input id="c-phone" value={phone} onChange={(e) => setPhone(e.target.value.slice(0, 20))} className={field} autoComplete="tel" inputMode="tel" />
        </div>
        <div>
          <label className={label} htmlFor="c-topic">{t("What is it about", "询问类别")}</label>
          <select id="c-topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
            {topics.map((o) => (
              <option key={o} value={o}>{t(o, topicsZh[o])}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="c-date">{t("Date needed", "需要日期")} <span className="normal-case tracking-normal">{t("(optional)", "（选填）")}</span></label>
          <input id="c-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="c-message">{t("Your message", "您的留言")}</label>
        <textarea
          id="c-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
          placeholder={t("Tell us the occasion, number of guests, design ideas or flavours you have in mind.", "告诉我们场合、人数、设计想法或想要的口味。")}
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
        <button type="submit" className="btn btn-primary">{t("Send via WhatsApp", "通过 WhatsApp 发送")}</button>
        <button type="button" onClick={() => send("email")} className="btn btn-outline">{t("Send by email", "通过电邮发送")}</button>
      </div>
      <p className="text-xs text-muted leading-relaxed">
        {t("Your message opens in WhatsApp or your mail app, so nothing is stored on this website.", "您的信息会在 WhatsApp 或邮件应用中打开，本网站不会储存任何内容。")}
      </p>
    </form>
  );
}
