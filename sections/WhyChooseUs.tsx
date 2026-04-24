"use client";

import { motion } from "framer-motion";
import { strengths } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">A reliable partner focused on speed, precision, and enterprise-level protection.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="surface-card p-6"
            >
              <h3 className="text-xl font-semibold">{strength.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
