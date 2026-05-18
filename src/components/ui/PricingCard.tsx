"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  className?: string;
}

export default function PricingCard({
  plan,
  price,
  description,
  features,
  buttonText,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-white/3 p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2",
        popular
          ? "border-cyan-500/30"
          : "border-white/10 hover:border-violet-500/30",
        className
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-violet-500/20">
          Most Popular
        </div>
      )}

      {/* Neon Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl border border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Plan */}
        <p className="text-lg text-neutral-300">
          {plan}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-end gap-2">
          <h3 className="text-5xl font-black tracking-tight text-white">
            {price}
          </h3>

          <span className="mb-1 text-lg text-neutral-400">
            / mo
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-neutral-500">
          {description}
        </p>

        {/* Features */}
        <div className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <span className="text-lg text-emerald-400">
                ✓
              </span>

              <p className="text-sm text-neutral-300">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className={cn(
            "mt-10 w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300",
            popular
              ? "border-transparent bg-linear-to-r from-cyan-500 to-violet-500 text-white hover:scale-[1.02]"
              : "border-white/10 bg-black/30 text-white hover:bg-white/10"
          )}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}