"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 28, stiffness: 220 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setClicked(true);
      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickEffects((prev) => [...prev.slice(-10), newEffect]);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (clickEffects.length > 0) {
      const timer = setTimeout(() => {
        setClickEffects((prev) => prev.slice(1));
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [clickEffects]);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999 mix-blend-multiply hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-2px",
        translateY: "-2px",
      }}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
          rotate: clicked ? -30 : -45,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="text-vintage-brown"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[1px_2px_3px_rgba(27,22,19,0.25)]"
        >
          {/* Fountain Pen Nib Silhouette */}
          <path
            d="M12 2C12 2 9 8 8 11C7 14 5 15.5 5 17C5 19 8.1 21 12 21C15.9 21 19 19 19 17C19 15.5 17 14 16 11C15 8 12 2 12 2Z"
            fill="currentColor"
          />
          {/* Nib Core Slit */}
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="13"
            stroke="#FBFAF7"
            strokeWidth="0.8"
          />
          {/* Breather Hole */}
          <circle cx="12" cy="13" r="1" fill="#120e0c" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
