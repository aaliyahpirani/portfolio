"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 font-[family-name:var(--font-montserrat)] text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-ink/40 focus:outline-none";

  return (
    <div className="mt-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-line bg-bg p-8 text-center md:p-10"
          >
            <p className="font-[family-name:var(--font-serif)] text-2xl tracking-[-0.02em] md:text-3xl">
              Thanks for reaching out!
            </p>
            <p className="mt-3 font-[family-name:var(--font-montserrat)] text-muted">
              I got your message and I&apos;ll get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-muted uppercase transition-colors hover:text-ink"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={false}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Your name"
                className={inputClasses}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Your email"
                className={inputClasses}
              />
            </div>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's on your mind?"
              aria-label="Your message"
              rows={5}
              className={`${inputClasses} resize-none`}
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                style={{ color: "#ffffff" }}
                className="inline-flex items-center gap-2 rounded-full bg-[#825e4c] px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.08em] lowercase shadow-[0_2px_8px_rgba(255,255,255,0.35),0_4px_12px_rgba(130,94,76,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#6f4f3f] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
              >
                {status === "sending" ? "sending..." : "Send message"}
              </button>
              {status === "error" ? (
                <p className="text-sm text-red-700">
                  Something went wrong — please try again.
                </p>
              ) : null}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
