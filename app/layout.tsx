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
  title: "Discreta: A System That Keeps You Safe",
  description: "Meet Discreta - a discreet, connected safety device system that pairs with an the mobile app for trusted emergency support.",
  keywords: ["safety", "emergency contacts", "wearable safety", "personal security", "Discreta", "safety device"],
  openGraph: {
  title: "Discreta: A System That Keeps You Safe",
    description: "Meet Discreta - a discreet, connected safety device system that pairs with a mobile app for trusted emergency support.",
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
