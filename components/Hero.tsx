"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded-full border border-brand-100/60 bg-brand-100/70 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/15 dark:text-brand-100">
            Trusted by modern teams
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Innovative IT Solutions for Your Digital Growth
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-600 md:text-lg dark:text-slate-300">
            ElTek – IT Solutions empowers businesses with strategic technology services, enterprise-grade security, and software
            systems designed to accelerate innovation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Contact Us</Button>
            <Button href="#services" variant="secondary">
              Our Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="surface-card relative p-6"
        >
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-500/30 blur-2xl" aria-hidden />
          <div className="absolute -bottom-10 left-1/2 h-28 w-28 rounded-full bg-sky-400/30 blur-2xl" aria-hidden />
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-600 dark:text-brand-300">Digital performance</p>
          <h2 className="mt-3 text-2xl font-semibold">Future-ready IT architecture</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            From advisory to implementation, we build secure and scalable foundations that keep your business adaptive,
            resilient, and ahead of the curve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
