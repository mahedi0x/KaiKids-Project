import React from "react";
import { motion } from "framer-motion";

// Make sure this path is correct based on your project structure
// import bannerBG from "../../assets/imges/bannerBg.jpg";
// import bannerBG from "../../assets/imges/KaiBanner.webp";
import bannerBG from "../../assets/imges/KaiBanner-02.webp";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section
      className="w-full flex items-center justify-center relative overflow-hidden py-30 px-4"
      style={{
        backgroundImage: `
           linear-gradient(135deg, rgba(10,15,25,0.7) 0%, rgba(8,12,20,0.8) 40%, rgba(5,8,15,0.7) 100%),
          url(${bannerBG})
        `,
        // Standard CSS to make the background image behave nicely
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Soft Glow */}
        <div className="relative flex justify-center mb-6">
          <div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{
              background: "radial-gradient(circle, #fef9c3 10%, #f8f5ec00 70%)",
            }}
          ></div>
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold text-[#1da597] drop-shadow-sm leading-tight mb-6">
          <span style={{ color: "#1da597", fontWeight: "bold" }}>
            <Typewriter
              words={["Learn. Feel. Heal."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={3000}
            />
          </span>
        </h1>

        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 px-4">
  A calm, joyful place where feeling healthy is as easy and fun as playing. 
  Through gentle stories, curious questions, and a little touch of magic, 
  we help every child — and the grown-ups who love them — turn small daily moments 
  into big, lifelong habits of happiness and wellbeing.
</p>
      

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-[#1da597]  hover:bg-white hover:text-gray-700 text-white font-semibold shadow-lg hover:scale-105 transition">
            Start Free
          </button>
          <button className="px-8 py-3 rounded-full border border-gray-400 text-gray-700 font-semibold bg-white backdrop-blur-sm hover:bg-[#1da597] hover:text-white hover:border-[#1da299]  shadow-md transition">
            Discover the Magic
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
