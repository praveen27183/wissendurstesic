import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy } from 'lucide-react';
import Button from '../components/Button';
import StampBox from '../components/StampBox';

const Home = () => {
  return (
    <div className="min-h-screen font-title bg-renaissance-dark">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 bg-renaissance-dark/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-title font-black text-[#FBF1CF] mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-tight">
            WISSENDURST '26
          </h1>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-renaissance-gold"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-title font-bold text-renaissance-gold tracking-[0.2em] uppercase">
              JUNE 12 | 13 | 14
            </p>
            <div className="h-[2px] w-12 bg-renaissance-gold"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/registration">
              <button className="px-8 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                General Registration
              </button>
            </Link>
            <Link to="/events">
              <button className="px-8 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                View Brochure
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Registrations Section */}
      <section
        className="py-12 relative bg-renaissance-dark/70 backdrop-blur-sm border-y border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden max-w-8xl mx-auto   -mt-10 md:-mt-24 z-10"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center ">
          <h2 className="text-3xl md:text-5xl font-milanesa font-bold text-renaissance-gold mb-12 uppercase tracking-wider drop-shadow-md">
            Registrations Open! Register Now!
          </h2>

          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/events" className="group">
              <StampBox className="transform group-hover:-translate-y-2 transition-transform duration-300">
                Explore<br />Events
              </StampBox>
            </Link>

            <Link to="/workshops" className="group">
              <StampBox className="transform group-hover:-translate-y-2 transition-transform duration-300">
                Explore<br />Workshops
              </StampBox>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-16 md:py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1510519133417-2ca01bd062ba?auto=format&fit=crop&q=80&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 bg-renaissance-dark/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-milanesa font-bold text-renaissance-gold mb-8 uppercase leading-tight text-center">
              About<br />WISSENDURST '26
            </h2>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed font-title font-EXTRAbold">
              <p>
                WISSENDURST '26 — the annual intercollegiate academic fest hosted by ESIC Medical College, Chennai — has returned this year in all its grandeur!
              </p>
              <p>
                With 15 immersive workshops and 7 thrilling events, this academic celebration is designed to rekindle every student's passion for the subject we all cherish. Step into a world of wonder as we take you on a journey back to the Renaissance, a time of discovery, innovation, and magic.
              </p>
            </div>

            <div className="flex gap-6 md:gap-12 mt-10">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-title font-black text-renaissance-gold">15+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-300 mt-2">Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-title font-black text-renaissance-gold">7+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-300 mt-2">Events</div>
              </div>
              <div className="flex items-end">
                <Link to="/events">
                  <button className="px-6 py-2 bg-renaissance-burgundy text-renaissance-gold border border-renaissance-gold rounded-full font-title font-bold uppercase text-sm hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all">
                    Our Schedule
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 md:mt-0">
            <div className="relative w-60 h-60 md:w-80 md:h-80 flex items-center justify-center bg-renaissance-burgundy rounded-full border-8 border-renaissance-gold shadow-2xl group overflow-hidden">
              <div className="absolute inset-0 bg-renaissance-dark opacity-10 transition-opacity group-hover:opacity-100"></div>
              <div className="relative flex flex-col items-center">
                <img
                  src="/asset/wissendurstesic_logo.png"
                  alt="Wissendurst Logo"
                  className="w-44 h-44 md:w-56 md:h-56 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Curved Text Simulation */}
              <div className="absolute inset-0 p-4 animate-spin-slow pointer-events-none opacity-20">
                <div className="w-full h-full border-4 border-dotted border-renaissance-gold rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-[#5C2B1B]">
        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stucco.png')]"></div>
        {/* Vignette lighting effect */}
        <div className="absolute inset-0 bg-gradient-to-radial from-transparent to-black/80 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-milanesa font-extrabold text-[#FDEAA8] mb-4 uppercase tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
              Message From The Organizing Committee
            </h2>
          </div>

          <div className="relative mt-8 max-w-3xl mx-auto group">
            {/* The Feather / Quill Decoration */}
            <div className="absolute -right-8 sm:-right-16 -top-16 sm:-top-24 w-24 sm:w-32 h-48 sm:h-64 z-30 opacity-90 transition-transform duration-1000 group-hover:rotate-6 drop-shadow-2xl pointer-events-none" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2013/07/12/13/44/feather-147147_1280.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', filter: 'drop-shadow(8px 8px 12px rgba(0,0,0,0.6)) brightness(0.6) sepia(0.8) hue-rotate(340deg)' }}></div>

            {/* Top Scroll Roll */}
            <div className="relative h-12 md:h-16 bg-gradient-to-b from-[#a47e45] via-[#dfcd9f] to-[#7a5b2e] rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-20 mx-[-15px] md:mx-[-30px] border-b border-[#4a3217] flex items-center justify-between px-2">
              {/* Left and Right wood/roll ends */}
              <div className="w-8 md:w-12 h-8 md:h-10 bg-[#3A220D] rounded-full drop-shadow-md border-2 border-[#1A0F06]"></div>
              <div className="w-8 md:w-12 h-8 md:h-10 bg-[#3A220D] rounded-full drop-shadow-md border-2 border-[#1A0F06]"></div>
            </div>

            {/* Scroll Paper (Body) */}
            <div className="relative bg-[#ebd2a9] px-8 py-16 md:px-16 md:py-20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 -my-6 md:-my-8 mx-2 sm:mx-4 border-x border-[#c19b67]">
              {/* Inner burnt shadow for aged feel */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(107,62,14,0.4)] pointer-events-none"></div>
              {/* Distressed paper texture */}
              <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>

              {/* Text content container */}
              <div className="space-y-8 text-[#3A220D] text-lg md:text-xl leading-loose font-milanesa font-semibold text-justify relative z-10">
                <p className="indent-8 sm:indent-12">
                  <span className="float-left text-5xl md:text-7xl font-milanesa font-black leading-none pr-3 pb-2 text-[#682415]">W</span>
                  e, the Organising Committee of WISSENDURST '26, take immense pleasure in welcoming you to this year's academic festival, hosted by ESIC Medical College, Chennai.
                </p>
                <p>
                  As always, we are committed to delivering an unforgettable experience in every aspect, and believe us, this year will be no exception. WISSENDURST '26 offers a rare blend: an immersive journey into the artistic brilliance of the past, paired with insightful workshops led by trailblazers in the medical field. It's an academic celebration like none other.
                </p>
                <p className="pb-4">
                  Once again, we warmly welcome you to our event crafted with passion and dedication. Looking forward to hosting you on June 12th, 13th, and 14th!
                </p>
              </div>

              <div className="mt-16 text-center text-[#3A220D] font-milanesa relative z-10 border-t border-[#8B5A2B]/30 pt-8 mx-auto px-8 flex flex-col items-center gap-1">
                <p className="italic text-xl font-semibold text-[#5A3010]">Best regards,</p>
                <p className="text-2xl md:text-3xl font-black mt-2 text-[#1A0F06] tracking-wide">The Organizing Committee</p>
                <p className="text-[#682415] font-extrabold tracking-[0.2em] uppercase mt-3 text-sm md:text-base">Wissendurst 2026</p>
              </div>
            </div>

            {/* Bottom Scroll Roll */}
            <div className="relative h-12 md:h-16 bg-gradient-to-t from-[#a47e45] via-[#dfcd9f] to-[#7a5b2e] rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-20 mx-[-15px] md:mx-[-30px] border-t border-[#4a3217] flex items-center justify-between px-2">
              {/* Left and Right wood/roll ends */}
              <div className="w-8 md:w-12 h-8 md:h-10 bg-[#3A220D] rounded-full drop-shadow-md border-2 border-[#1A0F06]"></div>
              <div className="w-8 md:w-12 h-8 md:h-10 bg-[#3A220D] rounded-full drop-shadow-md border-2 border-[#1A0F06]"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
