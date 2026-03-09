import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 px-10 md:px-20 font-light selection:bg-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-4 text-xs text-gray-400">
          Questions or concerns?
          <br />
          Email us below:
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-10 mb-14 gap-6">
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] text-gray-700 font-light tracking-tight">
            hello@handsofthebluegrass.com
          </h2>
          <button className="p-4 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 text-sm">
          <div>
            <h4 className="text-gray-400 mb-6 text-base tracking-wide">
              About
            </h4>
            <ul className="space-y-4 text-gray-700 text-[15px]">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 mb-6 text-base tracking-wide">
              Resource hub
            </h4>
            <ul className="space-y-4 text-gray-700 text-[15px]">
              <li className="hover:text-black cursor-pointer">Directory</li>
              <li className="hover:text-black cursor-pointer">Suggestions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 mb-6 text-base tracking-wide">
              References
            </h4>
            <ul className="space-y-4 text-gray-700 text-[15px]">
              <li className="hover:text-black cursor-pointer">Citations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 mb-6 text-base tracking-wide">
              Follow us:
            </h4>
            <div className="flex gap-4">
              <svg
                className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.18 1.18 0 100 2.36 1.18 1.18 0 000-2.36z" />
              </svg>
              <svg
                className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <svg
                className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-100 text-[13px] text-gray-400">
          <p>Hands of The Bluegrass</p>
          <p>© 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
