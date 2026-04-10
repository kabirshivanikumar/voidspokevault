import "./globals.css";
import { Orbitron, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${space.variable} ${mono.variable}`}>
      <body className="bg-[#030303] text-white antialiased">{children}</body>
    </html>
  );
}
