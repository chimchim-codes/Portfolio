"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import NotebookFrame from "@/components/NotebookFrame";

// Import sections
import { HeroLeft, HeroRight } from "@/components/sections/Hero";
import { AboutLeft, AboutRight } from "@/components/sections/About";
import { SkillsLeft, SkillsRight } from "@/components/sections/Skills";
import { ExperienceLeft, ExperienceRight } from "@/components/sections/Experience";
import { ProjectsLeft, ProjectsRight } from "@/components/sections/Projects";
import { GalleryLeft, GalleryRight } from "@/components/sections/Gallery";
import { ContactLeft, ContactRight } from "@/components/sections/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeExpIdx, setActiveExpIdx] = useState(0);

  // Render left side content
  const renderLeftPage = () => {
    switch (activeTab) {
      case "home":
        return <HeroLeft key="hero-left" />;
      case "about":
        return <AboutLeft key="about-left" />;
      case "skills":
        return <SkillsLeft key="skills-left" />;
      case "experience":
        return (
          <ExperienceLeft 
            key="exp-left" 
            activeExpIdx={activeExpIdx} 
            setActiveExpIdx={setActiveExpIdx} 
          />
        );
      case "projects":
        return <ProjectsLeft key="proj-left" />;
      case "gallery":
        return <GalleryLeft key="gal-left" />;
      case "contact":
        return <ContactLeft key="contact-left" />;
      default:
        return <HeroLeft key="hero-left" />;
    }
  };

  // Render right side content
  const renderRightPage = () => {
    switch (activeTab) {
      case "home":
        return <HeroRight key="hero-right" />;
      case "about":
        return <AboutRight key="about-right" />;
      case "skills":
        return <SkillsRight key="skills-right" />;
      case "experience":
        return (
          <ExperienceRight 
            key="exp-right" 
            activeExpIdx={activeExpIdx} 
            setActiveExpIdx={setActiveExpIdx} 
          />
        );
      case "projects":
        return <ProjectsRight key="proj-right" />;
      case "gallery":
        return <GalleryRight key="gal-right" />;
      case "contact":
        return <ContactRight key="contact-right" />;
      default:
        return <HeroRight key="hero-right" />;
    }
  };

  // Framer Motion variants to simulate paper page curl turn
  const leftPageVariants = {
    initial: { 
      opacity: 0, 
      x: -25, 
      rotateY: 25, 
      transformOrigin: "right center" 
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0, 
      transition: { duration: 0.55, ease: "easeOut" as const } 
    },
    exit: { 
      opacity: 0, 
      x: -15, 
      rotateY: 10, 
      transition: { duration: 0.35, ease: "easeIn" as const } 
    }
  };

  const rightPageVariants = {
    initial: { 
      opacity: 0, 
      x: 25, 
      rotateY: -25, 
      transformOrigin: "left center" 
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0, 
      transition: { duration: 0.55, ease: "easeOut" as const } 
    },
    exit: { 
      opacity: 0, 
      x: 15, 
      rotateY: -10, 
      transition: { duration: 0.35, ease: "easeIn" as const } 
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden select-none">
      {/* Custom fountain pen cursor overlay */}
      <CustomCursor />

      {/* Main ring binder frame container */}
      <NotebookFrame
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        leftPage={
          <div className="flex-grow flex flex-col h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-left-page`}
                variants={leftPageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-grow flex flex-col h-full"
              >
                {renderLeftPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        }
        rightPage={
          <div className="flex-grow flex flex-col h-full justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-right-page`}
                variants={rightPageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-grow flex flex-col h-full justify-between"
              >
                {renderRightPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        }
      />
    </div>
  );
}
