"use client"

import { motion } from "framer-motion"

const collaborations = [
    "NHAI (National Highways Authority of India)",
    "BMRCL (Bangalore Metro Rail Corporation)",
    "ISHA Foundation, Coimbatore",
    "Karnataka Tourism Department ('My State, My Pride')",
    "Shivamogga Tourism Department",
    "Udupi Tourism Department",
    "Chikmagaluru Tourism Department"
]

export function CollaborationsMarquee() {
    return (
        <section className="w-full relative overflow-hidden bg-black py-24 border-b border-zinc-900 flex items-center">
            {/* Background Texture/Noise could go here */}
            
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex whitespace-nowrap"
            >
                {/* Marquee Container */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex shrink-0 gap-16 lg:gap-32 pr-16 lg:pr-32 items-center"
                >
                    {[...collaborations, ...collaborations, ...collaborations].map((collab, index) => (
                        <div key={index} className="flex items-center gap-16 lg:gap-32 group">
                            <span 
                                className="text-3xl md:text-5xl lg:text-7xl font-black text-zinc-600 hover:text-zinc-300 transition-colors duration-500 cursor-default"
                            >
                                {collab}
                            </span>
                            <div className="w-4 h-4 rounded-none bg-zinc-800 rotate-45" />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
