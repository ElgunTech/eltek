"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-colors",
          variant === "primary"
            ? "bg-brand-500 text-white shadow-glow hover:bg-brand-600"
            : "border border-slate-300 bg-white/80 text-slate-900 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
