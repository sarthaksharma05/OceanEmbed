import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OceanEmbed - Deep Synthesis of Marine State Variables",
  description:
    "High-resolution 3D reconstruction of oceanographic fields from sparse surface observations using spatially-aware embedding architectures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-body-md text-on-surface">
        <Navbar />
        <div className="flex-1 pt-16 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
