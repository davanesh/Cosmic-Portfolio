import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
    const containerRef = useRef();
    const pixelRefs = useRef([]);

    // Grid dimensions
    const rows = 10;
    const cols = 10;
    const totalPixels = rows * cols;

    useEffect(() => {
        // Initial setup
        gsap.set(pixelRefs.current, { scale: 0, opacity: 0 });

        const tl = gsap.timeline({
            onComplete: () => {
                // Exit animation
                gsap.to(pixelRefs.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    stagger: {
                        amount: 0.8,
                        grid: [rows, cols],
                        from: "random"
                    },
                    ease: "power4.inOut",
                    onComplete: onComplete
                });
            }
        });

        // Entrance animation
        tl.to(pixelRefs.current, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: {
                amount: 1,
                grid: [rows, cols],
                from: "center"
            },
            ease: "expo.out"
        })
            .to(".loader-text", {
                opacity: 1,
                duration: 0.5,
                y: 0
            }, "-=0.5")
            .to(".loader-text", {
                opacity: 0,
                duration: 0.5,
                y: -20,
                delay: 1
            });

    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black overflow-hidden pointer-events-none"
        >
            {/* Pixel Grid */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 w-full h-full">
                {[...Array(totalPixels)].map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (pixelRefs.current[i] = el)}
                        className="w-full h-full bg-purple-600/20 border border-purple-500/10"
                    />
                ))}
            </div>

            {/* Central Text */}
            <div className="relative z-10 text-center">
                <div className="loader-text opacity-0 translate-y-4 font-mono">
                    <div className="text-purple-400 text-sm tracking-[0.5em] mb-2 uppercase">System_Booting</div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-white text-xs tracking-widest uppercase">Initializing_UI_Protocol</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
