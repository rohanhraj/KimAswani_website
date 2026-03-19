"use client"

import { motion } from "framer-motion"

export function CredentialsSection() {
    const stats = [
        { label: "Flights Completed", value: "1500+" },
        { label: "Flight Distance", value: "1900 km" },
        { label: "Airtime Hours", value: "200+" },
        { label: "Countries Captured", value: "10" }
    ]

    const licenses = [
        "Directorate General of Civil Aviation (DGCA) & Digital Sky Registered",
        "European Union (EU) Certified Pilot",
        "Thailand Certified Aerial Pilot",
        "UIN Acquired & Authored"
    ]

    return (
        <section className="relative w-full py-32 bg-[#0A0A0A] px-8 sm:px-16 md:px-24 lg:px-32 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
                
                {/* Left Side: Massive Stats */}
                <div className="flex-1 space-y-12">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="border-t border-zinc-800 pt-6"
                        >
                            <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-zinc-500 mb-2">{stat.label}</h3>
                            <p className="text-6xl md:text-8xl font-black text-[#FAFAFA] tracking-tighter">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Narrative and Licenses */}
                <div className="flex-1 flex flex-col justify-center space-y-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-light text-zinc-200 leading-snug">
                            Over 8 years of relentless pursuit of the perfect <span className="font-bold text-white italic">aerial frame</span>. 
                            Portraying the hidden geometries of the world from the skies.
                        </h2>
                        <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
                            A cinematic journey spanning across 10 countries including Holland, Germany, Austria, Switzerland, Italy, Turkey, Australia, Hong Kong, Vietnam, Thailand, and extensively documenting the diverse districts of India.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-zinc-900/40 border border-zinc-800 p-8"
                    >
                        <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-6">Global Licenses & Certifications</h3>
                        <ul className="space-y-4">
                            {licenses.map((license, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-none bg-zinc-300 mt-2 flex-shrink-0" />
                                    <span className="text-zinc-300 text-lg">{license}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
