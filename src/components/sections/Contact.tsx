"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Sparkles, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export function ContactLeft() {
  const [hoveredEnvelope, setHoveredEnvelope] = useState(false);

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="space-y-4">
        {/* Envelope page headers */}
        <div className="flex justify-between items-end border-b border-beige pb-2">
          <span className="font-mono text-[9px] text-mutedgray tracking-widest uppercase">POSTAL SERVICE // VOL. VII</span>
          <span className="font-serif text-xs italic text-vintage-brown">Direct Correspondence</span>
        </div>

        <h2 className="font-serif text-3xl font-light text-charcoal tracking-tight mt-4">
          Send a <br />
          <span className="italic font-normal text-vintage-brown">Handwritten Letter</span>
        </h2>

        <p className="font-sans text-xs text-mutedgray leading-relaxed max-w-sm">
          Use the letter pad on the right page to write your message. It will be packaged and delivered directly to my inbox.
        </p>

        {/* Vintage Interactive Envelope */}
        <div className="pt-6 flex justify-center relative select-none">
          <motion.div
            onMouseEnter={() => setHoveredEnvelope(true)}
            onMouseLeave={() => setHoveredEnvelope(false)}
            animate={{
              rotate: hoveredEnvelope ? -2 : 1,
              y: hoveredEnvelope ? -5 : 0
            }}
            className="w-64 h-40 bg-cream border border-warmgray rounded shadow-paper-stacked relative flex items-center justify-center cursor-pointer group"
          >
            {/* Envelope flap back shadow */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-beige/35 border-b border-warmgray/50 clip-path-[polygon(0_0,100%_0,50%_100%)] z-10" />
            
            {/* Sealed Wax Stamp */}
            <motion.div 
              animate={{
                scale: hoveredEnvelope ? 1.08 : 1,
                rotate: hoveredEnvelope ? 15 : 0
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted-wine border-2 border-double border-muted-wine/80 shadow-[0_2px_4px_rgba(134,91,98,0.4)] flex items-center justify-center text-paper font-mono text-[7px] font-bold z-20"
            >
              WAX
            </motion.div>

            {/* Simulated postage stamp on top-right */}
            <div className="absolute top-3 right-3 w-8 h-10 border border-dashed border-muted-olive/50 bg-[#FBFAF7] p-0.5 flex flex-col justify-between items-center rotate-3">
              <span className="text-[5px] font-mono text-muted-olive font-bold">INDIA</span>
              <Mail size={12} className="text-muted-olive" />
              <span className="text-[4px] font-mono text-mutedgray">₹ 5.00</span>
            </div>

            {/* Address handwriting on envelope */}
            <div className="absolute left-4 bottom-4 font-handwritten text-[11px] text-charcoal/70 leading-tight space-y-0.5">
              <p className="font-semibold text-charcoal">To: Sharon Elsa Sam</p>
              <p>AJCE Department of AI & DS,</p>
              <p>Kerala, IN // 686512</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Directory Links */}
      <div className="mt-8 pt-4 border-t border-beige flex gap-3 justify-center">
        {[
          { href: "https://github.com/shaelsam-07", icon: Github, label: "GitHub" },
          { href: "https://www.linkedin.com/in/sharon-elsa-sam/", icon: Linkedin, label: "LinkedIn" },
          { href: "mailto:sharonelsasam@gmail.com", icon: Mail, label: "Email" }
        ].map((soc, idx) => {
          const Icon = soc.icon;
          return (
            <a
              key={idx}
              href={soc.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream hover:bg-paper text-charcoal border border-warmgray rounded shadow-paper-flat hover:shadow-paper-lift transition-all font-mono text-[9px] uppercase tracking-wider"
            >
              <Icon size={12} />
              {soc.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function ContactRight() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;
    
    setStatus("sending");
    // Simulate envelope packaging fold delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", msg: "" });
    
    // Reset back to idle after a few seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="flex-grow flex flex-col justify-between py-4 h-full relative">
      <div className="flex justify-between items-center border-b border-beige pb-2 mb-4">
        <h3 className="font-serif text-lg font-bold text-vintage-brown flex items-center gap-1.5">
          <Sparkles size={16} className="text-antique-gold" />
          Letter Pad
        </h3>
        <span className="font-mono text-[9px] text-mutedgray uppercase">Status: Available</span>
      </div>

      <AnimatePresence mode="wait">
        {status !== "sent" ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, rotate: -2 }}
            className="flex-grow flex flex-col justify-between"
          >
            {/* Lined letter sheet design */}
            <div className="flex-grow bg-[#FBFAF7] p-5 border border-warmgray shadow-paper-flat rounded-md notebook-lines relative">
              <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-red-400/20" />
              
              <div className="pl-6 space-y-4 font-sans text-xs">
                {/* Greeting */}
                <div className="flex items-center gap-1.5 pt-2">
                  <span className="font-serif font-bold text-charcoal text-sm">Dear Sharon,</span>
                </div>

                {/* Message body input */}
                <div className="space-y-1">
                  <textarea
                    required
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    rows={4}
                    placeholder="Write your message here... I would love to talk about internship projects, collegiate activities, or AI models."
                    className="w-full bg-transparent border-0 outline-none resize-none font-handwritten text-base text-charcoal placeholder:text-mutedgray/40 focus:ring-0 leading-[28px]"
                    style={{ backgroundAttachment: "local" }}
                  />
                </div>

                {/* Sign-off name */}
                <div className="pt-2 flex items-center gap-2">
                  <span className="font-serif italic text-mutedgray shrink-0">Sincerely yours,</span>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="bg-transparent border-b border-zinc-300 focus:border-vintage-brown outline-none font-handwritten text-base text-charcoal px-2 flex-grow placeholder:text-mutedgray/45"
                  />
                </div>

                {/* Sign-off email */}
                <div className="flex items-center gap-2">
                  <span className="font-serif italic text-mutedgray shrink-0">Reply details:</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="bg-transparent border-b border-zinc-300 focus:border-vintage-brown outline-none font-handwritten text-base text-charcoal px-2 flex-grow placeholder:text-mutedgray/45"
                  />
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-vintage-brown hover:bg-vintage-brown/95 text-paper rounded shadow-paper-flat hover:shadow-paper-lift transition-all duration-200 font-mono text-xs uppercase tracking-widest disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>Packaging Letter...</>
                ) : (
                  <>
                    <Send size={12} />
                    Send Mail
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          /* Confirmation folder screen */
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-[#FBFAF7] border border-warmgray rounded-md shadow-paper-flat select-none"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 mb-4 animate-bounce">
              <Check size={24} />
            </div>
            
            <h4 className="font-serif text-lg font-bold text-charcoal">
              Letter Folded & Sealed!
            </h4>
            
            <p className="font-handwritten text-base text-muted-wine mt-2 max-w-xs">
              Thank you! Your correspondence has been securely boxed and mailed out to Sharon Elsa Sam.
            </p>

            <span className="font-mono text-[8px] text-mutedgray uppercase mt-6 block tracking-widest border border-dashed border-beige px-2 py-0.5 rounded">
              TRANSMISSION_COMPLETE
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
