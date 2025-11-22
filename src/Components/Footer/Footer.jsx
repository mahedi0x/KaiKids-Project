import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaHeart, 
  FaPaperPlane 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full mt-20">
      {/* 1. Wavy Top Shape (SVG) - Creates a fun transition from the white body to the footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[98%] z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1da597" // Matching your brand color
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      {/* 2. Main Footer Content */}
      <div className="bg-[#1da597] text-white pt-10 pb-8 px-6 relative overflow-hidden">
        
        {/* Background Decorative Bubbles (Fun for kids) */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-20">
          
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
              KaiShifAI<span className="text-yellow-300 text-4xl align-middle ml-1"></span>
            </h2>
            <p className="text-teal-50 text-sm leading-relaxed font-medium">
              Building a world where kindness is a superpower and learning feels like magic. 
              <br/>Small habits. Big grow.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-yellow-300 hover:text-[#1da597] hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links for Kids */}
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
               Little Explorers 
            </h3>
            <ul className="space-y-2 text-teal-50 font-medium">
              {['Play Games', 'Read Stories', 'Meet Kai', 'Super Powers'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:pl-2 transition-all duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links for Parents/Grown-ups */}
          <div>
            <h3 className="text-xl font-bold text-teal-100 mb-4 flex items-center gap-2">
               For Grown-ups 
            </h3>
            <ul className="space-y-2 text-teal-50 font-medium">
              {['Parents Guide', 'For Schools', 'Safety & Privacy', 'Contact Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:pl-2 transition-all duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (Magic Mail) */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Get Magic Mail 
            </h3>
            <p className="text-teal-50 text-sm mb-4">
              Join our club for free stickers, stories, and fun news!
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="w-full bg-white/10 border border-white/30 rounded-full py-3 px-5 text-white placeholder-teal-100 focus:outline-none focus:bg-white/20 focus:border-yellow-300 transition"
              />
              <button 
                type="button" 
                className="absolute right-1 top-1 bg-yellow-300 text-[#1da597] p-2.5 rounded-full hover:scale-110 hover:bg-white transition-all shadow-md"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 mb-6"></div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-teal-100 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} KaiShifAI. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
          Learn. Feel. Heal. 🌈 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;