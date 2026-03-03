"use client";
"use strict";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';

// --- CONFIGURATION CONSTANTS ---
const RADIUS = 1100;
const Y_OFFSET = 1000;
const SPACING = 35;
const CARD_WIDTH = 352;
const CARD_HEIGHT = 495;

const resourceData = [
  { title: "Library Help", location: "Library Lane Ct.", desc: "Reach out and help the local library with organizing new books", color: "bg-[#2d4352]", img: "/vercel.svg" },
  { title: "Tennis Tuesday", location: "@ Shilito Park", desc: "Compete with our community through tennis action", color: "bg-[#2d4352]", img: "/vercel.svg" },
  { title: "Meal more.", location: "@ 2116 Ridgecane ct", desc: "Come join us for a wonderful added with an amazing 30% discount", color: "bg-[#2d4352]", img: "/vercel.svg" },
  { title: "Park Clean", location: "@ Central", desc: "Keep the bluegrass green by joining our monthly cleanup.", color: "bg-[#2d4352]", img: "/vercel.svg" },
  { title: "Art Walk", location: "@ Downtown", desc: "Experience the local galleries and creative community.", color: "bg-[#2d4352]", img: "/vercel.svg" },
  { title: "Pet Adoption", location: "@ Shelter", desc: "Find your new best friend this weekend at the hub.", color: "bg-[#2d4352]", img: "/vercel.svg" },
];

const suggestionCards = [
  { id: 0, title: "Soccer Tickets Sale", location: "Beaumont Center", desc: "50% off if you buy a ticket NOW!!! Come and watch Dunbar vs Lafayette", img: "/vercel.svg" },
  { id: 1, title: "SAT Prep Class", location: "Beaumont Library", desc: "Come in and receive help for upcoming SAT tests.", img: "/vercel.svg" },
  { id: 2, title: "New Cafe Open", location: "Beaumont Center", desc: "Drop by our newly opened cafe for coffee, smoothies, and pastries.", img: "/vercel.svg" },
];

// --- HELPER COMPONENTS ---

