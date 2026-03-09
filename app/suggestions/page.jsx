"use client";

import { useState } from "react";
import Image from "next/image";
import heroImage from "../../public/suggestions/hero.png";

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

export default function SuggestionsPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleScrollDown = () => {
    if (typeof window === "undefined") return;

    const offset = window.innerHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <main className="">
      {/* SECTION 1: DO NOT EDIT */}
      <section className="relative h-screen w-full flex overflow-hidden">
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
              Resource
              <br />
              Directory
            </h1>
            <p className="text-md uppercase tracking-[0.9em]  text-slate-100 ml-1">
              Search and filter community resources
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

      {/* SECTION 2: Card form + preview cards */}
      <section className="relative flex min-h-screen w-full items-center justify-center gap-8 overflow-hidden bg-[#36576B] px-6 py-12 md:px-12 lg:gap-16">
        <div className="flex w-full max-w-6xl flex-wrap items-start justify-center gap-10 lg:flex-nowrap">
          {/* Card form */}
          <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-white p-8 shadow-xl md:p-10 lg:min-w-[320px]">
            <div className="absolute right-0 top-0 h-32 w-32 opacity-80">
              <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-sky-200/80" />
              <div className="absolute right-12 top-8 h-8 w-8 rounded-full bg-teal-200/80" />
              <div className="absolute right-8 top-14 h-10 w-10 rounded-full bg-slate-200/80" />
              <div className="absolute right-16 top-12 h-6 w-6 rounded-full bg-amber-100/90" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Add a Resource
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Contribute to our resource directory and help your community.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="resource-name"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Resource Title:
                </label>
                <input
                  id="resource-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Enter resource name"
                />
              </div>
              <div>
                <label
                  htmlFor="resource-description"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Description of Resource:
                </label>
                <input
                  id="resource-description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Enter description"
                />
              </div>
              <div>
                <label
                  htmlFor="resource-location"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Location of Resource:
                </label>
                <input
                  id="resource-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label
                  htmlFor="resource-category"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Category of Resource:
                </label>
                <input
                  id="resource-category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Enter category"
                />
              </div>
              <div>
                <label
                  htmlFor="resource-image"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Image of Resource:
                </label>
                <textarea
                  id="resource-image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  rows={3}
                  className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Image URL or description"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-600 px-4 py-3 font-medium text-white shadow-md transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Preview cards (placeholder layout) */}
          <div className="relative flex min-h-[420px] min-w-0 flex-1 items-center justify-center lg:justify-end">
            <div className="relative h-[380px] w-[280px] lg:w-[300px]">
              {/* Back card */}
              <div
                className="absolute right-0 top-1/2 flex h-[320px] w-[240px] flex-col rounded-2xl bg-amber-50/95 p-5 shadow-lg"
                style={{ transform: "translateY(-50%) rotate(-6deg)" }}
              >
                <div className="mb-3 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/90 px-3 py-1 text-xs font-medium text-slate-700">
                    {category || "Sample D"}
                  </span>
                </div>
                <div className="flex-1 rounded-lg bg-slate-200/80 p-3">
                  <span className="text-sm text-slate-700">
                    {description || "Sample E"}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-700">
                  <PinIcon className="h-3.5 w-3.5" />
                  <span>{location || "Sample C"}</span>
                </div>
                <span className="mt-1 text-xs font-medium text-slate-800">
                  {name || "Sample A"}
                </span>
              </div>
              {/* Front card */}
              <div
                className="absolute left-0 top-1/2 flex h-[340px] w-[260px] flex-col rounded-2xl bg-stone-50/98 p-5 shadow-xl"
                style={{ transform: "translateY(-50%) rotate(3deg)" }}
              >
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/90 px-3 py-1 text-xs font-medium text-slate-700">
                    <PinIcon className="h-3 w-3" />
                    {location || "Sample C"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {name || "Sample A"}
                </h3>
                <p className="text-sm text-slate-600">
                  {description || "Sample B"}
                </p>
                <div className="mt-3 flex-1 rounded-lg bg-slate-200/80 p-3">
                  <span className="text-sm text-slate-600">
                    {imageUrl ? "Image URL entered" : "Sample E"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
