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

const resourceData =[
  {
    title: "Library Help",
    location: "140 E Main St, Lexington, KY",
    desc: "Reach out and help the local library with organizing new books.",
    bgColor: "bg-[#e8dcbd]",
    textColor: "text-[#2d4352]",
    pillStyle: "bg-black/5 text-[#2d4352] border-black/10",
    img: "/home/guzel-maksutova-B30XL_m3fso-unsplash.jpg"
  },
  {
    title: "Tennis Tuesday",
    location: "300 W Reynolds Rd, Lexington, KY",
    desc: "Compete with our community through tennis action at Shillito Park.",
    bgColor: "bg-[#f4f7f6]",
    textColor: "text-[#2d4352]",
    pillStyle: "bg-[#e4ebf0] text-[#42647a] border-[#d1dce4]",
    img: "/home/john-fornander-4R9CcBdQTEg-unsplash.jpg"
  },
  {
    title: "Budgeting Guidance",
    location: "1306 Versailles Rd, Lexington, KY",
    desc: "Get free assistance with your financial planning and tax preparation.",
    bgColor: "bg-[#1d4157]",
    textColor: "text-white",
    pillStyle: "bg-white/10 text-white border-white/20",
    img: "/home/Screenshot 2026-03-02 at 7.01.32 PM.png"
  },
  {
    title: "Daycare for Children",
    location: "507 Versailles Rd, Lexington, KY",
    desc: "If you’re looking for a place to look after your children look no further",
    bgColor: "bg-[#064a6c]",
    textColor: "text-white",
    pillStyle: "bg-white/10 text-white border-white/20",
    img: "/home/Screenshot 2026-03-02 at 7.44.07 PM.png"
  },
];

const suggestionCards =[
  {
    id: 0,
    title: "Soccer Tickets Sale",
    location: "1600 Man O War Blvd",
    desc: "50% off if you buy a ticket NOW!!! Come and watch Dunbar vs Lafayette",
    bgColor: "bg-[#183a4e]",
    textColor: "text-white",
    pillStyle: "bg-white/10 border-white/20 text-white/90",
    img: "/home/william-smith-_Kp1WFKoCRk-unsplash.jpg"
  },
  {
    id: 1,
    title: "New Cafe Open",
    location: "3101 Beaumont Centre Cir",
    desc: "Drop by our newly opened cafe for coffee, smoothies, and pastries.",
    bgColor: "bg-[#6ab3d8]",
    textColor: "text-white",
    pillStyle: "bg-black/10 border-black/10 text-[#1d3547]",
    img: "/vercel.svg"
  },
  {
    id: 2,
    title: "SAT Prep Class",
    location: "140 E Main St, Lexington, KY",
    desc: "Come in and receive help for upcoming SAT tests at the Central Library.",
    bgColor: "bg-[#6ab3d8]",
    textColor: "text-white",
    pillStyle: "bg-white/20 border-white/20 text-white",
    img: "/home/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
  },
];

// --- HELPER COMPONENTS ---

