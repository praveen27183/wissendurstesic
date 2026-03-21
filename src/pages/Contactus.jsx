import React, { useState, useEffect } from "react";
import HeroSection from "../components/herosection";
import { Phone, Mail } from "lucide-react";
import Galaxy from "../components/Galaxy.jsx";
import { usePerformance } from "../context/PerformanceContext";

/* ===============================
   Organizing Committee Contacts
================================ */
const Contacts = [
  {
    role: "ACADEMIC SECRETARIES",
    names: [
      { name: "RISHALINI U", phone: "9042952723" },
      { name: "VEDANT SOMA", phone: "6306906398" },
    ],
  },
  {
    role: "ORGANISING SECRETARIES",
    names: [
      { name: "FARHATHUL AFRAA", phone: "8248437615" },
      { name: "JESWIN ANTONY", phone: "9847176022" },
      { name: "NANDANA SREEKUMAR", phone: "9048542822" },
    ],
  },
  {
    role: "TREASURER",
    names: [{ name: "AHMED SHAMEER", phone: "9633669164" }],
  },
  {
    role: "DESIGNING",
    names: [{ name: "LUCKSHANYA", phone: "8939311539" }],
  },
  {
    role: "EDITING",
    names: [
      { name: "ESHITA SUDHAKAR", phone: "8838029901" },
      { name: "PRAGNYA PRADEEPKUMAR", phone: "7305116987" },
      { name: "DIYA VINOD", phone: "8778125205" },
    ],
  },
  {
    role: "SOCIAL MEDIA",
    names: [{ name: "HARINI G", phone: "6379004049" }],
  },
  {
    role: "PUBLIC RELATIONS",
    names: [
      { name: "KRISHNASUDHAN", phone: "7010747288" },
      { name: "RASHMIKA T", phone: "7358665375" },
    ],
  },
  {
    role: "OVERALL REGISTRATION HEADS",
    names: [
      { name: "KARTHIKEYAN", phone: "9489532419" },
      { name: "LEKHA SHRUTHY R J", phone: "9789703487" },
      { name: "MEIMOZHI PARI", phone: "6382866554" },
      { name: "SHALINI R", phone: "9444262579" },
    ],
  },
  {
    role: "OVERALL WORKSHOP HEADS",
    names: [
      { name: "ASHWIN KUMAR S", phone: "9840631290" },
      { name: "NIVETHA D", phone: "7603872548" },
      { name: "NEHA SUNIL", phone: "9360487652" },
      { name: "SAINITHI B", phone: "8838645832" },
      { name: "SRI DHARNISH", phone: "9962654504" },
      { name: "SUNIL KUMAR C M", phone: "6381083905" },
    ],
  },
  {
    role: "OVERALL QUIZ HEADS",
    names: [
      { name: "JANE SARAH JOHN", phone: "7824034859" },
      { name: "KALANIDHI M", phone: "9500078979" },
      { name: "MANIKANDAN A", phone: "9043493961" },
    ],
  },
  {
    role: "SPEAKERS COLLECTIVE",
    names: [
      { name: "KALANIDHI M", phone: "9500078979" },
      { name: "JANE SARAH JOHN", phone: "7824034859" },
      { name: "JANITHA", phone: "9535218887" },
    ],
  },
  {
    role: "OVERALL HEADS OF PRESENTATIONS",
    names: [
      { name: "DIYA VINOD", phone: "8778125205" },
      { name: "ESHITA SUDHAKAR", phone: "8838029901" },
    ],
  },
  {
    role: "TAMIL MANDRAM",
    names: [
      { name: "SADHURTHIKA", phone: "9566900929" },
      { name: "SRI DHARNISH", phone: "9962654504" },
    ],
  },
  {
    role: "BANNERS AND DECORATIONS",
    names: [{ name: "DIVYA D", phone: "9840169188" }],
  },
  {
    role: "FOOD",
    names: [
      { name: "ADARSH S", phone: "8590765094" },
      { name: "PRATYUSH S", phone: "8903088587" },
    ],
  },
  {
    role: "ACCOMMODATION",
    names: [
      { name: "AFLAHA T", phone: "8281757052" },
      { name: "ARAVINDH B", phone: "9489544801" },
    ],
  },
];

const Contactus = () => {
  const { isLowPerf } = usePerformance();
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
                className={`group ${isLowPerf ? 'bg-[#0f0f14] border-white/10 shadow-sm' : 'bg-gradient-to-b from-[#0a0a0f]/80 to-[#050505]/90 backdrop-blur-md border-red-900/30 hover:border-red-500/60 hover:shadow-[0_0_25px_rgba(255,0,60,0.25)] hover:-translate-y-2'} 
              border rounded-2xl p-8
              transition-all duration-500`}
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
              className={`group relative ${isLowPerf ? 'bg-[#0f0f14] border-white/10 shadow-sm' : 'bg-[#0f0f14]/80 backdrop-blur-md border-red-900/30 hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(255,0,60,0.2)]'} 
            border rounded-2xl p-6 sm:p-10
            transition-all duration-500
            flex flex-col sm:flex-row items-center gap-6`}
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