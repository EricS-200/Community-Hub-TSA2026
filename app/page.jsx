"use client";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Resource Directory", href: "#directory" },
  { label: "Events", href: "#events" },
  { label: "Suggestions", href: "#submit" },
  { label: "About Us", href: "#about" },
];

const resources = [
  {
    id: 1,
    name: "Food Wellness Collective",
    category: "Food",
    description: "Weekly grocery pick-ups and nutrition classes.",
    location: "Lexington",
    icon: "🥬",
  },
  {
    id: 2,
    name: "Meal Monday",
    category: "Food",
    description: "Free hot meals every Monday evening.",
    location: "Richmond",
    icon: "🍲",
  },
  {
    id: 3,
    name: "Thrift Sale and Share",
    category: "Housing",
    description: "Voucher-based thrift program for households in transition.",
    location: "Frankfort",
    icon: "🛍️",
  },
  {
    id: 4,
    name: "Heartily Family Support",
    category: "Counseling",
    description: "Trauma-informed counseling with onsite childcare.",
    location: "Nicholasville",
    icon: "💬",
  },
  {
    id: 5,
    name: "Bluegrass STEM Club",
    category: "Education",
    description: "After-school programming for grades 4-12.",
    location: "Lexington",
    icon: "🧪",
  },
  {
    id: 6,
    name: "Transit Together",
    category: "Transportation",
    description: "Ride-share stipends for medical appointments.",
    location: "Georgetown",
    icon: "🚌",
  },
];

const highlightPartners = [
  { name: "Keithston Foundation", icon: "/file.svg" },
  { name: "Heartily Care", icon: "/window.svg" },
  { name: "Rimberio Community", icon: "/globe.svg" },
  { name: "Frenzy’s Creative", icon: "/next.svg" },
];

const stats = [
  { label: "Pounds of Food Donated", value: "3,000,000" },
  { label: "Families Received Direct Help", value: "400,000" },
  { label: "Growth in Local Partnerships", value: "178%" },
];

