import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverButton from "./ui/HoverButton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AutoFlow.AI",
    description:
      "An intelligent workflow orchestration platform that automates complex business processes using AI-driven optimization and microservices architecture.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3270&auto=format&fit=crop",
    tech: ["Go", "AWS", "Docker", "Terraform", "React", "AI Integration"],
  },
  {
    title: "AI PR Reviewer",
    description:
      "An AI-powered code review assistant that analyzes pull requests, suggests improvements, detects bugs, and enforces clean architecture practices.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=3270&auto=format&fit=crop",
    tech: ["Node.js", "OpenAI API", "GitHub API", "TypeScript", "NLP"],
  },
  {
    title: "VR Estate Explorer",
    description:
      "A virtual reality real estate platform allowing users to tour properties in 360° before purchase.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3270&auto=format&fit=crop",
    tech: ["React", "Three.js", "WebVR", "Node.js", "MongoDB"],
  },
  {
    title: "Emergency Transport System",
    description:
      "Real-time ambulance booking and tracking system designed to reduce emergency response time.",
    image: "https://images.unsplash.com/photo-1587740896339-96a76170508d?q=80&w=3270&auto=format&fit=crop",
    tech: ["React", "Node.js", "Socket.io", "Firebase", "Maps API"],
  },
];

export default function Project() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;

        // Horizontal Scroll Animation
        const scrollTween = gsap.to(wrapper, {
            xPercent: -100 * (projects.length - 1) / projects.length,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (projects.length - 1),
                    duration: { min: 0.2, max: 0.3 },
                    delay: 0,
                    ease: "power1.inOut",
                },
                end: () => "+=" + container.offsetWidth * 4,
            },
        });

        return () => {
            scrollTween.kill();
            ScrollTrigger.killAll(); // Clean up on unmount
        };
    }, []);

    return (
        <section id="projects" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Grid/Stars */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

            <div className="absolute top-24 left-10 z-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Projects
                </h2>
                <p className="text-purple-300 text-sm tracking-[0.3em] mt-2 uppercase">
                    Selected Works
                </p>
            </div>

            <div ref={wrapperRef} className="flex h-full w-[400%]">
                {projects.map((project, index) => (
                    <div key={index} className="w-screen h-full flex items-center justify-center p-10 pt-40 flex-shrink-0">

                        {/* Project Card */}
                        <div className="relative group w-full max-w-4xl h-[60vh] bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-purple-500/50 transition-colors duration-500">

                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex gap-4 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono text-cyan-300 border border-cyan-500/30 rounded-full bg-cyan-900/20 backdrop-blur-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 max-w-xl text-lg mb-8 line-clamp-2 md:line-clamp-none">
                                    {project.description}
                                </p>

                                <HoverButton className="rounded-full">
                                    View Project
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}