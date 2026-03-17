import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroBackground() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Deep parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity, scale }}
            className="absolute inset-0 w-full h-screen z-0 overflow-hidden pointer-events-none bg-[#0A0A0A]"
        >
            {/* Right-aligned Kim Portrait */}
            <div className="absolute top-0 right-[-25%] md:right-0 w-[110%] md:w-[70%] h-full">
                <Image
                    src="/images/kim-hero-bg.jpg"
                    alt="Kim Aswani"
                    fill
                    sizes="100vw"
                    className="object-cover object-[75%_center] md:object-right lg:object-center"
                    priority
                />
                {/* Gradient mask to fade the left edge of the image smoothly into the background, ensuring text on the left stays readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                {/* Bottom gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
        </motion.div>
    )
}
