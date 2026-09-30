"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, User, Code, Calendar, 
  Wrench, Image as ImageIcon, Mail, FileText 
} from "lucide-react";

interface NotebookFrameProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  leftPage: React.ReactNode;
  rightPage: React.ReactNode;
}

export const TABS = [
  { id: "home", label: "Home", icon: BookOpen, color: "bg-vintage-brown" },
  { id: "about", label: "About", icon: User, color: "bg-muted-olive" },
  { id: "skills", label: "Skills", icon: Wrench, color: "bg-dusty-sage" },
  { id: "experience", label: "Experience", icon: Calendar, color: "bg-antique-gold" },
  { id: "projects", label: "Projects", icon: Code, color: "bg-muted-wine" },
  { id: "gallery", label: "Gallery", icon: ImageIcon, color: "bg-vintage-brown" },
  { id: "contact", label: "Contact", icon: Mail, color: "bg-muted-olive" },
];

const Flower = ({ 
  mousePos, 
  className = "", 
  color = "text-dusty-sage", 
  scale = 1, 
  xOffset = 30, 
  yOffset = 30 
}: { 
  mousePos: { x: number; y: number };
  className?: string; 
  color?: string; 
  scale?: number; 
  xOffset?: number; 
  yOffset?: number; 
}) => {
  return (
    <div 
      className={`absolute pointer-events-none transition-transform duration-500 ease-out z-0 hidden md:block ${className}`}
      style={{
        transform: `translate(${mousePos.x * xOffset}px, ${mousePos.y * yOffset}px) scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <svg viewBox="0 0 100 100" className={`w-28 h-28 ${color} filter drop-shadow-[2px_4px_6px_rgba(27,22,19,0.2)]`}>
        {/* Stem (wavy) */}
        <path d="M50 50 Q45 80 52 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        {/* Leaf */}
        <path d="M48 70 Q32 65 41 57 Q45 63 48 70 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="0.5" />
        {/* Petals */}
        {Array.from({ length: 8 }).map((_, idx) => {
          const rotation = idx * 45;
          return (
            <path
              key={idx}
              d="M50 50 C38 32 62 32 50 50 Z"
              fill="currentColor"
              className="origin-center"
              style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "50px 50px" }}
              opacity="0.85"
            />
          );
        })}
        {/* Center core */}
        <circle cx="50" cy="50" r="7.5" fill="#C8A96A" />
        {/* Smile face on core */}
        <circle cx="47.5" cy="48.5" r="1.2" fill="#222" />
        <circle cx="52.5" cy="48.5" r="1.2" fill="#222" />
        <path d="M48.5 52 Q50 53.5 51.5 52" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default function NotebookFrame({ activeTab, setActiveTab, leftPage, rightPage }: NotebookFrameProps) {
  // Binder ring generator for realistic 3D notebook binder spirals
  const rings = Array.from({ length: 9 });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="desk-surface min-h-screen w-full py-8 md:py-12 px-4 flex items-center justify-center select-none overflow-y-auto relative">
      {/* Interactive flower elements reacting to the mouse */}
      <Flower mousePos={mousePos} className="top-6 left-6 text-dusty-sage" scale={0.9} xOffset={25} yOffset={25} />
      <Flower mousePos={mousePos} className="bottom-12 left-10 text-muted-wine" scale={1.1} xOffset={-35} yOffset={-35} />
      <Flower mousePos={mousePos} className="top-10 right-20 text-muted-olive" scale={0.8} xOffset={40} yOffset={30} />
      <Flower mousePos={mousePos} className="bottom-8 right-12 text-vintage-brown" scale={1.0} xOffset={-20} yOffset={20} />
      <Flower mousePos={mousePos} className="top-1/3 left-1/4 text-beige opacity-40" scale={0.7} xOffset={15} yOffset={15} />

      {/* Light source overlay (Simulating studio warm light from top-left) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(251,250,247,0.12)_0%,rgba(0,0,0,0)_60%)] z-10" />

      {/* Main Notebook Container */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center z-20">
        
        {/* Notebook Tabs (Desktop Sidebar Right) */}
        <div className="hidden lg:flex flex-col gap-3 absolute -right-[68px] top-12 z-30">
          {TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 rounded-r-lg font-mono text-xs uppercase tracking-widest text-charcoal border-y border-r border-warmgray transition-all duration-300 transform origin-left shadow-paper-flat flex items-center gap-2
                  ${isActive 
                    ? "bg-paper text-vintage-brown font-bold pl-6 translate-x-1 shadow-paper-lift border-l-4 border-l-vintage-brown z-40" 
                    : "bg-cream hover:bg-paper hover:translate-x-1"
                  }
                `}
                style={{
                  marginTop: idx === 0 ? "0px" : "-6px",
                  zIndex: isActive ? 50 : 20 - idx,
                }}
              >
                <Icon size={14} className={isActive ? "text-vintage-brown" : "text-mutedgray"} />
                {tab.label}
                
                {/* Visual binder tag holes */}
                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-900/10 shadow-inner" />
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="lg:hidden w-full flex flex-wrap gap-1.5 justify-center mb-4 z-30">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-wider shadow-paper-flat transition-all duration-200
                  ${isActive 
                    ? "bg-paper text-vintage-brown font-bold border-b-2 border-vintage-brown" 
                    : "bg-cream text-mutedgray"
                  }
                `}
              >
                <Icon size={12} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* The Notebook Wrapper */}
        <div className="w-full bg-cream rounded-2xl shadow-paper-lift paper-grain border border-warmgray flex flex-col md:flex-row relative min-h-[750px] overflow-hidden">
          
          {/* Notebook Lined Paper Margin Overlay on Left Spine */}
          <div className="absolute inset-y-0 left-[50%] -translate-x-[0.5px] w-[1px] bg-zinc-400/30 z-30 hidden md:block" />

          {/* Realistic Metallic Binder Spiral Rings */}
          <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-8 flex flex-col justify-around py-8 pointer-events-none z-40 hidden md:flex">
            {rings.map((_, i) => (
              <div key={i} className="relative w-7 h-10 my-2 flex items-center justify-center">
                {/* Left Hole on Page */}
                <div className="absolute right-4 w-2 h-3 rounded-full bg-zinc-950/70 border border-warmgray/50 shadow-inner" />
                
                {/* Right Hole on Page */}
                <div className="absolute left-4 w-2 h-3 rounded-full bg-zinc-950/70 border border-warmgray/50 shadow-inner" />

                {/* 3D Metal Loop */}
                <div className="absolute w-5 h-8 rounded-full border-[2.5px] border-l-zinc-300 border-t-zinc-400 border-r-zinc-500 border-b-zinc-400 shadow-[2px_3px_4px_rgba(0,0,0,0.4)] bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-500 opacity-95" />
                
                {/* Shadow cast on paper */}
                <div className="absolute -right-2 top-2 w-4 h-6 rounded-full bg-black/15 blur-[2px] transform rotate-12" />
              </div>
            ))}
          </div>

          {/* Left Page (Spans half width on desktop, full width on mobile) */}
          <div className="w-full md:w-1/2 bg-paper paper-grain border-r border-warmgray shadow-paper-flat p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[500px] md:min-h-full">
            {/* Lined paper margin details */}
            <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-red-400/15 hidden md:block" />
            
            {/* Binder holes left edge */}
            <div className="absolute right-2 inset-y-0 flex flex-col justify-around py-8 pointer-events-none md:hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-zinc-900/70 shadow-inner" />
              ))}
            </div>

            {/* Inner dynamic content wrapper */}
            <div className="relative z-10 flex-grow flex flex-col h-full">
              {leftPage}
            </div>

            {/* Notebook Margin Footer */}
            <div className="relative mt-8 pt-4 border-t border-beige flex justify-between items-center text-[10px] font-mono text-mutedgray z-10">
              <span>SHARON ELSA SAM — 2026</span>
              <span className="uppercase">STUDENT PORTFOLIO / VOL. I</span>
            </div>
          </div>

          {/* Right Page (Spans half width on desktop, stacked on mobile) */}
          <div className="w-full md:w-1/2 bg-paper paper-grain p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border-t md:border-t-0 border-warmgray min-h-[500px] md:min-h-full">
            {/* Lined paper margin details */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-400/15 hidden md:block" />

            {/* Binder holes right edge (mobile only) */}
            <div className="absolute left-2 inset-y-0 flex flex-col justify-around py-8 pointer-events-none md:hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-zinc-900/70 shadow-inner" />
              ))}
            </div>

            {/* Content injection slot on right page */}
            <div className="relative z-10 flex-grow flex flex-col h-full justify-between">
              {rightPage}
            </div>

            {/* Page Numbering & Footer */}
            <div className="relative mt-8 pt-4 border-t border-beige flex justify-between items-center text-[10px] font-mono text-mutedgray z-10">
              <span className="uppercase">DEPARTMENT OF AI & DS</span>
              <span>PAGE NO. {activeTab === "home" ? "01" : activeTab === "about" ? "02" : activeTab === "skills" ? "03" : activeTab === "experience" ? "04" : activeTab === "projects" ? "05" : activeTab === "gallery" ? "06" : "07"}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
