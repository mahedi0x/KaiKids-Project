import React from "react";
import { motion } from "framer-motion";

import { FaBookOpen } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const CoreExperience = () => {
  const cards = [
    {
      icon: <FaBookOpen className="text-6xl text-green-500" />, 
      title: "Interactive Story Realms",
      description:
        "Short, engaging stories that teach calm, courage, and kindness through adventure and discovery.",
      glow: "bg-green-300/40",
    },
    {
      icon: <FaRegStar className="text-6xl text-yellow-500" />, 
      title: "Daily Spark Cards",
      description:
        "One-minute mindfulness actions that build confidence and create positive daily rituals.",
      glow: "bg-yellow-300/40",
    },
    {
      icon: <FaHeadphonesAlt className="text-6xl text-purple-500" />, 
      title: "Audio Nook",
      description:
        "Calming bedtime stories and focus sessions narrated by Kail for peaceful moments.",
      glow: "bg-purple-300/40",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f8f5ec] mx-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#1da597]"
        >
          The Children's Core Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600 max-w-xl mx-auto"
        >
          Three magical pathways designed to nurture emotional literacy, build daily wellbeing habits, and develop self-soothing skills.
        </motion.p>

        {/* Static 3-card layout */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 bg-white shadow-xl rounded-2xl border border-gray-200 md:w-[370px] cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:scale-[1.04] hover:shadow-2xl hover:border-[#1da597]/50"
            >
              <div
                className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-40 ${card.glow}`}
              ></div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                {card.icon}
              </motion.div>

              <h3 className="text-lg font-semibold mt-4 text-gray-800">{card.title}</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default CoreExperience;