import React, { useState, useEffect } from "react";
import HeroSection from "../components/herosection";
import { Phone, Mail } from "lucide-react";
import Galaxy from "../components/Galaxy.jsx";

/* ===============================
   Organizing Committee Contacts
================================ */
const Contacts = [
  {
    role: "Academic Secretaries",
    names: [
      { name: "RISHALINI U", phone: "90429 52723" },
      { name: "VEDANT SOMA", phone: "63069 06398" },
    ],
  },
  {
    role: "Organising Secretaries",
    names: [
      { name: "FARHATHUL AFRAA", phone: "82484 37615" },
      { name: "JESWIN ANTONY", phone: "98471 76022" },
      { name: "NANDANA SREEKUMAR", phone: "90485 42822" },
    ],
  },
  {
    role: "Treasurer",
    names: [
      { name: "AHMED SHAMEER", phone: "96336 69164" },
    ],
  },
  {
    role: "Overall Registration Heads",
    names: [
      { name: "LEKHA SHRUTHY R J", phone: "97897 03487" },
      { name: "SHALINI R", phone: "94442 62579" },
      { name: "KARTHIKEYAN", phone: "94895 32419" },
      { name: "MEIMOZHI PARI", phone: "63828 66554" },
    ],
  },
  {
    role: "Overall Workshop Heads",
    names: [
      { name: "SUNIL KUMAR C M", phone: "63810 83905" },
      { name: "SAINITHI B", phone: "88386 45832" },
      { name: "NEHA SUNIL", phone: "93604 87652" },
      { name: "SRI DHARNISH", phone: "99626 54504" },
      { name: "NIVETHA D", phone: "76038 72548" },
      { name: "ASHWIN KUMAR S", phone: "98406 31290" },
    ],
  },
  {
    role: "Overall Quiz Heads",
    names: [
      { name: "MANIKANDAN A", phone: "90434 93961" },
      { name: "JANE SARAH JOHN", phone: "78240 34859" },
      { name: "KALANIDHI M", phone: "95000 78979" },
    ],
  },
  {
    role: "Overall Heads of Presentations",
    names: [
      { name: "DIYA VINOD", phone: "87781 25205" },
      { name: "ESHITA SUDHAKAR", phone: "88380 29901" },
    ],
  },
  {
    role: "Social Media",
    names: [
      { name: "HARINI G", phone: "63790 04049" },
      { name: "AISHWARYA K", phone: "86670 56850" },
      { name: "DEVARAM PRASANNA P", phone: "63794 97166" },
      { name: "KARTHIKEYAN", phone: "94895 32419" },
      { name: "KAVYA D K", phone: "63691 85992" },
      { name: "LAKSHA", phone: "96000 55784" },
      { name: "NEHA A", phone: "93844 44513" },
      { name: "NIRANJANA", phone: "94452 44014" },
      { name: "SWATHIE SRIVIDHYA", phone: "95000 16593" },
    ],
  },
  {
    role: "Banners & Decorations",
    names: [
      { name: "DIVYA D", phone: "98401 69188" },
    ],
  },
  {
    role: "Public Relations",
    names: [
      { name: "RASHMIKA T", phone: "73586 65375" },
      { name: "KRISHNASUDHAN", phone: "70107 47288" },
    ],
  },
  {
    role: "Food",
    names: [
      { name: "ADHARSH S", phone: "85907 65094" },
      { name: "PRATHYUSH", phone: "89030 88587" },
    ],
  },
  {
    role: "Accommodation",
    names: [
      { name: "ARAVINDH B", phone: "94895 44801" },
      { name: "AFLAHA T", phone: "82817 57052" },
    ],
  },
  {
    role: "Tamil Mandram",
    names: [
      { name: "SADHURTHIKA", phone: "95669 00929" },
      { name: "SRI DHARANISH", phone: "99626 54504" },
    ],
  },
];

