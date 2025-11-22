import React from "react";
import { motion } from "framer-motion";
import bannerBG from "../../assets/imges/KaiBanner-02.webp";
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
  return (
    <section
      className="w-full flex items-center justify-center relative overflow-hidden py-32 px-4"
      style={{
        backgroundImage: `
          linear-gradient(140deg, rgba(10,15,22,0.85) 0%, rgba(8,12,20,0.75) 50%, rgba(6,10,18,0.85) 100%),
          url(${bannerBG})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft Floating Light */}
      <div className="absolute top-32 left-10 w-40 h-40 rounded-full bg-[#1da597]/20 blur-[90px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-yellow-300/20 blur-[80px] animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Glow Behind Text */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 blur-[100px] opacity-60"
            style={{
              background: "radial-gradient(circle, #fef9c3 5%, transparent 70%)",
            }}
          ></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-xl leading-tight mb-8 tracking-tight">
          <span className="text-[#1da597] font-extrabold">
            <Typewriter
              words={["Learn. Feel. Heal."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={110}
              deleteSpeed={70}
              delaySpeed={2500}
            />
          </span>
        </h1>

        {/* Stylish Paragraph */}
        <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 px-4 font-thin tracking-wide ">
          A gentle, joyful space where emotional health becomes playful learning.  
          Through warm stories, simple questions, and tiny magical habits,  
          we help every child and the grown-ups who love them turn small moments  
          into lifelong confidence, calmness, and wellbeing.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button className="px-8 py-3 w-70 rounded-full hover:bg-white cursor-pointer hover:text-gray-800 bg-[#1da597] text-2xl  text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300">
            Start Free
          </button>

          <button className="px-8 py-3 w-70 rounded-full text-2xl bg-white cursor-pointer text-gray-800 border border-gray-300 font-semibold shadow-md hover:bg-[#1da597] hover:text-white hover:border-[#1da299] hover:scale-105 transition-all duration-300">
            Discover the Magic
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
