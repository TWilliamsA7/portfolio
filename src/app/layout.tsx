import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/contexts/theme-provider";
import { FloatingBackground } from "@/components/layout/floating-background";
import MainNavbar from "@/components/layout/main-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- METADATA FOR SEO & SOCIAL SHARING ---
const SITE_TITLE: string =
  "Tai Williams | Software Engineer & Developer Portfolio";
const SITE_DESCRIPTION: string =
  "A professional portfolio showcasing projects, skills, and experience in modern web development using Next.js, TypeScript, and Tailwind CSS.";
const SITE_URL: string = "https://yourportfolio.com";

export const metadata: Metadata = {
  // Primary SEO Tags
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Tai Williams" }],

  // Canonical URL
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // Open Graph (For Facebook, LinkedIn, etc.)
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Developer Portfolio",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card (For X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@none",
    images: [`${SITE_URL}/og-image.jpg`],
  },

  // Icons and Theme
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingBackground />
          <MainNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
