import { motion } from "framer-motion";

export default function ProjectModal({ activeProject, onClose }) {
    if (!activeProject) return null;

    const isMobileApp = activeProject.tech.includes("React Native") || activeProject.tech.includes("Flutter");
    const isDev = activeProject.status === "dev";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-24 md:p-12 md:pt-28"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full h-full max-w-5xl max-h-[90vh] md:max-h-[80vh] bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-purple-900/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Browser Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-black/40 border-b border-white/5 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>

                    <div className="flex-1 text-center mx-4 overflow-hidden">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono max-w-md w-full justify-center truncate">
                            {activeProject.link}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {activeProject.github && (
                            <a
                                href={activeProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                title="View Source on GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        )}
                        <a
                            href={activeProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Open in new tab"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                            title="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-white relative overflow-y-auto">
                    {isMobileApp ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] text-white">
                            <div className="w-16 h-16 mb-6 p-4 rounded-2xl bg-linear-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Mobile Application</h3>
                            <p className="text-gray-400 max-w-md text-center px-6">
                                This is a native mobile application.
                                <br />
                                Please check the GitHub repository for installation instructions and demos.
                            </p>
                            {activeProject.github && (
                                <a
                                    href={activeProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full flex items-center gap-2 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    View Source Code
                                </a>
                            )}
                        </div>
                    ) : isDev ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] text-white">
                            <div className="w-20 h-20 border-2 border-dashed border-purple-500 rounded-full animate-spin-slow mb-6"></div>
                            <h3 className="text-2xl font-bold mb-2">Work in Progress</h3>
                            <p className="text-gray-400 max-w-md text-center px-6">
                                This project is currently under active development.
                                Check back soon or view the source code on GitHub!
                            </p>
                            {activeProject.github && (
                                <a
                                    href={activeProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full flex items-center gap-2 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    View Source Code
                                </a>
                            )}
                        </div>
                    ) : (
                        <iframe
                            src={activeProject.link}
                            title={activeProject.title}
                            className="w-full h-full border-0"
                            sandbox="allow-scripts allow-same-origin"
                        ></iframe>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
