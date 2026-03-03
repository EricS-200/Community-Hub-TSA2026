import ReferencesHero from "./ReferencesHero";
import Citation from "@/components/Citation";

export const metadata = {
  title: "References | Hands of the Bluegrass",
};

export default function ReferencesPage() {
  return (
    <>
      <ReferencesHero />
      <section className="bg-[#39586a] px-6 py-12 md:px-12 md:py-16 text-white">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Top row: Copyright Checklist + Work Log */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-lg border border-[#2d4554] bg-[#2d4554]/40 p-5 flex flex-col min-h-[420px]">
              <h2 className="text-xl font-semibold mb-4">
                <a
                  href="/references/copyright-checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline focus:outline-none focus:underline"
                >
                  Copyright Checklist
                </a>
              </h2>
              <div className="flex-1 min-h-0 rounded overflow-hidden bg-[#1a2a38]/60">
                <iframe
                  src="/references/copyright-checklist.pdf"
                  title="Copyright Checklist PDF"
                  className="w-full h-full min-h-[340px]"
                />
              </div>
            </div>
            <div className="rounded-lg border border-[#2d4554] bg-[#2d4554]/40 p-5 flex flex-col min-h-[420px]">
              <h2 className="text-xl font-semibold mb-4">
                <a
                  href="/references/copyright-checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline focus:outline-none focus:underline"
                >
                  Work Log
                </a>
              </h2>
              <div className="flex-1 min-h-0 rounded overflow-hidden bg-[#1a2a38]/60">
                <iframe
                  src="/references/copyright-checklist.pdf"
                  title="Work Log PDF"
                  className="w-full h-full min-h-[340px]"
                />
              </div>
            </div>
          </div>

          {/* Libraries Implemented */}
          <div className="rounded-lg border border-[#2d4554] bg-[#2d4554]/40 p-5">
            <h2 className="text-xl font-semibold mb-4">Softwares Used</h2>
            <div className=" text-white/80">
              ReactJS, NextJS, TailwindCSS, FramerMotion, EmailJS, Supabase.
            </div>
            <div className=" text-white/80 mt-3">
              Although we used modern technologies and frameworks, we did not
              use any pre-built components or templates. All works, designs,
              content, and code were created by our student team persuant to
              Technology Student Association Webmaster rules.
            </div>
          </div>

          {/* Image Citations */}
          <div className="rounded-lg border border-[#2d4554] bg-[#2d4554]/40 p-5">
            <h2 className="text-xl font-semibold mb-4">Image Citations</h2>
            <div className="pt-2">
              <ol className="space-y-2 list-decimal list-inside">
                <li>
                  <Citation
                    author="Farmhouse Sunflower "
                    authorLink=""
                    type="image"
                    source="Farmhouse Sunflower"
                    sourceLink="https://farmhousesunflower.wordpress.com/"
                  />
                </li>
                <li>
                  <Citation
                    author="Farmhouse Sunflower "
                    authorLink=""
                    type="image"
                    source="Farmhouse Sunflower"
                    sourceLink="https://farmhousesunflower.wordpress.com/"
                  />
                </li>
                <li>
                  <Citation
                    author="Cassie Smallwood"
                    authorLink="https://www.cassiesmallwood.com/"
                    type="image"
                    source="Cassie Smallwood"
                    sourceLink="https://www.cassiesmallwood.com/fruit-coloring-sheets/"
                  />
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-lg border border-[#2d4554] bg-[#2d4554]/40 p-5">
            <h2 className="text-xl font-semibold mb-4">Content Citations</h2>
            <div className="pt-2">
              <ol className="space-y-2 list-decimal list-inside">
                <li>
                  <Citation
                    author="Farmhouse Sunflower "
                    authorLink=""
                    type="Resource"
                    source="Farmhouse Sunflower"
                    sourceLink="https://farmhousesunflower.wordpress.com/"
                  />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
