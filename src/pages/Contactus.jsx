import React, { useState, useEffect } from 'react';
import HeroSection from '../components/herosection';

// Organizing Committee Contact Information
const Contacts = [
    {
        role: "Academic Secretaries",
        names: [
            { name: "RISHALINI U", phone: "90429 52723" },
            { name: "VEDANT SOMA", phone: "63069 06398" }
        ]
    },
    {
        role: "Organising Secretaries",
        names: [
            { name: "FARHATHUL AFRAA", phone: "82484 37615" },
            { name: "JESWIN ANTONY", phone: "98471 76022" },
            { name: "NANDANA SREEKUMAR", phone: "90485 42822" }
        ]
    },
    {
        role: "Treasurer",
        names: [
            { name: "AHMED SHAMEER", phone: "96336 69164" }
        ]
    },
    {
        role: "Overall Registration Heads",
        names: [
            { name: "LEKHA", phone: "97897 03487" },
            { name: "SHALINI R", phone: "94442 62579" },
            { name: "KARTHIKEYAN", phone: "94895 32419" },
            { name: "MEIMOZHI PARI", phone: "63828 66554" }
        ]
    },
    {
        role: "Overall Workshop Heads",
        names: [
            { name: "SUNIL KUMAR CM", phone: "63810 83905" },
            { name: "SAINITHI B", phone: "88386 45832" },
            { name: "NEHA SUNIL", phone: "93604 87652" },
            { name: "SRI DHARNISH", phone: "99626 54504" },
            { name: "NIVETHA D", phone: "76038 72548" },
            { name: "ASHWIN KUMAR S", phone: "98406 31290" }
        ]
    },
    {
        role: "Overall Quiz Heads",
        names: [
            { name: "MANIKANDAN A", phone: "90434 93961" },
            { name: "JANE SARAH JOHN", phone: "78240 34859" },
            { name: "KALANIDHI M", phone: "95000 78979" }
        ]
    },
    {
        role: "Overall Heads of Presentations",
        names: [
            { name: "DIYA VINOD", phone: "87781 25205" },
            { name: "ESHITA SUDHAKAR", phone: "88380 29901" }
        ]
    }
];

const Contactus = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Automatically hide intro after 8 seconds
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);
  if (showIntro) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer"
        onClick={() => setShowIntro(false)}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .text-outline {
              color: transparent;
              -webkit-text-stroke: 1px rgba(255,255,255,0.4);
            }
            .text-fill-anim {
              color: transparent;
              -webkit-text-stroke: 1px rgba(255,255,255,0.6);
              background: linear-gradient(to right, white 50%, transparent 50%);
              background-size: 200% 100%;
              background-position: 100% 0;
              -webkit-background-clip: text;
              background-clip: text;
              animation: fillText 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            .delay-1 { animation-delay: 0.5s; }
            .delay-2 { animation-delay: 0.5s; }
            @keyframes fillText {
              100% { background-position: 0 0; }
            }
          `}} />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet" />
        <div
          className="text-center w-full flex flex-col items-center justify-center animate-[fadeIn_3s_ease-out_forwards]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.3] sm:leading-[1.0] tracking-[0.05em] uppercase flex flex-col items-center justify-center w-full px-4">
            <span className="text-outline w-full block">A BRIDGE FOR</span>
            <span className="text-fill-anim delay-1 w-full block py-1">CONNECTION.</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM QUESTIONS</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">TO COLLABORATION,</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">BETTER EXPERIENCE</span>
            <span className="text-outline w-full block">BUILT</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">TOGETHER.</span>
          </h1>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center">
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[20px] tracking-[0.2em] sm:tracking-[0.3em] font-sans uppercase animate-pulse">
            Click anywhere to continue ----&gt;
          </p>
        </div>
      </div>
    );
  }

  return (
        <div className="bg-renaissance-dark/30 min-h-screen">
            <HeroSection 
                title="CONTACT DETAILS"
                subtitle="GET IN TOUCH"
                description="A BRIDGE FOR CONNECTION. FROM QUESTIONS TO COLLABORATION, BETTER EXPERIENCE BUILT TOGETHER."
                image="/asset/hero_sec_for_all/contact_us.png"
            />

            <div className="max-w-6xl mx-auto px-4 text-center mt-8 sm:mt-12 relative z-10 mb-24">

                <p className="text-base sm:text-lg md:text-xl text-renaissance-gold font-bold mb-10 sm:mb-20 uppercase tracking-[0.2em] sm:tracking-[0.3em] inline-block pb-2">
                    Organising Committee
                </p>

                {/* Committee Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-16 max-w-6xl mx-auto text-center md:text-left">
                    {Contacts.map((col, ci) => (
                        <div key={ci} className="flex flex-col">
                            <div className="flex flex-col pb-4 bg-white/[0.02] md:bg-transparent p-6 sm:p-8 md:p-0 rounded-3xl md:rounded-none border border-renaissance-gold/10 md:border-none hover:border-renaissance-gold/30 md:hover:border-transparent transition-colors shadow-lg shadow-black/20 md:shadow-none">
                                
                                <p className="text-xs sm:text-sm md:text-base border-b border-renaissance-gold/30 pb-3 inline-block md:w-full w-4/5 mx-auto md:mx-0 text-renaissance-gold uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold mb-6 sm:mb-8">
                                    {col.role}
                                </p>
                                <div className="flex flex-col gap-5 sm:gap-6">
                                    {col.names.map((n, ni) => (
                                        <div key={ni} className="group flex flex-col items-center md:items-start">
                                            <h4 className="text-base sm:text-lg lg:text-xl font-black uppercase text-[#FBF1CF] mb-2 group-hover:text-renaissance-gold transition-colors">
                                                {n.name}
                                            </h4>
                                            <div className="flex items-center justify-center md:justify-start gap-3 bg-black/40 md:bg-transparent px-5 py-2.5 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-none shadow-sm md:shadow-none w-[80%] md:w-auto mx-auto md:mx-0">
                                                <span className="text-[#FBF1CF]/50 text-[10px] sm:text-xs uppercase tracking-widest shrink-0">Ph:</span>
                                                <a
                                                    href={`tel:+91${n.phone.replace(/\s+/g, '')}`}
                                                    className="text-xs sm:text-sm font-medium text-renaissance-gold/90 hover:text-[#FBF1CF] transition-colors inline-block tracking-wider whitespace-nowrap"
                                                >
                                                    +91 {n.phone}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contactus;
