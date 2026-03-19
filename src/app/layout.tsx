import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const BASE_URL = "https://moorthy-portfolio-murex.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Moorthy Sivabalan B | Software Engineer",
    template: "%s | Moorthy Sivabalan B",
  },
  description:
    "Portfolio of Moorthy Sivabalan B — Associate Software Engineer specialising in Angular, TypeScript, Python, FastAPI, and PostgreSQL. Based in Chennai, Tamil Nadu.",
  keywords: [
    "Moorthy Sivabalan",
    "software engineer",
    "angular developer",
    "typescript",
    "python developer",
    "fastapi",
    "postgresql",
    "nextjs",
    "full stack developer",
    "chennai",
    "tamil nadu",
    "web developer",
  ],
  authors: [{ name: "Moorthy Sivabalan B", url: BASE_URL }],
  creator: "Moorthy Sivabalan B",

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Moorthy Sivabalan B | Software Engineer",
    description:
      "Full-stack developer from Chennai — Angular, TypeScript, Python, FastAPI, PostgreSQL.",
    siteName: "Moorthy Sivabalan B Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moorthy Sivabalan B — Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moorthy Sivabalan B | Software Engineer",
    description:
      "Full-stack developer from Chennai — Angular, TypeScript, Python, FastAPI, PostgreSQL.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-bg-primary text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}