import type { Metadata } from "next";
import { Syne, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hana Curk | Mobile & Frontend Developer",
  description:
    "Mobile and frontend developer focused on building clean, intuitive apps using SwiftUI, Flutter, Unity, and modern web technologies.",
  openGraph: {
    title: "Hana Curk | Mobile & Frontend Developer",
    description:
      "Building clean, intuitive apps with SwiftUI, Flutter, Unity, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
