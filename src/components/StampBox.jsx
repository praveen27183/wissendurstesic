import React from 'react';

const StampBox = ({ children, className = '' }) => {
    return (
        <div className={`relative group overflow-hidden bg-[#2A1610] p-1.5 rounded shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${className}`}>
            {/* Outer ornate border (gold foil effect) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#FBF1CF] to-[#8B5A2B] opacity-90  group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Inner Paper layer */}
            <div className="relative h-full w-full bg-[#ebd2a9] p-6 md:p-10 flex items-center justify-center overflow-hidden">
                {/* Paper texture */}
                <div className="absolute inset-0 opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
                {/* Inner burnt/aged shadow */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(107,62,14,0.35)] pointer-events-none"></div>

                {/* Decorative corner flourishes */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-[2px] border-l-[2px] border-[#8B5A2B] opacity-50 rounded-tl-sm transition-all duration-500 group-hover:border-[#D4AF37] group-hover:scale-100 origin-top-left"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-[2px] border-r-[2px] border-[#8B5A2B] opacity-50 rounded-tr-sm transition-all duration-500 group-hover:border-[#D4AF37] group-hover:scale-100 origin-top-right"></div>
                <div className="absolute bottom-2 left-1 w-6 h-6 border-b-[2px] border-l-[2px] border-[#8B5A2B] opacity-50 rounded-bl-sm transition-all duration-500 group-hover:border-[#D4AF37] group-hover:scale-100 origin-bottom-left"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-[2px] border-r-[2px] border-[#8B5A2B] opacity-50 rounded-br-sm transition-all duration-500 group-hover:border-[#D4AF37] group-hover:scale-100 origin-bottom-right"></div>

                {/* Faded Vintage Postmark Graphic */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-[0.15] rotate-[-15deg] mix-blend-multiply pointer-events-none scale-90 group-hover:scale-100 transition-transform duration-700" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/04/03/10/25/postmark-310469_1280.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', filter: 'sepia(1) hue-rotate(330deg)' }}></div>

                {/* Content */}
                <div className="relative z-10 font-accent text-2xl md:text-3xl text-[#3A220D] text-center uppercase tracking-[0.1em] leading-snug transform group-hover:scale-105 transition-all duration-500 font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default StampBox;
