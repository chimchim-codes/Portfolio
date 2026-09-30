"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Info, HelpCircle } from "lucide-react";

const SKILLS_LIST = [
  { name: "Python", category: "lang", color: "bg-vintage-brown/10 border-vintage-brown/30 text-vintage-brown" },
  { name: "Java", category: "lang", color: "bg-vintage-brown/10 border-vintage-brown/30 text-vintage-brown" },
  { name: "SQL", category: "lang", color: "bg-vintage-brown/10 border-vintage-brown/30 text-vintage-brown" },
  { name: "C", category: "lang", color: "bg-vintage-brown/10 border-vintage-brown/30 text-vintage-brown" },
  { name: "Machine Learning", category: "ai", color: "bg-muted-wine/10 border-muted-wine/30 text-muted-wine" },
  { name: "TensorFlow", category: "ai", color: "bg-muted-wine/10 border-muted-wine/30 text-muted-wine" },
  { name: "PyTorch", category: "ai", color: "bg-muted-wine/10 border-muted-wine/30 text-muted-wine" },
  { name: "Pandas", category: "ai", color: "bg-muted-wine/10 border-muted-wine/30 text-muted-wine" },
  { name: "NumPy", category: "ai", color: "bg-muted-wine/10 border-muted-wine/30 text-muted-wine" },
  { name: "Git", category: "tools", color: "bg-muted-olive/10 border-muted-olive/30 text-muted-olive" },
  { name: "Docker", category: "tools", color: "bg-muted-olive/10 border-muted-olive/30 text-muted-olive" },
  { name: "AWS", category: "tools", color: "bg-muted-olive/10 border-muted-olive/30 text-muted-olive" },
  { name: "Pygame", category: "tools", color: "bg-muted-olive/10 border-muted-olive/30 text-muted-olive" },
];

const STICKERS = [
  {
    id: "star",
    x: 40,
    y: 280,
    rotate: -10,
    render: () => (
      <svg width="55" height="55" viewBox="0 0 100 100" className="drop-shadow-md">
        <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill="#FCE22A" stroke="#222" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="38" cy="45" r="5" fill="#222" />
        <circle cx="62" cy="45" r="5" fill="#222" />
        <circle cx="36" cy="42" r="1.5" fill="#FFF" />
        <circle cx="60" cy="42" r="1.5" fill="#FFF" />
        <path d="M44,58 Q50,65 56,58" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" />
        <circle cx="30" cy="53" r="4.5" fill="#FFA5A5" opacity="0.8" />
        <circle cx="70" cy="53" r="4.5" fill="#FFA5A5" opacity="0.8" />
      </svg>
    )
  },
  {
    id: "groove-vinyl",
    x: 230,
    y: 290,
    rotate: 15,
    render: () => (
      <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-950 shadow-md flex items-center justify-center p-1 relative select-none">
        <div className="w-full h-full rounded-full border border-zinc-700 flex items-center justify-center">
          <div className="w-4/5 h-4/5 rounded-full border border-zinc-700 flex items-center justify-center">
            <div className="w-2/5 h-2/5 rounded-full bg-muted-olive flex items-center justify-center text-[5px] font-bold text-paper tracking-tighter uppercase font-mono">
              AI // DS
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "hiya-bubble",
    x: 200,
    y: 12,
    rotate: -6,
    render: () => (
      <div className="bg-paper border-2 border-charcoal rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-center font-mono text-[9px] font-black uppercase text-charcoal tracking-widest relative select-none">
        <span className="text-muted-wine">HIYA! 💫</span>
        <div className="absolute top-full left-1/4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-charcoal" />
        <div className="absolute top-full left-1/4 translate-x-[1px] translate-y-[-2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-paper" />
      </div>
    )
  },
  {
    id: "cute-flower",
    x: 280,
    y: 120,
    rotate: 12,
    render: () => (
      <svg width="45" height="45" viewBox="0 0 100 100" className="drop-shadow-md">
        <circle cx="50" cy="25" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="50" cy="75" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="25" cy="50" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="75" cy="50" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="32" cy="32" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="68" cy="68" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="32" cy="68" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="68" cy="32" r="16" fill="#865B62" stroke="#222" strokeWidth="4" />
        <circle cx="50" cy="50" r="20" fill="#C8A96A" stroke="#222" strokeWidth="4" />
        <circle cx="43" cy="47" r="2.5" fill="#222" />
        <circle cx="57" cy="47" r="2.5" fill="#222" />
        <path d="M46,55 Q50,59 54,55" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  }
];

export function SkillsLeft() {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Lab report header */}
        <div className="flex justify-between items-end border-b border-beige pb-2">
          <span className="font-mono text-[9px] text-mutedgray tracking-widest uppercase">LAB REPORT // NO. 03</span>
          <span className="font-serif text-xs italic text-vintage-brown">Core Competencies</span>
        </div>

        <h2 className="font-serif text-3xl font-light text-charcoal tracking-tight mt-4">
          The Engineering <br />
          <span className="italic font-normal text-vintage-brown">Toolbelt</span>
        </h2>

        <div className="pt-4 space-y-4 font-sans text-xs text-charcoal/90 leading-relaxed max-w-md">
          <p>
            My technical skills are categorized into three operational domains: Programming Languages, Artificial Intelligence & Machine Learning Frameworks, and Modern Developer Tools.
          </p>
          
          <div className="space-y-3 pt-2">
            <div className="flex gap-2.5 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-vintage-brown mt-1.5" />
              <div>
                <h4 className="font-serif font-bold text-charcoal">Core Programming</h4>
                <p className="text-mutedgray text-[11px] mt-0.5">Focusing on object-oriented programming (OOP), logic, and structured database operations.</p>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-wine mt-1.5" />
              <div>
                <h4 className="font-serif font-bold text-charcoal">AI & Data Analytics</h4>
                <p className="text-mutedgray text-[11px] mt-0.5">Implementing machine learning workflows, network layers, neural training, and analytical data operations.</p>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-olive mt-1.5" />
              <div>
                <h4 className="font-serif font-bold text-charcoal">DevOps & Cloud Tools</h4>
                <p className="text-mutedgray text-[11px] mt-0.5">Containerizing workflows, operating version control repositories, and structuring cloud environments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning/Notes box */}
      <div className="mt-8 bg-cream/50 p-3.5 border border-warmgray rounded flex gap-2.5 items-start max-w-[320px] self-center shadow-paper-flat">
        <Info size={16} className="text-vintage-brown shrink-0 mt-0.5" />
        <p className="font-mono text-[10px] text-mutedgray leading-normal">
          <strong className="text-charcoal block mb-0.5 uppercase tracking-wide">Methodology Note:</strong>
          Skills are represented dynamically on the desk page. They are interactive components that simulate physical cards pinned to the board.
        </p>
      </div>
    </div>
  );
}

