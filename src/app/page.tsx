// // import Image from "next/image";
// import { cn } from "@/lib/utils";
// import React from "react";


// export default function Home() {
//   return (
//     <div className="relative flex h-screen w-full items-center justify-center bg-black">
//       <div
//         className={cn(
//           "absolute inset-0",
//           "bg-size-[20px_20px]",
//           "bg-[radial-gradient(#404040_1px,transparent_1px)]",
//         )}
//       />

//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

//       <p className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
//         NovaVest AI
//       </p>
//   </div>
//   );
// }

"use client";

import Navbar from "@/components/layout/Navbar";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, BarChart3, Bot, HandCoins, Notebook } from "lucide-react";
import { Arrow } from "radix-ui/internal";
import React, { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";
import FeatureCard from "@/components/ui/FeaturedCard";
import ReviewCard from "@/components/ui/ReviewCard";
import PricingCard from "@/components/ui/PricingCard";
import SingleLayout from "@/components/ui/Faq";
import Footer from "@/components/layout/Footer";



export default function Home() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <Navbar/>
    
    {/* <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"> */}
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Cursor Glow */}
      <div
        className="pointer-events-none absolute z-10 h-50 w-50 rounded-full bg-purple-500/20 blur-3xl transition-transform duration-75"
        style={{
          left: position.x - 100,
          top: position.y - 100,
        }}
      />

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Extra Gradient Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <main className="relative z-20">
      {/* Content */}

        <section className="flex min-h-screen items-center justify-center px-6">
        
<div className="relative z-20 text-center">
        <p className="bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-6 text-5xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl">
          NovaVest AI
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-lg">
          AI-powered investment intelligence platform for modern investors.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-xl bg-violet-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Get Started
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10 flex gap-2">
            Live Demo <ArrowRightIcon/>
          </button>
        </div>
      </div>


    </section>

      {/* <div className="relative z-20 text-center">
        <p className="bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-6 text-5xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl">
          NovaVest AI
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-lg">
          AI-powered investment intelligence platform for modern investors.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-xl bg-violet-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Get Started
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10 flex gap-2">
            Live Demo <ArrowRightIcon/>
          </button>
        </div>
      </div> */}

      {/* features  */}

      <section id="features" className="py-3 m-20 p-5">
        <div>
          <p className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
            FEATURES
          </p>
          <h2 className="bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-5xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">Everyting you need to know</h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
  
            <FeatureCard
              icon={<BarChart3 className="h-7 w-7" />}
              title="AI Portfolio Analytics"
              description="Deep learning models analyze thousands of data points to score your portfolio's risk-adjusted performance."
            />

            <FeatureCard
              icon={<HandCoins className="h-7 w-7" />}
              title="Asset Allocation"
              description="Track portfolio diversification and optimize allocation across multiple asset classes."
            />

            <FeatureCard
              icon={<Notebook className="h-7 w-7" />}
              title="Risk Score"
              description="Receive AI-generated risk analysis with real-time portfolio monitoring and alerts."
            />

            <FeatureCard
              icon={<Bot className="h-7 w-7" />}
              title="AI Suggestions"
              description="Get personalized investment recommendations powered by predictive financial intelligence."
            />

          </div>

        </div>
      </section>



      {/* stats  */}

      <section id="analytics" className="relative py-7 m-20">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="relative overflow-hidden rounded-[40px] border border-violet-500/20 bg-white/3 backdrop-blur-2xl">

            {/* Glow */}
            <div className="absolute inset-0 bg-violet-500/3" />

            {/* Purple Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 h-75 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            {/* Stats Grid */}
            <div className="relative grid grid-cols-1 divide-y divide-white/5 md:grid-cols-4 md:divide-x md:divide-y-0">

              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
                <h3 className="bg-linear-to-b from-cyan-300 to-violet-400 bg-clip-text text-4xl font-black tracking-tight text-transparent">
                  4.2ms
                </h3>

                <p className="mt-4 text-lg text-neutral-400">
                  Avg API response time
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
                <h3 className="bg-linear-to-b from-cyan-300 to-violet-400 bg-clip-text text-4xl font-black tracking-tight text-transparent">
                  500M+
                </h3>

                <p className="mt-4 text-lg text-neutral-400">
                  Data points analyzed daily
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
                <h3 className="bg-linear-to-b from-cyan-300 to-violet-400 bg-clip-text text-4xl font-black tracking-tight text-transparent">
                  40+
                </h3>

                <p className="mt-4 text-lg text-neutral-400">
                  Broker integrations
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
                <h3 className="bg-linear-to-b from-cyan-300 to-violet-400 bg-clip-text text-4xl font-black tracking-tight text-transparent">
                  $0
                </h3>

                <p className="mt-4 text-lg text-neutral-400">
                  Hidden fees. Ever.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

        

    {/* Testimonials  */}
    <section id="testimonials" className=" py-3 m-20 p-5">
      <p className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
            TESTIMONIAL
          </p>
      <h2 className="bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-5xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">Loved by smart investors</h2>
      <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
    


    {/* Pricing  */}
    <section id="pricing" className="relative px-6 py-24">
  <div className="mx-auto max-w-7xl">

    <p className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
      PRICING
    </p>

    <h2 className="bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-5xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl">
      Simple, transparent pricing
    </h2>

    <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

      {/* Pricing Cards Here */}
      <PricingCard
        plan="Starter"
        price="$0"
        description="Perfect for beginners"
        features={[
          "1 brokerage connection",
          "Basic portfolio view",
          "Monthly AI insights",
          "Email support",
        ]}
        buttonText="Get started free"
      />

      <PricingCard
        plan="Pro"
        price="$29"
        description="For serious investors"
        features={[
          "10 brokerage connections",
          "Real-time AI analytics",
          "Auto-rebalancing",
          "Priority support",
        ]}
        buttonText="Start 14-day trial"
        popular
      />

      <PricingCard
        plan="Enterprise"
        price="$99"
        description="For funds and family offices"
        features={[
          "Unlimited brokerage connections",
          "Advanced AI analytics",
          "Custom reporting",
          "Dedicated account manager",
        ]}
        buttonText="Contact sales"
      />


    </div>
  </div>
</section>


    {/* common questions */}
    <section id="faq" className="relative px-6 py-32">
      <SingleLayout/>
    </section>
    

    {/* footer  */}
    <Footer/>

      </main>

    </div>
    </>
  );
}