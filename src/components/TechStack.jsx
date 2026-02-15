import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiVite, SiTailwindcss, SiThreedotjs,
    SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiGit,
    SiFirebase, SiPython, SiNextdotjs, SiMysql, SiPostgresql,
    SiOpenjdk, SiGo, SiC, SiGithub, SiDocker,
} from 'react-icons/si';
import { FaAws, FaJava } from "react-icons/fa";

const techs = [
    // 🌐 Frontend
    { name: "React", icon: SiReact, color: "#61DAFB", level: 90, type: "Library" },
    { name: "React Native", icon: SiReact, color: "#61DAFB", level: 75, type: "Mobile" },
    { name: "Vite", icon: SiVite, color: "#646CFF", level: 85, type: "Build Tool" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#38B2AC", level: 95, type: "CSS Framework" },
    { name: "Three.js", icon: SiThreedotjs, color: "#ffffff", level: 65, type: "3D Graphics" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 85, type: "Framework" },

    // ⚙️ Backend
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 85, type: "Runtime" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff", level: 85, type: "Framework" },

    // 🗄️ Databases
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80, type: "Database" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 70, type: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#ffffff", level: 80, type: "Database" },

    // 💻 Languages
    { name: "Java", icon: FaJava, color: "#EA2D2E", level: 90, type: "Language" },
    { name: "Python", icon: SiPython, color: "#ffffff", level: 80, type: "Language" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 75, type: "Language" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 60, type: "Language" },
    { name: "Go", icon: SiGo, color: "#00ADD8", level: 60, type: "Language" },
    { name: "C", icon: SiC, color: "#00ADD8", level: 50, type: "Language" },

    // 🛠️ Tools & Workflow
    { name: "Git", icon: SiGit, color: "#F05032", level: 90, type: "Version Control" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 90, type: "Collaboration" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", level: 60, type: "Containerization" },

    // ☁️ Cloud & Services
    { name: "AWS", icon: FaAws, color: "#FF9900", level: 70, type: "Cloud" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 75, type: "BaaS" },
];

const HUDBracket = () => (
    <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-400" />
    </div>
);

export default function TechStack() {
    return (
        <section id="tech" className="relative py-24 px-8 overflow-hidden z-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#a855f722_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tighter uppercase text-white mb-4">
                        Tech <span className="text-purple-400">Stack</span> I Worked With
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
                </div>

                {/* Centered Grid of Techs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                borderColor: tech.color,
                                boxShadow: `0 0 20px ${tech.color}33`,
                                backgroundColor: `${tech.color}11`
                            }}
                            className="group relative h-20 md:h-24 flex flex-col items-center justify-center p-3 border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden rounded-lg"
                        >
                            <HUDBracket />

                            <tech.icon
                                className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: tech.color }}
                            />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                {tech.name}
                            </span>

                            {/* Decorative Scanline */}
                            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:animate-scan-line pointer-events-none" />

                            {/* Status Label (Bottom Left) */}
                            <div className="absolute bottom-1 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-mono tracking-tighter" style={{ color: tech.level > 70 ? "#4ade80" : tech.level > 50 ? "#facc15" : "#f87171" }}>
                                    {tech.level > 70 ? "MASTERED" : tech.level > 50 ? "STABLE" : "LEARNING"}
                                </span>
                            </div>

                            {/* Type Badge (Bottom Right) */}
                            <div className="absolute bottom-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] text-gray-500 font-mono tracking-tighter">{tech.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
