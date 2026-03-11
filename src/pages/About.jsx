import { MapPin, Bus, Train, Plane } from 'lucide-react';
import esicBuildingImg from '../../asset/ESCIBUILD.png';

// Ancient French paintings for section backgrounds
const FRENCH_PAINTINGS = {
  hero: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg',
  about: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
  reach: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jacques_Louis_David_Coronation.jpg/1280px-Jacques_Louis_David_Coronation.jpg',
  team: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  gallery: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN-LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1280px-JEAN-LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg',
};

const SectionBg = ({ src, opacity = 'opacity-20', children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
    <div className={`absolute inset-0 bg-renaissance-dark ${opacity}`} />
    <div className="absolute inset-0 bg-renaissance-dark/70" />
    <div className="relative z-10">{children}</div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen font-milanesa bg-renaissance-dark text-[#FBF1CF]">

      {/* ── Hero ── */}
      <SectionBg src={FRENCH_PAINTINGS.hero} opacity="opacity-20" className="py-24 md:py-32 relative">
        {/* Subtle Ambient Glow Effect inside Background */}
        <div className="absolute top-0 left-1/2 w-full max-w-4xl h-[30vh] -translate-x-1/2 bg-renaissance-gold/10 blur-[120px] rounded-[100%] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-24">

          {/* 1. Main Welcome Section */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

            {/* Wissendurst Context Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl blur-md transition-all duration-700 group-hover:bg-white/10" />
              <div className="relative bg-[#1a0f0a]/60 backdrop-blur-xl border border-renaissance-gold/20 shadow-2xl rounded-3xl p-8 md:p-12 transition-all duration-500 hover:border-renaissance-gold/40 hover:shadow-[0_0_40px_rgba(201,162,39,0.1)]">

                <h2 className="text-4xl md:text-5xl lg:text-5xl font-milanesa font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] uppercase tracking-wide drop-shadow-sm">
                  Wissendurst 2026
                </h2>

                <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#FBF1CF]/90 font-medium">
                  <p className="border-l-2 border-renaissance-gold/50 pl-6 italic text-[#FBF1CF]">
                    Riding on the success of our previous edition, ESIC Medical College and Hospital, KK Nagar, Chennai proudly brings forth Wissendurst 2026, the annual intercollegiate medical conference for inquisitive undergraduate medical students.
                  </p>
                  <p>
                    True to the spirit of its name, we present to you the sixth edition of this event, all ready to ignite your thirst for knowledge. Featuring engaging workshops, stimulating debates, thought provoking presentations, inspiring guest lectures and the grand intercollegiate quiz, the conference promises an enriching experience that will leave you eager for more.
                  </p>
                  <div className="bg-renaissance-gold/5 p-4 rounded-xl border border-renaissance-gold/10 text-renaissance-gold/90 font-semibold shadow-inner">
                    Gear up, because this edition, we unveil new additions to tap into your creativity and expand your horizons.
                  </div>
                  <p>
                    If you believe you have already seen it all, think again- don't miss what could be one of the most rewarding ways to spend your time. So why wait? Fasten your seatbelts and get ready to embark on a remarkable journey of knowledge, discovery and excitement!
                  </p>
                </div>
              </div>
            </div>

            {/* ESIC Building Parallax Frame */}
            <div className="flex justify-center lg:justify-end perspective-1000">
              <div className="relative group cursor-pointer w-full max-w-sm md:max-w-md">
                {/* Floating Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#8B4513]/40 to-renaissance-gold/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Image Frame */}
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border-[1px] border-renaissance-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 hover:rotate-2 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(201,162,39,0.25)] bg-[#1A0F0A]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-transparent to-transparent z-10 opacity-80" />
                  <img
                    src={esicBuildingImg}
                    alt="ESIC Building"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-renaissance-gold font-bold text-sm tracking-widest uppercase mb-1">Host Venue</p>
                    <p className="text-[#FBF1CF] font-milanesa text-xl md:text-2xl drop-shadow-md">ESIC MCH, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aesthetic Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-renaissance-gold/30 to-transparent my-2" />

          {/* 2. Committee & ESIC Dual Grids */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Note From Committee Glass Card */}
            <div className="group relative h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-renaissance-gold/5 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <div className="relative h-full bg-[#1a0f0a]/60 backdrop-blur-xl border border-renaissance-gold/15 shadow-xl rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-renaissance-gold/40 hover:-translate-y-2 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-renaissance-gold/20 to-transparent border border-renaissance-gold/30 flex items-center justify-center mb-8 shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-renaissance-gold shadow-[0_0_15px_rgba(201,162,39,0.8)]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-milanesa font-black mb-6 text-renaissance-gold uppercase tracking-wide drop-shadow-sm">
                  Note from the Committee
                </h2>
                <div className="space-y-5 text-sm md:text-base leading-relaxed text-[#FBF1CF]/80 font-medium flex-grow">
                  <p>
                    <strong className="text-renaissance-gold font-bold tracking-wider">WISSENDURST</strong> has always been a celebration of knowledge and creativity. This April, we carry that legacy forward with a broader vision as we present our new edition.
                  </p>
                  <p>
                    Our workshops have been reimagined, with existing sessions refined and new ones introduced to create a more engaging and immersive learning experience. A wide range subjects have been introduced in this year's case and poster presentations, alongside the introduction of protocol presentations as a new academic dimension.
                  </p>
                  <p>
                    <strong className="text-renaissance-gold font-bold tracking-wider">MINERVA</strong>, the fabled quiz segment of WISSENDURST, returns with its signature energy while expanding beyond conventional boundaries through the inclusion of the online quizzes. Tamil events also make their debut this year, offering a vibrant and empowering platform for an energetic and expressive communication.
                  </p>

                  {/* Pull Quote Highlight */}
                  <div className="mt-8 p-5 rounded-xl bg-renaissance-gold/10 border border-renaissance-gold/20 flex gap-4 shadow-inner">
                    <span className="text-renaissance-gold font-black text-4xl leading-none">"</span>
                    <p className="italic text-[#FBF1CF] mt-1 text-sm md:text-base">
                      We are deeply grateful for the continued support which inspired us to design every event with our participants at the heart of it. Join us on <span className="text-renaissance-gold font-bold border-b border-renaissance-gold/50 mx-1">April 28th, 29th, and 30th</span> to explore and experience a new dimension of learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About ESIC MCH Glass Card */}
            <div className="group relative h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-renaissance-gold/5 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <div className="relative h-full bg-[#1a0f0a]/60 backdrop-blur-xl border border-renaissance-gold/15 shadow-xl rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-renaissance-gold/40 hover:-translate-y-2 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-renaissance-gold/20 to-transparent border border-renaissance-gold/30 flex items-center justify-center mb-8 shadow-inner">
                  <div className="w-4 h-4 rounded-sm rotate-45 border-[3px] border-renaissance-gold shadow-[0_0_15px_rgba(201,162,39,0.8)]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-milanesa font-black mb-6 text-renaissance-gold uppercase tracking-wide drop-shadow-sm">
                  About ESIC MCH, Chennai
                </h2>
                <div className="space-y-5 text-sm md:text-base leading-relaxed text-[#FBF1CF]/80 font-medium flex-grow">
                  <p>
                    Since its institutionalization in 2013, ESIC Medical College and Hospital has emerged as one of the foremost pillars of tertiary healthcare in Chennai. Strategically located in the heart of the city, this vast, high-volume institution stands as a testament to accessible, comprehensive, and quality medical care for the working population and beyond.
                  </p>

                  {/* Metric Highlights */}
                  <ul className="grid grid-cols-2 gap-4 my-6">
                    <li className="bg-renaissance-gold/5 border border-renaissance-gold/15 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-inner hover:bg-renaissance-gold/10 transition-colors duration-300 cursor-default">
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] to-renaissance-gold font-milanesa mb-1">1000+</span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-renaissance-gold font-bold">Inpatient Beds</span>
                    </li>
                    <li className="bg-renaissance-gold/5 border border-renaissance-gold/15 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-inner hover:bg-renaissance-gold/10 transition-colors duration-300 cursor-default">
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] to-renaissance-gold font-milanesa mb-1">3000+</span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-renaissance-gold font-bold">Daily Footfall</span>
                    </li>
                  </ul>

                  <p>
                    The Medical College boasts state-of-the-art facilities, ensuring comprehensive training for undergraduates and postgraduates to become skilled, and future-ready doctors. With over 15 super-speciality departments, the college provides extensive exposure to the students.
                  </p>
                  <p className="border-l-2 border-renaissance-gold/30 pl-4 italic text-sm mt-4 text-[#FBF1CF]/60">
                    Apart from an extensive clinical exposure, the college also boasts vibrant extra-curricular clubs including the dance, music, debate, literary clubs and more. With the support of our dedicated faculty, the students are regularly exposed to the latest updates in the medical field through various seminars, quizzes, CMEs, national level conferences- helping the students have the right balance between academics and co-curriculars.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </SectionBg>

      {/* ── How to Reach Us & Explore Around Us Split Section ── */}
      <SectionBg src={FRENCH_PAINTINGS.reach} opacity="opacity-20" className="py-24 md:py-32 relative border-t border-renaissance-gold/20 overflow-hidden">
        {/* Glow behind title */}
        <div className="absolute top-20 left-1/2 w-[600px] h-[150px] -translate-x-1/2 bg-renaissance-gold/10 blur-[100px] rounded-[100%] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20">

            {/* ── Left Column: How to Reach Us ── */}
            <div className="flex flex-col h-full">
              <div className="text-center lg:text-left mb-12 lg:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-milanesa font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] lg:bg-gradient-to-r lg:from-renaissance-gold lg:to-[#FBF1CF] uppercase tracking-wide drop-shadow-sm">
                  How to Reach Us?
                </h2>
                <div className="h-px w-48 mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-renaissance-gold/50 to-transparent lg:from-renaissance-gold/50 lg:to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12 flex-grow text-[#FBF1CF]/90">

                {/* Metro Card */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-renaissance-gold/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="relative h-full bg-[#1a0f0a]/60 backdrop-blur-xl border border-renaissance-gold/20 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:border-renaissance-gold/50 hover:translate-x-2 hover:shadow-[10px_0_40px_rgba(201,162,39,0.15)] flex items-center gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-renaissance-gold/20 to-transparent border border-renaissance-gold/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <MapPin strokeWidth={1.5} className="w-8 h-8 text-renaissance-gold drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-milanesa font-bold text-renaissance-gold mb-2 uppercase tracking-wider">By Metro</h3>
                      <p className="text-sm font-medium leading-relaxed text-[#FBF1CF]/80">
                        Ashok Nagar metro station (Green Line) — connects to Chennai Central & Airport.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bus Card */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-renaissance-gold/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="relative h-full bg-[#1a0f0a]/60 backdrop-blur-xl border border-renaissance-gold/20 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:border-renaissance-gold/50 hover:translate-x-2 hover:shadow-[10px_0_40px_rgba(201,162,39,0.15)] flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-renaissance-gold/20 to-transparent border border-renaissance-gold/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Bus strokeWidth={1.5} className="w-8 h-8 text-renaissance-gold drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="text-xl font-milanesa font-bold text-renaissance-gold mb-2 uppercase tracking-wider">By Bus (MTC)</h3>
                      <div className="flex flex-col gap-2 w-full mt-3">
                        <div className="bg-renaissance-gold/10 border border-renaissance-gold/20 py-2 px-3 rounded-lg text-xs tracking-wide">
                          ESIC Hospital (Gate Drop)
                        </div>
                        <div className="bg-renaissance-gold/10 border border-renaissance-gold/20 py-2 px-3 rounded-lg text-xs tracking-wide">
                          Ashok Pillar (400m Away)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Train / Flight Card */}
                <div className="group relative h-full sm:col-span-2 lg:col-span-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-renaissance-gold/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="relative h-full bg-[#1a0f0a]/60 backdrop-blur-xl border border-renaissance-gold/20 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:border-renaissance-gold/50 hover:translate-x-2 hover:shadow-[10px_0_40px_rgba(201,162,39,0.15)] flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex flex-col gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-renaissance-gold/20 to-transparent border border-renaissance-gold/30 flex items-center justify-center shadow-inner group-hover:-translate-x-1 transition-transform duration-500">
                        <Train strokeWidth={1.5} className="w-6 h-6 text-renaissance-gold drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-renaissance-gold/20 to-transparent border border-renaissance-gold/30 flex items-center justify-center shadow-inner group-hover:translate-x-1 transition-transform duration-500 delay-75">
                        <Plane strokeWidth={1.5} className="w-6 h-6 text-renaissance-gold drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
                      </div>
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="text-xl font-milanesa font-bold text-renaissance-gold mb-3 uppercase tracking-wider">Train & Air</h3>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#FBF1CF]">
                          <span className="w-1.5 h-1.5 rounded-full bg-renaissance-gold" />
                          W. Mambalam (2.8 km)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#FBF1CF]">
                          <span className="w-1.5 h-1.5 rounded-full bg-renaissance-gold" />
                          Egmore (8 km)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#FBF1CF]">
                          <span className="w-1.5 h-1.5 rounded-full bg-renaissance-gold" />
                          Airport (9 km)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Centralized CTA: Google Maps */}
              <div className="flex justify-center lg:justify-start mt-auto pt-4">
                <a
                  href="https://www.google.com/maps?ll=13.034253,80.206934&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=11772188360414815231"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-renaissance-gold text-renaissance-dark font-black tracking-widest uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,162,39,0.5)] hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <MapPin className="w-5 h-5 relative z-10 animate-bounce" />
                  <span className="relative z-10 text-sm">Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* ── Right Column: Explore Around Us ── */}
            <div className="flex flex-col pt-12 lg:pt-0 lg:pl-16 lg:border-l lg:border-renaissance-gold/15 border-t border-renaissance-gold/15 lg:border-t-0 mt-12 lg:mt-0 relative">
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-renaissance-gold/5 blur-[100px] rounded-[100%] pointer-events-none" />

              <div className="text-center lg:text-right mb-10 lg:mb-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-milanesa font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] lg:bg-gradient-to-l lg:from-renaissance-gold lg:to-[#FBF1CF] uppercase tracking-wide drop-shadow-sm">
                  Explore Around Us
                </h2>
                <div className="h-px w-32 mx-auto lg:mx-0 lg:ml-auto bg-gradient-to-r from-transparent via-renaissance-gold/50 to-transparent lg:from-transparent lg:to-renaissance-gold/50" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 relative z-10 mt-auto">
                {[74, 1640777, 262706, 273671, 1030643, 271708, 1105953, 3184398, 1438081].map((id, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-xl ${i === 0 ? 'row-span-2 col-span-2 sm:col-span-1 h-full' :
                      i === 4 ? 'row-span-2 h-full' : 'aspect-square'
                      }`}
                  >
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 border border-renaissance-gold/20 rounded-2xl z-20 transition-all duration-500 group-hover:border-renaissance-gold/80" />
                    {/* image */}

                    {/* Subtle vignette / overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[#FBF1CF] font-bold text-xs tracking-wider uppercase drop-shadow-md flex items-center gap-1 border-l-2 border-renaissance-gold pl-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-renaissance-gold" /> View
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionBg>

      {/* ── Team Section ── */}
      <SectionBg src={FRENCH_PAINTINGS.team} opacity="opacity-10" className="py-24 md:py-32 border-t border-renaissance-gold/15 relative overflow-hidden">
        {/* Glow behind section title */}
        <div className="absolute top-20 left-1/2 w-[600px] h-[150px] -translate-x-1/2 bg-renaissance-gold/10 blur-[120px] rounded-[100%] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-milanesa font-black mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] uppercase tracking-wide drop-shadow-sm">
            Team Wissendurst '26
          </h2>

          <div className="space-y-20 lg:space-y-24">

            {/* Chief Patron */}
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-renaissance-gold font-bold mb-4 uppercase tracking-[0.3em]">Chief Patron</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#FBF1CF] tracking-wide drop-shadow-md">
                DR. SOWMYA SAMPATH
              </h3>
              <p className="text-sm md:text-base uppercase text-[#FBF1CF]/60 mt-3 tracking-wider">
                Dean Incharge, ESIC Medical College and Hospital
              </p>
            </div>

            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-renaissance-gold/40 to-transparent" />

            {/* Vice Patrons */}
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-renaissance-gold font-bold mb-10 uppercase tracking-[0.3em]">Vice Patrons</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 w-full max-w-5xl mx-auto">
                {[
                  { name: 'DR. PUSHPALATHA K', role: 'Medical Superintendent' },
                  { name: 'DR. K V SARALA DEVI', role: 'Registrar' },
                  { name: 'DR. VIJAYANATH V', role: 'Vice Principal' },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <h3 className="text-2xl md:text-2xl lg:text-3xl font-black uppercase text-[#FBF1CF] tracking-wide mb-2 transition-colors duration-300 group-hover:text-renaissance-gold">
                      {p.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#FBF1CF]/60 uppercase tracking-widest">
                      {p.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-renaissance-gold/40 to-transparent" />

            {/* Faculty In-charge */}
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-renaissance-gold font-bold mb-4 uppercase tracking-[0.3em]">Faculty Incharge</p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#FBF1CF] tracking-wide drop-shadow-md">
                DR. SRINIVAS H
              </h3>
              <p className="text-sm md:text-base text-[#FBF1CF]/60 uppercase mt-3 tracking-wider">
                Associate Professor, Department of Biochemistry
              </p>
            </div>

            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-renaissance-gold/40 to-transparent" />

            <div className="pt-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-renaissance-gold via-[#FBF1CF] to-renaissance-gold font-black mb-16 uppercase tracking-[0.2em] font-milanesa">
                Organising Committee
              </p>

              {/* Committee Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto text-center md:text-left">
                {[
                  {
                    items: [
                      { role: 'Academic Secretaries', names: ['RISHALINI U', 'VEDANT SOMA'] },
                      { role: 'Presentations', names: ['DIYA VINOD', 'ESHITA SUDHAKAR'] },
                      { role: 'Editorial Team', names: ['ESHITA SUDHAKAR', 'PRAGNYA PRADEEPKUMAR', 'DIYA VINOD', 'ASHYA ASHOK', 'ILAKKIYA G E', 'JANITHA PRABHAKARAN'] },
                    ]
                  },
                  {
                    items: [
                      { role: 'Organising Secretaries', names: ['FARHATHUL AFRAA', 'JESWIN ANTONY', 'NANDANA SREEKUMAR'] },
                      { role: 'Quiz', names: ['JANE SARAH JOHN', 'KALANIDHI M', 'MANIKANDAN A'] },
                      { role: 'Designing Team', names: ['LUCKSHANYA V K', 'LAKSHA S P', 'DHEEKSHI S', 'HARINI G', 'JANE SARAH JOHN'] },
                    ]
                  },
                  {
                    items: [
                      { role: 'Treasurer', names: ['AHMED SHAMEER (96336 69164)'] },
                      { role: 'Speakers Collective', names: ['JANE SARAH JOHN', 'JANITHA PRABHAKARAN', 'KALANIDHI M'] },
                      { role: 'Social Media Team', names: ['TO BE ANNOUNCED'] },
                    ]
                  },
                ].map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-12">
                    {col.items.map((item, ii) => (
                      <div key={ii} className="flex flex-col pb-4">
                        <p className="text-sm border-b border-renaissance-gold/30 pb-2 inline-block md:w-full w-3/4 mx-auto md:mx-0 text-renaissance-gold uppercase tracking-[0.2em] font-bold mb-4">
                          {item.role}
                        </p>
                        <div className="flex flex-col gap-2">
                          {item.names.map((n, ni) => (
                            <h4 key={ni} className="text-lg sm:text-xl lg:text-2xl font-black uppercase text-[#FBF1CF]">
                              {n}
                            </h4>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionBg>

    </div>
  );
};

export default About;
