import React from 'react';

const HeroSection = ({ title, subtitle, description, image }) => {
  return (
    <section
      className="relative w-full h-[32vh] md:h-[45vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        <span className="block mb-4 text-sm font-bold uppercase tracking-[0.3em] text-renaissance-gold">
          {subtitle}
        </span>

        <h1 className="mb-4 text-4xl sm:text-6xl md:text-7xl font-milanesa font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          {title}
        </h1>

        <p className="mx-auto max-w-2xl text-sm md:text-lg leading-relaxed text-renaissance-cream/80">
          {description}
        </p>

      </div>
    </section>
  );
};

export default HeroSection;