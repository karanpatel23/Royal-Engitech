import Link from "next/link";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Button({ href, children, variant = "primary", className }: PropsWithChildren<{ href: string; variant?: "primary" | "secondary"; className?: string }>) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:ring-offset-graphite",
        variant === "primary" ? "bg-copper text-white shadow-premium hover:bg-amberline hover:text-graphite" : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Section({ children, eyebrow, title, intro, className }: PropsWithChildren<{ eyebrow?: string; title?: string; intro?: string; className?: string }>) {
  return (
    <section className={cn("px-5 py-20 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-copper">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>}
            {intro && <p className="mt-5 text-lg leading-8 text-mist">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium backdrop-blur", className)}>{children}</div>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="relative overflow-hidden bg-graphite px-5 pb-16 pt-36 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-radial-grid opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-copper">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">{intro}</p>
      </div>
    </div>
  );
}
