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
      <nav className="hidden md:flex gap-8 text-white font-saira text-sm">
        <Link to="/" className="hover:text-accent transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-accent transition">
          Shop
        </Link>
        <Link to="/about" className="hover:text-accent transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-accent transition">
          Contact
        </Link>
      </nav>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm text-white text-center font-saira py-4 space-y-4">
          <Link to="/" className="block hover:text-accent transition">
            Home
          </Link>
          <Link to="/shop" className="block hover:text-accent transition">
            Shop
          </Link>
          <Link to="/about" className="block hover:text-accent transition">
            About
          </Link>
          <Link to="/contact" className="block hover:text-accent transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
