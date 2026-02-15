import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/davanesh-saminathan" },
        { icon: <FaGithub />, href: "https://github.com/davanesh" },
        { icon: <SiLeetcode />, href: "https://leetcode.com/u/davanesh/" },
    ];

    return (
        <footer className="relative w-full py-12 px-6 md:px-16 border-t border-purple-500/20 bg-black/40 overflow-hidden font-mono">
            {/* HUD Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute top-0 left-10 w-px h-full bg-linear-to-b from-purple-500 to-transparent" />
                <div className="absolute top-0 right-10 w-px h-full bg-linear-to-b from-purple-500 to-transparent" />
            </div>

            {/* Desktop Social Pointer */}
            <div className="hidden lg:flex absolute left-24 bottom-12 items-center space-x-2 text-purple-500/50 animate-pulse">
                <span className="text-xl">←</span>
                <span className="text-xl uppercase tracking-widest">Connect</span>
            </div>

            <div className="max-w-7xl mx-auto lg:pl-28 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative z-10">
                {/* Left Side: Identity */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-xl font-bold tracking-widest uppercase bg-linear-to-r from-purple-400 to-white bg-clip-text text-transparent">
                            Davanesh
                        </span>
                        <span className="text-[10px] font-semibold tracking-[0.45em] text-purple-400 uppercase">
                            Saminathan
                        </span>
                    </div>
                </div>

                {/* Center: System Status & Mobile Socials */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Mobile Only Social Links */}
                    <div className="flex lg:hidden items-center space-x-6">
                        {socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors text-xl"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                        <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_#a855f7]" />
                            <span className="text-[10px] text-purple-400 uppercase tracking-[0.3em]">System Status: Optimized</span>
                        </div>
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">Latency: 24ms // Protocol: 7E-4</span>
                    </div>
                </div>

                {/* Right Side: Copyright & Version */}
                <div className="flex flex-col items-center md:items-end space-y-1">
                    <div className="text-gray-400 text-xs uppercase tracking-widest">
                        &copy; {currentYear} All Rights Reserved
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-gray-600 font-mono">
                        <span className="uppercase">Core_V4.2.0</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        <span className="uppercase">Portfolio_OS</span>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-12 pt-8 border-t border-purple-500/5 flex justify-center">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="w-24 h-px bg-purple-500/30"
                />
            </div>
        </footer>
    );
}
