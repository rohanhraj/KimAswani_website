"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function HeroTypography({ className }: { className?: string }) {
    return (
        <div className={cn("relative w-full h-screen", className)}>
            <div className="absolute bottom-6 left-8 sm:bottom-12 sm:left-16 md:bottom-16 md:left-24 lg:left-32 max-w-7xl flex flex-col items-start pointer-events-none">

                {/* Headline — absolutely positioned bottom-left */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="pointer-events-auto"
                >
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter uppercase leading-none text-foreground mix-blend-difference flex flex-col">
                        <span className="flex overflow-hidden">
                            {"AERIAL".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { y: "100%", opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                        <span className="flex overflow-hidden">
                            <motion.span
                                variants={{
                                    hidden: { y: "100%", opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
                                    }
                                }}
                                className="text-primary italic font-serif mt-1"
                            >
                                VISIONARY.
                            </motion.span>
                        </span>
                    </h1>
                </motion.div>

                {/* Kim's Signature Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="mt-2 sm:mt-4 md:mt-6 w-48 sm:w-56 md:w-72 lg:w-96 mix-blend-screen"
                >
                    <video
                        src="/videos/signature.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        /* Crushing the blacks so the video's dark grey background becomes true black (#000000) and disappears entirely via mix-blend-screen */
                        className="w-full h-auto opacity-100 grayscale brightness-90 contrast-150"
                    />
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                    className="mt-4 sm:mt-6 md:mt-8 max-w-sm sm:max-w-md md:max-w-lg pl-4 sm:pl-6 border-l-2 border-primary pointer-events-auto"
                >
                    <p className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide">
                        Kim Aswani is pushing the boundaries of drone cinematography.
                        <br className="hidden sm:block" />
                        Capturing the world from impossible angles.
                    </p>
                </motion.div>

            </div>

            {/* Cinematic Vertical Line Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute right-8 md:right-12 top-1/4 bottom-16 hidden md:flex flex-col items-center justify-center opacity-70"
            >
                <div className="w-[1px] h-full bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{
                            y: ["-100%", "600%"]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3.5,
                            ease: "linear",
                            repeatDelay: 0.5
                        }}
                        className="w-full h-1/5 bg-gradient-to-b from-transparent via-white to-transparent"
                    />
                </div>
            </motion.div>
        </div>
    )
}
