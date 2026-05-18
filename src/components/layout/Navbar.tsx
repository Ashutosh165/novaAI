// "use client";

// import React from "react";
// import {motion} from "motion/react";
// import { Sparkles } from "lucide-react";

// function Navbar() {
 
//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-2xl"
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/20 to-purple-500/20 shadow-lg shadow-cyan-500/10">
//             <Sparkles size={18} className="text-cyan-300" />
//           </span>

//           <span className="bg-linear-to-r from-white to-neutral-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
//             NovaVest AI
//           </span>
//         </div>

//         {/* CTA Button */}
        
//         <motion.button
//           whileHover={{scale:1.09}}
//           whileTap={{scale:0.97}}
//           className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
//           >
//             Sign In
//           </motion.button>
        
//       </div>
//     </motion.header>
//   );
// }

// export default Navbar;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="group flex cursor-pointer items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/20 to-purple-500/20 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:shadow-cyan-500/30">
            <Sparkles
              size={18}
              className="text-cyan-300 transition-transform duration-300 group-hover:rotate-12"
            />
          </span>

          <span className="bg-linear-to-r from-white to-neutral-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
            NovaVest AI
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#analytics"
            className="text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-cyan-400"
          >
            Analytics
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-cyan-400"
          >
            Pricing
          </a>
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          Sign In
        </motion.button>
      </div>
    </motion.header>
  );
}

export default Navbar;