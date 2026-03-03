import { Geist, Geist_Mono } from "next/font/google";
import NavbarShell from "@/components/NavbarShell";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hands of the Bluegrass | Community Resource Hub",
  description:
    "Hands of the Bluegrass spotlights local resources, events, and partners serving Kentucky communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 antialiased`}
      >
        <NavbarShell />
        {children}
        <Footer />
      </body>
    </html>
  );
}
