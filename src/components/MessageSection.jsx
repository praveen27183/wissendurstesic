import React from 'react';
import { motion } from 'framer-motion';

const MessageSection = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-[#0f0f14] border-t border-[rgba(255,0,60,0.3)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-st-red/10 via-[#0f0f14] to-[#050505]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff003c] to-[#2563ff] mb-4 md:mb-6 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,0,60,0.2)]">
            Message From The Committee
          </h2>
          <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#ff003c] to-[#2563ff] mx-auto shadow-[0_0_15px_rgba(255,0,60,0.8)] rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="relative p-[1px] bg-gradient-to-b from-[#2563ff]/20 to-transparent rounded-2xl group hover:from-[#ff003c]/40 transition-all duration-700"
        >
          <div className="bg-[rgba(10,10,15,0.85)] border border-[rgba(255,0,60,0.25)] backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,60,0.15)] p-6 sm:p-8 md:p-14 rounded-2xl space-y-4 md:space-y-6 text-[#cbd5e1] text-sm sm:text-base md:text-xl leading-relaxed font-body text-justify relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
            <p className="relative z-10">
              <span className="text-4xl md:text-5xl text-white group-hover:text-st-red transition-colors font-title font-black float-left mr-2 md:mr-3 mt-1 leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">W</span>e, the Organising Committee of WISSENDURST '26, take immense pleasure in welcoming you to this year's academic festival, hosted by ESIC Medical College, Chennai.
            </p>
            <p className="relative z-10">
              As always, we are committed to delivering an unforgettable experience in every aspect, and believe us, this year will be no exception. WISSENDURST '26 offers a rare blend: an immersive journey into the brilliant unknown, paired with insightful workshops led by trailblazers in the medical field.
            </p>
            <p className="pb-2 md:pb-4 relative z-10">
              We warmly welcome you to our event crafted with passion and dedication. Looking forward to hosting you on APRIL 28 | 29 | 30!
            </p>

            <div className="relative z-10 mt-12 md:mt-24 pt-8 md:pt-10 border-t border-[rgba(255,0,60,0.25)] flex flex-col items-center text-center gap-3">
              <p className="text-white text-lg sm:text-2xl md:text-3xl font-title tracking-wide leading-tight">
                The Organizing Committee
              </p>
              <p className="text-st-red font-bold uppercase text-[11px] sm:text-[11px] md:text-xs tracking-[0.25em] md:tracking-[0.4em] opacity-90 
    drop-shadow-[0_0_8px_rgba(255,0,60,0.7)]">
                Wissendurst 2026
              </p>
              <div className="mt-2 w-16 md:w-24 h-[2px] bg-st-red shadow-[0_0_12px_rgba(255,0,60,0.9)]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
