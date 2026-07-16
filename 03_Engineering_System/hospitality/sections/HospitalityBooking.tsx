"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function HospitalityBooking() {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
  });

  return (
    <section
      id="booking"
      className="relative bg-[#F9F7F4] py-16 sm:py-20"
    >
      <motion.div
        className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-end gap-4 justify-center"
        >
          {/* Check-in */}
          <motion.div className="flex flex-col gap-1.5" variants={fadeUp(0)}>
            <label
              htmlFor="checkin"
              className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
            >
              CHECK IN
            </label>
            <input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (e.target.value >= checkOut) {
                  const next = new Date(e.target.value);
                  next.setDate(next.getDate() + 1);
                  setCheckOut(next.toISOString().split("T")[0]);
                }
              }}
              className="border-b border-[#D4D3CE] bg-transparent py-2 text-sm text-[#1A1A18] outline-none transition-all duration-300 focus:border-[var(--color-accent-dark)] focus:shadow-[0_1px_0_var(--color-accent-dark)]"
            />
          </motion.div>

          {/* Check-out */}
          <motion.div className="flex flex-col gap-1.5" variants={fadeUp(0.1)}>
            <label
              htmlFor="checkout"
              className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
            >
              CHECK OUT
            </label>
            <input
              id="checkout"
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border-b border-[#D4D3CE] bg-transparent py-2 text-sm text-[#1A1A18] outline-none transition-all duration-300 focus:border-[var(--color-accent-dark)] focus:shadow-[0_1px_0_var(--color-accent-dark)]"
            />
          </motion.div>

          {/* Guests */}
          <motion.div className="flex flex-col gap-1.5" variants={fadeUp(0.2)}>
            <label
              htmlFor="guests"
              className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
            >
              GUESTS
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="border-b border-[#D4D3CE] bg-transparent py-2 text-sm text-[#1A1A18] outline-none transition-all duration-300 focus:border-[var(--color-accent-dark)]"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Rooms */}
          <motion.div className="flex flex-col gap-1.5" variants={fadeUp(0.3)}>
            <label
              htmlFor="rooms"
              className="text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]"
            >
              ROOMS
            </label>
            <select
              id="rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="border-b border-[#D4D3CE] bg-transparent py-2 text-sm text-[#1A1A18] outline-none transition-all duration-300 focus:border-[var(--color-accent-dark)]"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={String(n)}>
                  {n} {n === 1 ? "Room" : "Rooms"}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp(0.4)}>
            <motion.button
              type="submit"
              className="bg-[var(--color-accent-dark)] px-8 py-3 text-xs tracking-[0.12em] text-white transition-colors hover:bg-[#B8953D]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              CHECK AVAILABILITY
            </motion.button>
          </motion.div>
        </form>

        {/* Success message */}
        {submitted && (
          <motion.p
            className="mt-6 text-center text-xs tracking-[0.08em] text-[var(--color-accent-dark)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Thank you. Our reservations team will contact you shortly to confirm
            your stay.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
