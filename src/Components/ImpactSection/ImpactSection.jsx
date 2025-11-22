import React from "react";
import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#f8f5ec] to-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
                     bg-gradient-to-r from-[#1da597] to-[#1da597dd] bg-clip-text text-transparent 
                     mb-10 sm:mb-14 md:mb-16"
        >
          Impact That Matters
        </motion.h2>

        {/* Stats Grid */}
        <div className="
          grid 
          grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3

          gap-8 sm:gap-10 md:gap-12 
          max-w-5xl mx-auto
        ">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 hover:shadow-2xl transition-shadow"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl font-black text-[#1da597] mb-3 sm:mb-4">
              5<span className="text-3xl sm:text-4xl md:text-5xl">min</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Daily Use
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Short, achievable sessions that fit busy family routines.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 hover:shadow-2xl transition-shadow"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl font-black text-orange-500 mb-3 sm:mb-4">
              3M<span className="text-4xl sm:text-5xl md:text-6xl">+</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Potential Reach
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Family users through schools and clinical partnerships.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 hover:shadow-2xl transition-shadow"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl font-black text-purple-600 mb-3 sm:mb-4">
              2
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Languages
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              English and Arabic, with more to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
