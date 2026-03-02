"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { RESOURCES, CATEGORIES } from "./resources-data";

function PinIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function DirectorySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return RESOURCES.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        resource.title.toLowerCase().includes(normalizedQuery) ||
        resource.address.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <section className="w-full bg-[#36576B] px-6 pb-16 pt-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-medium transition",
                  "ring-1 ring-inset",
                  active
                    ? "bg-white text-[#36576B] ring-white/70"
                    : "bg-white/15 text-white ring-white/25 hover:bg-white/20",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}

          <div className="ml-auto w-full sm:w-[280px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ..."
              className="w-full rounded-full bg-white px-5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none ring-1 ring-white/35 focus:ring-2 focus:ring-white/70"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredResources.map((resource) => (
            <Link
              key={resource.id}
              href={`/resource-directory/${resource.id}`}
              className="group block overflow-hidden rounded-2xl ring-1 ring-white/15 transition hover:ring-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#36576B]"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={resource.image}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute left-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/25 backdrop-blur">
                  {resource.category}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-black/45 px-4 pb-3 pt-2">
                  <h3 className="text-sm font-semibold text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                    <PinIcon className="h-4 w-4 text-white/80" />
                    {resource.address}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
