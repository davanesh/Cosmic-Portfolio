import { useRef } from "react";
import { gsap } from "gsap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialButton = ({ href, children }) => {
    const buttonRef = useRef(null);
    const fillRef = useRef(null);
    const iconRef = useRef(null);

    const handleMouseEnter = (e) => {
        const button = buttonRef.current;
        const fill = fillRef.current;
        const icon = iconRef.current;

        if (!button || !fill || !icon) return;

        const { left, top, width, height } = button.getBoundingClientRect();
        // Calculate center relative to the viewport/element
        const x = e.clientX - left;
        const y = e.clientY - top;

        gsap.set(fill, { x, y, scale: 0, opacity: 1 });

        gsap.to(fill, {
            scale: 20, // Large enough to cover the circle
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.to(icon, { color: "#ffffff", duration: 0.3 });
    };

    const handleMouseLeave = (e) => {
        const button = buttonRef.current;
        const fill = fillRef.current;
        const icon = iconRef.current;

        if (!button || !fill || !icon) return;

        const { left, top } = button.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        gsap.to(fill, {
            x,
            y,
            scale: 0,
            duration: 0.4,
            ease: "power2.in",
        });

        gsap.to(icon, { color: "#ccc", duration: 0.3 }); // Reset to gray/white
    };

    return (
        <a
            ref={buttonRef}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/20 overflow-hidden transition-colors duration-300 hover:border-purple-500/50"
        >
            {/* Fill Effect */}
            <span
                ref={fillRef}
                className="absolute w-2 h-2 bg-purple-600 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 scale-0 opacity-0"
            ></span>

            {/* Icon */}
            <span ref={iconRef} className="relative z-10 text-gray-300 text-xl pointer-events-none transition-colors">
                {children}
            </span>
        </a>
    );
};

const Social = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 hidden lg:flex flex-col gap-4 p-4 rounded-tr-4xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-900/10 hover:border-white/20 transition-colors duration-300">
            <SocialButton href="https://www.linkedin.com/in/davanesh-saminathan">
                <FaLinkedin />
            </SocialButton>
            <SocialButton href="https://github.com/davanesh">
                <FaGithub />
            </SocialButton>
            <SocialButton href="https://leetcode.com/u/davanesh/">
                <SiLeetcode />
            </SocialButton>
        </div>
    );
};

export default Social;