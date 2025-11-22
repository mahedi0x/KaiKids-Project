import React from "react";
import { motion } from "framer-motion";
import kaishifImg from "../../assets/imges/kaishif.png";

const MeetKail = () => {
  return (
    <section className="py-10 px-6 md:py-10 lg:py-20 bg-gradient-to-b from-[#f8f5ec] via-white to-[#f8f5ec] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12 md:mb-16 lg:mb-20 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#1da597] to-[#1da597cc] bg-clip-text text-transparent">
            Meet Kail
          </span>
          <br className="hidden sm:block" />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 font-bold block mt-3 sm:mt-4">
            Your Gentle Healing Friend
          </span>
        </motion.h2>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1da597]/5 to-transparent rounded-3xl"></div>

          {/* Grid — Mobile & Tablet Stack, Desktop Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 p-8 sm:p-10 md:p-12 lg:p-10 relative z-10">
            
            {/* IMAGE — Mobile & Tablet First */}
            <div className="flex justify-center order-1 lg:order-none">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-[#1da597]/30 rounded-full blur-3xl -z-10"
                />
                
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
                  transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative"
                >
                  <div
                    className="rounded-full overflow-hidden border-8 border-white shadow-2xl 
                               w-64 h-64 
                               sm:w-72 sm:h-72 
                               md:w-80 md:h-80 
                               lg:w-96 lg:h-96"
                  >
                    <img
                      src={kaishifImg}
                      alt="Kail — Your Healing Friend"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* TEXT — Mobile & Tablet Second */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-none">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1da597]">
                The Heart of KaiShifAI
              </h3>

              <p className="text-xl sm:text-xl md:text-xl text-gray-700 leading-relaxed font-medium">
                Kail is more than a friend — they're your child's{" "}
                <span className="text-[#1da597] font-bold">gentle guide</span> through feelings, fears, and big emotions.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                With soft words, playful riddles, and endless kindness, Kail helps little hearts discover{" "}
                <span className="font-bold text-[#1da597]">courage</span>, find{" "}
                <span className="font-bold text-[#1da597]">calm</span>, and grow in{" "}
                <span className="font-bold text-[#1da597]">love</span> — one smile at a time.
              </p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-5 sm:p-6 md:p-4 bg-[#1da597]/10 rounded-3xl border-2 border-dashed border-[#1da597]/30"
              >
                <p className="text-base sm:text-lg md:text-xl italic text-[#1da597] font-semibold leading-relaxed">
                  “I’m here with you, always. You’re never alone.” — Kail
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetKail;
