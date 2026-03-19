"use client"

import { motion } from "framer-motion"

const archiveImages = [
    { src: "/images/achievements/article.jpeg" },
    { src: "/images/achievements/Mysore Uni Drone Workshop /20241029_153817.jpg" },
    { src: "/images/achievements/Mysore Uni Drone Workshop /IMG-20241029-WA0066.jpg" },
    { src: "/images/achievements/police department/DJI_20251217151122_0003_D.JPG" },
    { src: "/images/achievements/police department/DJI_20251217153034_0033_D.JPG" },
    { src: "/images/achievements/university_workshop/DSC02632.JPG" },
    { src: "/images/achievements/university_workshop/DSC02788.JPG" },
    { src: "/images/achievements/university_workshop/students.JPG" }
]

export function PhotoArchive() {
    return (
        <section className="py-24 w-full bg-[#050505] px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center border-b border-white/5 pb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest">
                        The Visual Archive
                    </h2>
                    <p className="mt-4 text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-light">
                        Raw documentation of workshops, certifications, and behind-the-scenes moments from the field.
                    </p>
                </motion.div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {archiveImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
                            className="break-inside-avoid relative group overflow-hidden bg-zinc-900 border border-white/5 mb-6"
                        >
                            <div className="relative w-full block">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img.src}
                                    alt="Achievement Archive Photo"
                                    loading="lazy"
                                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                                    <span className="text-white text-xs tracking-widest uppercase font-bold border border-white/20 px-4 py-2 backdrop-blur-sm">
                                        View Detail
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
