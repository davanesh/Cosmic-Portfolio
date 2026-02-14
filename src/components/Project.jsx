import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import HoverButton from "./ui/HoverButton";
import ProjectModal from "./ui/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "AutoFlow.AI",
        description:
            "An intelligent workflow orchestration platform that automates complex business processes using AI-driven optimization and microservices architecture.",
        image: "src/assets/autoflow.png",
        tech: ["Go", "AWS", "React", "TailwindCSS", "Omalla-AI"],
        link: "https://github.com/davanesh/autoFlow",
        github: "https://github.com/davanesh/autoFlow",
        status: "dev",
    },
    {
        title: "AI PR Reviewer",
        description:
            "An AI-powered code review assistant that analyzes pull requests, detects potential bugs, and suggests improvements to maintain clean and scalable code.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=3270&auto=format&fit=crop",
        tech: ["Node.js", "OpenAI API", "GitHub API", "TypeScript", "NLP"],
        link: "https://example.com/pr-reviewer",
        github: "https://github.com/davanesh/AI-powered-PR-reviewer",
        status: "dev",
    },
    {
        title: "VR Estate Explorer",
        description:
            "A web-based virtual property tour platform that enables users to explore real estate listings through immersive 360° views before visiting in person.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3270&auto=format&fit=crop",
        tech: ["React", "Three.js", "WebVR", "Node.js", "MongoDB"],
        link: "https://estate-hub-k7iu.onrender.com",
        github: "https://github.com/davanesh/Real-Estate-Marketplace",
        status: "live",
    },
    {
        title: "EmergencyRide",
        description:
            "A mobile application that enables users to quickly book and track nearby ambulances in real time, helping reduce emergency response delays.",
        image: "https://images.unsplash.com/photo-1587740896339-96a76170508d?q=80&w=3270&auto=format&fit=crop",
        tech: ["React Native", "Node.js", "Express.js", "Socket.io", "Firebase", "Maps API"],
        link: "https://example.com/emergency-transport",
        github: "https://github.com/davanesh/EmergencyRide",
        status: "dev",
    },
    {
        title: "SyncDocs",
        description:
            "A real-time collaborative document editor inspired by Google Docs, allowing multiple users to edit and sync content simultaneously.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3270&auto=format&fit=crop",
        tech: ["React", "Node.js", "Socket.io", "MongoDB", "codeBlocks"],
        link: "https://syncdocs.vercel.app/",
        github: "https://github.com/davanesh/google-docs-clone",
        status: "live",
    },
];

export default function Project() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;
        const totalProjects = projects.length;

        // Horizontal Scroll Animation
        const scrollTween = gsap.to(wrapper, {
            xPercent: -100 * (totalProjects - 1) / totalProjects,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                // Increase scroll distance based on number of projects for smoother control
                end: () => "+=" + container.offsetWidth * (totalProjects - 1),
                snap: {
                    snapTo: 1 / (totalProjects - 1),
                    duration: { min: 0.1, max: 0.2 }, // Faster snap
                    delay: 0.1, // Wait a bit before snapping
                    ease: "power1.inOut",
                    inertia: false // Prevent "lag back and forth"
                },
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
                <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Projects
                </h2>
                <p className="text-purple-300 text-sm tracking-[0.3em] mt-2 uppercase">
                    Selected Works
                </p>
            </div>

            <div
                ref={wrapperRef}
                className="flex h-full"
                style={{ width: `${projects.length * 100}%` }}
            >
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

                                {/* GitHub Icon on Card (Top Right) */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-all duration-300 backdrop-blur-sm"
                                    title="View Source Code"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
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

                                <HoverButton className="rounded-full" onClick={() => setActiveProject(project)}>
                                    View Project
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Preview Modal */}
            <AnimatePresence>
                {activeProject && (
                    <ProjectModal
                        activeProject={activeProject}
                        onClose={() => setActiveProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}