"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.2fr_1fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="surface-card p-8"
        >
          <h2 className="section-title">About ElTek</h2>
          <p className="section-subtitle max-w-none">
            ElTek – IT Solutions is a strategic technology partner helping organizations modernize operations, reduce risk,
            and build digital capabilities that support long-term growth.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Our mission is to translate complex technology into clear, practical solutions. Our vision is to become the most
            trusted IT ally for businesses pursuing innovation with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="surface-card p-8"
        >
          <h3 className="text-xl font-semibold">Built on trust and delivery excellence</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            We combine engineering discipline with business empathy to ensure every initiative delivers lasting value.
          </p>
          <div className="mt-6 grid gap-3">
            <div className="rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-800">Dedicated expert teams</div>
            <div className="rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-800">Transparent collaboration</div>
            <div className="rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-800">Continuous optimization approach</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
