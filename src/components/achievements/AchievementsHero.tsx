"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AchievementsHero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
            {/* Background Image with Cinematic Black Gradient Overlay */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40 z-10" />
                {/* Horizontal Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent z-10" />
                <Image
                    src="/images/achievements/kim_hero_landscape.png"
                    alt="Kim Aswani Aerial Portfolio"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />
            </motion.div>

            {/* Massive Typographic Hero in Foreground */}
            <div className="relative z-20 w-full px-8 sm:px-16 md:px-24 lg:px-32 flex flex-col items-start pt-32">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-[8vw] md:text-[6vw] leading-[0.85] font-black tracking-tighter text-[#FAFAFA]"
                    >
                        ACHIEVE
                        <br />
                        MENTS.
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 max-w-xl border-l-2 border-zinc-700 pl-6"
                >
                    <p className="text-xl md:text-2xl font-light text-zinc-300">
                        Aerial Storyteller & Licensed Drone Pilot
                    </p>
                    <p className="mt-4 text-sm text-zinc-500 uppercase tracking-widest font-bold">
                        Bangalore, India | ✈ 8+ Years of Aerial Experience
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
