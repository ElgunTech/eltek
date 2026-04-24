"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="surface-card grid gap-8 p-8 md:grid-cols-2"
        >
          <div>
            <h2 className="section-title">Let’s build your next digital advantage</h2>
            <p className="section-subtitle">
              Reach out to discuss your technology roadmap, infrastructure modernization, or product vision.
            </p>
          </div>

          <form className="space-y-4" aria-label="Contact form">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </label>

            <button
              type="submit"
              className="inline-flex rounded-2xl bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-600"
            >
              Start Collaboration
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
