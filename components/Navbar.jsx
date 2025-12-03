"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/resource-directory", label: "Resource Directory" },
  { href: "/events", label: "Events" },
  { href: "/suggestions", label: "Suggestions" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/hands-logo.png"
            alt="Hands of the Bluegrass logo"
            width={80}
            height={64}
            priority
          />
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Hands of
            </p>
            <p className="text-lg font-semibold text-slate-900">
              The Bluegrass
            </p>
          </div>
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-3 overflow-x-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`min-w-[160px] rounded-full px-6 py-2 text-center text-sm font-semibold transition ${
                  isActive
                    ? "bg-sky-600 text-white shadow-lg shadow-sky-200"
                    : "bg-sky-400/90 text-white hover:bg-sky-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-cyan-400 text-white">
          <span className="text-lg font-semibold">AB</span>
          <span className="sr-only">Account menu</span>
        </div>
      </div>
    </header>
  );
}
