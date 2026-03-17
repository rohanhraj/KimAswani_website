"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Facebook, Mail } from "lucide-react"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")

        // Trigger realistic interaction resolving exactly to mailto links
        const mailtoLink = `mailto:kimaswani@gmail.com?subject=Cinematography Inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`
        window.location.href = mailtoLink

        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            // Reset form success state after a delay
            setTimeout(() => setIsSuccess(false), 5000)
            const form = e.target as HTMLFormElement;
            form.reset();
        }, 1500)
    }

    return (
        <section className="py-32 px-4 md:px-12 bg-black relative border-t border-white/5" id="contact">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-[0.1em] uppercase text-white mb-6">
                        INQUIRIES
                    </h2>
                    <p className="text-white/60 font-light text-lg max-w-xl mx-auto tracking-wide">
                        Available for global commercial assignments, feature films, and remote expeditions.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    onSubmit={handleSubmit}
                    className="space-y-12 max-w-2xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                id="name"
                                placeholder="Name"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-0 text-white/40 text-xs uppercase tracking-[0.2em] transition-all peer-focus:-top-6 peer-focus:text-white peer-valid:-top-6 peer-valid:text-white"
                            >
                                Name
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                required
                                className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                id="email"
                                placeholder="Email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-0 text-white/40 text-xs uppercase tracking-[0.2em] transition-all peer-focus:-top-6 peer-focus:text-white peer-valid:-top-6 peer-valid:text-white"
                            >
                                Email Address
                            </label>
                        </div>
                    </div>

                    <div className="relative group pt-4">
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none leading-relaxed"
                            id="message"
                            placeholder="Message"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-4 text-white/40 text-xs uppercase tracking-[0.2em] transition-all peer-focus:-top-4 peer-focus:text-white peer-valid:-top-4 peer-valid:text-white"
                        >
                            Project Details
                        </label>
                    </div>

                    <div className="flex justify-center pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className="px-12 py-4 border border-white/20 text-white uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : isSuccess ? (
                                <span>Message Sent</span>
                            ) : (
                                "Submit Inquiry"
                            )}
                        </button>
                    </div>
                </motion.form>

                {/* Social Links Sub-footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-32 pt-12 border-t border-white/10 flex flex-col items-center gap-8"
                >
                    <p className="text-xs text-white/40 tracking-[0.3em] uppercase">Connect With Kim</p>
                    <div className="flex gap-10">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                            <Instagram className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                            <Youtube className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                            <Facebook className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                        <a href="mailto:kimaswani@gmail.com" className="text-white/60 hover:text-white transition-colors duration-300">
                            <Mail className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
