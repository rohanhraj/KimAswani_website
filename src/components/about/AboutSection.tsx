"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-[#050505] text-[#FAFAFA] py-24 md:py-32 px-4 sm:px-6 md:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Animated Typography & bio */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
                                The Visionary Behind the Lens
                            </h2>
                            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight text-white m-0">
                                Redefining <br />
                                <span className="text-zinc-500 italic font-serif font-light">Perspective.</span>
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-6 text-zinc-400 font-light text-base md:text-lg"
                        >
                            <p>
                                Kim Aswani is a pioneer in aerial cinematography, consistently pushing the limitations of drones to capture the world from historically impossible angles. His work merges raw technical precision with an unrelenting cinematic eye.
                            </p>
                            <p>
                                From monumental government infrastructure projects and explosive action sports events to intricate natural landscapes and record-breaking drone shows, Kim&apos;s portfolio spans over a decade of high-end visual storytelling.
                            </p>
                            <p className="border-l border-white/20 pl-4 py-1 italic text-zinc-500">
                                &quot;The sky isn&apos;t the limit; it&apos;s the canvas.&quot;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <p className="font-serif text-3xl italic text-white/80 mt-4 tracking-wider">
                                Kim Aswani
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-6 md:mt-10"
                        >
                            <Link
                                href="/achievements"
                                className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500 group backdrop-blur-sm"
                            >
                                Discover Records & Impact
                                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-lg leading-none">→</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: The Resurrected Portrait Image */}
                    <div className="order-1 lg:order-2 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 border border-white/10">
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full relative group"
                        >
                            <Image
                                src="/images/kim-portrait.jpg"
                                alt="Kim Aswani Portrait"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Inner vignette for cinematic edge blending */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,5,0.8)] pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
