import { useEffect } from "react";
import { gsap } from "gsap";
import blackholeVideo from "../assets/blackhole.webm";

const HUDCorner = ({ className }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" className={`absolute text-purple-400 opacity-60 ${className}`}>
        <path d="M40 2H2V40" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default function Hero1() {
    useEffect(() => {
        // Initial HUD Entry
        gsap.from(".hud-element", {
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            duration: 1,
            ease: "expo.out"
        });
    }, []);

    return (
        <div className="relative flex flex-col h-screen w-full overflow-hidden font-mono selection:bg-purple-500/30">
            {/* Background Video */}
            <video autoPlay muted loop playsInline
                className="absolute top-0 left-0 w-full h-[115%] object-cover -z-10"
            >
                <source src={blackholeVideo} type="video/webm" />
            </video>

            {/* Main Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Scan Line & Noise Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
                <div className="absolute w-full h-1 bg-purple-400/20 blur-[1px] animate-scan-line"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            {/* Content Layout */}
            <div className="relative z-20 h-full w-full flex flex-col justify-start p-8 md:p-16 space-y-12">
                {/* Top Left: About Me & Description Grouped */}
                <div className="mt-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase hud-element mb-4">
                        About <span className="text-purple-400">Me</span>
                    </h2>

                    <div className="max-w-md hud-element">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-purple-400 pl-4">
                            Full-stack developer focused on performance and scalability, crafting meaningful digital systems with modern web technologies to solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>

            {/* HUD Corners */}
            <HUDCorner className="top-4 left-4" />
            <HUDCorner className="top-4 right-4 rotate-90" />
            <HUDCorner className="bottom-4 left-4 -rotate-90" />
            <HUDCorner className="bottom-4 right-4 rotate-180" />
        </div>
    );
}
