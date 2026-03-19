import React from 'react';
import GradientText from './GradientText';

const HeroSection = ({ title, subtitle, description, image }) => {
  return (
    <section className="relative w-full min-h-[45vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
        decoding="sync"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] z-[1]" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

    {/* Subtitle */}
    <span className="block text-1xl sm:text-1xl md:text-1xl font-milanesa font-black text-white tracking-[0.1em] uppercase mb-4">
      {subtitle}
    </span>

    {/* Title */}
    <GradientText
      colors={['#ffffff', '#ff003c', '#ffffff']}
      animationSpeed={6}
      className="text-4xl sm:text-6xl md:text-7xl font-milanesa font-black tracking-[0.1em] uppercase mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
    >
      {title}
    </GradientText>

    {/* Description */}
    <p className="mx-auto max-w-2xl text-sm md:text-lg leading-relaxed text-renaissance-cream/80">
      {description}
    </p>

  </div>
</section>
  );
};

export default HeroSection;