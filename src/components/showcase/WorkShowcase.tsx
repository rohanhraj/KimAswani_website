"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

import { portfolioData } from "@/data/portfolio"

// We grab only the top 6 featured/highlight items for the homepage
const showcaseItems = portfolioData.slice(0, 6)

const getSizeClasses = (featured?: boolean) => {
    if (featured) {
        return "col-span-1 md:col-span-2 lg:col-span-2 row-span-2 aspect-square md:aspect-[21/9]"
    }
    return "col-span-1 row-span-1 aspect-[4/3]"
}

export function WorkShowcase() {
    return (
        <section className="relative w-full bg-background py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-start gap-16">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-foreground">
                        Selected<br />
                        <span className="text-muted-foreground italic font-serif font-light">Works.</span>
                    </h2>
                    <p className="max-w-lg text-muted-foreground font-light text-base md:text-lg">
                        A curated collection of aerial cinematography pushing the limits of perspective and motion.
                    </p>
                </motion.div>

                {/* Uniform Grid Layout */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden bg-muted rounded-xl ${getSizeClasses(item.featured)} shadow-2xl`}
                        >
                            <Link href={`/portfolio/${item.id}`} className="absolute inset-0 w-full h-full block z-20">
                                {/* Base Image */}
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                        className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 transition-transform duration-[1.5s] group-hover:scale-105" />
                                )}

                                {/* Dark Cinematic Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                                {/* Play Button Interaction */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                    </div>
                                </div>

                                {/* Typography / Info */}
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end translate-y-4 opacity-80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                                    <span className="text-primary text-xs tracking-[0.2em] font-bold uppercase mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight uppercase">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View Archive Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center mt-8"
                >
                    <Link href="/portfolio" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-500 rounded-full">
                        <span>View Full Archive</span>
                        <div className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}
