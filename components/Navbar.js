"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">Mitra Portfolio</div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-white hover:text-blue-300 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white text-black shadow-md rounded-b-xl px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="block text-center text-lg hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