const PinIcon = () => (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

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
  const opacity = useTransform(angle,[-60, -45, 0, 45, 60], [0, 1, 1, 1, 0]);

  return (
      <motion.div
          style={{ x, y, rotate, opacity, width: CARD_WIDTH, height: CARD_HEIGHT }}
          className={`absolute ${data.bgColor} rounded-[2.5rem] p-6 shadow-2xl border border-black/5 flex flex-col pointer-events-none select-none z-10`}
      >
        <div className="flex flex-col items-center pt-4 pb-2">
        <span className={`text-[9px] px-3 py-1.5 rounded-full mb-6 flex items-center gap-1.5 uppercase font-semibold tracking-widest border ${data.pillStyle}`}>
          <PinIcon />
          {data.location}
        </span>
          <h3 className={`text-[2.1rem] font-light text-center mb-3 leading-tight tracking-tight ${data.textColor}`}>
            {data.title}
          </h3>
          <p className={`text-[13px] text-center px-4 font-light leading-relaxed ${data.textColor} opacity-80`}>
            {data.desc}
          </p>
        </div>

        <div className="mt-auto relative w-full h-[55%] rounded-2xl overflow-hidden shadow-inner">
          <Image src={data.img} alt={data.title} fill className="object-cover" />
        </div>
      </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function BluegrassLandingPage() {
  const rotationValue = useMotionValue(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(2); // Set front card active by default

  useAnimationFrame((time, delta) => {
    if (!isInteracting) {
      rotationValue.set(rotationValue.get() + (delta / 1000) * -4.5);
    }
  });

  const handleDrag = (event, info) => {
    rotationValue.set(rotationValue.get() + info.delta.x * 0.08);
  };

  return (
      <main className="w-full font-sans text-white bg-[#406173] selection:bg-blue-400 overflow-x-hidden">

        {/* 1. HERO SECTION */}
        <section className="relative h-[95vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-10">
            <Image src="/home/tours.jpg" alt="Hero Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a4351] via-black/20 to-black/40" />
          </div>

          <div className="max-w-7xl w-full z-20 mb-24 px-10 md:px-20">
            <h1 className="text-7xl md:text-[8.5rem] font-light leading-[0.9] mb-8 tracking-tighter">
              Hands of the <br />
              <span className="text-[#68a7cc]">Blue</span>grass
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide pl-2 opacity-90">
              Explore the vibrant culture of Lexington, KY
            </p>
          </div>

          <div className="z-20 w-full pb-10 flex flex-col items-center border-t border-white/20 pt-8 bg-gradient-to-t from-[#2d4655] to-transparent">
            <div className="w-full flex justify-center gap-16 md:gap-32 mb-6 px-4">
              <Image src="/home/library-logo.webp" alt="Lexington Public Library" width={140} height={70} className="object-contain" />
              <Image src="/home/Ale-8-One_logo.svg.png" alt="Ale-8-One" width={100} height={100} className="object-contain" />
              <Image src="/home/Valvoline-Logo.png" alt="Valvoline" width={140} height={70} className="object-contain" />
            </div>
            <p className="text-sm md:text-base font-light tracking-[0.2em] opacity-80 uppercase">
              Monthly spotlight of events
            </p>
          </div>
        </section>

        {/* 2. ABOUT US SECTION */}
        <section className="h-screen bg-[#335263] flex items-center justify-center px-10">
          <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 items-center z-10">
            <div className="lg:pl-10">
              <div className="inline-flex items-center justify-center px-12 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-md mb-12">
                <h2 className="text-5xl font-light tracking-tight">About us</h2>
              </div>
              <div className="space-y-8 text-2xl font-light leading-relaxed max-w-2xl opacity-90">
                <p>The Community Resource Hub of the Bluegrass exists to make it easier for residents to connect with the people, programs, and opportunities that shape our region.</p>
                <p>Whether someone is new to the area or has lived here their whole life, navigating local resources shouldn't feel overwhelming. We bring everything together in one accessible place.</p>
              </div>
              <button className="mt-14 bg-white text-black px-10 py-3 text-xs font-bold tracking-[0.2em] rounded-sm hover:bg-gray-200 transition-colors">
                LEARN MORE
              </button>
            </div>
            <div className="relative h-full hidden lg:flex items-center justify-center">
              {/* Clean empty space to adhere to the requested cleaner layout missing the horse */}
            </div>
          </div>
        </section>

        {/* 3. RESOURCE HUB SECTION */}
        <section className="min-h-[105vh] bg-[#476d85] flex flex-col items-center pt-24 pb-12 relative select-none overflow-hidden">
          <div className="z-20 mb-[15vh] relative text-center">
            <div className="inline-flex items-center justify-center px-16 py-4 border border-white/20 rounded-full bg-white/10 backdrop-blur-md shadow-lg">
              <h2 className="text-6xl font-light tracking-tight">Resource hub</h2>
            </div>
          </div>

          <motion.div
              className="relative w-full h-[65vh] flex justify-center items-start cursor-grab active:cursor-grabbing"
              drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0}
              onDragStart={() => setIsInteracting(true)} onDragEnd={() => setIsInteracting(false)} onDrag={handleDrag}
          >
            <div className="absolute border-t-[1.5px] border-white/20 rounded-[100%] pointer-events-none z-0"
                 style={{ width: RADIUS * 2, height: RADIUS * 2, top: `${Y_OFFSET - RADIUS + (CARD_HEIGHT / 2)}px`, left: '50%', transform: 'translateX(-50%)' }} />
            {resourceData.map((data, i) => <CarouselCard key={i} data={data} index={i} total={resourceData.length} rotationValue={rotationValue} />)}
          </motion.div>

          <div className="absolute bottom-16 z-20">
            <button className="bg-white text-black px-12 py-4 text-xs font-bold tracking-[0.3em] rounded-sm hover:scale-105 transition-transform shadow-xl">
              EXPLORE MORE
            </button>
          </div>
        </section>

        {/* 4. OUR IMPACT SECTION */}
        <section className="min-h-screen bg-[#6db3d6] flex items-center justify-center px-10 py-24 relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -left-32 -top-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-2xl" />
          <div className="absolute left-10 bottom-10 w-80 h-80 bg-white/20 rounded-full border border-white/30 backdrop-blur-md" />
          <div className="absolute left-64 bottom-48 w-64 h-64 bg-white/10 rounded-full border border-white/20" />

          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
            <div className="space-y-12">
              <div className="inline-flex items-center justify-center px-12 py-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-md shadow-lg">
                <h2 className="text-6xl font-light tracking-tight">Our impact</h2>
              </div>
              <p className="text-2xl font-light leading-relaxed opacity-95 max-w-xl">
                Our work has increased awareness of local programs and opportunities across the Bluegrass region.
                By centralizing information and simplifying access, we've made it easier for residents to discover resources all around.
              </p>
            </div>

            <div className="flex flex-col gap-12 lg:pl-24">
              <div>
                <h3 className="text-7xl font-light tracking-tighter mb-1">461,123</h3>
                <p className="text-2xl font-light opacity-90">Total people reached</p>
              </div>
              <div>
                <h3 className="text-7xl font-light tracking-tighter mb-1">125%</h3>
                <p className="text-2xl font-light opacity-90">Participation increases seen</p>
              </div>
              <div>
                <h3 className="text-7xl font-light tracking-tighter mb-1">6,423</h3>
                <p className="text-2xl font-light opacity-90">Resources provided</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SUGGESTIONS SECTION */}
        <section className="min-h-screen bg-[#0e3a4e] flex items-center justify-center px-10 py-24 relative overflow-hidden">
          <div className="absolute -bottom-64 -right-48 w-[800px] h-[800px] bg-white rounded-full opacity-100" />

          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
            <div>
              <div className="inline-flex items-center justify-center px-12 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md shadow-lg mb-10">
                <h2 className="text-6xl font-light tracking-tight">Suggestions</h2>
              </div>
              <p className="text-2xl font-light leading-relaxed opacity-90 mb-14 max-w-md">
                We want our community to be connected, and we are always looking for more resources to improve our resource hub.
              </p>
              <button className="bg-white text-black px-10 py-4 text-sm font-semibold tracking-widest rounded-sm hover:scale-105 transition-transform shadow-lg">
                MAKE CARD
              </button>
            </div>

            <div className="relative h-[650px] w-full flex items-center justify-center lg:justify-end pr-10 mt-10 lg:mt-0">
              {suggestionCards.map((card, i) => {
                const isActive = activeSuggestion === i;
                const rotation = (i - 1) * 12;
                const xOffset = (i - 1) * 100;
                const yOffset = Math.abs(i - 1) * 20;

                return (
                    <motion.div
                        key={card.id}
                        onMouseEnter={() => setActiveSuggestion(i)}
                        animate={{
                          rotate: isActive ? 0 : rotation,
                          x: isActive ? 0 : xOffset,
                          y: isActive ? -20 : yOffset,
                          scale: isActive ? 1.05 : 0.95,
                          zIndex: isActive ? 50 : 10 + i
                        }}
                        transition={{ type: "spring", stiffness: 250, damping: 25 }}
                        className={`absolute w-[340px] h-[500px] ${card.bgColor} rounded-[2.5rem] p-6 shadow-2xl flex flex-col cursor-pointer border border-white/10`}
                    >
                      <div className="flex flex-col items-center pt-2 pb-2">
                    <span className={`text-[9px] px-3 py-1.5 rounded-full mb-6 flex items-center gap-1.5 uppercase font-semibold tracking-widest border ${card.pillStyle}`}>
                      <PinIcon />
                      {card.location}
                    </span>
                        <h3 className={`text-4xl font-light text-center mb-4 leading-tight tracking-tight ${card.textColor}`}>
                          {card.title}
                        </h3>
                        <p className={`text-sm text-center px-2 font-light leading-relaxed ${card.textColor} opacity-90`}>
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-auto relative w-full h-[50%] rounded-2xl overflow-hidden shadow-inner bg-black/5">
                        <Image src={card.img} alt={card.title} fill className="object-cover" />
                      </div>
                    </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white text-gray-800 pt-16 pb-8 px-10 md:px-20 font-light selection:bg-gray-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-4 text-xs text-gray-400">
              Questions or concerns?<br/>Email us below:
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-10 mb-14 gap-6">
              <h2 className="text-3xl md:text-5xl lg:text-[4rem] text-gray-700 font-light tracking-tight">
                hello@handsofthebluegrass.com
              </h2>
              <button className="p-4 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 text-sm">
              <div>
                <h4 className="text-gray-400 mb-6 text-base tracking-wide">About</h4>
                <ul className="space-y-4 text-gray-700 text-[15px]">
                  <li className="hover:text-black cursor-pointer">Home</li>
                  <li className="hover:text-black cursor-pointer">About us</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-400 mb-6 text-base tracking-wide">Resource hub</h4>
                <ul className="space-y-4 text-gray-700 text-[15px]">
                  <li className="hover:text-black cursor-pointer">Directory</li>
                  <li className="hover:text-black cursor-pointer">Suggestions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-400 mb-6 text-base tracking-wide">References</h4>
                <ul className="space-y-4 text-gray-700 text-[15px]">
                  <li className="hover:text-black cursor-pointer">Citations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-400 mb-6 text-base tracking-wide">Follow us:</h4>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.18 1.18 0 100 2.36 1.18 1.18 0 000-2.36z"/></svg>
                  <svg className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <svg className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-100 text-[13px] text-gray-400">
              <p>Hands of The Bluegrass</p>
              <p>© 2026 All rights reserved</p>
            </div>
          </div>
        </footer>
      </main>
  );
}
