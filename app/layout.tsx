import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Khang Nguyen | Full-stack Developer",
    template: "%s | Khang Nguyen",
  },
  description:
    "Full-stack developer in Ho Chi Minh City building fast, reliable web products and scalable backends.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khang Nguyen | Full-stack Developer",
    description:
      "Full-stack developer in Ho Chi Minh City building fast, reliable web products and scalable backends.",
    url: "/",
    siteName: "Khang Nguyen Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Khang Nguyen | Full-stack Developer",
    description:
      "Full-stack developer in Ho Chi Minh City building fast, reliable web products and scalable backends.",
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
        {children}
      </body>
    </html>
  );
}
