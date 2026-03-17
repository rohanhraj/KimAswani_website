"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowLeft } from "lucide-react"
import { portfolioData, PortfolioCategory } from "@/data/portfolio"

const categories: PortfolioCategory[] = [
    "All",
    "Tourism & Gov",
    "Events & Shows",
    "Sports & Institutions",
    "Cityscapes & Architecture",
    "Workshops & Education",
    "Fine Art"
]

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")

    const filteredItems = portfolioData.filter(
        item => activeCategory === "All" || item.category === activeCategory
    )

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 pb-24 px-4 sm:px-8 md:px-12 lg:px-24 font-sans selection:bg-primary selection:text-white">
            {/* Back Home Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-8 left-6 md:left-12 z-50"
            >
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-sm tracking-[0.15em] uppercase font-medium">Back Home</span>
                </Link>
            </motion.div>

            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
                        The <span className="text-zinc-500">Archive.</span>
                    </h1>
                    <p className="max-w-xl text-zinc-400 text-lg md:text-xl leading-relaxed">
                        A comprehensive collection of aerial cinematography pushing perspective and boundaries across industries.
                    </p>
                </motion.div>

                {/* Filter Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="group relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-zinc-900 border border-white/5 block"
                            >
                                <Link href={item.youtubeLink} target="_blank" className="block w-full h-full relative z-10">
                                    {/* Image or Gradient Placeholder */}
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-8 text-center transition-transform duration-700 group-hover:scale-105">
                                            <span className="text-zinc-600 font-bold tracking-widest uppercase text-sm opacity-50">
                                                Visual En Route
                                            </span>
                                        </div>
                                    )}

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                                    {/* Play Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                                        <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 mb-2 uppercase">
                                            {item.category}
                                        </p>
                                        <h3 className="text-lg sm:text-xl font-bold tracking-tighter text-white uppercase leading-tight">
                                            {item.title}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="text-zinc-400 text-sm mt-1 line-clamp-1">
                                                {item.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    )
}
