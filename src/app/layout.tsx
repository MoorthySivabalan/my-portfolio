// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title:       "Moorthy Sivabalan B | Software Engineer",
  description: "Portfolio of Moorthy Sivabalan B — Associate Software Engineer specialising in Angular, TypeScript, Python, and PostgreSQL.",
  keywords:    ["software engineer", "angular", "typescript", "python", "postgresql", "chennai"],
  authors:     [{ name: "Moorthy Sivabalan B" }],
  openGraph: {
    title:       "Moorthy Sivabalan B | Software Engineer",
    description: "Portfolio of Moorthy Sivabalan B",
    type:        "website",
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