const Contactus = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  /* ===============================
     INTRO SCREEN
  ================================ */
  if (showIntro) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer"
        onClick={() => setShowIntro(false)}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .text-outline{
              color:transparent;
              -webkit-text-stroke:1px rgba(255,255,255,0.4);
            }
            .text-fill-anim{
              color:transparent;
              -webkit-text-stroke:1px rgba(255,255,255,0.6);
              background:linear-gradient(to right, white 50%, transparent 50%);
              background-size:200% 100%;
              background-position:100% 0;
              -webkit-background-clip:text;
              background-clip:text;
              animation:fillText 2.5s cubic-bezier(0.4,0,0.2,1) forwards;
            }
            .delay-1{animation-delay:0.5s;}
            .delay-2{animation-delay:0.8s;}

            @keyframes fillText{
              100%{background-position:0 0;}
            }
          `,
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <div
          className="text-center flex flex-col items-center animate-[fadeIn_3s_ease-out_forwards]"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-wide flex flex-col gap-2">
            <span className="text-outline">A BRIDGE FOR</span>
            <span className="text-fill-anim delay-1">CONNECTION</span>
            <span className="text-outline mt-6">FROM QUESTIONS</span>
            <span className="text-fill-anim delay-2">TO COLLABORATION</span>
            <span className="text-outline mt-6">BETTER EXPERIENCE</span>
            <span className="text-fill-anim delay-2">BUILT TOGETHER</span>
          </h1>
        </div>

        <div className="absolute bottom-10 text-white/80 text-sm tracking-widest animate-pulse">
          Click anywhere to continue →
        </div>
      </div>
    );
  }

  /* ===============================
     MAIN PAGE
  ================================ */
  return (
    <div className="bg-[#050505] min-h-screen relative overflow-x-hidden">
      
      {/* Galaxy Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Galaxy 
          starSpeed={0.3}
          density={1.5}
          hueShift={220}
          transparent
        />
      </div>

      <div className="relative z-10">
        <HeroSection
          title="CONTACT DETAILS"
          subtitle="GET IN TOUCH"
          description="A BRIDGE FOR CONNECTION. FROM QUESTIONS TO COLLABORATION, BETTER EXPERIENCE BUILT TOGETHER."
          image="/asset/hero_sec_for_all/contact_us.png"
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-24">

        <p className="text-3xl sm:text-4xl text-st-red font-bold mb-16 uppercase tracking-[0.3em]">
          Organising Committee
        </p>

        {/* ===============================
            COMMITTEE GRID
        ================================ */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {Contacts.map((col, ci) => (
            <div
              key={ci}
              className="group bg-gradient-to-b from-[#0a0a0f]/80 to-[#050505]/90 backdrop-blur-md
              border border-red-900/30 rounded-2xl p-8
              hover:border-red-500/60
              hover:shadow-[0_0_25px_rgba(255,0,60,0.25)]
              transition-all duration-500
              hover:-translate-y-2"
            >

              {/* ROLE */}
              <p className="text-red-500 text-base sm:text-lg uppercase tracking-[0.25em] font-bold mb-8 border-b border-red-800/40 pb-3 text-center">
                {col.role}
              </p>

              {/* MEMBERS */}
              <div className="flex flex-col gap-7">

                {col.names.map((n, ni) => (
                  <div key={ni} className="flex flex-col items-center text-center">

                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-red-400 transition-colors">
                      {n.name}
                    </h4>

                    {n.phone && (
                      <a
                        href={`tel:+91${n.phone.replace(/\s+/g, "")}`}
                        className="flex items-center gap-3 bg-black/60 px-5 py-2.5 rounded-full
                        border border-red-800/40 hover:border-red-500
                        hover:bg-red-500/10 transition-all duration-300"
                      >
                        <Phone className="w-5 h-5 text-red-500" />

                        <span className="text-base sm:text-lg font-semibold text-white tracking-wide">
                          +91 {n.phone}
                        </span>
                      </a>
                    )}

                  </div>
                ))}
                                
              </div>

            </div>
          ))}

        </div>

        <div className="flex flex-col items-center gap-12 mt-24 mb-32">
          
          <p className="text-3xl sm:text-4xl text-st-red font-bold uppercase tracking-[0.3em]">
            Official Email
          </p>

          <a
            href="mailto:Wissendurst26@gmail.com"
            className="group relative bg-[#0f0f14]/80 backdrop-blur-md
            border border-red-900/30 rounded-2xl p-6 sm:p-10
            hover:border-red-500/60
            hover:shadow-[0_0_35px_rgba(255,0,60,0.2)]
            transition-all duration-500
            flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
            </div>
            
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-white font-black text-2xl sm:text-3xl lg:text-4xl tracking-widest group-hover:text-red-400 transition-colors">
                Wissendurst26@gmail.com
              </span>
              <span className="text-red-500/60 font-bold uppercase tracking-[0.2em] mt-2 group-hover:text-red-500 transition-colors">
                Get in touch with us
              </span>
            </div>
          </a>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;