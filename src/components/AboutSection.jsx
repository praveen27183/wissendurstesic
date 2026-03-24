import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-32 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-title font-bold text-white mb-6 md:mb-8 uppercase leading-tight drop-shadow-[0_0_15px_rgba(255,0,60,0.2)]">
            About<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff003c] to-[#2563ff] drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">WISSENDURST '26</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-[#b3b3b3] text-base md:text-lg leading-relaxed font-body">
            <p>
              WISSENDURST '26 — the annual intercollegiate academic fest hosted by ESIC Medical College, Chennai — has returned this year in all its grandeur!
            </p>
            <p>
              With 15 immersive workshops and 12+ thrilling events, this academic celebration is designed to rekindle every student's passion for the subject we all cherish. Step into a world of wonder as we take you on a cinematic journey into the unknown.
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-8 md:gap-16 mt-8 md:mt-12">
            <div className="relative group text-center">
              <div className="text-4xl md:text-6xl font-title font-black text-st-red drop-shadow-[0_0_10px_rgba(255,0,60,0.6)]">15+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#cbd5e1] mt-2 font-bold">Workshops</div>
            </div>
            <div className="relative group text-center">
              <div className="text-4xl md:text-6xl font-title font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] group-hover:text-st-red group-hover:drop-shadow-[0_0_10px_rgba(255,0,60,0.6)] transition-all">12+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#cbd5e1] mt-2 font-bold">Events</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-8 md:mt-0 relative"
        >
          <div className="absolute inset-0 bg-st-red/5 blur-[80px] rounded-full"></div>
          <OptimizedImage
            src="/asset/logo/wissennobg.png"
            alt="Wissendurst Logo"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_20px_rgba(255,0,60,0.2)] animate-float hover:drop-shadow-[0_0_30px_rgba(255,0,60,0.6)] relative z-10 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
