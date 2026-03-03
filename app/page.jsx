"use client";
"use strict"

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate, useAnimationFrame } from 'framer-motion';

// --- CONFIGURATION CONSTANTS ---
const RADIUS = 1100;
const Y_OFFSET = 1000;
const SPACING = 35; // Increased slightly for larger card width
const CARD_WIDTH = 352;  // 10% larger (previously 320)
const CARD_HEIGHT = 495; // 10% larger (previously 450)

const resourceData = [
  { title: "Library Help", location: "Library Lane Ct.", desc: "Reach out and help the local library with organizing new books", color: "bg-[#2d4352]" },
  { title: "Tennis Tuesday", location: "@ Shilito Park", desc: "Compete with our community through tennis action", color: "bg-[#2d4352]" },
  { title: "Meal more.", location: "@ 2116 Ridgecane ct", desc: "Come join us for a wonderful added with an amazing 30% discount", color: "bg-[#2d4352]" },
  { title: "Park Clean", location: "@ Central", desc: "Keep the bluegrass green by joining our monthly cleanup.", color: "bg-[#2d4352]" },
  { title: "Art Walk", location: "@ Downtown", desc: "Experience the local galleries and creative community.", color: "bg-[#2d4352]" },
  { title: "Pet Adoption", location: "@ Shelter", desc: "Find your new best friend this weekend at the hub.", color: "bg-[#2d4352]" },
];

// --- HELPER COMPONENTS ---

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white opacity-80">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const Card = ({ data, index, rotationValue, total }) => {
  // Mapping horizontal drag value to circular coordinates
  const angle = useTransform(rotationValue, (v) => {
    const startAngle = index * SPACING;
    const currentAngle = startAngle + v;
    const totalRange = total * SPACING;

    // Infinite wrap logic
    let wrapped = ((currentAngle + totalRange / 2) % totalRange);
    if (wrapped < 0) wrapped += totalRange;
    return wrapped - totalRange / 2;
  });

  // Calculate position along the arc
  // x = R * sin(theta)
  // y = -R * cos(theta) + Offset
  const x = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * RADIUS);
  const y = useTransform(angle, (a) => -Math.cos((a * Math.PI) / 180) * RADIUS + Y_OFFSET);
  const rotate = useTransform(angle, (a) => a);

  // Fade out cards as they approach the screen edges
  const opacity = useTransform(angle, [-60, -45, 0, 45, 60], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      style={{ x, y, rotate, opacity, width: CARD_WIDTH, height: CARD_HEIGHT }}
      className={`absolute ${data.color} rounded-[2.5rem] p-10 shadow-2xl border border-white/10 flex flex-col pointer-events-none select-none z-10`}
    >
      <span className="text-[11px] bg-white/20 px-4 py-1.5 rounded-full mb-8 self-center italic font-light tracking-widest uppercase">
        {data.location}
      </span>
      <h3 className="text-4xl font-light text-center mb-6 leading-tight tracking-tight">
        {data.title}
      </h3>
      <p className="text-sm opacity-60 text-center mb-10 leading-relaxed px-6 font-light">
        {data.desc}
      </p>
      <div className="mt-auto relative flex-1 bg-black/20 rounded-3xl overflow-hidden flex items-center justify-center border border-white/5">
        <Image src="/vercel.svg" alt="placeholder" width={110} height={110} className="invert opacity-20" />
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function BluegrassLandingPage() {
  const rotationValue = useMotionValue(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Default low-velocity drift
  useAnimationFrame((time, delta) => {
    if (!isInteracting) {
      const moveBy = (delta / 1000) * -4.5; // Slightly faster drift for larger cards
      rotationValue.set(rotationValue.get() + moveBy);
    }
  });

  const handleDrag = (event, info) => {
    const sensitivity = 0.08;
    rotationValue.set(rotationValue.get() + info.delta.x * sensitivity);
  };

  return (
    <main className="w-full font-sans text-white bg-[#39586a] selection:bg-blue-400">

      {/* 1. HERO SECTION (Full Viewport) */}
      <section className="relative h-screen flex flex-col justify-end pb-20 px-10 md:px-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image src="/vercel.svg" alt="Hero Background" fill className="object-cover opacity-10 grayscale invert" />
        </div>
        <div className="max-w-7xl w-full">
          <h1 className="text-8xl md:text-[10rem] font-extralight leading-[0.85] mb-6 pr-[100px] tracking-tighter">
            Hands of the <br /> Bluegrass
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.1em] pl-[10px] mb-16 opacity-70">Explore Lexington, Kentucky</p>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (Enlarged Box) */}
      <section className="h-screen bg-[#39586a] flex items-center justify-center px-10">
        <div className="max-w-[1500px] w-full h-[80vh] grid grid-cols-1 lg:grid-cols-2 items-center border border-white/10 rounded-lg p-12 md:p-24 bg-[#324c5c] backdrop-blur-lg relative overflow-hidden">
          <div className="z-10">
            <h2 className="text-8xl font-extralight mb-12 tracking-tighter">About us</h2>
            <div className="space-y-10 text-2xl font-extralight leading-relaxed max-w-2xl opacity-80">
              <p>Hands of the Bluegrass was created to lift our community, one neighbor at a time.</p>
              <p>Rooted in the heart of Kentucky, we bring together resources, support, and people who care — because when we reach out our hands, the Bluegrass grows stronger.</p>
            </div>
            <button className="mt-14 border border-white/30 hover:bg-white hover:text-black px-12 py-4 text-xs font-bold tracking-[0.3em] transition-all">
              LEARN MORE
            </button>
          </div>
          <div className="relative h-full hidden lg:flex items-center justify-center pointer-events-none opacity-20">
            <Image src="/vercel.svg" alt="Horse Icon" width={700} height={700} className="invert transform scale-125 rotate-6" />
          </div>
        </div>
      </section>

      {/* 3. RESOURCE HUB SECTION (Infinite Arc Carousel) */}
      <section className="min-h-[100vh] flex flex-col items-center pt-24 relative select-none overflow-hidden">

        <div className="z-20 mb-[20vh]">
          <div className="px-16 py-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-2xl shadow-xl">
            <h2 className="text-6xl font-extralight tracking-tight">Resource hub</h2>
          </div>
        </div>

        {/* Interaction Surface */}
        <motion.div
          className="relative w-full h-[75vh] flex justify-center items-start cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragStart={() => setIsInteracting(true)}
          onDragEnd={() => setIsInteracting(false)}
          onDrag={handleDrag}
        >
          {/* THE WHITE ARC
              To bisect the center of the cards:
              The cards sit at y = -RADIUS + Y_OFFSET + (angle logic).
              For angle=0 (top of arc), center is exactly at Y_OFFSET - RADIUS + (CARD_HEIGHT/2).
          */}
          <div
            className="absolute border-t-[1.5px] border-white/30 rounded-[100%] pointer-events-none z-0"
            style={{
              width: RADIUS * 2,
              height: RADIUS * 2,
              // Math to place circle's top border exactly at horizontal center of top-most card
              top: `${Y_OFFSET - RADIUS + (CARD_HEIGHT / 2)}px`,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />

          {/* Render Cards */}
          {resourceData.map((data, i) => (
            <Card
              key={i}
              data={data}
              index={i}
              total={resourceData.length}
              rotationValue={rotationValue}
            />
          ))}
        </motion.div>
        
        <div className="absolute bottom-16 z-20">
          <button className="bg-white text-black px-16 py-4 text-xs font-bold tracking-[0.4em] hover:scale-105 transition-transform shadow-xl">
            EXPLORE MORE
          </button>
        </div>
      </section>

    </main>
  );
}
