"use client";

import React from "react";
import Image from "next/image";
import heroImage from "../../public/about/josh-hild-YwpFllVSpvU-unsplash.jpg";

export default function AboutUsPage() {
  const handleScrollDown = () => {
    if (typeof window === "undefined") return;

    const offset = window.innerHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const sections = [
    {
      id: "who-we-are",
      title: "Who We Are",
      content:
        "We are a small team of students and community members based in the Bluegrass region who care deeply about making local information easier to find and easier to use. After noticing how scattered and outdated many listings were, we decided to build a centralized, user-friendly platform designed around real community needs.",
      imageSide: "left",
      bgColor: "bg-[#064A6C]",
      imageSrc: "/about/joel-muniz-A4Ax1ApccfA-unsplash.jpg",
    },
    {
      id: "our-mission",
      title: "Our Mission",
      content:
        "Our mission is to strengthen the Bluegrass community by increasing visibility, accessibility, and participation in local resources and events. We believe that informed residents are empowered residents.",
      imageSide: "right",
      bgColor: "bg-[#2D637D]",
      imageSrc: "/about/the-tampa-bay-estuary-program-CxL29J-aM5E-unsplash.jpg",
    },
    {
      id: "what-we-offer",
      title: "What We Offer",
      content:
        "We provide a centralized directory of community resources across categories such as food, education, recreation, volunteering, and local events. Our platform allows users to browse by interest or search with intent, making it easy to find opportunities that match their needs.\n\nMoving forward, we aim to expand partnerships with local nonprofits, improve filtering tools, and introduce community-submitted recommendations to ensure the hub continues to grow alongside the region.",
      imageSide: "left",
      bgColor: "bg-[#064A6C]",
      imageSrc: "/about/adrianna-geo-x7oJQcDgtLg-unsplash.jpg",
    },
    {
      id: "who-its-for",
      title: "Who It's For",
      content:
        "The Community Resource Hub of the Bluegrass is designed for residents across the region—families, students, working professionals, retirees, newcomers, and long-time locals. Whether someone is seeking assistance, looking for enrichment opportunities, or hoping to give back, this platform serves as a starting point. Our primary audience includes residents within the greater Bluegrass area who want to become more informed, more involved, and more connected.",
      imageSide: "right",
      bgColor: "bg-[#2D637D]",
      imageSrc: "/about/ismael-paramo-Cns0h4ypRyA-unsplash.jpg",
    },
    {
      id: "get-involved",
      title: "Get involved",
      content:
        "A stronger community depends on participation. Explore our resource directory to discover opportunities near you. Suggest a local organization or event that should be featured. Volunteer with a partner organization. Share the hub with someone who might benefit from it. Connection starts with awareness—and awareness starts here.",
      imageSide: "left",
      bgColor: "bg-[#064A6C]",
      imageSrc: "/about/alvin-david-0AKPfr-xlCU-unsplash.jpg",
    },
  ];

  return (
    <main className="text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hands gathered around a small plant"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative flex h-full w-full flex-col justify-between px-10 pb-12 pt-28 md:px-20 md:pb-16 md:pt-32">
          <div className="max-w-xl space-y-4 absolute bottom-[0%] left-[0%] ml-10 mb-24">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-8xl">
              About Us
            </h1>
            <p className="text-md uppercase tracking-[0.9em]  text-slate-100 ml-1">
              With the hope to unite the Bluegrass Community
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollDown}
            className="absolute bottom-[0%] right-[0%] mb-24 mr-20 ml-auto rounded bg-white/90 px-6 py-3 text-sm font-medium text-slate-900 shadow-md transition hover:bg-white hover:cursor-grab"
          >
            Scroll down
          </button>
        </div>
      </section>

      {/* Alternating Content Sections */}
      <div className="relative">
        {sections.map((section) => (
          <section
            key={section.id}
            className={`min-h-screen w-full flex items-center px-6 md:px-20 py-20 ${section.bgColor}`}
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              {/* Image Side */}
              <div
                className={`flex justify-center ${
                  section.imageSide === "right" ? "md:order-last" : ""
                }`}
              >
                <div className="bg-gray-300 w-full max-w-md aspect-[4/3] flex items-center justify-center relative shadow-xl overflow-hidden">
                  <Image
                    src={section.imageSrc || "/vercel.svg"}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 450px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="md:text-left">
                <h2 className="text-4xl md:text-5xl font-light mb-8">
                  {section.title}
                </h2>
                <div className="text-lg md:text-xl font-light leading-relaxed opacity-90 whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
