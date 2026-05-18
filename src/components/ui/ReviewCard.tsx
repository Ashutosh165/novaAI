"use client";

import { Star } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/4">

      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl border border-violet-500/20 shadow-[0_0_25px_rgba(139,92,246,0.2)]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-orange-400 text-orange-400"
            />
          ))}
        </div>

        {/* Review */}
        <p className="mt-6 text-sm leading-relaxed text-neutral-300">
          "NovaVest caught a sector overconcentration I completely missed.
          The AI flagged it before a major correction."
        </p>

        {/* User */}
        <div className="mt-8 flex items-center gap-3">

          {/* Avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
            AK
          </div>

          {/* Info */}
          <div>
            <h4 className="text-base font-semibold text-white">
              Arjun Kapoor
            </h4>

            <p className="text-sm text-neutral-500">
              Portfolio Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}