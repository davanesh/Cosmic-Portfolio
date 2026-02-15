import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import blackholeVideo from "../assets/blackhole.webm";

const HUDCorner = ({ className }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" className={`absolute text-purple-400 opacity-60 ${className}`}>
        <path d="M40 2H2V40" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default function Hero() {
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo(".hud-element",
            { opacity: 0, scale: 0.9, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                force3D: true
            }
        );
    }, { scope: container });

    return (
        <div id="about" ref={container} className="relative flex flex-col h-screen w-full overflow-hidden font-mono selection:bg-purple-500/30">
            {/* Background Video */}
            <video autoPlay muted loop playsInline
                className="absolute -top-2 left-0 w-full h-[110%] object-cover z-10 opacity-100"
            >
                <source src={blackholeVideo} type="video/webm" />
            </video>

            {/* Main Overlay */}
            <div className="absolute inset-0 bg-black/40 z-15"></div>

            {/* Scan Line & Noise Overlay */}
            <div className="absolute inset-0 z-15 pointer-events-none opacity-10">
                <div className="absolute w-full h-px bg-white/10 blur-[0.5px] animate-scan-line"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
            </div>

            {/* Content Layout */}
            <div className="relative z-30 h-full w-full flex flex-col justify-start p-8 md:p-16 space-y-12">
                <div className="mt-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase hud-element mb-4">
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
