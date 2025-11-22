import React from "react";
import { motion } from "framer-motion";

import kaiGames from "../../assets/imges/Kai Games.webp";
import kaiRobot from "../../assets/imges/Kai Robot.webp";
import kaiWearbles from "../../assets/imges/Kai Wearables.webp";
import { SiAmazongames } from "react-icons/si";
import { BsSmartwatch } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";

const ThreeWorlds = () => {
  const features = [
    {
      id: 1,
      icon: <SiAmazongames className="w-8 h-8 text-[#00C4B4]" />,
      title: "Kai Games",
      description:
        "Engaging digital games that make learning about health and emotions an exciting adventure.",
      image: kaiGames,
    },
    {
      id: 2,
      icon: <BsSmartwatch className="w-8 h-8 text-[#00C4B4]" />,
      title: "Kai Wearables",
      description:
        "Smart, kid-friendly wearables that track activity and well-being, turning healthy habits into a game.",
      image: kaiWearbles,
    },
    {
      id: 3,
      icon: <FaRobot className="w-8 h-8 text-[#00C4B4]" />,
      title: "Kai Robot",
      description:
        "An interactive, AI-powered companion that offers personalized guidance and friendship.",
      image: kaiRobot,
    },
  ];

  return (
    <section className="w-full py-20 bg-[#fdfbf0]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading - Responsive */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-black mb-14 font-sans leading-tight"
        >
          One Platform. Three Worlds.
        </motion.h2>

        {/* Fully Responsive Grid - Only change made */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-transparent hover:border-[#00C4B4]/20"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>

              {/* Image Container - Fixed height typo corrected (h-58 → h-60) */}
              <div className="w-full h-60 overflow-hidden rounded-2xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeWorlds;