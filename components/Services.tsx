"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive, business-first technology services designed for reliability, security, and scale.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="surface-card p-6"
              >
                <div className="inline-flex rounded-xl border border-brand-200 bg-brand-50 p-3 text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                  <Icon aria-hidden size={20} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
