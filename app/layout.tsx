import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${nunito.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
