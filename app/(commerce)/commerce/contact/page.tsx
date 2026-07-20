"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";

const faqs = [
  { q: "What's your return policy?", a: "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, return it for a full refund — no questions asked." },
  { q: "How does the subscription work?", a: "Choose your delivery frequency and products. We'll ship them on schedule. You can pause, skip, or cancel anytime from your account." },
  { q: "Are your products really 100% natural?", a: "Yes. Every ingredient is plant-derived or mineral-based. We publish full ingredient lists and third-party lab results for every product." },
  { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express is 1-2 days. Free shipping on orders over $50." },
  { q: "Is your packaging actually compostable?", a: "Yes! Our mailers, filler, and even our labels are home-compostable. Our glass bottles and jars are designed for our refill program." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.email && formState.message) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--wk-bg)]">
      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pt-28 pb-6">
        <Link href="/commerce" className="group inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--wk-text-tertiary)] transition-all hover:text-[#3d7a3d] hover:gap-3">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          [ BACK TO SHOP ]
        </Link>
      </div>

      <div className="mx-auto max-w-[var(--container-wide)] px-[var(--container-padding)] pb-24">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — Info + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#4a8c4a]">GET IN TOUCH</span>
            <h1 className="mt-3 font-heading text-4xl tracking-[-0.02em] text-[var(--wk-text-primary)] md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-sm text-[var(--wk-text-secondary)] max-w-md">
              We&apos;d love to hear from you. Whether it&apos;s a question about our products,
              your order, or just to say hello — we&apos;re here.
            </p>

            {/* Contact cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Mail, label: "Email", value: "hello@verdant.co", href: "mailto:hello@verdant.co" },
                { icon: Phone, label: "Phone", value: "1-800-VERDANT", href: "tel:1800837268" },
                { icon: MapPin, label: "Studio", value: "Portland, Oregon", href: "#" },
                { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm PST", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-start gap-3 rounded-xl bg-white p-4 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] hover:bg-[#f2faf2]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2faf2] text-[#3d7a3d] transition-all group-hover:bg-[#3d7a3d] group-hover:text-white group-hover:scale-110">
                    <c.icon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.1em] text-[var(--wk-text-tertiary)] uppercase">{c.label}</span>
                    <p className="text-sm font-medium text-[var(--wk-text-primary)] group-hover:text-[#3d7a3d] transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="font-heading text-xl tracking-[-0.02em] text-[var(--wk-text-primary)] mb-6">
                Frequently Asked
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group rounded-xl bg-white shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]">
                    <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium text-[var(--wk-text-primary)] marker:hidden transition-colors group-hover:text-[#3d7a3d]">
                      {faq.q}
                      <span className="text-[var(--wk-text-tertiary)] transition-transform group-open:rotate-45 text-lg">+</span>
                    </summary>
                    <p className="px-4 pb-4 text-xs text-[var(--wk-text-secondary)] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-[var(--shadow-md)]">
              <h2 className="font-heading text-xl tracking-[-0.02em] text-[var(--wk-text-primary)] mb-6">
                Send a Message
              </h2>
              <div className="space-y-5">
                {[
                  { label: "NAME", type: "text", key: "name", placeholder: "Your name" },
                  { label: "EMAIL", type: "email", key: "email", placeholder: "you@email.com" },
                  { label: "SUBJECT", type: "text", key: "subject", placeholder: "What's this about?" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-[10px] tracking-[0.12em] text-[var(--wk-text-tertiary)]">{field.label}</label>
                    <input
                      type={field.type}
                      value={formState[field.key as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      required={field.key === "email"}
                      className="mt-1.5 w-full rounded-lg border border-[var(--wk-border)] bg-[var(--wk-bg)] px-4 py-3 text-sm text-[var(--wk-text-primary)] outline-none transition-all placeholder:text-[var(--wk-text-tertiary)] hover:border-[#7ab87a] focus:border-[#3d7a3d] focus:ring-2 focus:ring-[#3d7a3d]/10"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] tracking-[0.12em] text-[var(--wk-text-tertiary)]">MESSAGE</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-lg border border-[var(--wk-border)] bg-[var(--wk-bg)] px-4 py-3 text-sm text-[var(--wk-text-primary)] outline-none transition-all placeholder:text-[var(--wk-text-tertiary)] hover:border-[#7ab87a] focus:border-[#3d7a3d] focus:ring-2 focus:ring-[#3d7a3d]/10 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-semibold tracking-[0.1em] transition-all active:scale-[0.98] ${
                    sent
                      ? "bg-[#2D8A56] text-white shadow-lg shadow-[#2D8A56]/20"
                      : "bg-[var(--wk-text-primary)] text-white hover:bg-[#1a3a1a] hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                  }`}
                >
                  {sent ? (
                    <><Check size={16} /> MESSAGE SENT!</>
                  ) : (
                    <><Send size={14} /> [ SEND MESSAGE ]</>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
