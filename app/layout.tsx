import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@/app/components/Analytics";

export const metadata: Metadata = {
  title: "人格档案 · 15 题测出你会怎么选",
  description: "15 道图文情境题，测出你的人格角色、你的暗礁，以及你现在这个选择该怎么做。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#fff8f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="min-h-full">{children}<Analytics /></body>
    </html>
  );
}
