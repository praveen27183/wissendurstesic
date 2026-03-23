import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ElectricBorder from '../components/ElectricBorder';
import StarBorder from '../components/StarBorder';
import GlitchText from '../components/GlitchText';
import GradientText from '../components/GradientText';
import Galaxy from '../components/Galaxy.jsx';
import OptimizedImage from '../components/OptimizedImage';

import { lazy, Suspense } from 'react';

// Lazy load below-the-fold sections
const AboutSection = lazy(() => import('../components/AboutSection'));
const MessageSection = lazy(() => import('../components/MessageSection'));

const SectionSkeleton = () => (
  <div className="py-16 md:py-32 bg-[#0a0a0a] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-st-red/20 border-t-st-red rounded-full animate-spin"></div>
  </div>
);

const Home = () => {


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
        <div className="absolute inset-0 z-[1] bg-[#0a0a0a]/80 backdrop-blur-[2px]"></div>


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
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />

      </Suspense>

      {/* Message Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <MessageSection />

      </Suspense>
    </div>
  );
};

export default Home;
