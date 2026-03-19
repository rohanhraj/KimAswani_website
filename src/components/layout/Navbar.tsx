"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const isVisiblePage = pathname === "/" || pathname === "/achievements"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Hide navbar on non-home pages (portfolio has its own back button)
    // IMPORTANT: This must be after all hooks!
    if (!isVisiblePage) return null

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-8"
                }`}
        >
            <div className="w-full flex items-center justify-start pl-8 sm:pl-16 md:pl-24 lg:pl-32">
                {/* Nav Links — Left aligned to match Hero text */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/portfolio" label="Works" />
                    <NavLink href="/achievements" label="Achievements" />
                    <NavLink href="/#about" label="About" />
                    <NavLink href="/#contact" label="Contact" />
                </nav>
            </div>
        </motion.header>
    )
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-sm tracking-[0.2em] uppercase font-bold transition-colors duration-300 relative group text-zinc-500 hover:text-white"
        >
            {label}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50" />
        </Link>
    )
}

