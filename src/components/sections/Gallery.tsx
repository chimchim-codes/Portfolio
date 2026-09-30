"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Award, ZoomIn, X, Pin } from "lucide-react";

// Mock images/illustrations using SVG patterns to avoid third-party loading broken urls
const GALLERY_MEMORIES = [
  {
    title: "AJCE Hackathon 2025",
    desc: "AI Prototype Phase",
    rotation: "rotate-[-3deg]",
    color: "from-vintage-brown/20 to-antique-gold/20",
    doodle: "/* Code & Coffee */"
  },
  {
    title: "INIT Society Launch",
    desc: "Inaugural Content Lead",
    rotation: "rotate-[2deg]",
    color: "from-muted-wine/20 to-muted-olive/20",
    doodle: "// Technical division"
  },
  {
    title: "Industrial Visit 2026",
    desc: "Bangalore Tech Hub",
    rotation: "rotate-[-1.5deg]",
    color: "from-dusty-sage/20 to-muted-olive/20",
    doodle: "# Bangalore IV"
  },
  {
    title: "Campus AI Workshop",
    desc: "Deep Learning Instructor",
    rotation: "rotate-[3deg]",
    color: "from-antique-gold/20 to-muted-wine/20",
    doodle: "/* PyTorch basics */"
  }
];

const CERTIFICATES = [
  {
    title: "Machine Learning Specialist",
    issuer: "Google Cloud Skill Boost",
    date: "Dec 2025",
    color: "bg-amber-50/60 border-amber-200/50 text-amber-900",
    sealColor: "border-amber-400 text-amber-600"
  },
  {
    title: "Data Analytics Professional",
    issuer: "Coursera / IBM Career Path",
    date: "Oct 2025",
    color: "bg-indigo-50/60 border-indigo-200/50 text-indigo-900",
    sealColor: "border-indigo-400 text-indigo-600"
  },
  {
    title: "Neural Networks & Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Aug 2025",
    color: "bg-rose-50/60 border-rose-200/50 text-rose-900",
    sealColor: "border-rose-400 text-rose-600"
  }
];

export function GalleryLeft() {
  const [selectedImg, setSelectedImg] = useState<typeof GALLERY_MEMORIES[0] | null>(null);

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Gallery headers */}
        <div className="flex justify-between items-end border-b border-beige pb-2">
          <span className="font-mono text-[9px] text-mutedgray tracking-widest uppercase">PINBOARD // VOL. VI</span>
          <span className="font-serif text-xs italic text-vintage-brown">Memories & Snippets</span>
        </div>

        <h2 className="font-serif text-3xl font-light text-charcoal tracking-tight mt-4">
          The Scrapbook <br />
          <span className="italic font-normal text-vintage-brown">Pinboard</span>
        </h2>

        {/* Polaroid Pinterest Collage */}
        <div className="grid grid-cols-2 gap-4 pt-4 relative select-none">
          {GALLERY_MEMORIES.map((mem, idx) => (
            <motion.div
              key={mem.title}
              onClick={() => setSelectedImg(mem)}
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
              className={`bg-[#FBFAF7] p-2.5 pb-4 border border-warmgray shadow-paper-flat hover:shadow-paper-lift transition-all duration-300 rounded cursor-zoom-in ${mem.rotation} relative`}
            >
              {/* Tape visual pinning the photo */}
              <div className="washi-tape-horizontal absolute -top-3 left-6 w-16 h-4 opacity-75 z-20" style={{ transform: `rotate(${idx % 2 === 0 ? -3 : 2}deg)` }} />

              {/* Photo placeholder frame using colored gradient and styling */}
              <div className={`w-full h-24 bg-gradient-to-br ${mem.color} border border-warmgray/40 flex flex-col justify-between p-2 relative overflow-hidden`}>
                <ImageIcon className="text-vintage-brown/20 absolute -right-2 -bottom-2" size={48} />
                <span className="font-mono text-[8px] text-vintage-brown/65">{mem.doodle}</span>
                <span className="font-mono text-[7px] text-mutedgray/70 self-end">AJCE_2025.raw</span>
              </div>
              
              <div className="mt-2.5 space-y-0.5">
                <h4 className="font-serif text-[11px] font-semibold text-charcoal truncate">
                  {mem.title}
                </h4>
                <p className="font-handwritten text-[10px] text-muted-wine italic">
                  {mem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-zinc-950/80 z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FBFAF7] p-4 pb-8 max-w-sm w-full rounded border border-warmgray shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-charcoal hover:text-vintage-brown p-1 bg-cream/50 rounded-full"
              >
                <X size={16} />
              </button>

              <div className={`w-full h-56 bg-gradient-to-br ${selectedImg.color} border border-warmgray/60 flex items-center justify-center relative rounded-sm`}>
                <ImageIcon className="text-vintage-brown/25" size={64} />
                <span className="absolute bottom-2 left-2 font-mono text-[9px] text-vintage-brown/70">{selectedImg.doodle}</span>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  {selectedImg.title}
                </h3>
                <p className="font-handwritten text-base text-muted-wine mt-1">
                  {selectedImg.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pinned label memo at bottom */}
      <div className="mt-6 flex items-center gap-1.5 font-handwritten text-xs text-muted-olive pl-2">
        <Pin size={12} className="rotate-45" />
        <span>Taped snapshots from college seminars and hackathon projects.</span>
      </div>
    </div>
  );
}

export function GalleryRight() {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Section header */}
        <h3 className="font-serif text-lg font-bold text-vintage-brown border-b border-beige pb-1 flex items-center gap-2">
          <Award size={18} className="text-antique-gold" />
          Technical Credentials
        </h3>

        {/* Stack of certificates */}
        <div className="space-y-5 pt-2">
          {CERTIFICATES.map((cert, idx) => {
            // Alternating rotations
            const rotations = ["rotate-[1deg]", "rotate-[-1.5deg]", "rotate-[0.5deg]"];
            const rot = rotations[idx % rotations.length];

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.025, rotate: 0, zIndex: 10 }}
                className={`p-4 border rounded shadow-paper-flat hover:shadow-paper-lift transition-all duration-300 relative ${cert.color} ${rot}`}
              >
                {/* Visual copper pin at top-left */}
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-zinc-500 shadow-inner border border-zinc-600/30 opacity-70" />

                <div className="pl-3 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-mutedgray font-semibold block">
                      {cert.issuer}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-charcoal">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-[9px] text-mutedgray">
                      Granted: {cert.date}
                    </p>
                  </div>

                  {/* Simulated circular wax certificate seal */}
                  <div className={`w-8 h-8 rounded-full border-2 border-double ${cert.sealColor} flex items-center justify-center text-[7px] font-mono font-bold tracking-tighter shrink-0 rotate-12 opacity-80`}>
                    SEAL
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative notebook doodle stamp */}
      <div className="mt-8 self-center border-2 border-double border-muted-wine/20 px-3 py-1.5 rounded rotate-6 text-center select-none opacity-80">
        <span className="font-mono text-[8px] text-muted-wine/60 block tracking-widest font-bold">VERIFIED SKILLS</span>
        <span className="font-handwritten text-[10px] text-muted-wine mt-0.5 block">AI/DS DEPT EXAMS</span>
      </div>
    </div>
  );
}
