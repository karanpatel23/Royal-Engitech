"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-copper to-amberline font-display text-lg font-black text-graphite">RE</span>
          <span>
            <span className="block font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Royal Engitech</span>
            <span className="hidden text-xs text-mist sm:block">Precision engineered exports</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-mist transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block"><Button href="/contact">Send Inquiry</Button></div>
        <button className="rounded-full border border-white/10 p-3 text-white lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 bg-steel lg:hidden">
            <div className="space-y-1 px-5 py-5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-medium text-white hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
