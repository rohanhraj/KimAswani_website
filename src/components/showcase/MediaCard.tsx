"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface MediaCardProps {
  title: string
  subtitle: string
  imageSrc: string
  videoSrc?: string
  className?: string
  aspectRatio?: "square" | "video" | "portrait"
}

export function MediaCard({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  className,
  aspectRatio = "square",
}: MediaCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions gracefully
        console.log("Autoplay prevented")
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden bg-slate cursor-pointer border-none",
        aspectClasses[aspectRatio],
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fallback/Base Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          "object-cover transition-all duration-700 ease-in-out group-hover:scale-105",
          videoSrc && isHovered ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Hover Video */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Captions */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-2 block font-bold">
            {subtitle}
          </span>
          <h3 className="text-white font-heading text-2xl font-bold uppercase tracking-tight leading-none">
            {title}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  )
}
