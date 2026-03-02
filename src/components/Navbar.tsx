import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { JSX } from "react";

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header className="relative z-50 flex w-full items-center justify-between px-6 md:px-12 lg:px-[100px] py-5 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#ffffff1a]">
      {/* Logo */}
      <div className="relative z-50 w-fit font-normal text-white text-[28px] md:text-[37px] text-center tracking-[0] leading-[normal]">
        Nexus.
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex items-center gap-[30px] xl:gap-[55px] relative"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative w-fit mt-[-1.00px] font-normal text-white text-lg xl:text-xl text-center tracking-[0] leading-[normal] hover:text-[#ebff57] transition-colors uppercase"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="hidden lg:inline-flex items-center justify-center gap-2.5 px-5 md:px-[30px] py-2.5 md:py-[15px] relative bg-[#ebff57] rounded-[62px] cursor-pointer transition-transform hover:scale-105"
        aria-label="Talk to Sales"
      >
        <span className="relative w-fit mt-[-1.00px] font-medium text-[#0a0a0c] text-lg md:text-2xl text-center tracking-[0] leading-[normal]">
          Talk to Sales
        </span>
      </button>

      {/* Mobile Hamburger / Close Icon */}
      <button
        className="relative z-50 lg:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full h-[100dvh] bg-[#0a0a0c] flex flex-col items-center pt-24 gap-10 lg:hidden border-t border-[#ffffff1a]"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu when link is clicked
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="font-normal text-white text-3xl text-center uppercase tracking-widest hover:text-[#ebff57] transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(false)} // Close menu on button click
              className="mt-6 inline-flex items-center justify-center px-[40px] py-[15px] bg-[#ebff57] rounded-[62px]"
            >
              <span className="font-medium text-[#0a0a0c] text-2xl text-center">
                Talk to Sales
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};