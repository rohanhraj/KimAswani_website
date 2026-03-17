"use client"

import dynamic from "next/dynamic"

const HomeContent = dynamic(
    () => import("@/components/HomeContent"),
    {
        ssr: false,
        loading: () => (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#0A0A0A",
                color: "#06B6D4",
                fontFamily: "monospace",
                fontSize: "14px",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
            }}>
                Initializing Payload...
            </div>
        ),
    }
)

export function ClientPage() {
    return <HomeContent />
}
