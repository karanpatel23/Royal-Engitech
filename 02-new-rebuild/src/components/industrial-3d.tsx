"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function BlueprintLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] opacity-70">
      <span className="absolute left-8 top-8 h-px w-32 bg-slateblue/20" />
      <span className="absolute left-8 top-8 h-24 w-px bg-slateblue/20" />
      <span className="absolute bottom-10 right-10 h-px w-40 bg-brass/25" />
      <span className="absolute bottom-10 right-10 h-28 w-px bg-brass/25" />
      <span className="absolute left-1/2 top-1/2 h-[1px] w-[120%] -translate-x-1/2 -rotate-12 bg-gradient-to-r from-transparent via-slateblue/15 to-transparent" />
    </div>
  );
}

export function HeroIndustrial3D() {
  return (
    <div className="industrial-scene relative mx-auto h-[480px] max-w-[620px] overflow-hidden rounded-[2.75rem] border border-line bg-brushed shadow-editorial">
      <BlueprintLines />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slateblue/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brass/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="component-assembly absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, -10, 0], rotateZ: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="metal-cylinder absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-5 rounded-full border border-white/80 bg-gradient-to-br from-white via-steel to-brass/20 shadow-metal" />
          <div className="absolute inset-16 rounded-full border border-slateblue/20 bg-paper shadow-inner" />
          <div className="absolute inset-x-8 top-1/2 h-3 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-slateblue/25 to-transparent" />
          <div className="absolute inset-y-8 left-1/2 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-brass/25 to-transparent" />
        </motion.div>
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 h-10 w-10 rounded-full border border-white/80 bg-gradient-to-br from-white to-steel shadow-metal"
            style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-132px)` }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-10 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-slateblue/20 to-transparent blur-sm" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/70 bg-white/72 p-5 shadow-metal backdrop-blur"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-copper">Precision manufacturing visual</p>
        <p className="mt-2 text-sm leading-6 text-smoke">Subtle 3D-inspired machined component form, built with lightweight motion and CSS.</p>
      </motion.div>
    </div>
  );
}

export function FloatingMetalRings({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative h-40 overflow-hidden", className)}>
      {[0, 1, 2].map((item) => (
        <motion.span
          key={item}
          className="absolute rounded-full border bg-gradient-to-br from-white/80 via-steel/50 to-brass/20 shadow-metal"
          style={{ width: 112 - item * 20, height: 112 - item * 20, left: `${18 + item * 28}%`, top: `${14 + item * 12}%`, borderColor: item === 1 ? "rgba(181,131,69,.35)" : "rgba(63,95,120,.18)" }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6 + item, repeat: Infinity, ease: "easeInOut", delay: item * 0.4 }}
        />
      ))}
    </div>
  );
}

export function ExplodedComponentVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] border border-line bg-porcelain p-8 shadow-editorial">
      <BlueprintLines />
      <div className="absolute inset-0 engineering-grid opacity-40" />
      <div className="relative grid h-full place-items-center">
        <motion.div className="relative h-64 w-80" animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
          {[
            { left: "8%", top: "44%", width: "105px", height: "34px" },
            { left: "36%", top: "36%", width: "112px", height: "72px" },
            { left: "70%", top: "44%", width: "72px", height: "34px" },
          ].map((part, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full border border-white/90 bg-gradient-to-br from-white via-steel to-brass/20 shadow-metal"
              style={part}
              animate={{ x: [0, index === 0 ? -10 : index === 2 ? 10 : 0, 0], rotate: [0, index === 1 ? 4 : -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            />
          ))}
          <span className="absolute left-[25%] top-1/2 h-px w-[46%] bg-slateblue/20" />
          <span className="absolute left-[29%] top-[43%] h-12 w-px bg-brass/20" />
          <span className="absolute right-[27%] top-[43%] h-12 w-px bg-brass/20" />
        </motion.div>
      </div>
    </div>
  );
}

export function GlobeNetworkVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] border border-line bg-brushed p-8 shadow-editorial">
      <BlueprintLines />
      <motion.div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slateblue/20 bg-white/55 shadow-metal" animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}>
        <span className="absolute inset-8 rounded-full border border-brass/25" />
        <span className="absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-slateblue/15" />
        <span className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-slateblue/15" />
        <span className="absolute left-8 top-14 h-3 w-3 rounded-full bg-copper shadow-metal" />
        <span className="absolute right-12 top-24 h-3 w-3 rounded-full bg-slateblue shadow-metal" />
        <span className="absolute bottom-14 left-24 h-3 w-3 rounded-full bg-brass shadow-metal" />
      </motion.div>
      <motion.div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brass/30" animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} />
      <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/70 bg-white/75 p-5 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-copper">Global supply conversations</p>
        <p className="mt-2 text-sm leading-6 text-smoke">Clean 3D-inspired network visual for international buyer communication.</p>
      </div>
    </div>
  );
}

export function MeasurementVisual() {
  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-[2.5rem] border border-line bg-porcelain p-8 shadow-editorial">
      <BlueprintLines />
      <motion.div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-steel bg-white shadow-metal" animate={{ rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/40 bg-paper" />
      </motion.div>
      <motion.div className="absolute left-20 top-20 h-2 w-72 origin-left rounded-full bg-gradient-to-r from-slateblue/55 to-transparent" animate={{ rotate: [-14, 10, -14] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-smoke">
        <span>Measure</span><span>Verify</span><span>Dispatch</span>
      </div>
    </div>
  );
}
