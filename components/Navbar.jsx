import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg rounded-full px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-extrabold text-indigo-700 dark:text-amber-400">
            OATC
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-slate-700 dark:text-slate-200">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link to="/visits" className="hover:text-indigo-600 transition">
            Plan Your Visit
          </Link>
          <Link to="/events" className="hover:text-indigo-600 transition">
            Events
          </Link>
          <Link
            to="/giving"
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded-full font-semibold"
          >
            Give Online
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 dark:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-4 bg-white dark:text-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 md:hidden text-center space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link to="/visits" onClick={() => setOpen(false)} className="block">
            Plan Your Visit
          </Link>
          <Link to="/events" onClick={() => setOpen(false)} className="block">
            Events
          </Link>
          <Link
            to="/giving"
            onClick={() => setOpen(false)}
            className="block bg-indigo-600 text-white py-2 rounded-full font-semibold"
          >
            Give Online
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
