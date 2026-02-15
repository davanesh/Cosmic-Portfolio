import { useRef } from "react";
import { gsap } from "gsap";

export default function HoverButton({ children, className = "", ...props }) {
    const buttonRef = useRef(null);
    const fillRef = useRef(null);
    const textRef = useRef(null);

    const handleMouseEnter = (e) => {
        const button = buttonRef.current;
        const fill = fillRef.current;

        if (!button || !fill) return;

        const { left, top } = button.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        gsap.set(fill, { x, y, scale: 0, opacity: 1 });

        gsap.to(fill, {
            scale: 40,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
        });

        gsap.to(textRef.current, { color: "#ffffff", duration: 0.15, overwrite: "auto" });
    };

    const handleMouseLeave = (e) => {
        const button = buttonRef.current;
        const fill = fillRef.current;

        if (!button || !fill) return;

        const { left, top } = button.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        gsap.to(fill, {
            x,
            y,
            scale: 0,
            duration: 0.3,
            ease: "power2.in",
            overwrite: "auto",
            onComplete: () => gsap.set(fill, { opacity: 0 })
        });

        gsap.to(textRef.current, { color: "#000000", duration: 0.2, overwrite: "auto" });
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
            className={`relative overflow-hidden px-8 py-3 bg-white text-black font-bold uppercase tracking-widest border border-white transition-colors duration-300 ${className}`}
        >
            <span
                ref={fillRef}
                className="absolute w-4 h-4 bg-purple-600 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 scale-0 opacity-0"
            ></span>

            <span ref={textRef} className="relative z-10 pointer-events-none transition-colors">
                {children}
            </span>
        </button>
    );
}
