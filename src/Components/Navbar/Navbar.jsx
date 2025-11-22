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

import "./Navbar.css";

const Navbar = () => {
  const cuteLinkStyle =
    "mx-2 text-xl flex items-center gap-2 transition-all duration-300 mx-auto" +
    "hover:scale-110 hover:text-[#1da597] px-2 relative";

  const links = (
    <>
      <NavLink to="/" className={cuteLinkStyle}>
        <FaHome className="animate-bounce-slow icon-wiggle text-[#1da597]" />{" "}
        Home
      </NavLink>

      <NavLink to="/about" className={cuteLinkStyle}>
        <FaInfoCircle className="animate-bounce-slow icon-wiggle text-[#1da597]" />{" "}
        About
      </NavLink>

      <NavLink to="/families" className={cuteLinkStyle}>
        <FaChild className="animate-bounce-slow icon-wiggle text-[#1da597]" />{" "}
        Families
      </NavLink>

      <NavLink to="/schools" className={cuteLinkStyle}>
        <FaSchool className="animate-bounce-slow icon-wiggle text-[#1da597]" />{" "}
        Schools
      </NavLink>

      <NavLink to="/professionals" className={cuteLinkStyle}>
        <FaPuzzlePiece className="animate-bounce-slow icon-wiggle text-[#1da597]" />{" "}
        Professionals
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-5 py-4 border border-gray-200 rounded-2xl transition-all duration-500">
      {/* LEFT — LOGO */}
      <div className="navbar-start">
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wide 
            bg-[#1da597]
            bg-clip-text text-transparent drop-shadow-sm hover:scale-110 transition-all duration-300"
        >
          KaiShifAI
        </NavLink>
      </div>

      {/* CENTER (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{links}</ul>
      </div>

      {/* RIGHT — Buttons */}
      <div className="navbar-end">
        {/* MOBILE DROPDOWN */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle border-none shadow-md
            bg-gradient-to-r from-cyan-400 to-cyan-300 
            hover:scale-110 transition duration-300"
          >
            <FaBars className="text-white text-xl" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content 
            bg-white rounded-xl shadow-xl w-56 p-3 mt-3"
          >
            {links}
          </ul>
        </div>

     
        <a
         
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 rounded-4xl 
            bg-gradient-to-r from-[#1da597]  to-[#1da597] text-white
            px-5 py-3 text-sm font-bold shadow-md 
            hover:scale-110 transition duration-300"
        >
          Get Kai
        </a>
      </div>
    </div>
  );
};

export default Navbar;
