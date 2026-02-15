import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const HUDCorner = ({ className }) => (
    <svg width="30" height="30" viewBox="0 0 30 30" className={`absolute text-purple-500/40 ${className}`}>
        <path d="M30 2H2V30" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // Add current time back to the form
        const now = new Date();
        const timeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString(); e.target.time.value = timeString;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus("success");
                formRef.current.reset();
                setTimeout(() => setStatus("idle"), 5000);
            }, (error) => {
                console.error(error.text);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            });
    };

    return (
        <section id="contact" className="relative py-24 px-4 md:px-16 overflow-hidden font-mono">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-px bg-purple-500" />
                        <span className="text-purple-400 text-xs tracking-[0.5em] uppercase">Communication_Link</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase">
                        Get In <span className="text-purple-500">Touch</span>
                    </h2>
                </div>

                {/* Contact HUD Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: Metadata/Info */}
                    <div className="space-y-8">
                        <div className="p-6 border border-purple-500/20 bg-black/40 backdrop-blur-sm relative group overflow-hidden">
                            <HUDCorner className="top-0 left-0" />
                            <HUDCorner className="bottom-0 right-0 rotate-180" />

                            <h3 className="text-purple-400 text-sm mb-4 tracking-widest uppercase">Mission_Parameters</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Currently open for collaborations, freelance opportunities, or just a friendly "hello".
                                System response time is typically within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                                    <span className="text-purple-500 text-xs text-center font-bold">@</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Signal_ID</p>
                                    <p className="text-gray-300">davaneshsaminathan335@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="relative p-8 border border-purple-500/20 bg-black/60 backdrop-blur-md">
                        <HUDCorner className="top-2 left-2" />
                        <HUDCorner className="top-2 right-2 rotate-90" />
                        <HUDCorner className="bottom-2 left-2 -rotate-90" />
                        <HUDCorner className="bottom-2 right-2 rotate-180" />

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <input type="hidden" name="time" />
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="IDENTITY"
                                    className="w-full bg-transparent border-b border-purple-500/30 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600 uppercase tracking-widest"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-500 transition-all duration-500 group-focus-within:w-full" />
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="SIGNAL_ADDRESS"
                                    className="w-full bg-transparent border-b border-purple-500/30 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600 uppercase tracking-widest"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-500 transition-all duration-500 group-focus-within:w-full" />
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="TRANSMISSION_DATA"
                                    className="w-full bg-transparent border-b border-purple-500/30 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600 uppercase tracking-widest resize-none"
                                ></textarea>
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-500 transition-all duration-500 group-focus-within:w-full" />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-4 border border-purple-500/50 hover:bg-purple-500/10 transition-all font-bold uppercase tracking-[0.3em] relative group overflow-hidden disabled:opacity-50"
                            >
                                <span className="relative z-10">
                                    {status === "idle" && "Execute_Transmit"}
                                    {status === "sending" && "TRANSMITTING..."}
                                    {status === "success" && "SIGNAL_RECEIVED"}
                                    {status === "error" && "UPLINK_FAILURE"}
                                </span>
                                <div className="absolute inset-0 bg-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Scanning Line Overlay (matching footer) */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />
        </section>
    );
}
