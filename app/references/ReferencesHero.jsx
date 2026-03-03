"use client";

import Image from "next/image";
import heroImage from "../../public/references/hero.png";

import Citation from "@/components/Citation";

export default function ReferencesHero() {
  const handleScrollDown = () => {
    if (typeof window === "undefined") return;
    const offset = window.innerHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <main className=" text-white">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="People taking notes around a table"
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
              References
            </h1>
            <p className="text-md uppercase tracking-[0.9em]  text-slate-100 ml-1">
              Work log and all additional citations used
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

      <section className={"bg-[#39586a] pt-[5%] h-screen"}>
        <div className={"flex justify-center items-center"}>
          <h1 className={"text-2xl"}>
            Image Citations
          </h1>
        </div>
        <div className={"flex justify-center items-start mt-10"}>
          <ol>
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
      </section>
    </main>
  );
}

