"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function NavbarShell() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isNearTop = currentY < 8;

      // Hide when scrolling down, show when scrolling up or back near the top
      if (!isNearTop && currentY > lastY) {
        setIsHidden(true);
      } else if (isNearTop || currentY < lastY) {
        setIsHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pointer-events-auto relative">
        <Navbar />
      </div>
    </div>
  );
}

