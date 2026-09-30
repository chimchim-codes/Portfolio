"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RefreshCw, Layers, Award, Sparkles, BookOpen } from "lucide-react";
import { Github } from "@/components/BrandIcons";

export function ProjectsLeft() {
  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Lab manual headers */}
        <div className="flex justify-between items-end border-b border-beige pb-2">
          <span className="font-mono text-[9px] text-mutedgray tracking-widest uppercase">LAB ASSIGNMENT // VOL. V</span>
          <span className="font-serif text-xs italic text-vintage-brown">Graph Architectures</span>
        </div>

        <div className="space-y-2">
          <span className="font-mono text-[8px] uppercase tracking-wider text-muted-wine font-bold bg-muted-wine/5 border border-muted-wine/25 px-2.5 py-0.5 rounded-full">
            Featured Project
          </span>
          <h2 className="font-serif text-3xl font-light text-charcoal tracking-tight">
            Random Maze <br />
            <span className="italic font-normal text-vintage-brown">Generator & Solver</span>
          </h2>
        </div>

        {/* Notebook detailed report */}
        <div className="pt-2 space-y-3 font-sans text-xs text-charcoal/90 leading-relaxed max-w-md">
          <p>
            An interactive application that generates random perfect mazes and visualizes pathfinding algorithms in real-time. Built with a modular object-oriented architecture.
          </p>

          <div className="border border-warmgray bg-cream/35 p-3 rounded space-y-2">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-muted-olive font-bold flex items-center gap-1">
              <Layers size={10} /> Supported Algorithms
            </h4>
            <div className="grid grid-cols-2 gap-1.5 font-mono text-[9px] text-mutedgray">
              <div>• Recursive Backtracking</div>
              <div>• Randomized Prim&apos;s</div>
              <div>• Breadth-First Search (BFS)</div>
              <div>• Depth-First Search (DFS)</div>
              <div className="col-span-2">• A* Search (Heuristic Optimizer)</div>
            </div>
          </div>

          <div className="space-y-1.5 pl-1">
            <h4 className="font-serif font-bold text-charcoal flex items-center gap-1.5">
              <Award size={13} className="text-antique-gold" /> Key Engineering Highlights
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-mutedgray font-light">
              <li>Designed modular grid representation utilizing Graph node traversal concepts.</li>
              <li>Implemented real-time animated frames showing solver node exploration.</li>
              <li>Engineered custom heuristic costs to optimize path calculations in A*.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action buttons and GitHub links */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cream hover:bg-paper text-charcoal border border-warmgray rounded shadow-paper-flat hover:shadow-paper-lift hover:translate-y-[-1px] transition-all duration-200 font-mono text-[10px] uppercase tracking-wider group"
        >
          <Github size={12} className="group-hover:scale-110 transition-transform" />
          Code Repository
        </a>
        
        <div className="flex items-center gap-2 text-xs font-handwritten text-muted-wine mt-1.5">
          <span>* Interact with the grid model on the right page!</span>
        </div>
      </div>
    </div>
  );
}