export function SkillsRight() {
  const constraintsRef = useRef(null);

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative" ref={constraintsRef}>
      {/* Board header */}
      <div className="flex justify-between items-center border-b border-beige pb-2 mb-4">
        <h3 className="font-serif text-lg font-bold text-vintage-brown">
          Tactile Board
        </h3>
        <div className="flex items-center gap-1.5 font-handwritten text-xs text-muted-wine">
          <HelpCircle size={13} />
          <span>Click and drag to rearrange!</span>
        </div>
      </div>

      {/* Corkboard canvas area */}
      <div className="relative flex-grow bg-cream/30 border border-dashed border-warmgray rounded-lg p-4 notebook-grid min-h-[400px] overflow-hidden select-none">
        
        {/* Washi tapes holding down the corners */}
        <div className="washi-tape-horizontal absolute -top-2 left-6 w-16 h-5 opacity-70 z-20" />
        <div className="washi-tape-horizontal absolute bottom-[-4px] right-6 w-20 h-5 opacity-70 rotate-[-3deg] z-20" />

        {/* Scattered interactive elements */}
        {SKILLS_LIST.map((skill, idx) => {
          // Pre-determine initial coordinates based on index to scatter them nicely
          const xPos = 15 + (idx % 3) * 105 + Math.sin(idx) * 15;
          const yPos = 20 + Math.floor(idx / 3) * 75 + Math.cos(idx) * 10;
          
          // Random initial rotation
          const initialRot = (idx % 2 === 0 ? 1 : -1) * (3 + (idx % 5));

          return (
            <motion.div
              key={skill.name}
              drag
              dragConstraints={constraintsRef}
              dragTransition={{ power: 0.1, bounceStiffness: 200, bounceDamping: 20 }}
              initial={{ 
                x: xPos, 
                y: yPos, 
                rotate: initialRot,
                opacity: 0,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1,
                scale: 1
              }}
              whileDrag={{ 
                scale: 1.12, 
                rotate: initialRot * 1.5,
                zIndex: 100,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.05
              }}
              className={`absolute cursor-grab active:cursor-grabbing font-mono text-xs font-semibold px-4 py-2 border rounded shadow-paper-flat select-none transition-shadow duration-300
                ${skill.color} hover:shadow-paper-lift
              `}
              style={{
                top: 0,
                left: 0,
              }}
            >
              {/* Simulated metal pinning dot */}
              <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-400 shadow-inner border border-zinc-500/30 opacity-70" />
              
              <span className="block mt-1">{skill.name}</span>
            </motion.div>
          );
        })}

        {/* Scattered interactive stickers */}
        {STICKERS.map((stk) => (
          <motion.div
            key={stk.id}
            drag
            dragConstraints={constraintsRef}
            dragTransition={{ power: 0.1, bounceStiffness: 200, bounceDamping: 20 }}
            initial={{ 
              x: stk.x, 
              y: stk.y, 
              rotate: stk.rotate,
              opacity: 0,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1,
              scale: 1
            }}
            whileDrag={{ 
              scale: 1.15, 
              rotate: stk.rotate * 1.5,
              zIndex: 110,
            }}
            className="absolute cursor-grab active:cursor-grabbing select-none"
            style={{
              top: 0,
              left: 0,
            }}
          >
            {stk.render()}
          </motion.div>
        ))}

        {/* Background handwritten doodle */}
        <div className="absolute right-4 bottom-4 font-handwritten text-lg text-vintage-brown/20 select-none rotate-[8deg]">
          Sharon&apos;s Lab
        </div>
      </div>
    </div>
  );
}
