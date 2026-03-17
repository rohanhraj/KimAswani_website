"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function MediaAppearances() {
    return (
        <section className="relative w-full bg-[#050505] text-[#FAFAFA] py-24 md:py-32 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
                            Workshops &<br />
                            <span className="text-zinc-600 italic font-serif font-light">Appearances.</span>
                        </h2>
                        <p className="max-w-lg text-zinc-400 font-light text-base md:text-lg">
                            Sharing expertise globally through masterclasses, media features, and public installations.
                        </p>
                    </div>
                </motion.div>

                {/* News & Podcasts (Bento Box / List) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">

                    {/* Workshops Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 md:col-span-7 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-12"
                    >
                        <h3 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
                            Recent Masterclasses
                        </h3>

                        <div className="flex flex-col gap-6">
                            {[
                                { title: "Police Dept Drone Seminar", year: "2025", desc: "Specialized tactical and surveillance drone operations." },
                                { title: "Mysore University Workshop", year: "2024", desc: "Intro to aerial cinematography and safety norms." },
                                { title: "Mysore University Workshop", year: "2023", desc: "Guest faculty for visual communication students." }
                            ].map((item, i) => (
                                <div key={i} className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                                    <div className="flex flex-col">
                                        <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-zinc-500 font-light mt-1 text-sm">{item.desc}</p>
                                    </div>
                                    <span className="text-zinc-600 font-mono mt-2 sm:mt-0">{item.year}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* News & Press Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1 md:col-span-5 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
                                Press & Podcasts
                            </h3>

                            <div className="flex flex-col gap-8">
                                <div className="group cursor-pointer">
                                    <h4 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                                        Uncharted Angles Podcast
                                        <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-2">Discussing the evolution of drone tech in commercial advertising.</p>
                                </div>
                                <div className="group cursor-pointer">
                                    <h4 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                                        Guinness World Record Mention
                                        <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-2">Featured for choreography spanning the 2024 Drone Light festival.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
