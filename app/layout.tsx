/**
 * @file layout.tsx
 * @description Root layout with luxury Outfit typography and dark atmospheric canvas.
 */

import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASHA — Hardware That Speaks Your Language",
  description: "Agentic Smart Home Assistant bridging low-resource African languages directly to physical IoT hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0f17] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
