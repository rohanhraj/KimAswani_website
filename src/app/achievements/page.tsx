import { AchievementsHero } from "@/components/achievements/AchievementsHero"
import { CredentialsSection } from "@/components/achievements/CredentialsSection"
import { CollaborationsMarquee } from "@/components/achievements/CollaborationsMarquee"
import { CertificatesCarousel } from "@/components/achievements/CertificatesCarousel"
import { RecordsGallery } from "@/components/achievements/RecordsGallery"
import { PhotoArchive } from "@/components/achievements/PhotoArchive"

export const metadata = {
    title: 'Achievements | Kim Aswani',
    description: 'Guinness World Records, global certifications, and extensive aerial portfolio of Kim Aswani, Professional Drone Pilot.',
}

export default function AchievementsPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A]">
            <AchievementsHero />
            <CredentialsSection />
            <CollaborationsMarquee />
            <CertificatesCarousel />
            <RecordsGallery />
            <PhotoArchive />
            {/* Contact / Footer block could be added here if there was a shared global footer */}
        </main>
    )
}
