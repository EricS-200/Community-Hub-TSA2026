"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/global/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/resource-directory", label: "Resource Directory" },
    { href: "/suggestions", label: "Suggestions" },
    { href: "/references", label: "References" },
  ];

  return (
    <header className="pointer-events-none absolute inset-x-0 top-4 z-50 flex justify-center">
      <div className="pointer-events-auto flex items-center justify-center gap-12 rounded-md bg-white/10 py-2 text-sm text-white ring-1 ring-white/40 backdrop-blur px-12">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <Image
              src={logo}
              alt="Hands of the Bluegrass logo"
              width={45}
              height={45}
              priority
              className={isHome ? "invert-0" : ""}
            />
          </div>
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-16 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive ? "text-white" : "text-slate-100/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
