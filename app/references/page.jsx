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
                  href="/references/work-log.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline focus:outline-none focus:underline"
                >
                  Copyright Checklist
                </a>
              </h2>
              <div className="flex-1 min-h-0 rounded overflow-hidden bg-[#1a2a38]/60">
                <iframe
                  src="/references/work-log.pdf"
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
                    author="Alvin David"
                    authorLink="https://unsplash.com/@alvinbcd"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/0AKPfr-xlCU"
                  />
                </li>
                <li>
                  <Citation
                    author="Alvin David"
                    authorLink="https://unsplash.com/@alvinbcd"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/0AKPfr-xlCU"
                  />
                </li>
                <li>
                  <Citation
                    author="Joel Muniz"
                    authorLink="https://unsplash.com/@j_muniz"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/A4Ax1ApccfA"
                  />
                </li>
                <li>
                  <Citation
                    author="The Tampa Bay Estuary Program"
                    authorLink="https://unsplash.com/@tbep"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/CxL29J-aM5E"
                  />
                </li>
                <li>
                  <Citation
                    author="Adrianna Geo"
                    authorLink="https://unsplash.com/@adriannageo"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/x7oJQcDgtLg"
                  />
                </li>
                <li>
                  <Citation
                    author="Hannah Busing"
                    authorLink="https://unsplash.com/@hannahbusing"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/Zyx1bK9mqmA"
                  />
                </li>
                <li>
                  <Citation
                    author="Ismael Paramo"
                    authorLink="https://unsplash.com/@ismaelparamo"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/Cns0h4ypRyA"
                  />
                </li>
                <li>
                  <Citation
                    author="Josh Hild"
                    authorLink="https://unsplash.com/@joshhild"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/YwpFllVSpvU"
                  />
                </li>
                <li>
                  <Citation
                    author="Patrick Perkins"
                    authorLink="https://unsplash.com/@patrickperkins"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/ETRPjvb0KM0"
                  />
                </li>
                <li>
                  <Citation
                    author="Guzel Maksutova"
                    authorLink="https://unsplash.com/@guzel_maksutova"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/B30XL_m3fso"
                  />
                </li>
                <li>
                  <Citation
                    author="John Fornander"
                    authorLink="https://unsplash.com/@johnfornander"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/4R9CcBdQTEg"
                  />
                </li>
                <li>
                  <Citation
                    author="Nguyen Dang Hoang Nhu"
                    authorLink="https://unsplash.com/@m_kyu"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/qDgTQOYk6B8"
                  />
                </li>
                <li>
                  <Citation
                    author="Unknown Author"
                    authorLink="https://unsplash.com/plus"
                    type="image"
                    source="Getty Images"
                    sourceLink="https://www.gettyimages.com/search/2/image?phrase=person+calculator+black+shirt+desk"
                  />
                </li>
                <li>
                  <Citation
                    author="Unknown Author"
                    authorLink="https://unsplash.com/plus"
                    type="image"
                    source="Getty Images"
                    sourceLink="https://www.gettyimages.com/search/2/image?phrase=teacher+playing+musical+instruments+with+children+classroom+floor"
                  />
                </li>
                <li>
                  <Citation
                    author="William Smith"
                    authorLink="https://unsplash.com/@willsmith"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/_Kp1WFKoCRk"
                  />
                </li>
                <li>
                  <Citation
                    author="William Smith"
                    authorLink="https://unsplash.com/@misterwillsmith"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/people-playing-soccer-on-soccer-field-_Kp1WFKoCRk"
                  />
                </li>
                <li>
                  <Citation
                    author="Dylan Gillis"
                    authorLink="https://unsplash.com/@dylan_gillis"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY"
                  />
                </li>
                <li>
                  <Citation
                    author="Unknown Author"
                    authorLink="https://unsplash.com/plus"
                    type="image"
                    source="Getty Images"
                    sourceLink="https://unsplash.com/s/photos/volunteer-food-serving"
                  />
                </li>
                <li>
                  <Citation
                    author="Priscilla Du Preez"
                    authorLink="https://unsplash.com/@priscilladupreez"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/s/photos/three-hands"
                  />
                </li>
                <li>
                  <Citation
                    author="Luis Melendez"
                    authorLink="https://unsplash.com/@lcma1028"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/group-of-doctors-walking-on-hospital-hallway-Pd4lRfKo16U"
                  />
                </li>
                <li>
                  <Citation
                    author="Vitaly Gariev"
                    authorLink="https://unsplash.com/@vitaly_gariev"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/two-people-in-a-business-meeting-with-a-clipboard-HcS7MOSp-94"
                  />
                </li>
                <li>
                  <Citation
                    author="ThisisEngineering"
                    authorLink="https://unsplash.com/@thisisengineering"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/SyRlD4s_amw"
                  />
                </li>
                <li>
                  <Citation
                    author="TJ Dragotta"
                    authorLink="https://unsplash.com/@tjdragotta"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/orange-basketball-on-black-surface-Gl0jBJJTDWs"
                  />
                </li>
                <li>
                  <Citation
                    author="Allison Saeng"
                    authorLink="https://unsplash.com/@allisonsaeng"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/a-badminton-racket-and-three-shuttlecocks-on-a-green-surface-VRqmHMYMq1c"
                  />
                </li>
                <li>
                  <Citation
                    author="Brett Jordan"
                    authorLink="https://unsplash.com/@brett_jordan"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/mcdonalds-burger-and-fries-on-brown-wooden-table-zee1geZy6H0"
                  />
                </li>
                <li>
                  <Citation
                    author="The CDC"
                    authorLink="https://unsplash.com/@cdc"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/man-in-gray-long-sleeve-shirt-standing-beside-woman-in-pink-tank-top-20YP7NENJzk"
                  />
                </li>
                <li>
                  <Citation
                    author="Ev"
                    authorLink="https://unsplash.com/@ev_p"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/person-sitting-on-sidewalk-during-daytime-IWJH-l-vb4k"
                  />
                </li>
                <li>
                  <Citation
                    author="Headway"
                    authorLink="https://unsplash.com/@headwayio"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/person-in-red-and-white-plaid-shirt-sitting-in-front-of-laptop-5QgIuuBxKwM"
                  />
                </li>
                <li>
                  <Citation
                    author="Ilya Pavlov"
                    authorLink="https://unsplash.com/@ilyapavlov"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/text-on-black-background-OqtafYT5kTw"
                  />
                </li>
                <li>
                  <Citation
                    author="Joseph Gonzalez"
                    authorLink="https://unsplash.com/@josephgonzalez"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/boiled-egg-with-vegetables-on-black-plate-fdlZBWIP0aM"
                  />
                </li>
                <li>
                  <Citation
                    author="Kristin Wilson"
                    authorLink="https://unsplash.com/@kristinwilson"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/z3htkdHUh5w"
                  />
                </li>
                <li>
                  <Citation
                    author="Miguel A. Amutio"
                    authorLink="https://unsplash.com/@miguel_amutio"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/QDv-uBc-poY"
                  />
                </li>
                <li>
                  <Citation
                    author="Nathan Dumlao"
                    authorLink="https://unsplash.com/@nate_dumlao"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/zUNs99PGDg0"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Hloom Resume Templates"
                    sourceLink="https://www.hloom.com/download-professional-resume-templates/"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Alamy Stock Photo"
                    sourceLink="https://www.alamy.com/stock-photo/cat-cage.html"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Dreamstime"
                    sourceLink="https://www.dreamstime.com/photos-images/close-up-yellow-pencil-notebook.html"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="VistaCreate"
                    sourceLink="https://create.vista.com/photos/strawberry-planting/"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Getty Images"
                    sourceLink="https://www.gettyimages.com/search/2/image?phrase=person+calculator+black+shirt+desk"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Getty Images"
                    sourceLink="https://www.gettyimages.com/search/2/image?phrase=teacher+playing+musical+instruments+with+children+classroom+floor"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Shutterstock"
                    sourceLink="https://www.shutterstock.com/search/volunteer-serving-food"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Shutterstock"
                    sourceLink="https://www.shutterstock.com/search/hands-holding"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Getty Images"
                    sourceLink="https://www.gettyimages.com/search/2/image?phrase=group+of+doctors+walking+down+a+hallway+together"
                  />
                </li>
                <li>
                  <Citation
                    author="Author Unknown"
                    authorLink=""
                    type="image"
                    source="Shutterstock"
                    sourceLink="https://www.shutterstock.com/search/two-people-wearing-masks-meeting"
                  />
                </li>
                <li>
                  <Citation
                    author="Sebastian Mark"
                    authorLink="https://unsplash.com/@sebastianmark"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/a-view-of-a-fair-at-sunset-with-lots-of-flags-9xsXiWvjnLQ"
                  />
                </li>
                <li>
                  <Citation
                    author="Toomas Tartes"
                    authorLink="https://unsplash.com/@toomastartes"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/two-people-walking-on-a-trail-towards-a-snow-covered-mountain-Yizrl9N_eDA"
                  />
                </li>
                <li>
                  <Citation
                    author="UX Indonesia"
                    authorLink="https://unsplash.com/@uxindonesia"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/person-holding-black-pen-writing-on-white-paper-qC2n6RQU4Vw"
                  />
                </li>
                <li>
                  <Citation
                    author="Victoria Shes"
                    authorLink="https://unsplash.com/@victoriashes"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/grilled-meat-and-vegetables-on-brown-wooden-board-UC0HZdUitWY"
                  />
                </li>
                <li>
                  <Citation
                    author="Waldemar Brandt"
                    authorLink="https://unsplash.com/@waldemarbrandt67w"
                    type="image"
                    source="Unsplash"
                    sourceLink="https://unsplash.com/photos/men-playing-soccer-on-green-grass-field-during-daytime-iiwYpGkbDgM"
                  />
                </li>
                <li>
                  <Citation
                    author="Unknown Author"
                    authorLink=""
                    type="image"
                    source="YMCA of Central Kentucky"
                    sourceLink="https://www.ymcacky.org/"
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
