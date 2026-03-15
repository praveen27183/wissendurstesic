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

const Registration = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Automatically hide intro after 8 seconds
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);
  const workshopsList = [
    "Anatomy", "Biochemistry", "Pathology", "Microbiology", "FM Autopsy", "FM Crime scene",
    "ENT", "Ophthalmology", "General medicine", "General surgery", "OBG",
    "Paediatrics", "Psychiatry", "EM & Anaesthesia", "Orthopaedics"
  ];

  const TimelineStep = ({ num, title, desc, icon: Icon, isLast }) => (
    <div className="flex gap-5 md:gap-8 group">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 border border-st-red/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,0,60,0.1)] group-hover:bg-st-red/10 group-hover:border-st-red group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,0,60,0.4)] transition-all duration-500">
          <span className="font-title font-bold text-st-red text-xl group-hover:text-[#ffffff] transition-colors">{num}</span>
        </div>
        {!isLast && <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-st-red/40 to-transparent my-3 group-hover:from-st-red transition-colors duration-500"></div>}
      </div>
      <div className="pb-10 pt-2 md:pt-3">
        <h4 className="text-[#ffffff] font-bold text-lg md:text-xl mb-3 flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-st-red" />}
          {title}
        </h4>
        <p className="text-gray-300/70 text-sm md:text-base leading-relaxed max-w-lg">{desc}</p>
      </div>
    </div>
  );

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
    <div className="min-h-screen font-body bg-[#050505] relative overflow-hidden">

      {/* ── 1. HERO SECTION ── */}
      <div className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Registration Image Background with Dark Gradient Overlay */}
        <div  
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transform scale-105"
          style={{ backgroundImage: `url('/asset/hero_sec_for_all/registration.png')`, backgroundAttachment: 'fixed' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-st-red/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-st-blue/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-12 md:mt-20">
          <div className="inline-block relative mb-4 md:mb-8 group">
            <GradientText
              colors={['#ffffff', '#ff003c', '#ffffff']}
              animationSpeed={6}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-milanesa font-black tracking-widest sm:tracking-[0.1em] uppercase mb-2 md:mb-4 drop-shadow-[0_4px_10px_rgba(255,0,60,0.3)]"
            >
              REGISTRATION
            </GradientText>
            {/* Glowing Red Underline Animation */}
            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-st-red to-transparent opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[8px] blur-md bg-st-red/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <p className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-gray-300/80 max-w-3xl mx-auto font-light tracking-wide mb-8 md:mb-12">
            Secure your presence at Wissendurst 2026. Experience elevated academic discourse, premium workshops, and peerless medical events.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center items-center w-full max-w-3xl px-2 sm:px-0"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <StarBorder as="button" color="#ff003c" className="w-full h-full sm:w-auto">
                <div className="px-6 sm:px-10 py-3 font-title font-bold uppercase tracking-[0.2em] text-[16px] sm:text-[18px] flex items-center gap-3">
                  Proceed to Register
                  <ArrowDown className="w-5 h-5" />
                </div>
              </StarBorder>
            </motion.div>
          </motion.div>
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

      <div className="relative z-10 max-w-1xl mx-auto px-4 lg:px-8  pb-32">

        {/* ── 2. INFORMATION CARDS ── */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-32">
          {/* About Wissendurst */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-st-red/20 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-st-red/50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,0,60,0.05)]">
            <div className="absolute -right-20 -top-20 w-48 h-48 md:w-64 md:h-64 bg-st-red/5 rounded-full blur-3xl pointer-events-none group-hover:bg-st-red/10 transition-colors duration-500"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-milanesa font-bold text-transparent bg-clip-text bg-gradient-to-r from-st-red to-[#ffffff] mb-4 sm:mb-8 uppercase tracking-widest flex items-center gap-3 sm:gap-4 leading-tight">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-st-red shrink-0" /> About Wissendurst
            </h2>
            <div className="text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-6 font-light">
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
            <div className="text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-6 font-light">
              <p>
                <span className="font-bold text-[#ffffff]">WISSENDURST 2026</span> returns with a broader vision: refined workshops, diverse case and poster presentations, and the introduction of protocol presentations.
              </p>
              <p>
                <span className="font-bold text-[#ffffff]">MINERVA</span> expands with online editions, while Tamil events debut as a vibrant platform for expression. We also bring forth a new event for dental and AHS students: <span className="text-st-red font-medium italic">Face and Body Painting</span>.
              </p>
              <div className="p-4 sm:p-5 mt-4 sm:mt-6 border-l-4 border-st-red bg-st-red/5 rounded-r-xl">
                <p className="font-medium text-st-white text-xs sm:text-sm">
                  Join us on April 28–30 at ESIC Medical College & Hospital, KK Nagar, Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-32 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] uppercase tracking-wide drop-shadow-sm mb-4 sm:mb-6">
              Registration Rules
            </h2>
            <p className="text-gray-300/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Open to all bonafide students of medical colleges and universities. Please read carefully to ensure a seamless registration process.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Categories */}
            <div className="lg:col-span-4 bg-black/40 backdrop-blur-md border border-st-red/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-st-red/40 transition-colors">
              <h3 className="text-lg sm:text-xl font-title font-bold text-st-red mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-3">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6" /> Categories
              </h3>
              <div className="space-y-4 mb-6 sm:mb-8">
                <div className="bg-white/5 border border-white/5 p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <span className="text-[#ffffff] font-bold tracking-wide text-sm sm:text-base">General Registration</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <span className="text-[#ffffff] font-bold tracking-wide text-sm sm:text-base">Workshop Registration</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300/70 leading-relaxed p-3 sm:p-4 bg-st-red/10 rounded-xl border border-st-red/20">
                <span className="font-bold text-st-red block mb-1">NOTE:</span>
                For <strong className="text-white">Events</strong>, General Registration is not required. You may directly access Event Registration.
              </p>
            </div>

            {/* Events Without General Registration */}
            <div className="lg:col-span-8 bg-black/40 backdrop-blur-md border border-st-red/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-st-red/40 transition-colors">
              <h3 className="text-lg sm:text-xl font-title font-bold text-st-red mb-6 sm:mb-8 uppercase tracking-widest border-b border-st-red/20 pb-4 sm:pb-6 flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" /> Events Exempt from General Registration
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Quizzes", desc: "Online Quiz (Erythron and Axis) and Offline Quiz (Minerva Junior and Senior)" },
                  { title: "Presentations", desc: "Pathology Poster, Pharmacology Poster, Case Presentation, Symposium, Protocol Presentation" },
                  { title: "Speaker's Collective", desc: "English Debate, MUN" },
                  { title: "Tamil Mandram", desc: "Tamil Debate, Elocution" },
                  { title: "Other Events", desc: "Face and Body Painting, Health Care Detectives" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex gap-3 sm:gap-4 p-3 sm:p-0 bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none">
                    <div className="w-1.5 min-h-[30px] sm:min-h-[40px] bg-st-red/20 rounded-full group-hover:bg-st-red transition-colors duration-300"></div>
                    <div>
                      <h4 className="font-bold text-[#ffffff] text-sm sm:text-base uppercase tracking-wider mb-1 sm:mb-2 group-hover:text-st-red transition-colors">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300/60 leading-relaxed">{item.desc}</p>
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
          <div className="bg-[#0f0f14] border border-st-red/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group">
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
                    <span className="text-xs sm:text-sm font-light text-gray-300/60 uppercase tracking-widest">Per Candidate</span>
                  </div>
                </div>

                <p className="text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  Mandatory for all participants attending <strong className="text-white">Workshops, MedTalks</strong>, and other programs (except Events).
                </p>
                <p className="text-[10px] sm:text-xs text-red-300 bg-red-950/30 p-3 sm:p-4 border-l-2 border-red-500 rounded-r-lg">
                  * General registration once completed cannot be cancelled or refunded.
                </p>
              </div>

              <div className="bg-black/40 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5">
                <h3 className="text-base sm:text-lg md:text-xl font-title font-bold text-st-red mb-6 sm:mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Fill Online Form" desc="Navigate to the candidate registration form on our portal." icon={FileText} />
                  <TimelineStep num="2" title="Submit Details" desc="Provide Delegate Name, Year of Study, College Name, and Contact mapping." icon={UserPlus} />
                  <TimelineStep num="3" title="Upload Documents" desc="Scan and upload a clear photograph of your official College ID card." icon={Upload} />
                  <TimelineStep num="4" title="Execute Payment" desc="Upload the screenshot of your successful UPI QR Code payment transaction ID." icon={CreditCard} isLast={true} />
                </div>

                <div className="mt-6 sm:mt-8 bg-st-red/10 border border-st-red/30 p-4 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-st-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#ffffff] font-bold text-base sm:text-lg mb-1 sm:mb-2">Receive Unique ID</h4>
                    <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed font-light">
                      Upon completion, receive a tracking <strong className="text-st-red">Unique ID + QR code</strong> within 24-48 hours via email. This ID is mandatory for accessing all workshop registrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Registration Track */}
          <div className="bg-[#0f0f14] border border-st-red/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-st-red/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform -translate-x-1/3 -translate-y-1/3 group-hover:bg-st-red/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8 lg:gap-20 relative z-10">

              <div className="order-2 lg:order-1 bg-black/40 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5">
                <h3 className="text-base sm:text-lg md:text-xl font-title font-bold text-st-red mb-6 sm:mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Pre-requisite ID" desc="Ensure you have received your Unique ID from General Registration first." icon={ShieldAlert} />
                  <TimelineStep num="2" title="Select Workshop" desc="Choose your preferred workshop slot. Subject to first-come, first-serve basis." icon={FileText} />
                  <TimelineStep num="3" title="Submit Details" desc="Provide Delegate ID, Unique ID number, and College ID proof." icon={Upload} />
                  <TimelineStep num="4" title="Payment Details" desc="Upload screenshot of UPI transaction ID specifically for the workshop." icon={CreditCard} isLast={true} />
                </div>
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 text-[10px] sm:text-xs text-gray-300/60 italic leading-relaxed text-center">
                  * Registrations are typically non-refundable unless cancelled due to unavoidable circumstances (15-day refund).
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-[#ffffff] tracking-wide leading-tight">
                  WORKSHOP<br />REGISTRATION
                </h2>

                <p className="text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed font-light pb-6 sm:pb-8 border-b border-white/10">
                  Select from <strong className="text-st-red">15 premium workshops</strong> across 3 days. Limited slots apply per venue.
                </p>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-st-red tracking-[0.2em] mb-3 sm:mb-4 uppercase">Available Workshops</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {workshopsList.map((w, i) => (
                      <span
  key={i}
  className="text-xs uppercase font-semibold text-black bg-gradient-to-r from-red-600 via-red-400 to-red-800 px-3 py-1.5 rounded-md flex items-center shadow-md"
>
  {w}
</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Event Registration Track */}
          <div className="bg-[#0f0f14] border border-st-red/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:bg-white/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 lg:gap-12 relative z-10">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-milanesa font-black text-[#ffffff] tracking-wide leading-tight mt-2 sm:mt-0">
                  EVENT<br className="hidden sm:block" /> REGISTRATION
                </h2>

                <p className="text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed font-light pb-6 sm:pb-8 border-b border-white/10">
                  Participate in up to 15 events. <strong className="text-white border-b border-dashed border-white">General Registration is NOT required.</strong>
                </p>

                <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl">
                  <p className="text-xs sm:text-sm text-gray-300/70 leading-relaxed">
                    There is no upper limit to the number of events. For team events, only one registration per team is required. Review the schedule to avoid timing overlaps.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5">
                <h3 className="text-base sm:text-lg md:text-xl font-title font-bold text-white mb-6 sm:mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Submit Details" desc="Provide details for all participants in the team (Name, Year, College, Contact)." icon={UserPlus} />
                  <TimelineStep num="2" title="Verify Identity" desc="Upload College ID card photographs for ALL team members combined." icon={Upload} />
                  <TimelineStep num="3" title="Fee Payment" desc="Upload screenshot of UPI transaction ID specifically covering the event team fee." icon={CreditCard} isLast={true} />
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
                <p className="text-xs sm:text-sm text-gray-300/60 font-light px-2 sm:px-0 leading-relaxed">{item.desc}</p>
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
              <h4 className="font-milanesa font-black mb-6 sm:mb-10 uppercase text-[#ffffff] tracking-[0.1em] sm:tracking-[0.2em] text-lg sm:text-2xl flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-st-red" /> Query Contacts
              </h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { name: "LEKHA", phone: "97897 03487", role: "Registration Head" },
                  { name: "SHALINI R", phone: "94442 62579", role: "Registration Head" },
                  { name: "KARTHIKEYAN", phone: "94895 32419", role: "Registration Head" },
                  { name: "MEIMOZHI", phone: "63828 66554", role: "Registration Head" }
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={`tel:+91${contact.phone.replace(/\s+/g, '')}`}
                    className="flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-black/40 border border-st-red/20 hover:border-st-red hover:bg-st-red/10 transition-all duration-300 group shadow-lg drop-shadow-sm hover:-translate-y-1"
                  >
                    
                    <div className="space-y-1 sm:space-y-2">
                      <span className="block text-[#ffffff] font-black tracking-wider sm:tracking-widest text-sm sm:text-base md:text-lg uppercase group-hover:text-st-red transition-colors">{contact.name}</span>
                      <span className="block text-xs sm:text-sm text-gray-300/50">{contact.role}</span>
                      <span className="block text-st-red font-bold text-xs sm:text-sm tracking-wider sm:tracking-widest">+91 {contact.phone}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Styled Map / Address Card */}
            <div className="bg-white/[0.02] border border-st-red/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden group hover:border-st-red/50 transition-all duration-500 min-h-[300px] flex flex-col justify-end">
              {/* Subtle background map image pattern */}
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=ESIC+Medical+College,Chennai&zoom=14&size=600x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:landscape|element:geometry|color:0x1b120c&style=feature:poi|element:geometry|color:0x283d6a&style=feature:road|element:geometry.fill|color:0x342921&style=feature:water|element:geometry|color:0x0e1626')] bg-cover bg-center opacity-20 filter grayscale group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-st-red/20 backdrop-blur-md border border-st-red/50 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-st-red animate-bounce" />
                </div>
                <h3 className="text-2xl font-milanesa font-black text-[#ffffff] uppercase tracking-widest mb-3">Venue</h3>
                <p className="text-gray-300/80 text-sm leading-relaxed max-w-sm">
                  <strong className="text-st-red block mb-1">ESIC Medical College & PGIMSR</strong>
                  Ashok Pillar Road, K.K. Nagar,<br />
                  Chennai, Tamil Nadu 600078
                </p>
                <a href="https://maps.google.com/?q=ESIC+Medical+College+KK+Nagar+Chennai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 text-xs font-bold text-st-red uppercase tracking-[0.2em] hover:text-[#ffffff] transition-colors border-b border-st-red/30 pb-1">
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
