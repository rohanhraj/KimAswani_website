import * as React from "react"
import { cn } from "@/lib/utils"

const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn(
                "font-heading text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem] uppercase leading-none text-foreground",
                className
            )}
            {...props}
        />
    )
)
H1.displayName = "H1"

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h2
            ref={ref}
            className={cn(
                "font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase text-foreground",
                className
            )}
            {...props}
        />
    )
)
H2.displayName = "H2"

const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                "font-heading text-2xl font-bold tracking-tight sm:text-3xl uppercase text-foreground",
                className
            )}
            {...props}
        />
    )
)
H3.displayName = "H3"

const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("font-sans leading-relaxed text-muted text-lg sm:text-xl", className)}
            {...props}
        />
    )
)
P.displayName = "P"

export { H1, H2, H3, P }
