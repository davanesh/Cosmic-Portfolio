import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const links = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Resume", href: "#" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/10">
      {/* Logo Area */}
      <div className="flex flex-col items-center cursor-pointer">
        <span className="text-2xl font-bold tracking-widest uppercase bg-linear-to-r from-purple-400 to-white bg-clip-text text-transparent">
          Davanesh
        </span>
        <span className="text-xs font-semibold tracking-[0.45em] text-purple-400 uppercase">
          Saminathan
        </span>
      </div>

      {/* Desktop Links - Centered Absolutely */}
      <div className="hidden md:flex space-x-10 absolute left-1/2 -translate-x-1/2">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 uppercase tracking-widest"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.name}
            {/* Animated Underline */}
            {hoveredIndex === index && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </a>
        ))}
      </div>

      <div className="md:hidden text-white text-2xl cursor-pointer">
        ☰
      </div>
    </nav>
  );
}


export default Navbar;