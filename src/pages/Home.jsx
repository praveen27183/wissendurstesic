import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ElectricBorder from '../components/ElectricBorder';
import StarBorder from '../components/StarBorder';
import GlitchText from '../components/GlitchText';
import GradientText from '../components/GradientText';
import Galaxy from '../components/Galaxy.jsx';
import OptimizedImage from '../components/OptimizedImage';
import { usePerformance } from '../context/PerformanceContext';

const Home = () => {
  const { isLowPerf } = usePerformance();
  
  return (
    <div className="min-h-screen font-body bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src="/asset/mainbg/starnger_thingsbg.jpeg"
          alt="Wissendurst Hero"
          className="absolute inset-0 w-full h-full object-cover"
          priority={true}
        />
        <div className={`absolute inset-0 z-[1] ${isLowPerf ? 'bg-[#0a0a0a]/90' : 'bg-[#0a0a0a]/80 backdrop-blur-[2px]'}`}></div>

        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Galaxy 
            starSpeed={0.2}
            density={1.1}
            hueShift={200}
            transparent
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center mt-20 md:mt-0 pb-10 md:pb-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6 drop-shadow-[0_0_20px_rgba(255,0,60,0.8)] tracking-tight"
          >
            <GlitchText className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-title font-black text-white">
              WISSENDURST '26
            </GlitchText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="h-[2px] w-8 md:w-16 bg-st-red shadow-[0_0_10px_rgba(255,0,60,1)]"></div>
            <p className="text-lg md:text-3xl lg:text-4xl font-title font-bold text-gray-100 tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(37,99,255,0.8)]">
              APRIL 28 | 29 | 30
            </p>
            <div className="h-[2px] w-8 md:w-16 bg-st-red shadow-[0_0_10px_rgba(255,0,60,1)]"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.2 }}
            className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full max-w-3xl px-2 sm:px-0"
          >
            <Link to="/registration#section-general" className="col-span-1 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <StarBorder as="div" color="#ff003c" className="w-full h-full sm:w-auto">
                  <div className="px-4 sm:px-8 py-2 font-title font-bold uppercase tracking-widest text-[20px] sm:text-base leading-snug text-center">
                    General Registration
                  </div>
                </StarBorder>
              </motion.div>
            </Link>
            <Link to="/registration#section-event" className="col-span-1 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <StarBorder as="div" color="#ff003c" className="w-full h-full sm:w-auto">
                  <div className="px-2 sm:px-8 py-2 font-title font-bold uppercase tracking-widest text-[20px] sm:text-base leading-snug text-center">
                    Event Registration
                  </div>
                </StarBorder>
              </motion.div>
            </Link>
            <a 
              href="https://drive.google.com/file/d/1RPLAc9NQObbfb3Cz_5VuYbagoFcm2ERD/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="col-span-2 sm:col-span-1 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <StarBorder as="div" color="#2563ff" className="w-full h-full sm:w-auto">
                  <div className="px-2 sm:px-8 py-2 font-title font-bold uppercase tracking-widest text-[20px] sm:text-base leading-snug text-center">
                    View Brochure
                  </div>
                </StarBorder>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Registrations Section */}
      <section className="py-12 md:py-32 relative bg-st-secondary border-y border-st-blue/20 shadow-[0_0_40px_rgba(37,99,255,0.1)] z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#050505]/40 via-st-secondary to-[#050505]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10 md:mb-16"
          >
            <GradientText
              colors={['#ffffff', '#ff003c', '#ffffff']}
              animationSpeed={6}
              className="text-4xl sm:text-5xl md:text-7xl font-milanesa font-black uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Registrations Open
            </GradientText>
           
          </motion.div>
          <div className="flex items-center justify-center gap-4 mb-16">
 <GradientText
              colors={['#ffffff', '#ff003c', '#ffffff']}
              animationSpeed={6}
              className="text-4xl sm:text-2xl md:text-3xl font-milanesa font-black uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Explore 
            </GradientText>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Explore Quizzes */}
            <ElectricBorder color="#ff003c" speed={1} chaos={0.12} borderRadius={16} className="h-full">
              <Link to="/quizzes">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-[#050505]/60 border border-st-red/30 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(255,0,60,0.05)] hover:shadow-[0_0_30px_rgba(255,0,60,0.3)] hover:border-st-red h-full flex flex-col justify-center"
                >
                  <div className="absolute inset-0 bg-st-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl md:text-2xl font-title font-bold text-white uppercase tracking-widest group-hover:text-st-red transition-colors flex items-center justify-center gap-2 text-center">
                     <span className="text-st-red">Quizzes</span>
                  </h3>
                </motion.div>
              </Link>
            </ElectricBorder>

            {/* Explore Academic Events */}
            <ElectricBorder color="#ff003c" speed={1} chaos={0.12} borderRadius={16} className="h-full">
              <Link to="/academicevents">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-[#050505]/60 border border-st-red/30 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(255,0,60,0.05)] hover:shadow-[0_0_30px_rgba(255,0,60,0.3)] hover:border-st-red h-full flex flex-col justify-center"
                >
                  <div className="absolute inset-0 bg-st-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl md:text-2xl font-title font-bold text-white uppercase tracking-widest group-hover:text-st-red transition-colors flex items-center justify-center gap-2 text-center">
                    Academic <span className="text-st-red">Events</span>
                  </h3>
                </motion.div>
              </Link>
            </ElectricBorder>

            {/* Explore Debate Forum */}
            <ElectricBorder color="#2563ff" speed={1} chaos={0.12} borderRadius={16} className="h-full">
              <Link to="/debateandoratory">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-[#050505]/60 border border-st-blue/30 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(37,99,255,0.05)] hover:shadow-[0_0_30px_rgba(37,99,255,0.3)] hover:border-st-blue h-full flex flex-col justify-center"
                >
                  <div className="absolute inset-0 bg-st-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl md:text-2xl font-title font-bold text-white uppercase tracking-widest group-hover:text-st-blue transition-colors flex items-center justify-center gap-2 text-center">
                    Debate <span className="text-st-blue">Forum</span>
                  </h3>
                </motion.div>
              </Link>
            </ElectricBorder>

            {/* Explore Workshops */}
            <ElectricBorder color="#2563ff" speed={1} chaos={0.12} borderRadius={16} className="h-full">
              <Link to="/workshops">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-[#050505]/60 border border-st-blue/30 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(37,99,255,0.05)] hover:shadow-[0_0_30px_rgba(37,99,255,0.3)] hover:border-st-blue h-full flex flex-col justify-center"
                >
                  <div className="absolute inset-0 bg-st-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl md:text-2xl font-title font-bold text-white uppercase tracking-widest group-hover:text-st-blue transition-colors flex items-center justify-center gap-2 text-center">
                     <span className="text-st-blue">Workshops</span>
                  </h3>
                </motion.div>
              </Link>
            </ElectricBorder>
          </div>
        </div>
      </section>

      {/* About Section */}
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
            <img
              src="/asset/logo/wissennobg.png"
              alt="Wissendurst Logo"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_20px_rgba(255,0,60,0.2)] animate-float relative z-10 hover:drop-shadow-[0_0_30px_rgba(255,0,60,0.6)] transition-all duration-500"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
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
            <div className="bg-[rgba(10,10,15,0.85)] p-6 sm:p-8 md:p-14 rounded-2xl backdrop-blur-xl space-y-4 md:space-y-6 text-[#cbd5e1] text-sm sm:text-base md:text-xl leading-relaxed font-body text-justify shadow-[0_0_30px_rgba(255,0,60,0.1)] relative overflow-hidden">
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

  {/* Title */}
  <p className="text-white text-lg sm:text-2xl md:text-3xl font-title tracking-wide leading-tight">
    The Organizing Committee
  </p>

  {/* Subtitle */}
  <p className="text-st-red font-bold uppercase text-[11px] sm:text-[11px] md:text-xs tracking-[0.25em] md:tracking-[0.4em] opacity-90 
    drop-shadow-[0_0_8px_rgba(255,0,60,0.7)]">
    Wissendurst 2026
  </p>

  {/* 🔥 Decorative Line */}
  <div className="mt-2 w-16 md:w-24 h-[2px] bg-st-red shadow-[0_0_12px_rgba(255,0,60,0.9)]"></div>

</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