// Mini interactive maze builder & pathfinder inside React
export function ProjectsRight() {
  const GRID_SIZE = 11; // Must be odd for walls
  const [grid, setGrid] = useState<string[][]>([]); // "wall", "path", "visited", "solution", "start", "end"
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const [activeAlgorithm, setActiveAlgorithm] = useState<"BFS" | "DFS" | "A*">("BFS");
  const runningRef = useRef(false);

  // Initialize standard grid with walls
  const initializeGrid = () => {
    runningRef.current = false;
    setIsGenerating(false);
    setIsSolving(false);
    
    const initialGrid: string[][] = Array(GRID_SIZE).fill(null).map((_, r) => 
      Array(GRID_SIZE).fill(null).map((_, c) => {
        // Start and end positions
        if (r === 1 && c === 1) return "start";
        if (r === GRID_SIZE - 2 && c === GRID_SIZE - 2) return "end";
        // Outer boundaries & alternate walls
        if (r === 0 || c === 0 || r === GRID_SIZE - 1 || c === GRID_SIZE - 1) return "wall";
        return (r % 2 === 0 || c % 2 === 0) ? "wall" : "path";
      })
    );
    setGrid(initialGrid);
  };

  useEffect(() => {
    initializeGrid();
  }, []);

  // Simple Maze Generator (Mock recursive grid carving)
  const generateMaze = async () => {
    if (isGenerating || isSolving) return;
    setIsGenerating(true);
    runningRef.current = true;

    // Reset grid structure but keep borders
    const tempGrid: string[][] = Array(GRID_SIZE).fill(null).map((_, r) => 
      Array(GRID_SIZE).fill(null).map((_, c) => {
        if (r === 1 && c === 1) return "start";
        if (r === GRID_SIZE - 2 && c === GRID_SIZE - 2) return "end";
        if (r === 0 || c === 0 || r === GRID_SIZE - 1 || c === GRID_SIZE - 1) return "wall";
        return "wall"; // start all closed
      })
    );
    setGrid([...tempGrid]);

    // Recursive backtracking animation simulation
    const stack: [number, number][] = [[1, 1]];
    const visited = new Set<string>();
    visited.add("1,1");
    tempGrid[1][1] = "start";

    while (stack.length > 0 && runningRef.current) {
      const [r, c] = stack[stack.length - 1];
      const neighbors: [number, number, number, number][] = []; // [nr, nc, wall_r, wall_c]

      // Directions: UP, RIGHT, DOWN, LEFT
      const dirs = [[-2, 0], [0, 2], [2, 0], [0, -2]];
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr > 0 && nr < GRID_SIZE - 1 && nc > 0 && nc < GRID_SIZE - 1 && !visited.has(`${nr},${nc}`)) {
          neighbors.push([nr, nc, r + dr / 2, c + dc / 2]);
        }
      }

      if (neighbors.length > 0) {
        // Pick random neighbor
        const [nr, nc, wr, wc] = neighbors[Math.floor(Math.random() * neighbors.length)];
        visited.add(`${nr},${nc}`);
        tempGrid[wr][wc] = "path";
        tempGrid[nr][nc] = "path";
        if (nr === GRID_SIZE - 2 && nc === GRID_SIZE - 2) {
          tempGrid[nr][nc] = "end";
        }
        stack.push([nr, nc]);
        setGrid([...tempGrid].map((row) => [...row]));
        await new Promise((resolve) => setTimeout(resolve, 80));
      } else {
        stack.pop();
      }
    }
    setIsGenerating(false);
  };

  // Solve Maze BFS/DFS
  const solveMaze = async () => {
    if (isGenerating || isSolving) return;
    setIsSolving(true);
    runningRef.current = true;

    // Reset previous visited/solution cells
    const tempGrid = grid.map(row => 
      row.map(cell => (cell === "visited" || cell === "solution") ? "path" : cell)
    );

    const queue: [number, number, [number, number][]][] = [[1, 1, []]]; // [r, c, pathHistory]
    const visited = new Set<string>();
    visited.add("1,1");

    let found = false;

    while (queue.length > 0 && !found && runningRef.current) {
      // BFS uses shift (FIFO), DFS uses pop (LIFO)
      const current = activeAlgorithm === "DFS" ? queue.pop() : queue.shift();
      if (!current) break;
      const [r, c, path] = current;

      if (r === GRID_SIZE - 2 && c === GRID_SIZE - 2) {
        // Found end! Animate solution path
        for (const [sr, sc] of path) {
          if (tempGrid[sr][sc] !== "start" && tempGrid[sr][sc] !== "end") {
            tempGrid[sr][sc] = "solution";
            setGrid([...tempGrid].map(row => [...row]));
            await new Promise(resolve => setTimeout(resolve, 50));
          }
        }
        found = true;
        break;
      }

      if (tempGrid[r][c] !== "start" && tempGrid[r][c] !== "end") {
        tempGrid[r][c] = "visited";
        setGrid([...tempGrid].map(row => [...row]));
        await new Promise(resolve => setTimeout(resolve, 40));
      }

      // Check neighbors (UP, RIGHT, DOWN, LEFT)
      const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (
          nr >= 0 && nr < GRID_SIZE && 
          nc >= 0 && nc < GRID_SIZE && 
          tempGrid[nr][nc] !== "wall" && 
          !visited.has(`${nr},${nc}`)
        ) {
          visited.add(`${nr},${nc}`);
          queue.push([nr, nc, [...path, [r, c]]]);
        }
      }
    }
    setIsSolving(false);
  };

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Visualizer header */}
        <div className="flex justify-between items-center border-b border-beige pb-2 mb-2">
          <h3 className="font-serif text-lg font-bold text-vintage-brown flex items-center gap-1.5">
            <Sparkles size={16} className="text-antique-gold" />
            Grid Visualizer
          </h3>
          <div className="flex items-center gap-1.5">
            {["BFS", "DFS"].map((alg) => (
              <button
                key={alg}
                disabled={isGenerating || isSolving}
                onClick={() => setActiveAlgorithm(alg as any)}
                className={`font-mono text-[9px] px-1.5 py-0.5 rounded border transition-all
                  ${activeAlgorithm === alg 
                    ? "bg-vintage-brown text-paper border-vintage-brown" 
                    : "bg-cream/40 border-warmgray text-mutedgray hover:bg-cream"
                  }
                `}
              >
                {alg}
              </button>
            ))}
          </div>
        </div>

        {/* Maze Grid Simulation */}
        <div className="flex items-center justify-center p-4 bg-cream/20 border border-warmgray rounded-lg relative overflow-hidden select-none">
          {/* Tape decor */}
          <div className="washi-tape-horizontal absolute -top-3 left-10 w-16 h-5 opacity-60 z-20" />
          
          <div className="grid grid-cols-11 gap-[1px] bg-warmgray p-[1.5px] rounded shadow-paper-stacked border border-warmgray relative z-10">
            {grid.map((row, rIdx) => 
              row.map((cell, cIdx) => {
                let cellColor = "bg-paper"; // path
                if (cell === "wall") cellColor = "bg-zinc-800";
                else if (cell === "start") cellColor = "bg-emerald-600 shadow-inner";
                else if (cell === "end") cellColor = "bg-rose-600 shadow-inner";
                else if (cell === "visited") cellColor = "bg-amber-100/70 border border-amber-200/50";
                else if (cell === "solution") cellColor = "bg-vintage-brown text-paper";

                return (
                  <motion.div
                    key={`${rIdx}-${cIdx}`}
                    animate={{
                      scale: cell === "solution" ? [1, 1.15, 1] : 1,
                      backgroundColor: 
                        cell === "wall" ? "#27272a" : 
                        cell === "start" ? "#059669" : 
                        cell === "end" ? "#e11d48" : 
                        cell === "visited" ? "#fef3c7" : 
                        cell === "solution" ? "#8A6F54" : "#FBFAF7"
                    }}
                    transition={{ duration: 0.2 }}
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-sm flex items-center justify-center text-[7px] font-mono select-none`}
                  >
                    {cell === "start" && "S"}
                    {cell === "end" && "E"}
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Grid Controller Console */}
      <div className="mt-6 pt-4 border-t border-beige flex gap-3 justify-center">
        <button
          onClick={generateMaze}
          disabled={isGenerating || isSolving}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-vintage-brown hover:bg-vintage-brown/95 text-paper rounded shadow-paper-flat hover:shadow-paper-lift transition-all font-mono text-[9px] uppercase tracking-wider disabled:opacity-50"
        >
          <RefreshCw size={10} className={isGenerating ? "animate-spin" : ""} />
          Generate
        </button>

        <button
          onClick={solveMaze}
          disabled={isGenerating || isSolving}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted-wine hover:bg-muted-wine/95 text-paper rounded shadow-paper-flat hover:shadow-paper-lift transition-all font-mono text-[9px] uppercase tracking-wider disabled:opacity-50"
        >
          <Play size={10} />
          Solve
        </button>

        <button
          onClick={initializeGrid}
          disabled={isGenerating || isSolving}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream hover:bg-paper text-charcoal border border-warmgray rounded shadow-paper-flat hover:shadow-paper-lift transition-all font-mono text-[9px] uppercase tracking-wider disabled:opacity-50"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
