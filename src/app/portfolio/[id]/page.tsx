import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
    return portfolioData.map((item) => ({
        id: item.id,
    }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = portfolioData.find((p) => p.id === id);

    if (!item) {
        notFound();
    }

    const hasLinks = item.links && item.links.length > 0;

    return (
        <main className="min-h-screen bg-black text-[#FAFAFA] relative overflow-hidden font-sans selection:bg-[#EFFF00] selection:text-black">
            {/* Massive Background Typography */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden mix-blend-difference select-none">
                <h1 className="text-[12vw] md:text-[6vw] font-black leading-none text-white/5 whitespace-nowrap tracking-tighter uppercase transform -rotate-3 scale-[1.3] text-center">
                    {item.title}
                    <br />
                    {item.title}
                </h1>
            </div>

            {/* Content Area */}
            <div className="relative z-10 w-full min-h-screen pb-32">
                <header className="px-6 md:px-12 py-8 md:py-12 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-black/60 sticky top-0 z-50">
                    <Link
                        href="/portfolio"
                        className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
                        <span className="text-xs tracking-[0.2em] uppercase font-bold">Return to Archive</span>
                    </Link>
                    <div className="text-[10px] md:text-xs tracking-[0.2em] font-bold text-white/40 uppercase hidden sm:block">
                        {item.category}
                    </div>
                </header>

                <div className="px-6 md:px-12 lg:px-24 mt-16 md:mt-32 max-w-[1800px] mx-auto">
                    <div className="mb-24 md:mb-32">
                        <MotionWrapper>
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter max-w-5xl leading-[0.85] mix-blend-difference">
                                {item.title}
                            </h2>
                            {item.subtitle && (
                                <p className="mt-8 text-lg md:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl border-l-[3px] border-[#EFFF00] pl-6">
                                    {item.subtitle}
                                </p>
                            )}
                        </MotionWrapper>
                    </div>

                    {!hasLinks ? (
                        <div className="h-[40vh] flex items-center justify-center border border-white/5 bg-white/[0.01]">
                            <p className="text-white/30 tracking-[0.3em] uppercase text-sm font-bold">Visuals En Route</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16">
                            {item.links?.map((link, index) => {
                                const isStaggered = index % 2 === 1;
                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        className={`group relative flex flex-col justify-between h-[280px] md:h-[380px] bg-[#050505] border border-white/10 p-8 hover:bg-[#EFFF00] hover:text-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                            isStaggered ? "md:translate-y-16 lg:translate-y-24" : ""
                                        }`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs font-bold tracking-[0.2em] opacity-40 uppercase group-hover:opacity-80 transition-opacity">
                                                0{index + 1}
                                            </span>
                                            <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-transform duration-500 will-change-transform" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                                                {link.label}
                                            </h3>
                                            <p className="text-[10px] md:text-xs tracking-[0.1em] font-bold uppercase mt-6 opacity-60 flex items-center gap-3">
                                                <span>Watch Link Experience</span>
                                                <span className="w-12 h-[2px] bg-current transform origin-left group-hover:scale-x-150 transition-transform duration-500"></span>
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

// Inline Wrapper to bypass importing Framer Motion inside a non-client component directly.
// (In Next app router, page.tsx is Server component by default, and framer-motion needs 'use client')
const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">{children}</div>;
};
