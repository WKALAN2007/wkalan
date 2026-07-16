"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function HospitalityContact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="bg-[#F9F7F4] py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            CONTACT
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
              >
                NAME
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-b border-[#D4D3CE] bg-transparent py-3 text-sm text-[#1A1A18] outline-none transition-colors focus:border-[#1A1A18]"
                placeholder="Your name"
              />
              {errors.name && (
                <span className="text-[11px] text-red-500">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-b border-[#D4D3CE] bg-transparent py-3 text-sm text-[#1A1A18] outline-none transition-colors focus:border-[#1A1A18]"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-[11px] text-red-500">{errors.email}</span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="resize-none border-b border-[#D4D3CE] bg-transparent py-3 text-sm text-[#1A1A18] outline-none transition-colors focus:border-[#1A1A18]"
                placeholder="Tell us about your inquiry..."
              />
              {errors.message && (
                <span className="text-[11px] text-red-500">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="self-start bg-[var(--color-accent-dark)] px-8 py-3 text-xs tracking-[0.12em] text-white transition-colors hover:bg-[#B8953D]"
            >
              SEND MESSAGE
            </button>

            {/* Success */}
            {submitted && (
              <motion.p
                className="text-xs tracking-[0.08em] text-[var(--color-accent-dark)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message. We will be in touch shortly.
              </motion.p>
            )}
          </motion.form>

          {/* Property info */}
          <motion.div
            className="flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <div>
              <span className="text-[10px] tracking-[0.15em] text-[var(--color-accent-dark)]">
                VISIT US
              </span>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    ADDRESS
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#1A1A18]">
                    1 Aurelia Drive
                    <br />
                    Coastal Road, Santorini
                    <br />
                    Greece 847 00
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    PHONE
                  </p>
                  <p className="mt-1 text-sm text-[#1A1A18]">
                    +30 2286 012 345
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    EMAIL
                  </p>
                  <p className="mt-1 text-sm text-[#1A1A18]">
                    reservations@aurelia.com
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    CHECK-IN / CHECK-OUT
                  </p>
                  <p className="mt-1 text-sm text-[#1A1A18]">
                    Check-in from 3:00 PM
                    <br />
                    Check-out by 12:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] overflow-hidden bg-[#E8E5DF]">
              <img
                src="/hospitality/contact.jpg"
                alt="Location map"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
