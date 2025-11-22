import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaPaperPlane 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full mt-20">
      
      {/* Wavy Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[98%] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35C96,46,224,80,321.39,56.44Z"
            fill="#1da597"
          ></path>
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#1da597] text-white pt-14 pb-10 px-6 relative overflow-hidden">

        {/* Floating Bubbles */}
        <div className="absolute top-12 right-12 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-8 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>

        {/* GRID SYSTEM */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold drop-shadow-md">
              KaiShifAI
            </h2>
            <p className="text-sm text-teal-50 leading-relaxed">
              Building a world where kindness is magic and learning feels fun.  
              Small habits. Big grow.
            </p>

            <div className="flex gap-4 pt-2">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center 
                  hover:bg-yellow-300 hover:text-[#1da597] hover:scale-110 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Kids Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4">
              Little Explorers
            </h3>
            <ul className="space-y-2 text-teal-50 font-medium">
              {["Play Games", "Read Stories", "Meet Kai", "Super Powers"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:pl-2 transition-all block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Parent Links */}
          <div>
            <h3 className="text-xl font-bold text-teal-100 mb-4">
              For Grown-ups
            </h3>
            <ul className="space-y-2 text-teal-50 font-medium">
              {["Parents Guide", "For Schools", "Safety & Privacy", "Contact Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:pl-2 transition-all block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Get Magic Mail
            </h3>
            <p className="text-sm text-teal-50 mb-4">
              Join our club for stickers, stories, and fun news!
            </p>

            <form className="relative">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full bg-white/10 border border-white/30 rounded-full py-3 px-5 
                text-white placeholder-teal-100 focus:outline-none focus:bg-white/20 focus:border-yellow-300"
              />
              <button
                type="button"
                className="absolute right-1 top-1 bg-yellow-300 text-[#1da597] p-2.5 rounded-full 
                hover:scale-110 hover:bg-white transition-all shadow-md"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-14 mb-6"></div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-teal-100 text-sm">
          <p>&copy; {new Date().getFullYear()} KaiShifAI. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Learn. Feel. Heal. 🌈</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
