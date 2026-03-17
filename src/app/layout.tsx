import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kim Aswani | Aerial Cinematography & Portfolio",
  description: "Aerial photo and video specialist pushing the boundaries of drone cinematography.",
  keywords: ["Aerial Photography", "Drone Videography", "Kim Aswani", "Cinematography", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={{ background: "#0A0A0A", color: "#FAFAFA" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
