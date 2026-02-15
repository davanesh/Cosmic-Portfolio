import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Navbar() {
  const links = [
    { name: "About", target: "#about" },
    { name: "Projects", target: "#projects" },
    { name: "Contact", target: "#contact" },
    { name: "Resume", target: "#resume" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, target) => {
    if (!target) return;
    e.preventDefault();
    setIsMenuOpen(false);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, autoKill: false },
      ease: "power2.inOut"
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-purple-500/20">
      {/* Logo Area */}
      <div className="flex flex-col items-center cursor-pointer relative z-50" onClick={() => gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" })}>
        <span className="text-2xl font-bold tracking-widest uppercase bg-linear-to-r from-purple-400 to-white bg-clip-text text-transparent">
          Davanesh
        </span>
        <span className="text-xs font-semibold tracking-[0.45em] text-purple-400 uppercase">
          Saminathan
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-10 absolute left-1/2 -translate-x-1/2">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.href || link.target}
            onClick={(e) => link.target ? handleScroll(e, link.target) : null}
            className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 uppercase tracking-widest cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.name}
            {/* Animated Underline */}
            {hoveredIndex === index && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute left-0 right-0 -top-1 h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden relative z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none p-2"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#a855f7" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
              className="w-full h-[2px] block origin-left duration-300"
            />
            <motion.span
              animate={isMenuOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1, backgroundColor: "#fff" }}
              className="w-full h-[2px] block duration-300"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#a855f7" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
              className="w-full h-[2px] block origin-left duration-300"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-start pt-32 space-y-8 z-100 md:hidden overflow-y-auto"
          >
            {/* HUD Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-purple-500/30" />
              <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-purple-500/30" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-purple-500/10" />
              <div className="absolute left-1/2 top-0 w-px h-full bg-purple-500/10" />
            </div>

            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href || link.target}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                onClick={(e) => link.target ? handleScroll(e, link.target) : null}
                className="text-2xl font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-purple-400 transition-colors relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#a855f7]" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="mt-12 text-[10px] tracking-[0.5em] text-purple-400 uppercase font-mono pb-20"
            >
              System Online // Rev 4.0
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