const CarouselCard = ({ data, index, rotationValue, total }) => {
  const angle = useTransform(rotationValue, (v) => {
    const startAngle = index * SPACING;
    const currentAngle = startAngle + v;
    const totalRange = total * SPACING;
    let wrapped = ((currentAngle + totalRange / 2) % totalRange);
    if (wrapped < 0) wrapped += totalRange;
    return wrapped - totalRange / 2;
  });

  const x = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * RADIUS);
  const y = useTransform(angle, (a) => -Math.cos((a * Math.PI) / 180) * RADIUS + Y_OFFSET);
  const rotate = useTransform(angle, (a) => a);
  const opacity = useTransform(angle, [-60, -45, 0, 45, 60], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      style={{ x, y, rotate, opacity, width: CARD_WIDTH, height: CARD_HEIGHT }}
      className={`absolute ${data.color} rounded-[2.5rem] p-10 shadow-2xl border border-white/10 flex flex-col pointer-events-none select-none z-10`}
    >
      <span className="text-[11px] bg-white/20 px-4 py-1.5 rounded-full mb-8 self-center italic font-light tracking-widest uppercase">{data.location}</span>
      <h3 className="text-4xl font-light text-center mb-6 leading-tight tracking-tight">{data.title}</h3>
      <p className="text-sm opacity-60 text-center mb-10 leading-relaxed px-6 font-light">{data.desc}</p>

      {/* Updated Image Container */}
      <div className="mt-auto relative flex-1 bg-black/20 rounded-3xl overflow-hidden border border-white/5">
        <Image
          src={data.img}
          alt={data.title}
          fill
          className={data.img === "/vercel.svg" ? "object-contain p-12 invert opacity-20" : "object-cover"}
        />
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function BluegrassLandingPage() {
  const rotationValue = useMotionValue(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  useAnimationFrame((time, delta) => {
    if (!isInteracting) {
      rotationValue.set(rotationValue.get() + (delta / 1000) * -4.5);
    }
  });

  const handleDrag = (event, info) => {
    rotationValue.set(rotationValue.get() + info.delta.x * 0.08);
  };

  return (
    <main className="w-full font-sans text-white bg-[#39586a] selection:bg-blue-400 overflow-x-hidden">

      {/* 1. HERO SECTION - Stars and Line span entire width */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image src="/home/hero.png" alt="Hero Background" fill className="object-cover" priority />
        </div>

        <div className="max-w-7xl w-full z-20 mb-32 px-10 md:px-20">
          <h1 className="text-8xl md:text-[10rem] font-extralight leading-[0.85] mb-6 tracking-tighter">Hands of the <br /> Bluegrass</h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.1em] pl-[10px] opacity-80">Explore the vibrant culture of Lexington, KY</p>
        </div>

        <div className="z-20 w-full pb-10 flex flex-col items-center">
          <div className="w-full flex justify-evenly mb-8 px-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            ))}
          </div>
          <div className="w-full h-[1px] bg-white/40 mb-6" />
          <p className="text-lg md:text-xl font-light tracking-[0.15em] opacity-90">Monthly spotlight of events</p>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="h-screen bg-[#39586a] flex items-center justify-center px-10">
        <div className="max-w-[1500px] w-full h-[80vh] grid grid-cols-1 lg:grid-cols-2 items-center border border-white/10 rounded-lg p-12 md:p-24 bg-[#324c5c] backdrop-blur-lg relative overflow-hidden">
          <div className="z-10">
            <h2 className="text-8xl font-extralight mb-12 tracking-tighter">About us</h2>
            <div className="space-y-10 text-2xl font-extralight leading-relaxed max-w-2xl opacity-80">
              <p>The Community Resource Hub of the Bluegrass exists to make it easier for residents to connect with the people, programs, and opportunities that shape our region.</p>
              <p>Whether someone is new to the area or has lived here their whole life, navigating local resources shouldn't feel overwhelming. We bring everything together in one accessible place.</p>
            </div>
            <button className="mt-14 bg-white text-black px-10 py-3 text-xs font-bold tracking-[0.2em]">LEARN MORE</button>
          </div>
          <div className="relative h-full hidden lg:flex items-center justify-center pointer-events-none">
            <Image src="/vercel.svg" alt="Horse Icon" width={700} height={700} className="invert opacity-20 transform scale-125 rotate-6" />
          </div>
        </div>
      </section>

      {/* 3. RESOURCE HUB SECTION */}
      <section className="min-h-[100vh] flex flex-col items-center pt-24 relative select-none">
        <div className="z-20 mb-[20vh] relative">
          <h2 className="text-6xl font-extralight tracking-tight relative z-10 px-16 py-6">Resource hub</h2>
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white/10 backdrop-blur-md rounded-full -z-10 border border-white/10" />
        </div>

        <motion.div
          className="relative w-full h-[75vh] flex justify-center items-start cursor-grab active:cursor-grabbing"
          drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0}
          onDragStart={() => setIsInteracting(true)} onDragEnd={() => setIsInteracting(false)} onDrag={handleDrag}
        >
          <div className="absolute border-t-[1.5px] border-white/30 rounded-[100%] pointer-events-none z-0"
               style={{ width: RADIUS * 2, height: RADIUS * 2, top: `${Y_OFFSET - RADIUS + (CARD_HEIGHT / 2)}px`, left: '50%', transform: 'translateX(-50%)' }} />
          {resourceData.map((data, i) => <CarouselCard key={i} data={data} index={i} total={resourceData.length} rotationValue={rotationValue} />)}
        </motion.div>

        <div className="absolute bottom-16 z-20">
          <button className="bg-white text-black px-16 py-4 text-xs font-bold tracking-[0.4em] hover:scale-105 transition-transform shadow-xl">EXPLORE MORE</button>
        </div>
      </section>

      {/* 4. OUR IMPACT SECTION */}
      <section className="min-h-screen bg-[#67add0] flex items-center justify-center px-10 py-24 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-80 h-80 bg-[#d7ebf5]/40 rounded-full border border-white/30" />
        <div className="absolute -left-16 bottom-10 w-96 h-96 bg-[#d7ebf5]/30 rounded-full border border-white/20 backdrop-blur-sm" />
        <div className="absolute left-32 bottom-32 w-72 h-72 bg-[#d7ebf5]/20 rounded-full border border-white/10 backdrop-blur-[2px]" />
        <div className="absolute left-64 bottom-10 w-64 h-64 bg-[#d7ebf5]/15 rounded-full border border-white/10" />

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
          <div className="space-y-10">
            <div className="relative inline-block">
              <h2 className="text-7xl font-extralight tracking-tight relative z-10 py-4 px-2">Our impact</h2>
              <div className="absolute bottom-[-10px] left-[-20px] w-[110%] h-[60%] bg-white/20 backdrop-blur-xl rounded-full -z-0 border border-white/20" />
            </div>
            <p className="text-2xl font-extralight leading-relaxed opacity-90 max-w-xl">
              Our work has increased awareness of local programs and opportunities across the Bluegrass region.
              By centralizing information and simplifying access, we've made it easier for residents to discover resources all around.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:pl-20">
            {["461,123", "125%", "6,423"].map((val, idx) => (
              <div key={idx}>
                <h3 className="text-8xl font-extralight tracking-tighter">{val}</h3>
                <p className="text-2xl font-light opacity-80 mt-2">{["Total people reached", "Participation increases seen", "Resources provided"][idx]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUGGESTIONS SECTION */}
      <section className="min-h-screen bg-[#013b52] flex items-center justify-center px-10 py-24 relative overflow-hidden">
        <div className="absolute -bottom-48 -right-48 w-[700px] h-[700px] bg-white rounded-full opacity-100" />

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <div>
            <div className="relative inline-block mb-12">
              <h2 className="text-7xl font-extralight tracking-tight relative z-10 py-4 px-2">Suggestions</h2>
              <div className="absolute bottom-[-5px] left-[-20px] w-[110%] h-[60%] bg-white/10 backdrop-blur-xl rounded-full -z-0 border border-white/10" />
            </div>
            <p className="text-2xl font-extralight leading-relaxed opacity-80 mb-14 max-w-md">
              We want our community to be connected, and we are always looking for more resources to improve our resource hub.
            </p>
            <button className="bg-white text-black px-12 py-5 font-bold tracking-[0.1em] rounded-sm hover:scale-105 transition-transform">Make Card</button>
          </div>

          <div className="relative h-[700px] w-full flex items-center justify-center lg:justify-end pr-10">
            {suggestionCards.map((card, i) => {
              const isActive = activeSuggestion === i;
              const rotation = (i - 1) * 15;
              const xOffset = (i - 1) * 120;
              const yOffset = Math.abs(i - 1) * 30;

              return (
                <motion.div
                  key={card.id}
                  onMouseEnter={() => setActiveSuggestion(i)}
                  animate={{
                    rotate: isActive ? 0 : rotation,
                    x: isActive ? 0 : xOffset,
                    y: isActive ? -40 : yOffset,
                    scale: isActive ? 1.05 : 0.9,
                    zIndex: isActive ? 50 : 10 + i
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[360px] h-[520px] bg-[#2d4352] rounded-[2.5rem] p-10 border border-white/20 shadow-2xl flex flex-col cursor-pointer"
                >
                  <span className="text-[10px] bg-white/10 px-4 py-2 rounded-full mb-10 self-center flex items-center gap-2 border border-white/5 uppercase tracking-widest font-light italic">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    {card.location}
                  </span>

                  <h3 className="text-4xl font-light text-center mb-6 leading-tight tracking-tight">{card.title}</h3>
                  <p className="text-[15px] opacity-70 text-center mb-10 font-light leading-relaxed px-4">{card.desc}</p>

                  {/* Updated Suggestion Image Container */}
                  <div className="mt-auto relative flex-1 bg-white/5 rounded-3xl overflow-hidden border border-white/5">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className={card.img === "/vercel.svg" ? "object-contain p-12 invert opacity-20" : "object-cover"}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-white text-black/40 py-10 px-20 border-t border-black/5 flex justify-between items-center text-sm font-light">
        <p>Hands of The Bluegrass</p>
        <p>© 2026 All rights reserved</p>
      </footer>
    </main>
  );
}
