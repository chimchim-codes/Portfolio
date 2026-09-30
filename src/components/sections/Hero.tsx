"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export function HeroLeft() {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 relative h-full">
      {/* Polaroid Profile Picture */}
      <motion.div 
        initial={{ rotate: -5, y: 10, opacity: 0 }}
        animate={{ rotate: -3, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="self-center bg-[#FAF8F5] p-3 pb-6 shadow-paper-stacked border border-warmgray max-w-[240px] relative hover:rotate-1 hover:shadow-paper-lift transition-all duration-300 transform"
      >
        {/* Washi tape pinning the polaroid */}
        <div className="washi-tape-horizontal absolute -top-4 left-10 w-24 h-6 opacity-85 z-20" />
        
        {/* Profile Image Frame (Artistic AI/DS themed silhouette illustration) */}
        <div className="w-48 h-48 bg-cream border border-warmgray overflow-hidden flex items-center justify-center relative">
          <img 
            src="/profile.jpg" 
            alt="Sharon Elsa Sam Portrait"
            className="w-full h-full object-cover filter sepia-[0.1] hover:filter-none transition-all duration-300"
          />
          
          <div className="absolute bottom-2 left-2 text-[8px] font-mono text-mutedgray tracking-wider bg-paper/80 px-1 border border-warmgray/50">
            SYSTEM_INIT // ACTIVE
          </div>
        </div>
        
        {/* Caption */}
        <p className="mt-3 text-center font-handwritten text-lg text-charcoal tracking-wide">
          Sharon Elsa Sam
        </p>
      </motion.div>

      {/* Contact Index Card Pinned with Paper Clip */}
      <motion.div 
        initial={{ rotate: 3, y: 15, opacity: 0 }}
        animate={{ rotate: 1.5, y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="mt-6 bg-[#FBFAF7] p-5 border border-warmgray shadow-paper-flat max-w-[290px] self-center relative hover:scale-102 hover:shadow-paper-lift transition-all duration-300"
      >
        {/* Paper Clip SVG pinned to card */}
        <div className="absolute -top-4 right-8 w-6 h-10 z-20 pointer-events-none">
          <svg viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-zinc-400 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.15)]">
            <path d="M16 12V28C16 31.3 13.3 34 10 34C6.7 34 4 31.3 4 28V8C4 5.8 5.8 4 8 4C10.2 4 12 5.8 12 8V24C12 25.1 11.1 26 10 26C8.9 26 8 25.1 8 24V12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="font-serif text-sm italic text-vintage-brown border-b border-beige pb-1 mb-2">
          Identity / Card
        </h3>
        
        <div className="space-y-1 font-mono text-[10px] text-mutedgray">
          <p><span className="text-charcoal font-semibold">DEPT:</span> B.Tech AI & Data Science</p>
          <p><span className="text-charcoal font-semibold">CLASS:</span> Year II, AJCE</p>
          <p><span className="text-charcoal font-semibold">FOCUS:</span> ML, Back-End, Optimization</p>
          <p><span className="text-charcoal font-semibold">LOC:</span> Kerala, India</p>
        </div>

        {/* Small ink stamp representation */}
        <div className="absolute bottom-2 right-2 border-2 border-dashed border-muted-wine/30 rounded px-1.5 py-0.5 text-[8px] font-mono text-muted-wine/60 uppercase tracking-widest rotate-12">
          APPROVED
        </div>
      </motion.div>

      {/* Handwritten notes at bottom */}
      <div className="mt-6 pl-4 border-l-2 border-dashed border-beige">
        <p className="font-handwritten text-base text-muted-wine leading-tight rotate-[-1deg]">
          * currently learning pytorch & advanced graph traversal algorithms
        </p>
        <p className="font-handwritten text-sm text-muted-olive leading-tight mt-1">
          - update: FlyRank internship ongoing!
        </p>
      </div>
    </div>
  );
}

export function HeroRight() {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      
      {/* Title & Introduction */}
      <div className="space-y-4">
        {/* Vintage typography stamp effect */}
        <div className="inline-block border border-vintage-brown/20 bg-cream/30 text-vintage-brown font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded">
          PORTFOLIO CAT. 24ES-08
        </div>
        
        <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal tracking-tight leading-[1.05] mt-2">
          My <br />
          <span className="italic font-normal text-vintage-brown">Notebook</span>.
        </h1>

        <div className="pt-2 border-t border-beige">
          <h2 className="font-serif text-2xl text-charcoal font-medium">
            Sharon Elsa Sam
          </h2>
          <p className="font-mono text-xs text-mutedgray tracking-wider uppercase mt-1">
            Second-Year B.Tech AI & DS Student
          </p>
        </div>

        {/* Roles list representing editorial labels */}
        <div className="flex flex-wrap gap-2 pt-4">
          {[
            { label: "Backend AI Engineer", color: "border-muted-wine text-muted-wine bg-muted-wine/5" },
            { label: "Machine Learning Enthusiast", color: "border-muted-olive text-muted-olive bg-muted-olive/5" },
            { label: "Creative Technologist", color: "border-vintage-brown text-vintage-brown bg-vintage-brown/5" },
            { label: "Problem Solver", color: "border-antique-gold text-antique-gold bg-antique-gold/5" }
          ].map((role, i) => (
            <span 
              key={i} 
              className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border rounded-full ${role.color} shadow-sm`}
            >
              {role.label}
            </span>
          ))}
        </div>

        {/* Coffee cup stain watermark effect */}
        <div className="absolute right-4 bottom-28 w-24 h-24 coffee-stain pointer-events-none opacity-40 z-0" />

        <p className="text-sm text-charcoal/80 font-sans leading-relaxed pt-4 max-w-md relative z-10">
          Welcome to my digital scrapbook. As an AI & Data Science engineering student, I combine logical frameworks, advanced mathematics, and creative software systems to craft intelligent solutions. Flip through the pages to check my projects, experience, and academic journey.
        </p>
      </div>

      {/* Call to action & Socials (Visual Stationery Tags) */}
      <div className="mt-8 space-y-4 relative z-10">
        <div className="flex flex-wrap gap-3">
          {/* Resume Tab Button */}
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-vintage-brown text-paper rounded font-mono text-xs uppercase tracking-widest shadow-paper-flat hover:shadow-paper-lift hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200"
          >
            <FileDown size={14} className="group-hover:translate-y-[1px] transition-transform" />
            Resume
            {/* Tab fold styling */}
            <span className="absolute -top-[1px] right-2 w-2 h-2 bg-paper/20 rounded-bl" />
          </a>

          {/* Social Icons */}
          {[
            { href: "https://github.com/shaelsam-07", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/sharon-elsa-sam/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:sharonelsasam@gmail.com", icon: Mail, label: "Email" }
          ].map((soc, i) => {
            const Icon = soc.icon;
            return (
              <a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-2.5 bg-cream hover:bg-paper text-charcoal border border-warmgray rounded shadow-paper-flat hover:shadow-paper-lift hover:translate-y-[-1px] transition-all duration-200 group"
                title={soc.label}
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            );
          })}
        </div>

        {/* Mini handwritten nudge */}
        <div className="flex items-center gap-2 text-xs font-handwritten text-muted-wine pl-1">
          <span>Click the notebook index tabs on the right to flip pages</span>
          <span className="w-12 h-4 doodle-arrow opacity-80" />
        </div>
      </div>

    </div>
  );
}
