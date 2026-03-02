import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-4 text-sm text-slate-500">
          <p>Questions or concerns?</p>
          <p>Email us below:</p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-y border-slate-800 py-8 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@handsofthebluegrass.com"
            className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl md:text-4xl"
          >
            hello@handsofthebluegrass.com
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-slate-300 text-slate-600 transition hover:bg-slate-100"
          >
            ↩<span className="sr-only">Copy email address</span>
          </button>
        </div>

        <div className="grid gap-8 border-b border-slate-200 py-10 text-sm sm:grid-cols-[1.1fr_1.1fr_1.1fr_1fr_auto]">
          <div>
            <p className="font-semibold text-slate-500">About</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Resource hub</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/resource-directory"
                  className="hover:text-slate-900"
                >
                  Directory
                </Link>
              </li>
              <li>
                <Link href="/suggestions" className="hover:text-slate-900">
                  Suggestions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Account</p>
            <ul className="mt-4 space-y-2">
              <li>
                <button className="text-left text-slate-700 hover:text-slate-900">
                  Sign in
                </button>
              </li>
              <li>
                <button className="text-left text-slate-700 hover:text-slate-900">
                  Register
                </button>
              </li>
            </ul>
          </div>

          <div className="-my-10 border-r border-slate-800 pr-8">
            <p className="mt-10 font-semibold text-slate-500">Placeholder</p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-slate-500">Follow us:</p>
            <div className="flex items-center gap-3 text-slate-600">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
                IG
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
                ▶
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
                f
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center border-t border-slate-800">
          <p>Hands of The Bluegrass</p>
          <p>© {year} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
