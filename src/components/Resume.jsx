import { useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import HoverButton from "./ui/HoverButton";

gsap.registerPlugin(TextPlugin);

export default function Resume() {
    const [isDownloading, setIsDownloading] = useState(false);
    const buttonTextRef = useRef(null);

    const handleDownload = () => {
        if (isDownloading) return;
        setIsDownloading(true);

        // Simulate download with GSAP TextPlugin animation
        const buttonText = buttonTextRef.current;
        if (!buttonText) return;

        // Animate text change
        gsap.to(buttonText, {
            duration: 0.5,
            text: {
                value: "Downloading...",
                delimiter: ""
            },
            ease: "none",
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(buttonText, {
                        duration: 0.5,
                        text: "Downloaded!",
                        ease: "power2.out",
                        onComplete: () => {
                            setTimeout(() => {
                                setIsDownloading(false);
                                gsap.to(buttonText, {
                                    duration: 0.5,
                                    text: "Download Resume",
                                    ease: "power2.in",
                                });
                            }, 1000);

                            // Trigger actual file download
                            const link = document.createElement('a');
                            link.href = "/resume.pdf";
                            link.download = "Davanesh_Saminathan_Resume.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }
                    });
                }, 1500); // Wait 1.5s to simulate download time
            }
        });
    };

    return (
        <section id="resume" className="relative py-24 w-full text-white flex flex-col items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12">
                    About Me
                </h2>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-purple-900/10">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                        I am a passionate Full Stack Developer with a deep love for building scalable, high-performance web applications.
                        With a strong foundation in modern technologies like React, Node.js, and Cloud Computing, I strive to create
                        immersive user experiences that solve real-world problems.
                    </p>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
                        My journey in tech is driven by curiosity and a relentless pursuit of excellence. Whether it's architecting
                        complex backends or crafting pixel-perfect frontends, I approach every project with a focus on code quality,
                        performance, and user-centric design.
                    </p>

                    <div className="flex justify-center">
                        <HoverButton
                            onClick={handleDownload}
                            className="rounded-full min-w-[250px] flex items-center justify-center"
                        >
                            <span ref={buttonTextRef}>Download Resume</span>
                        </HoverButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
