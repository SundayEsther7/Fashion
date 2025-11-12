import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-30 px-8 py-4
        flex items-center justify-between
        transition-all duration-300
        ${isHome ? "bg-transparent" : "bg-white shadow-md"}
      `}
    >
      {/* LOGO */}
      <h1 className={`text-2xl font-extrabold ${isHome ? "text-white" : "text-primary"}`}>
        UrbanGlide
      </h1>

      {/* DESKTOP NAVIGATION */}
<nav
  className={`hidden md:flex gap-8 text-base font-saira ${
    isHome ? "text-white" : "text-primary"
  }`}
>
  <Link
    to="/"
    className={`hover:text-accent transition ${
      pathname === "/" ? "font-bold" : "font-medium"
    }`}
  >
    Home
  </Link>

  <Link
    to="/shop"
    className={`hover:text-accent transition ${
      pathname === "/shop" ? "font-bold" : "font-medium"
    }`}
  >
    Shop
  </Link>

  <Link
    to="/about"
    className={`hover:text-accent transition ${
      pathname === "/about" ? "font-bold" : "font-medium"
    }`}
  >
    About
  </Link>

  <Link
    to="/contact"
    className={`hover:text-accent transition ${
      pathname === "/contact" ? "font-bold" : "font-medium"
    }`}
  >
    Contact
  </Link>
</nav>


      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`${isHome ? "text-white" : "text-primary"} md:hidden`}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`
            md:hidden w-full absolute top-full left-0 text-center py-4 space-y-4
            ${isHome ? "bg-black/70 text-white" : "bg-white text-primary shadow-md"}
          `}
        >
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-accent">Home</Link>
          <Link to="/shop" onClick={() => setOpen(false)} className="block hover:text-accent">Shop</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-accent">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-accent">Contact</Link>

          {/* Mobile Only Auth */}
          {user ? (
            <>
              <span className="block font-semibold py-1">Hi, {user.name}</span>
              <button
                onClick={() => { logout(); setOpen(false); }}
                className="block text-accent hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="block text-accent hover:text-accent/80 font-semibold"
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
