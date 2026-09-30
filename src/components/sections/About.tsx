"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, BookOpen, Music, Film, Quote } from "lucide-react";

export function AboutLeft() {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Magazine Editorial header */}
        <div className="flex justify-between items-end border-b border-beige pb-2">
          <span className="font-mono text-[9px] text-mutedgray tracking-widest uppercase">BIOGRAPHY // SECTION 02</span>
          <span className="font-serif text-xs italic text-vintage-brown">The Journal of Sharon</span>
        </div>

        <h2 className="font-serif text-3xl font-light text-charcoal tracking-tight mt-4">
          A Passion for <br />
          <span className="italic font-normal text-vintage-brown">Intelligent Software</span>
        </h2>

        {/* Biography text with drop cap */}
        <div className="pt-4 text-xs text-charcoal/90 leading-relaxed font-sans space-y-4 max-w-md">
          <p className="indent-4">
            <span className="float-left text-4xl font-serif font-light text-vintage-brown mr-2 mt-1 leading-[0.8] border border-beige p-1 bg-cream/40">H</span>
            ello! I&apos;m Sharon Elsa Sam, an Artificial Intelligence & Data Science Engineering student at Amal Jyothi College of Engineering. I am deeply passionate about designing and building intelligent, scalable, and practical software systems that resolve real-world problems.
          </p>
          <p>
            My engineering journey is driven by a curiosity for understanding how data and machine learning algorithms can be integrated with robust backend architectures. By combining analytical discipline with creative development, I build projects that bridge the gap between machine computation and human utility.
          </p>
          <p>
            I active engage in engineering workshops, technical societies, hackathons, and software development internships. Through these, I work to constantly refine my capabilities in data analytics, deep learning models, backend scalability, and OOP principles.
          </p>
        </div>
      </div>

      {/* Sticky Note with Quote */}
      <motion.div 
        initial={{ rotate: 2, scale: 0.95, opacity: 0 }}
        animate={{ rotate: -2, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 bg-beige/40 p-4 shadow-paper-flat border border-warmgray rounded relative max-w-[320px] self-center"
      >
        {/* Pinned pushpin/tape look */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-muted-wine/25 shadow-sm rounded-sm" />
        
        <Quote className="text-muted-wine/40 mb-1" size={18} />
        <p className="font-handwritten text-base text-charcoal/95 leading-snug">
          &ldquo;I believe great technology is built by combining analytical thinking, creative curiosity, and a commitment to continuous learning.&rdquo;
        </p>
        
        <div className="mt-2 text-right">
          <span className="font-mono text-[9px] text-mutedgray tracking-wider uppercase">— Personal Creed</span>
        </div>
      </motion.div>
    </div>
  );
}

export function AboutRight() {
  const education = [
    {
      degree: "B.Tech in AI & Data Science",
      institution: "Amal Jyothi College of Engineering",
      period: "2024 — Present (Year II)",
      details: "Focusing on Graph Theory, Statistics, Database Systems, Python OOP, Data Structures, and Foundations of Machine Learning."
    }
  ];

  const interests = [
    { category: "Books", icon: BookOpen, items: ["Jane Eyre", "The Love Hypothesis", "The Midnight Library", "The Alchemist", "The Book Thief"] },
    { category: "Movies", icon: Film, items: ["Pride & Prejudice", "The NoteBook", "Jerry Maguire", "Jumanji", "10 Things I Hate About You"] },
    { category: "Music", icon: Music, items: ["Ambient Lofi", "Classic Jazz", "Cinematic Orchestrations"] }
  ];

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      {/* Education Timeline (Lined Paper Layout) */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold text-vintage-brown border-b border-beige pb-1">
          Academic Timeline
        </h3>
        
        {/* School folder design wrapper */}
        <div className="bg-cream/40 p-4 border border-warmgray rounded shadow-paper-flat relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-3 w-[1.5px] bg-red-400/20" /> {/* Inner margin line */}
          
          <div className="pl-6 space-y-4 font-sans text-xs">
            {education.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-vintage-brown shadow-sm" />
                
                <span className="font-mono text-[9px] text-muted-olive tracking-widest font-semibold block uppercase">
                  {edu.period}
                </span>
                
                <h4 className="font-serif text-sm font-semibold text-charcoal mt-1">
                  {edu.degree}
                </h4>
                
                <p className="font-mono text-[10px] text-mutedgray mt-0.5">
                  {edu.institution}
                </p>
                
                <p className="text-mutedgray mt-2 leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pinned Interests Notebook (Creative index slips) */}
      <div className="mt-8 space-y-4">
        <h3 className="font-serif text-lg font-bold text-vintage-brown border-b border-beige pb-1 flex items-center gap-2">
          <Heart size={16} className="text-muted-wine" />
          Creative Fuel
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {interests.map((int, i) => {
            const Icon = int.icon;
            
            // Random slight rotation for scrapbook look
            const rotations = ["rotate-[-1deg]", "rotate-[1deg]", "rotate-[-1.5deg]"];
            const rotation = rotations[i % rotations.length];
            
            return (
              <div 
                key={i} 
                className={`bg-[#FBFAF7] p-3 border border-warmgray shadow-paper-flat rounded ${rotation} flex flex-col justify-between hover:rotate-0 hover:shadow-paper-lift transition-all duration-300`}
              >
                <div className="flex items-center gap-1.5 text-vintage-brown border-b border-beige pb-1.5 mb-2">
                  <Icon size={12} />
                  <span className="font-mono text-[10px] uppercase font-semibold tracking-wider">
                    {int.category}
                  </span>
                </div>
                
                <ul className="space-y-1 font-handwritten text-charcoal/90 text-sm">
                  {int.items.map((item, idx) => (
                    <li key={idx} className="leading-tight">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
