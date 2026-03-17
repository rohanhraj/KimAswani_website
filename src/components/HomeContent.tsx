"use client"

import { HeroBackground } from "@/components/hero/HeroBackground"
import { HeroTypography } from "@/components/hero/HeroTypography"
import { WorkShowcase } from "@/components/showcase/WorkShowcase"
import { MediaAppearances } from "@/components/showcase/MediaAppearances"
import { AboutSection } from "@/components/about/AboutSection"
import { ContactForm } from "@/components/about/ContactForm"

export default function HomeContent() {
    return (
        <main className="relative selection:bg-primary selection:text-white" style={{ background: "#0A0A0A", color: "#FAFAFA" }}>
            <section className="relative h-screen w-full overflow-hidden">
                <HeroBackground />
                <HeroTypography />
            </section>

            <div className="relative z-10 bg-background">
                <WorkShowcase />
                <MediaAppearances />
                <AboutSection />
                <ContactForm />
            </div>
        </main>
    )
}
