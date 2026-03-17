"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-background hover:bg-white transition-colors duration-300",
            outline: "border border-primary/20 text-primary hover:border-primary transition-colors duration-300",
            ghost: "text-muted hover:text-foreground transition-colors duration-300",
        }

        const sizes = {
            default: "px-6 py-3 text-sm font-medium",
            sm: "px-4 py-2 text-xs font-medium",
            lg: "px-8 py-4 text-base font-semibold",
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "inline-flex items-center justify-center uppercase tracking-wider",
                    variants[variant],
                    sizes[size],
                    className
                )}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...props as any}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
