import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velyne - Discreta: A Necklace That Keeps You Safe",
  description: "Meet Discreta - an elegant, discreet, and connected panic-button necklace. Built to protect you when it matters most. Join our waitlist for early access.",
  keywords: ["safety", "panic button", "smart jewelry", "wearable technology", "personal security", "Velyne", "Discreta"],
  openGraph: {
    title: "Velyne - Discreta: A Necklace That Keeps You Safe",
    description: "Meet Discreta - an elegant, discreet, and connected panic-button necklace. Built to protect you when it matters most.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
