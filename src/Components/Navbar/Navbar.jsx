import React from "react";
import { NavLink } from "react-router";
import {
  FaHome,
  FaChild,
  FaSchool,
  FaPuzzlePiece,
  FaInfoCircle,
  FaBars,
} from "react-icons/fa";

import "./Navbar.css"

const Navbar = () => {
  const linkStyle =
    "mx-2 text-lg font-semibold flex items-center gap-2 py-2 px-3 rounded-xl transition-all duration-300 " +
    "hover:bg-[#1da597]/10 hover:text-[#1da597] hover:shadow-sm";

  const links = (
    <>
      <NavLink to="/" className={linkStyle}>
        <FaHome className="text-[#1da597] text-xl" /> Home
      </NavLink>

      <NavLink to="/about" className={linkStyle}>
        <FaInfoCircle className="text-[#1da597] text-xl" /> About
      </NavLink>

      <NavLink to="/families" className={linkStyle}>
        <FaChild className="text-[#1da597] text-xl" /> Families
      </NavLink>

      <NavLink to="/schools" className={linkStyle}>
        <FaSchool className="text-[#1da597] text-xl" /> Schools
      </NavLink>

      <NavLink to="/professionals" className={linkStyle}>
        <FaPuzzlePiece className="text-[#1da597] text-xl" /> Professionals
      </NavLink>
    </>
  );

  return (
    <nav className="navbar bg-white/90 backdrop-blur-xl shadow-lg px-5 py-4 border border-gray-200 rounded-xl sticky top-0 z-50">
      
      {/* LEFT — LOGO */}
      <div className="navbar-start">
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wide 
            text-[#1da597] hover:scale-110 transition-all duration-300"
        >
          KaiShifAI
        </NavLink>
      </div>

      {/* CENTER — Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-1">{links}</ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end flex items-center gap-3">

        {/* MOBILE MENU */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-circle border-none shadow-md
            bg-[#1da597] hover:bg-[#178c80] text-white transition-all duration-300"
          >
            <FaBars className="text-xl" />
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content 
            bg-white rounded-xl shadow-xl w-60 p-3 mt-3"
          >
            {links}
          </ul>
        </div>

        {/* GET KAI BUTTON */}
        <a
          className="hidden lg:flex items-center gap-2 rounded-full cursor-pointer 
            bg-[#1da597] text-white px-6 py-3 font-bold 
            shadow-md hover:scale-110 hover:bg-[#178c80] transition-all duration-300"
        >
          Get Kai
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
