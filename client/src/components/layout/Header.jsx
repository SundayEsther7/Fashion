import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Detect the current page route
  const { pathname } = useLocation();

  // If we are on the Home page, header should be transparent.
  const isHome = pathname === "/";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-30 px-8 py-4 
        flex items-center justify-between
        transition-all duration-300
      
        /* Transparent on Home, Solid on other pages */
        ${isHome ? "bg-transparent" : "bg-white shadow-md"}
      `}
    >
      {/* LOGO / BRAND */}
      {/* Logo is white on Home (overlaying hero) and Primary color on other pages */}
      <h1 className={`text-2xl font-extrabold ${isHome ? "text-white" : "text-primary"}`}>
        UrbanGlide
      </h1>

      {/* DESKTOP NAVIGATION */}
      {/* Text color also depends on whether we are on the Hero or not */}
      <nav className={`hidden md:flex gap-8 font-saira text-sm ${isHome ? "text-white" : "text-primary"}`}>
        <Link to="/" className="hover:text-accent transition">Home</Link>
        <Link to="/shop" className="hover:text-accent transition">Shop</Link>
        <Link to="/about" className="hover:text-accent transition">About</Link>
        <Link to="/contact" className="hover:text-accent transition">Contact</Link>
      </nav>

      {/* MOBILE MENU TOGGLE BUTTON (Hamburger) */}
      <button
        onClick={() => setOpen(!open)}
        className={`${isHome ? "text-white" : "text-primary"} md:hidden`}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* MOBILE NAVIGATION MENU */}
      {open && (
        <div
          className={`
            md:hidden w-full absolute top-full left-0 text-center py-4 space-y-4

            /* Background + Text style switches depending on page */
            ${isHome ? "bg-black/70 text-white" : "bg-white text-primary shadow-md"}
          `}
        >
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-accent transition">Home</Link>
          <Link to="/shop" onClick={() => setOpen(false)} className="block hover:text-accent transition">Shop</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-accent transition">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-accent transition">Contact</Link>
        </div>
      )}
    </header>
  );
}
