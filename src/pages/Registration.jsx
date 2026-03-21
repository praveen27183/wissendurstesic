import { useState, useEffect } from 'react';
import {
  ArrowDown, ChevronRight, Phone, AlertCircle,
  IndianRupee, ExternalLink, Info, CheckCircle2, ShieldAlert,
  MapPin, FileText, Upload, CreditCard, Sparkles, UserPlus, Mail, Contact
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarBorder from '../components/StarBorder';
import GradientText from '../components/GradientText';

import Galaxy from '../components/Galaxy.jsx';
import OptimizedImage from '../components/OptimizedImage';
import { usePerformance } from '../context/PerformanceContext';

const Registration = () => {
  const { isLowPerf } = usePerformance();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Automatically hide intro after 8 seconds
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showIntro && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [showIntro]);
  const workshopsList = [
    "Anatomy", "Biochemistry", "Pathology", "Microbiology", "FM Autopsy", "FM Crime scene",
    "ENT", "Ophthalmology", "General medicine", "General surgery", "OBG",
    "Paediatrics", "Psychiatry", "EM & Anaesthesia", "Orthopaedics"
  ];

  const TimelineStep = ({ num, title, desc, icon: Icon, isLast }) => (
    <div className="flex gap-5 md:gap-8 group">
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-black/80 backdrop-blur-sm'} border border-st-red/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,0,60,0.1)] group-hover:bg-st-red/10 group-hover:border-st-red group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,0,60,0.4)] transition-all duration-500`}>
          <span className="font-title font-bold text-st-red text-xl group-hover:text-[#ffffff] transition-colors">{num}</span>
        </div>
        {!isLast && <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-st-red/40 to-transparent my-3 group-hover:from-st-red transition-colors duration-500"></div>}
      </div>
      <div className="pb-10 pt-2 md:pt-3">
        <h4 className="text-[#ffffff] font-bold text-lg md:text-xl mb-3 flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-st-red" />}
          {title}
        </h4>
        <p className="text-gray-300/70 text-lg md:text-xl leading-relaxed max-w-lg">{desc}</p>
      </div>
    </div>
  );

  if (showIntro) {
    return (
      <div
        className={`fixed inset-0 z-[100] ${isLowPerf ? 'bg-[#050505]' : 'bg-black'} flex items-center justify-center p-4 cursor-pointer`}
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-tight sm:leading-[1.0] tracking-widest sm:tracking-[0.05em] uppercase flex flex-col items-center justify-center w-full">
            <span className="text-outline w-full block">A GATEWAY TO</span>
            <span className="text-fill-anim delay-1 w-full block py-1">PARTICIPATION.</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM SIGN-UP</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">TO EXPERIENCE,</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY REGISTRATION</span>
            <span className="text-outline w-full block">OPENS THE DOOR TO</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">LEARNING.</span>
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
    <div className="min-h-screen font-body bg-[#050505] relative overflow-x-hidden">

      {/* ── 1. HERO SECTION ── */}
      <div className="relative min-h-[52vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="/asset/hero_sec_for_all/registration.png"
          alt="Registration Hero"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          decoding="sync"
        />
        <div className={`absolute inset-0 z-0 bg-gradient-to-t from-[#050505] ${isLowPerf ? 'via-[#050505]' : 'via-[#050505]/80'} to-transparent`}></div>
        <div className={`absolute inset-0 z-0 bg-gradient-to-b ${isLowPerf ? 'from-[#050505]' : 'from-black/80'} via-transparent to-transparent`}></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-st-red/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-st-blue/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-12 md:mt-20">
          <div className="inline-block relative mb-4 md:mb-8 group">
            <GradientText
              colors={['#ffffff', '#ff003c', '#ffffff']}
              animationSpeed={6}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-milanesa font-black tracking-widest sm:tracking-[0.1em] uppercase mb-2 md:mb-4 drop-shadow-[0_4px_10px_rgba(255,0,60,0.3)]"
            >
              REGISTRATION
            </GradientText>
            {/* Glowing Red Underline Animation */}
            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-st-red to-transparent opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[8px] blur-md bg-st-red/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-xl text-gray-300/80 max-w-3xl mx-auto font-light tracking-wide mb-8 md:mb-12">
            Secure your presence at Wissendurst 2026. Experience elevated academic discourse, premium workshops, and peerless medical events.
          </p>

          <div className="w-full max-w-4xl mx-auto px-2 sm:px-0 
  flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">

            {/* GENERAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StarBorder
                  as="button"
                  color="#ff003c"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    document.getElementById("section-general")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  <div className="px-6 sm:px-8 py-3 font-title font-bold uppercase tracking-[0.2em] text-[14px] sm:text-[16px] flex items-center justify-center gap-2">
                    General Registration
                    <ArrowDown className="w-7 h-7 sm:w-7 sm:h-7" />
                  </div>
                </StarBorder>
              </motion.div>
            </motion.div>



            {/* EVENTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StarBorder
                  as="button"
                  color="#2563ff"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    document.getElementById("section-workshop")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  <div className="px-6 sm:px-8 py-3 font-title font-bold uppercase tracking-[0.2em] text-[14px] sm:text-[16px] flex items-center justify-center gap-2">
                    Workshop Registration
                    <ArrowDown className="w-7 h-7 sm:w-7 sm:h-7" />
                  </div>
                </StarBorder>
              </motion.div>
            </motion.div>
            {/* WORKSHOP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StarBorder
                  as="button"
                  color="#ff003c"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    document.getElementById("section-event")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  <div className="px-6 sm:px-8 py-3 font-title font-bold uppercase tracking-[0.2em] text-[14px] sm:text-[16px] flex items-center justify-center gap-2">
                    Events Registration
                    <ArrowDown className="w-7 h-7 sm:w-7 sm:h-7" />
                  </div>
                </StarBorder>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Galaxy Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Galaxy
          starSpeed={0.2}
          density={1.2}
          hueShift={220}
          transparent
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 mt-10 md:mt-0">

        {/* ── 2. INFORMATION CARDS ── */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-32">
          {/* About Wissendurst */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-st-red/20 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-st-red/50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,0,60,0.05)]">
            <div className="absolute -right-20 -top-20 w-48 h-48 md:w-64 md:h-64 bg-st-red/5 rounded-full blur-3xl pointer-events-none group-hover:bg-st-red/10 transition-colors duration-500"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-milanesa font-bold text-transparent bg-clip-text bg-gradient-to-r from-st-red to-[#ffffff] mb-4 sm:mb-8 uppercase tracking-widest flex items-center gap-3 sm:gap-4 leading-tight">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-st-red shrink-0" /> About Wissendurst
            </h2>
            <div className="text-gray-300/80 text-lg sm:text-xl md:text-xl leading-relaxed space-y-4 sm:space-y-6 font-light">
              <p>
                <span className="font-bold text-[#ffffff] uppercase tracking-wider">Wissendurst ’26</span>, the annual intercollegiate academic fest hosted by ESIC Medical College, Chennai, returns this year in greater splendour, promising an experience more captivating and memorable than ever before.
              </p>
              <p>
                With 15 immersive workshops and 12+ dynamic events, Wissendurst is designed to ignite curiosity, connect ideas, and inspire discovery. It is a space where learning knows no limits and textbooks come alive through experience.
              </p>
            </div>
          </div>

          {/* Note from the Committee */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-st-red/20 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-st-red/50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,0,60,0.05)]">
            <div className="absolute -left-20 -bottom-20 w-48 h-48 md:w-64 md:h-64 bg-st-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-st-blue/20 transition-colors duration-500"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-milanesa font-bold text-transparent bg-clip-text bg-gradient-to-r from-st-red to-[#ffffff] mb-4 sm:mb-8 uppercase tracking-widest flex items-center gap-3 sm:gap-4 leading-tight">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-st-red shrink-0" /> Committee Note
            </h2>
            <div className="text-gray-300/80 text-lg sm:text-xl md:text-xl leading-relaxed space-y-4 sm:space-y-6 font-light">
              <p>
                <span className="font-bold text-[#ffffff]">WISSENDURST 2026</span> returns with a broader vision: refined workshops, diverse case and poster presentations, and the introduction of protocol presentations.
              </p>
              <p>
                <span className="font-bold text-[#ffffff]">MINERVA</span> expands with online editions, while Tamil events debut as a vibrant platform for expression. We also bring forth a new event for dental and AHS students: <span className="text-st-red font-medium italic">Face and Body Painting</span>.
                Join us on April 28–30 at ESIC Medical College & Hospital, KK Nagar, Chennai.   </p>

            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-32 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] uppercase tracking-wide drop-shadow-sm mb-4 sm:mb-6">
              Registration Rules
            </h2>
            <p className="text-gray-300/80 max-w-2xl mx-auto text-lg sm:text-xl md:text-xl font-light leading-relaxed">
              Open to all bonafide students of medical colleges and universities. Please read carefully to ensure a seamless registration process.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Categories */}
            <div className={`lg:col-span-4 ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-black/40 backdrop-blur-md'} border border-st-red/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-st-red/40 transition-colors`}>
              <h3 className="text-lg sm:text-xl font-title font-bold text-st-red mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-3">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6" /> Categories
              </h3>
              <div className="space-y-4 mb-6 sm:mb-8">
                <div className="bg-white/5 border border-white/5 p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <span className="text-[#ffffff] font-bold tracking-wide text-sm sm:text-base">General Registration + Workshop Registration</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <span className="text-[#ffffff] font-bold tracking-wide text-sm sm:text-base">Event Registration</span>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-300/70 leading-relaxed p-3 sm:p-4 bg-st-red/10 rounded-xl border border-st-red/20">
                <span className="font-bold text-st-red block mb-1">NOTE:</span>
                For <strong className="text-white">Events</strong>, General Registration is not required. You may directly access Event Registration.
              </p>
            </div>

            {/* Events Without General Registration */}
            <div className={`lg:col-span-8 ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-black/40 backdrop-blur-md'} border border-st-red/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-st-red/40 transition-colors`}>
              <h3 className="text-lg sm:text-xl font-title font-bold text-st-red mb-6 sm:mb-8 uppercase tracking-widest border-b border-st-red/20 pb-4 sm:pb-6 flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" /> Events Exempt from General Registration
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Quizzes", desc: "Online Quiz (Erythron and Axis) and Offline Quiz (Minerva Junior and Senior)" },
                  { title: "Presentations", desc: "Pathology Poster, Pharmacology Poster, Case Presentation, Symposium, Protocol Presentation" },
                  { title: "research poster presentation", desc: "Showcase innovative research through detailed poster presentations" },
                  { title: "Speaker's Collective", desc: "English Debate, MUN" },
                  { title: "Tamil Mandram", desc: "Tamil Debate, Elocution" },
                  { title: "Other Events", desc: "Face and Body Painting, Health Care Detectives" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex gap-3 sm:gap-4 p-3 sm:p-0 bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none">
                    <div className="w-1.5 min-h-[30px] sm:min-h-[40px] bg-st-red/20 rounded-full group-hover:bg-st-red transition-colors duration-300"></div>
                    <div>
                      <h4 className="font-bold text-[#ffffff] text-lg sm:text-xl uppercase tracking-wider mb-1 sm:mb-2 group-hover:text-st-red transition-colors">{item.title}</h4>
                      <p className="text-base sm:text-lg text-gray-300/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 4 & 5. GENERAL / WORKSHOP / EVENT REGISTRATION WITH TIMELINE ── */}
        <div className="space-y-12 sm:space-y-16 mb-20 md:mb-32">

          {/* General Registration Track */}
          <div id="section-general" className="bg-[#0f0f14] border border-st-red/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group scroll-mt-28">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-st-red/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:bg-st-red/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 lg:gap-12 relative z-10">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-[#ffffff] tracking-wide leading-tight mt-2 sm:mt-0">
                  GENERAL<br className="hidden sm:block" /> REGISTRATION
                </h2>

                <div className="flex items-center gap-4 pb-6 sm:pb-8 border-b border-white/10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-st-red to-black flex items-center justify-center shadow-lg shrink-0">
                    <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-black text-st-red">300</span>
                    <span className="text-xs sm:text-sm font-light text-gray-300/60 uppercase tracking-widest">Per Person</span>
                  </div>
                </div>

                <p className="text-gray-300/80 text-lg sm:text-xl md:text-xl leading-relaxed font-light">
                  Mandatory for all participants attending <strong className="text-white">Workshops, MedTalks</strong>, and other programs (except Events).
                </p>
                <p className="text-lg sm:text-xl text-red-300 bg-red-950/30 p-3 sm:p-4 border-l-2 border-red-500 rounded-r-lg">
                  * General registration once completed cannot be cancelled or refunded.
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <a
                    href="https://forms.gle/rpWhUuw22fSvx3ya6"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto px-10 py-5 bg-st-red text-white rounded-full font-title font-black uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,0,60,0.4)] flex items-center justify-center gap-3">
                      Register Now <ExternalLink className="w-5 h-5" />
                    </button>
                  </a>
                </div>
              </div>

              <div className={`${isLowPerf ? 'bg-[#0a0a0a]' : 'bg-black/50 backdrop-blur-md'} p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(255,0,60,0.1)]`}>

                {/* Heading */}
                <h3 className="text-base sm:text-xl md:text-2xl font-title font-bold text-st-red mb-6 sm:mb-10 uppercase tracking-[0.25em] text-center sm:text-left">
                  Registration Process
                </h3>

                {/* Timeline */}
                <div className="flex flex-col gap-5 sm:gap-6">

                  <TimelineStep
                    num="1"
                    title="Fill Online Form"
                    desc="Navigate to the general registration form on our portal."
                    icon={FileText}
                  />

                  <TimelineStep
                    num="2"
                    title="Submit Details"
                    desc="Provide delegate name, year, college, and contact details."
                    icon={UserPlus}
                  />

                  <TimelineStep
                    num="3"
                    title="Upload Documents"
                    desc="Upload a clear photo of your college ID card."
                    icon={Upload}
                  />

                  <TimelineStep
                    num="4"
                    title="Execute Payment"
                    desc="Upload screenshot of successful UPI transaction."
                    icon={CreditCard}
                    isLast={true}
                  />
                  <TimelineStep
                    num="5"
                    title="Successful Payment"
                    desc="Upload screenshot of your successful UPI payment with transaction ID"
                    icon={CreditCard}
                    isLast={true}
                  />

                </div>

                {/* Register Button in side div */}
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                  <a
                    href="https://forms.gle/rpWhUuw22fSvx3ya6"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <button className="w-full px-8 py-4 bg-st-red text-white rounded-xl font-title font-black uppercase tracking-widest hover:scale-[1.02] hover:bg-white hover:text-black transition-all shadow-lg flex items-center justify-center gap-3">
                      General Registration <ExternalLink className="w-5 h-5" />
                    </button>
                  </a>
                </div>

                {/* Bottom Info Card */}
                <div className="mt-6 sm:mt-10 bg-gradient-to-r from-st-red/20 to-transparent border border-st-red/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-start gap-3 sm:gap-4">

                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-st-red shrink-0 mt-1" />

                  <div>
                    <h4 className="text-white font-semibold text-lg sm:text-lg md:text-lg mb-1">
                      Receive Unique ID
                    </h4>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      After registration, you will receive a
                      <span className="text-st-red font-semibold"> Unique ID </span>
                      within 24–48 hours via email. This ID is required for all workshop registrations.

                      <br className="hidden sm:block" />

                      Please check both your <span className="text-st-red/90">inbox</span> and
                      <span className="text-st-red/90"> spam folder</span> for the confirmation email.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Workshop Registration Track */}
          <div id="section-workshop" className="bg-[#0f0f14] border border-st-red/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group scroll-mt-28">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-st-red/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform -translate-x-1/3 -translate-y-1/3 group-hover:bg-st-red/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8 lg:gap-20 relative z-10">

              <div className={`order-2 lg:order-1 ${isLowPerf ? 'bg-[#0a0a0a]' : 'bg-black/40'} p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5`}>
                <h3 className="text-base sm:text-lg md:text-xl font-title font-bold text-st-red mb-6 sm:mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Pre-requisite ID" desc="Ensure you have received your Unique ID from General Registration first." icon={ShieldAlert} />
                  <TimelineStep num="2" title="Select Workshop" desc="Each workshop has a separate form – please fill out the forms for the workshops you’re interested in" icon={FileText} />
                  <TimelineStep num="3" title="Submit Details" desc="Provide Delegate ID, Unique ID number, and College ID proof." icon={Upload} />
                  <TimelineStep num="4" title="Payment Details" desc="Upload screenshot of UPI transaction ID specifically for the workshop." icon={CreditCard} isLast={true} />
                </div>
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 text-base sm:text-lg text-gray-300/60 italic leading-relaxed text-center">
                  <strong className="text-st-red">Note: </strong>Registrations are non-refundable. However, if a workshop is cancelled due to unavoidable circumstances, a refund will be processed within 15 business days.
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-[#ffffff] tracking-wide leading-tight">
                  WORKSHOP<br />REGISTRATION
                </h2>

                <p className="text-gray-300/80 text-lg sm:text-xl md:text-xl leading-relaxed font-light pb-6 sm:pb-8 border-b border-white/10 sm:text-left">
                  Explore a curated <strong className="text-st-red font-semibold">selection of premium</strong> workshops across 3 days.

                  Slots are limited and will be allotted on a
                  <strong className="text-st-red font-semibold"> first-come, first-served basis</strong>.
                </p>

                <div>

                  <h4 className="text-base sm:text-lg font-bold text-white tracking-[0.2em] mb-3 sm:mb-4 uppercase">Available Workshops</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {workshopsList.map((w, i) => (
                      <span
                        key={i}
                        className="text-base uppercase font-semibold text-white/80 bg-gradient-to-r from-red-800 via-red-600 to-red-800 px-3 py-1.5 rounded-md flex items-center shadow-md"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 text-base sm:text-lg text-gray-300/60 italic leading-relaxed text-center">
                    <p className="text-gray-300/80 text-base sm:text-lg leading-relaxed font-light sm:text-left">Note: FM Autopsy Workshop: On-spot registration only</p>
                  </div>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <Link to="/workshops" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-8 py-4 border border-st-red text-st-red rounded-full font-title font-bold uppercase tracking-widest hover:bg-st-red hover:text-white transition-all flex items-center justify-center gap-3">
                        View Workshops & Register <ChevronRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Event Registration Track */}
          <div id="section-event" className="bg-[#0f0f14] border border-st-red/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group scroll-mt-28">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:bg-white/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 lg:gap-12 relative z-10">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-st-red tracking-wide leading-tight mt-2 sm:mt-0">
                  EVENT<br className="hidden sm:block" /> REGISTRATION
                </h2>

                <p className="text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed font-light pb-6 sm:pb-8 border-b border-white/10">
                  Choose your preferred events and register individually, as each event has a dedicated form. <strong className="text-white border-b border-dashed border-white">General registration is not required.</strong>
                </p>

                <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl">
                  <p className="text-base sm:text-lg text-gray-300/70 leading-relaxed">
                    Participants may register for any number of events. For team events, only one registration per team is required. Participants are advised to review the schedule to prevent timing conflicts.
                  </p>
                </div>
              </div>

              <div className={`bg-black/40 ${isLowPerf ? 'bg-[#0a0a0a]' : 'bg-black/40'} p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5`}>
                <h3 className="text-base sm:text-lg md:text-xl font-title font-bold text-white mb-6 sm:mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Submit Details" desc="Provide details of the participant (individual) or all team members (Name, Year, College, Contact)." icon={UserPlus} />
                  <TimelineStep num="2" title="Verify Identity" desc="Upload college ID card photograph(s) for the participant or all team members." icon={Upload} />
                  <TimelineStep num="3" title="Fee Payment" desc="Upload a screenshot of the UPI transaction ID for the event fee, applicable to individual or team registration." icon={CreditCard} isLast={true} />
                </div>
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 text-base sm:text-lg text-gray-300/60 italic leading-relaxed text-center">
                  <strong className="text-st-red">Note: </strong>Registrations are non-refundable. However, if an event is cancelled due to unavoidable circumstances, a refund will be processed within 15 business days.
                </div>
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link to="/academicevents" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-4 border border-st-red/50 text-white rounded-xl font-title font-bold uppercase tracking-widest hover:bg-st-red transition-all text-xs">
                      Academic Events
                    </button>
                  </Link>
                  <Link to="/quizzes" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-4 border border-st-blue/50 text-white rounded-xl font-title font-bold uppercase tracking-widest hover:bg-st-blue transition-all text-xs">
                      Quizzes
                    </button>
                  </Link>
                  <Link to="/debateandoratory" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-4 border border-white/20 text-white rounded-xl font-title font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-xs">
                      Debate & Oratory
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── 6. MANDATORY REQUIREMENTS ── */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-8 sm:mb-16 px-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-title font-black text-[#ffffff] uppercase tracking-wider sm:tracking-widest mb-4">
              Mandatory On Event Day
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-st-red to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Confirmation Email', icon: Mail, desc: 'Digital or printed proof received post-registration.' },
              { title: 'Unique ID', icon: Contact, desc: 'The 24-48hr generated tracking code.' },
              { title: 'College ID Card', icon: FileText, desc: 'Physical, valid bonafide identity card from your institution.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-st-red/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center group hover:-translate-y-2 hover:bg-st-red/5 hover:border-st-red transition-all duration-500 shadow-xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-black border border-st-red/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-st-red group-hover:shadow-[0_0_20px_rgba(255,0,60,0.3)] transition-all duration-500">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-st-red group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-title font-bold text-[#ffffff] text-base sm:text-lg uppercase tracking-wider mb-2 sm:mb-3 group-hover:text-st-red transition-colors">{item.title}</h3>
                <p className="text-base sm:text-lg text-gray-300/60 font-light px-2 sm:px-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7 & 8. CONTACT & FOOTER ENHANCEMENT ── */}
        <div className="border-t border-st-red/20 pt-16 sm:pt-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-gradient-to-r from-transparent via-st-red to-transparent opacity-50"></div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">

            {/* Contact Grid */}
            <div>
              <h4 className="font-milanesa font-black mb-6 sm:mb-10 uppercase text-[#ffffff] tracking-[0.1em] sm:tracking-[0.2em] text-2xl sm:text-3xl flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-st-red" /> Query Contacts
              </h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
                {[
                  { name: "LEKHA SHRUTHY R J", phone: "97897 03487", role: "Registration Head" },
                  { name: "SHALINI R", phone: "94442 62579", role: "Registration Head" },
                  { name: "KARTHIKEYAN", phone: "94895 32419", role: "Registration Head" },
                  { name: "MEIMOZHI", phone: "63828 66554", role: "Registration Head" }
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={`tel:+91${contact.phone.replace(/\s+/g, '')}`}
                    className="flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-black/40 border border-st-red/20 hover:border-st-red hover:bg-st-red/10 transition-all duration-300 group shadow-lg drop-shadow-sm hover:-translate-y-1"
                  >

                    <div className="flex flex-col gap-1.5 sm:gap-2">

                      {/* Name */}
                      <span className="text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide sm:tracking-wider group-hover:text-st-red transition-colors duration-300">
                        {contact.name}
                      </span>

                      {/* Role (WHITE 90%) */}
                      <span className="text-white/90 text-base sm:text-base md:text-lg font-medium tracking-wide">
                        {contact.role}
                      </span>

                      {/* Phone */}
                      <span className="text-st-red font-semibold text-base sm:text-lg tracking-wide sm:tracking-wider hover:underline">
                        +91 {contact.phone}
                      </span>

                    </div>
                  </a>
                ))}
              </div>

              {/* Email Contact */}
              <a
                href="mailto:Wissendurst26@gmail.com"
                className="flex items-center justify-center gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/40 border border-st-red/20 hover:border-st-red hover:bg-st-red/10 transition-all duration-300 group shadow-lg drop-shadow-sm hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-st-red group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide group-hover:text-st-red transition-colors">
                  Wissendurst26@gmail.com
                </span>
              </a>
            </div>

            {/* Styled Map / Address Card */}
            <div className="bg-white/[0.02] border border-st-red/20 p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden group hover:border-st-red/50 transition-all duration-500 flex flex-col gap-6">

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=ESIC+Medical+College,Chennai&zoom=14&size=600x300')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-40 transition duration-700"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

              {/* 📍 CONTENT */}
              <div className="relative z-10 flex flex-col gap-4">

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-st-red/20 backdrop-blur-md border border-st-red/50 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-st-red animate-bounce" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-milanesa font-black text-white uppercase tracking-widest">
                  Venue
                </h3>

                {/* Address */}
                <p className="text-gray-300/80 text-base sm:text-lg leading-relaxed max-w-md">
                  <span className="text-st-red font-semibold block mb-1">
                    ESIC Medical College & PGIMSR
                  </span>
                  Ashok Pillar Road, K.K. Nagar,<br />
                  Chennai, Tamil Nadu 600078
                </p>

                {/* Link */}
                <a
                  href="https://maps.google.com/?q=ESIC+Medical+College+KK+Nagar+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-st-red uppercase tracking-[0.2em] hover:text-white transition-colors w-fit border-b border-st-red/30 pb-1"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>

              </div>

              {/* 🗺️ MAP (separate block for proper alignment) */}
              <div className="relative z-10 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=ESIC%20Medical%20College%20Chennai&output=embed"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
