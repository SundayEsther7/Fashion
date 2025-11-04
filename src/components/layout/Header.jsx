import { Link } from "react-router-dom";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 px-8 py-4 flex items-center justify-between">
      {/* BRAND */}
      <h1 className="text-2xl font-extrabold tracking-wide text-white">
        UrbanGlide
      </h1>

      {/* NAV DESKTOP */}
      <nav className="hidden md:flex gap-8 text-white text-[16px] font-medium">
        <a href="#" className="hover:text-[#FF6F3C] transition">Home</a>
        <a href="#" className="hover:text-[#FF6F3C] transition">Shop</a>
        <a href="#" className="hover:text-[#FF6F3C] transition">About</a>
        <a href="#" className="hover:text-[#FF6F3C] transition">Contact</a>
      </nav>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white focus:outline-none"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg py-6 flex flex-col gap-4 text-center text-white md:hidden">
          <a href="#" className="hover:text-[#FF6F3C] transition">Home</a>
          <a href="#" className="hover:text-[#FF6F3C] transition">Shop</a>
          <a href="#" className="hover:text-[#FF6F3C] transition">About</a>
          <a href="#" className="hover:text-[#FF6F3C] transition">Contact</a>
        </div>
      )}
    </header>
  );
}