const categories = ["All", ...new Set(resources.map((item) => item.category))];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesQuery = resource.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden bg-linear-to-br from-sky-900 via-sky-800 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-full bg-white/20 px-6 py-3 text-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                <span className="text-3xl text-sky-600">🤲</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-100">
                  Hands of the Bluegrass
                </p>
                <p className="text-base font-semibold">Serving since 1990</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/60 hover:text-sky-800"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="hidden rounded-full bg-white px-4 py-2 text-sky-700 font-semibold lg:block"
            >
              Member Login
            </button>
          </div>

          <div className="space-y-6 py-6 lg:max-w-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-100">
              Serving our communities since 1990
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Hands of the Bluegrass
            </h1>
            <p className="text-lg text-slate-100">
              We amplify resources that help Kentucky families thrive. Explore
              the resource hub, meet partners making a difference, and share new
              opportunities with our team.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#directory"
                className="rounded-full bg-white px-6 py-3 font-semibold text-sky-700 transition hover:bg-slate-100"
              >
                Explore Resources
              </a>
              <a
                href="#submit"
                className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Share a Resource
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
        <section
          id="about"
          className="grid gap-10 rounded-3xl bg-white p-8 shadow-xl md:grid-cols-[3fr_2fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-700">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Rooted in the heart of Kentucky
            </h2>
            <p className="text-lg text-slate-600">
              Hands of the Bluegrass connects neighbors with the nonprofit,
              faith-based, and civic partners ready to meet urgent needs. Our
              volunteer-led help desk and digital resource hub ensure support is
              easy to find, compassionate to navigate, and centered on dignity.
            </p>
            <p className="text-lg text-slate-600">
              Together, we coordinate drives, spotlight local impact, and keep
              data informed so leaders can invest where it matters most.
            </p>
            <button className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500">
              Learn More
            </button>
          </div>
          <div className="relative h-72 overflow-hidden rounded-[3rem] bg-linear-to-br from-sky-200 to-blue-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute right-6 top-10 h-24 w-24 rotate-12 rounded-2xl border-4 border-white bg-white/70 backdrop-blur" />
            <div className="absolute bottom-8 left-4 flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-semibold text-slate-800 backdrop-blur">
              <span className="text-3xl">💙</span> 2,400 volunteers strong
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-sky-200">
            Monthly Spotlight
          </p>
          <h2 className="text-center text-3xl font-bold">
            Partners amplifying hope this month
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlightPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 px-6 py-8 text-center backdrop-blur transition hover:bg-white/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <span className="text-3xl" role="img" aria-hidden>
                    🤝
                  </span>
                </div>
                <p className="text-lg font-semibold">{partner.name}</p>
                <p className="text-sm text-slate-200">
                  Coordinating drives, tutoring, creative arts, and more.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="directory"
          className="space-y-8 rounded-3xl bg-white p-8 shadow-lg"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-700">
                Resource Directory
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Search and filter community resources
              </h2>
            </div>
            <button className="self-start rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 hover:border-slate-400">
              Show More
            </button>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-sky-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex-1">
              <label className="sr-only" htmlFor="resource-search">
                Search resources
              </label>
              <input
                id="resource-search"
                type="search"
                placeholder="Search by name..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{resource.icon}</div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {resource.name}
                </h3>
                <p className="text-sm text-slate-600">{resource.description}</p>
                <p className="text-sm font-semibold text-slate-700">
                  {resource.location}
                </p>
              </article>
            ))}
            {filteredResources.length === 0 && (
              <p className="text-center text-slate-500">
                No resources match your search yet. Try another keyword.
              </p>
            )}
          </div>
        </section>

        <section className="grid items-center gap-8 rounded-3xl bg-slate-100 p-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
              Across the Bluegrass
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Stories of progress across the Commonwealth
            </h2>
            <p className="mt-4 text-slate-600">
              Our map tracks deliveries, clinics, cultural events, and STEM
              programs as they pop up in counties statewide. Tap in to see where
              resources are growing and how you can help.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-4">
                  <p className="text-2xl font-bold text-sky-700">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 rounded-3xl bg-linear-to-br from-sky-600 to-blue-500 p-6 text-white">
            <p className="text-lg font-semibold">Bluegrass Impact Map</p>
            <div className="mt-6 flex h-56 items-center justify-center rounded-2xl bg-white/10">
              <p className="text-center text-sm text-slate-100">
                Interactive county markers coming soon. Keep checking back for
                updated data drops.
              </p>
            </div>
          </div>
        </section>

        <section
          id="submit"
          className="rounded-3xl bg-white px-6 py-10 shadow-lg sm:px-10"
        >
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
              Submit a Resource
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Share a program or partner we should highlight
            </h2>
            <p className="text-slate-600">
              Have a non-profit, community event, or campus initiative that
              neighbors should know about? Add it below so our team can verify
              and publish it in the hub.
            </p>
          </div>
          <form className="mx-auto mt-10 grid max-w-4xl gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Resource Name *
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="Community Food Pantry"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Category *
                </label>
                <select
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-sky-500 focus:outline-none"
                  required
                >
                  <option>Food</option>
                  <option>Housing</option>
                  <option>Health</option>
                  <option>Education</option>
                  <option>Transportation</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Website
                </label>
                <input
                  type="url"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="https://example.org"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Description *
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                placeholder="Describe the services and who they support..."
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="123 Main St, City, KY"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Hours of Operation
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="Mon–Fri: 9 AM - 5 PM"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Your Email *
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-sky-500 focus:outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500">
              Submit Resource
              <span aria-hidden>✈️</span>
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-slate-900 py-10 text-center text-sm text-slate-300">
        <p>
          © {new Date().getFullYear()} Hands of the Bluegrass. Building a
          stronger Commonwealth together.
        </p>
      </footer>
    </div>
  );
}
