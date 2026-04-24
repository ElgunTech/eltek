"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/data";
import { Button } from "@/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/65">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8" aria-label="Main navigation">
        <a href="#" className="text-lg font-semibold tracking-tight">
          ElTek <span className="text-brand-500">– IT Solutions</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              {item.label}
            </a>
          ))}
          <Button href="#contact" className="px-4 py-2">
            Get in Touch
          </Button>
          <button
            aria-label="Toggle color mode"
            onClick={toggleTheme}
            className="rounded-xl border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle color mode"
            onClick={toggleTheme}
            className="rounded-xl border border-slate-300 p-2 dark:border-slate-700"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-xl border border-slate-300 p-2 dark:border-slate-700">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-700 dark:text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-4 py-3 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
