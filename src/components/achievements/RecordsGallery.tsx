"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function RecordsGallery() {
    // We mix records, workshops, and general features into an asymmetric layout
    const highlightItems = [
        {
            title: "Guinness World Record (2025**)",
            description: "Member of the 3000-drone show at Mysore Dasara, forming the world's Largest Mammal in the Sky.",
            imageSrc: "/images/achievements/certification/Kim With Team and Guinness Certificate 2025.jpg",
            span_cols: "lg:col-span-2",
            aspect: "aspect-[21/9]"
        },
        {
            title: "Guinness World Record (2024**)",
            description: "Aerial coverage of Largest Field Hockey Tournament in Kodagu.",
            imageSrc: "/images/achievements/certification/Certificate 1.jpeg",
            span_cols: "lg:col-span-1",
            aspect: "aspect-square"
        },
        {
            title: "Univ. of Mysore Drone Workshops",
            description: "Invited for Drone Workshops for 100+ students and faculty.",
            imageSrc: "/images/achievements/Mysore Uni Drone Workshop /Mysore Uni Drone Workshop 2.jpg",
            span_cols: "lg:col-span-1",
            aspect: "aspect-[4/5]"
        },
        {
            title: "Police Wireless Training Institute",
            description: "Conducted a Drone Workshop for 28 Police Officers.",
            imageSrc: "/images/achievements/police department/Police_department.jpeg",
            span_cols: "lg:col-span-2",
            aspect: "aspect-video"
        },
        {
            title: "Drone Enthusiasts Network",
            description: "Founder of a Network with 300+ pilots across Karnataka.",
            imageSrc: "/images/achievements/university_workshop/students.JPG",
            span_cols: "lg:col-span-1",
            aspect: "aspect-square"
        },
        {
            title: "Social Media Impact",
            description: "Over 60M Views on Pexels and 500K Followers on Instagram.",
            imageSrc: "/images/achievements/article.jpeg",
            span_cols: "lg:col-span-2",
            aspect: "aspect-[16/7]",
            objectPosition: "object-top"
        }
    ]

    return (
        <section className="py-32 w-full bg-[#0A0A0A] px-8 sm:px-16 md:px-24 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        Records & Impact.
                    </h2>
                    <p className="mt-6 text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
                        A curation of unprecedented aerial scale operations, official certifications, and workshops transferring knowledge to the next generation of drone pilots. Look closely at the records broken and the minds inspired.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlightItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden bg-black flex flex-col ${item.span_cols}`}
                        >
                            <div className={`relative w-full ${item.aspect} overflow-hidden block`}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <Image
                                    src={item.imageSrc || "/images/kim_hero_landscape.png"} // fallback
                                    alt={item.title}
                                    fill
                                    className={`object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[0.5] group-hover:grayscale-0 ${item.objectPosition || 'object-center'}`}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Info overlay or container below */}
                            <div className={`relative z-20 w-full mt-4 flex flex-col justify-end`}>
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <div className="h-[1px] w-12 bg-zinc-700 my-4 transform origin-left transition-all duration-500 group-hover:w-full group-hover:bg-white" />
                                <p className="text-zinc-400 font-light pr-4 text-sm md:text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
