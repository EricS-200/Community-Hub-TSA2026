import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RESOURCES } from "../resources-data";

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

export default async function ResourceDetailPage({ params }) {
  const { id } = await params;
  const numericId = Number(id);

  const resource = RESOURCES.find((item) => item.id === numericId);

  if (!resource) {
    notFound();
  }

  const detailUrl = `/resource-directory/${resource.id}`;

  return (
    <main className="min-h-screen bg-[#36576B] px-6 py-10 text-white flex items-center">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            {resource.title}
          </h1>
          <p className="text-xs uppercase tracking-[0.35em] text-white/80">
            Resource details
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/20">
            <div className="relative aspect-4/3 w-full">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              <div className="absolute left-3 top-3 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/30 backdrop-blur">
                {resource.category}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/15">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Location
              </p>
              <p className="flex items-center gap-1.5 text-sm text-white/90">
                <PinIcon className="h-4 w-4 text-white/80" />
                {resource.address}
              </p>
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Details
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                {resource.details}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/resource-directory"
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#36576B] shadow-sm transition hover:bg-slate-100"
              >
                Back to directory
              </Link>
              <Link
                href={resource.link || "https://www.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Open in new tab
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
