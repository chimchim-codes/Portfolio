"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Award, Calendar, CheckSquare } from "lucide-react";

interface ExperienceProps {
  activeExpIdx: number;
  setActiveExpIdx: (idx: number) => void;
}

export const EXPERIENCES = [
  {
    company: "FlyRank",
    role: "Backend AI Engineering Intern",
    period: "August 2025 - Present",
    type: "Internship",
    color: "border-muted-wine text-muted-wine bg-muted-wine/5",
    achievements: [
      "Architected and integrated backend AI processing scripts, enabling automated data scraping and search indexing optimizations.",
      "Collaborated on designing machine learning feature engineering pipelines to process massive user search queries.",
      "Optimized modular server-side architectures, reducing API latency and improving query lookup performance."
    ],
    tech: ["Python", "Machine Learning", "FastAPI", "SQL", "Git"]
  },
  {
    company: "INIT Society",
    role: "Content Lead",
    period: "July 2026 - July 2027",
    type: "Leadership Role",
    color: "border-muted-olive text-muted-olive bg-muted-olive/5",
    achievements: [
      "Directing the content division for the INIT academic society, managing publications, technical articles, and newsletters.",
      "Coordinating writing workshops and organizing panel discussions regarding artificial intelligence trends and engineering.",
      "Bridging the communication gap between student development teams and administrative coordinators."
    ],
    tech: ["Content Strategy", "Technical Writing", "Coordination"]
  },
  {
    company: "AJCE Student Council",
    role: "Student Representative",
    period: "August 2025 - June 2026",
    type: "Student Government",
    color: "border-vintage-brown text-vintage-brown bg-vintage-brown/5",
    achievements: [
      "Elected student representative of the Amal Jyothi College of Engineering Student Council.",
      "Served as a vocal liaison between 500+ engineering students and collegiate administrative boards.",
      "Organized technical college festivals, student seminars, and inter-collegiate hackathons."
    ],
    tech: ["Leadership", "Public Speaking", "Event Management"]
  }
];

export function ExperienceLeft({ activeExpIdx, setActiveExpIdx }: ExperienceProps) {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Document tag header */}
        <div className="flex justify-between items-end border-b border-beige pb-2">
          <span className="font-mono text-[9px] text-mutedgray tracking-widest uppercase">OFFICIAL RECORD // VOL. IV</span>
          <span className="font-serif text-xs italic text-vintage-brown">Professional Dossier</span>
        </div>

        <h2 className="font-serif text-3xl font-light text-charcoal tracking-tight mt-4">
          Experience & <br />
          <span className="italic font-normal text-vintage-brown">Leadership</span>
        </h2>

        <p className="font-sans text-xs text-mutedgray leading-relaxed max-w-sm">
          Select an official folder below to open its specific record sheet on the desk page.
        </p>

        {/* Stack of interactive folder slips */}
        <div className="pt-6 space-y-4 relative">
          {EXPERIENCES.map((exp, idx) => {
            const isActive = activeExpIdx === idx;
            
            // Layout offsets to represent physical stacking
            const rotateDeg = idx === 0 ? -1 : idx === 1 ? 1.5 : -1.5;
            
            return (
              <button
                key={exp.company}
                onClick={() => setActiveExpIdx(idx)}
                className={`w-full text-left p-4 rounded-lg border shadow-paper-flat transition-all duration-300 transform flex items-center justify-between relative
                  ${isActive 
                    ? "bg-paper border-l-4 border-l-vintage-brown translate-x-2 -rotate-1 shadow-paper-lift z-20" 
                    : "bg-cream/50 border-warmgray hover:bg-paper hover:translate-x-1"
                  }
                `}
                style={{
                  transform: isActive ? "rotate(-1deg) translateX(8px)" : `rotate(${rotateDeg}deg)`,
                  marginTop: idx === 0 ? "0px" : "-8px",
                }}
              >
                {/* Washi tape visual on folder */}
                {isActive && (
                  <div className="washi-tape-horizontal absolute -top-3.5 left-8 w-16 h-4.5 opacity-80 z-20" />
                )}

                <div className="space-y-1">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted-olive font-bold">
                    {exp.type}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-charcoal">
                    {exp.company}
                  </h4>
                  <p className="font-sans text-[10px] text-mutedgray">
                    {exp.role}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-vintage-brown font-semibold bg-beige/30 px-1.5 py-0.5 rounded">
                  <Calendar size={10} />
                  {exp.period.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Decorative badge / stamp */}
      <div className="mt-8 self-center border border-dashed border-muted-olive/30 px-4 py-2 rounded text-center rotate-[-4deg]">
        <span className="font-mono text-[9px] text-muted-olive/70 block uppercase tracking-widest">OFFICIAL ARCHIVE</span>
        <span className="font-handwritten text-xs text-muted-olive mt-0.5 block">AJCE Student Body</span>
      </div>
    </div>
  );
}

export function ExperienceRight({ activeExpIdx }: ExperienceProps) {
  const currentExp = EXPERIENCES[activeExpIdx];

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentExp.company}
          initial={{ opacity: 0, y: 15, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -15, rotate: -1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#FBFAF7] p-5 border border-warmgray shadow-paper-stacked rounded-lg relative min-h-[420px] flex flex-col justify-between"
        >
          {/* Notebook binder rings hole simulation on top margin */}
          <div className="absolute top-2 left-6 right-6 flex justify-between pointer-events-none opacity-40">
            <div className="w-1.5 h-3 rounded-full bg-zinc-950/70 border border-warmgray" />
            <div className="w-1.5 h-3 rounded-full bg-zinc-950/70 border border-warmgray" />
          </div>

          <div className="space-y-4 pt-3">
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-beige pb-3">
              <div>
                <span className="font-mono text-[8px] text-muted-wine font-bold uppercase bg-muted-wine/5 border border-muted-wine/20 px-2 py-0.5 rounded-full">
                  {currentExp.type}
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal mt-1.5">
                  {currentExp.company}
                </h3>
                <p className="font-serif text-sm italic text-vintage-brown">
                  {currentExp.role}
                </p>
              </div>
              <div className="text-right font-mono text-[10px] text-mutedgray space-y-0.5">
                <p className="font-semibold">{currentExp.period}</p>
                <p className="italic">Status: Active</p>
              </div>
            </div>

            {/* Achievements checklist */}
            <div className="space-y-3 font-sans text-xs text-charcoal/90">
              <h4 className="font-mono text-[9px] uppercase tracking-wider text-muted-olive font-bold flex items-center gap-1.5">
                <CheckSquare size={11} />
                Key Responsibilities / Outcomes
              </h4>
              <ul className="space-y-2.5 pl-1.5">
                {currentExp.achievements.map((ach, idx) => (
                  <li key={idx} className="flex gap-2 items-start leading-relaxed font-light">
                    <span className="w-1 h-1 rounded-full bg-vintage-brown shrink-0 mt-1.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Applied technologies list */}
          <div className="mt-8 pt-4 border-t border-beige">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-mutedgray font-bold mb-2">
              Associated Skillsets
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {currentExp.tech.map((t) => (
                <span 
                  key={t}
                  className="font-mono text-[9px] uppercase px-2 py-0.5 border border-warmgray rounded bg-cream/35 text-charcoal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Ink stamp signature visual */}
          <div className="absolute bottom-4 right-4 border border-muted-wine/30 rounded px-2 py-1 text-[8px] font-mono text-muted-wine/50 tracking-widest uppercase rotate-[15deg]">
            CERTIFIED CO. // OK
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
