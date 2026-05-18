"use client";

import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const tabs = [
  {
    title: "How does NovaVest AI help investors?",
    description:
      "NovaVest AI analyzes market trends, portfolio risk, and investment opportunities using AI-powered financial intelligence to help investors make smarter decisions.",
  },
  {
    title: "Is my portfolio data secure?",
    description:
      "Yes. All portfolio data is encrypted and securely stored using industry-standard security practices and protected API integrations.",
  },
  {
    title: "Can I connect multiple brokerage accounts?",
    description:
      "Absolutely. NovaVest AI supports multiple brokerage integrations so you can manage all investments from one dashboard.",
  },
  {
    title: "Does NovaVest provide real-time analytics?",
    description:
      "Yes. The platform continuously tracks market conditions and portfolio performance with real-time insights and AI-powered alerts.",
  },
];

function SingleLayout() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">
          <p className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
            FAQ
          </p>

          <h2 className="mt-6 bg-linear-to-b from-white to-neutral-500 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Everything you need to know about NovaVest AI and our platform.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-3 backdrop-blur-2xl">

          {tabs.map((tab, index) => (
            <motion.div
              key={tab.title}
              className={`overflow-hidden ${
                index !== tabs.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {/* Question */}
              <button className="flex w-full cursor-pointer items-center gap-4 rounded-2xl p-5 text-left text-sm font-semibold text-white transition-all duration-300 hover:bg-white/4 sm:text-lg">

                <Plus
                  className={`h-5 w-5 text-violet-300 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />

                {tab.title}
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="px-14 pb-6 text-sm leading-relaxed text-neutral-400 sm:text-base">
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleLayout;