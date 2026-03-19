"use client"

import { motion } from "framer-motion"

/*
 * We duplicate the certificates list to create a seamless infinite marquee effect.
 * The wrapper will animate on the x-axis infinitely.
 */
const certificates = [
    { src: "/images/achievements/certification/Certificate 1.jpeg", alt: "Guinness World Record 2024" },
    { src: "/images/achievements/certification/Chikamagulur Certificate.jpeg", alt: "Chikmagalur Certificate" },
    { src: "/images/achievements/certification/Digital Sky UIN Registration April 2022.jpg", alt: "Digital Sky UIN Registration" },
    { src: "/images/achievements/certification/EU Drone Registration.jpg", alt: "EU Drone Registration" },
    { src: "/images/achievements/certification/Thailand Pilot License.png", alt: "Thailand Pilot License" },
]

export function CertificatesCarousel() {
    // Duplicate for seamless loop
    const carouselItems = [...certificates, ...certificates, ...certificates]

    return (
        <section className="py-24 bg-[#050505] overflow-hidden border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-8 sm:px-16 md:px-24 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        Global Licenses & <br />
                        <span className="text-zinc-600">Certifications.</span>
                    </h2>
                </motion.div>
            </div>

            {/* The infinite marquee container */}
            <div className="relative w-full flex items-center">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex shrink-0 gap-8 md:gap-16 items-center py-4"
                    animate={{ x: [0, -1035 * 1.5] }} // Approximate width to scroll before repeating
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Adjust speed
                        ease: "linear",
                    }}
                >
                    {carouselItems.map((cert, index) => (
                        <div 
                            key={index}
                            className="relative h-[400px] w-auto shrink-0 group filter grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-zinc-800"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={cert.src}
                                alt={cert.alt}
                                loading="lazy"
                                className="h-full w-auto object-contain bg-black p-2 md:p-4"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
