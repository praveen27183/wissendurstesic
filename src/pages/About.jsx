import { MapPin, Bus, Train, Plane } from 'lucide-react';

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
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${FRENCH_PAINTINGS.hero})` }} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-milanesa font-black text-[#FBF1CF] tracking-[0.1em] uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            ABOUT US
          </h1>
          <div className="mt-4 h-[2px] w-40 mx-auto bg-gradient-to-r from-transparent via-renaissance-gold to-transparent" />
        </div>
      </section>

      {/* ── About Description ── */}
      <SectionBg src={FRENCH_PAINTINGS.about} opacity="opacity-10" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-milanesa font-black mb-8 text-renaissance-gold uppercase tracking-wide">About Us</h2>
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-justify text-[#FBF1CF]/85 font-semibold">
              <p>
                ESIC Medical College and Hospital, Chennai provides top quality medical care to all of the individuals insured under the ESI Act as Tamil Nadu and acting as a beacon of healing to all its patients. Our institution has been adding to its state of the art facilities year on year, guided by our honorable Dean and our highly experienced faculty, in our effort to provide the best care to patients.
              </p>
              <p>
                In 2013, the medical college was established with a strong intake of both undergraduate and postgraduate medical students, as well as allied health sciences. A robust research wing guides our students and faculty in our quest for knowledge.
              </p>
              <p>
                ESIC Medical College, Chennai has several clubs for extracurricular activities such as music, culturals, debates and quizzes, run by students and guided by faculty. These come together to host inter-disciplinary, sports and cultural fests, celebrations, quizzes, CMEs, debates and many more events all year round.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-renaissance-gold rounded-full opacity-20 blur-2xl group-hover:scale-110 transition-transform duration-700" />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/ESIC_Logo.svg/200px-ESIC_Logo.svg.png"
                alt="ESIC Logo"
                className="relative w-52 h-52 md:w-64 md:h-64 object-contain bg-renaissance-burgundy p-6 rounded-full border-8 border-renaissance-gold/60 shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-transform duration-700 hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </SectionBg>

      {/* ── How to Reach Us ── */}
      <SectionBg src={FRENCH_PAINTINGS.reach} opacity="opacity-15" className="py-20 md:py-28 border-t border-renaissance-gold/15">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-milanesa font-black mb-12 text-renaissance-gold uppercase tracking-wide">
            How to Reach Us?
          </h2>
          <div className="space-y-10 text-sm md:text-base font-semibold text-[#FBF1CF]/85 leading-relaxed border-l-2 border-renaissance-gold/30 pl-6 md:pl-10">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <MapPin strokeWidth={1.5} className="w-9 h-9 text-renaissance-gold flex-shrink-0 mt-1" />
              <p className="italic pt-1 text-justify">Take the Ashok Nagar metro station on the green line — connected to both Chennai railway station and the domestic airport.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Bus strokeWidth={1.5} className="w-9 h-9 text-renaissance-gold flex-shrink-0 mt-1" />
              <div className="pt-1">
                <p className="mb-2">If travelling by MTC bus, use stop:</p>
                <ul className="list-[square] ml-6 space-y-1 text-[#FBF1CF]/70">
                  <li>ESIC Hospital (drop off at college front gate)</li>
                  <li>Ashok Pillar / Udhayam Theater (400m from gate)</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex gap-3 items-center">
                <Train strokeWidth={1.5} className="w-8 h-8 text-renaissance-gold flex-shrink-0" />
                <Plane strokeWidth={1.5} className="w-8 h-8 text-renaissance-gold flex-shrink-0" />
              </div>
              <div className="pt-1">
                <p className="mb-2">By auto: <a href="https://maps.app.goo.gl/t5H2E88q8jGAt4V1A" className="text-renaissance-gold underline underline-offset-4 hover:text-[#FBF1CF] transition-colors" target="_blank" rel="noreferrer">Google Maps →</a></p>
                <p className="font-bold text-renaissance-gold mt-4 mb-2 uppercase tracking-wide text-xs">Nearest Locations:</p>
                <ul className="list-[square] ml-6 space-y-1 text-[#FBF1CF]/70">
                  <li>West Mambalam railway station — 2.8 km</li>
                  <li>Egmore railway station — 8 km</li>
                  <li>Chennai domestic airport — 9 km</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionBg>

      {/* ── Explore Around Us ── */}
      <SectionBg src={FRENCH_PAINTINGS.gallery} opacity="opacity-10" className="py-20 border-t border-renaissance-gold/15">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-milanesa font-black mb-12 text-center text-renaissance-gold uppercase tracking-wide">
            Explore Around Us
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {[74, 1640777, 262706, 273671, 1030643, 271708, 1105953, 3184398, 1438081, 2182970].map((id, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg border border-renaissance-gold/20 group">
                <img
                  src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={`Around us ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      {/* ── Team Section ── */}
      <SectionBg src={FRENCH_PAINTINGS.team} opacity="opacity-10" className="py-20 border-t border-renaissance-gold/15">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-milanesa font-black mb-16 text-renaissance-gold uppercase tracking-wide">
            Team Wissendurst '26
          </h2>

          <div className="space-y-12">
            {/* Chief Patron */}
            <div className="flex flex-col items-center">
              <p className="text-[10px] text-renaissance-gold font-bold mb-2 uppercase tracking-[0.3em]">Chief Patron</p>
              <p className="text-xl md:text-2xl font-black uppercase text-[#FBF1CF]">DR. CHAVAN KALIDAS DATTATRAYA</p>
              <p className="text-xs uppercase text-[#FBF1CF]/60 mt-1">Dean, ESIC Medical College and Hospital</p>
            </div>

            <div className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-renaissance-gold/30 to-transparent" />

            {/* Vice Patrons */}
            <div>
              <p className="text-[10px] text-renaissance-gold font-bold mb-6 uppercase tracking-[0.3em]">Vice Patrons</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { name: 'DR. PUSHPHALATHA K.', role: 'Medical Superintendent' },
                  { name: 'DR. B.V. SARALA DEVI', role: 'Registrar' },
                  { name: 'DR. YUVANANDH V.', role: 'Principal' },
                ].map((p, i) => (
                  <div key={i} className="p-4 rounded-xl border border-renaissance-gold/15 bg-renaissance-gold/5 backdrop-blur-sm">
                    <p className="font-black uppercase text-[#FBF1CF] text-sm">{p.name}</p>
                    <p className="text-[10px] text-[#FBF1CF]/60 uppercase tracking-wide mt-1">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-renaissance-gold/30 to-transparent" />

            {/* Faculty In-charge */}
            <div>
              <p className="text-[10px] text-renaissance-gold font-bold mb-3 uppercase tracking-[0.3em]">Faculty In-Charge</p>
              <p className="text-lg font-black uppercase text-[#FBF1CF]">DR. KOTHAI GNANAMOORTHY</p>
              <p className="text-xs text-[#FBF1CF]/60 uppercase mt-1">Professor — Department of General Medicine</p>
            </div>

            <div className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-renaissance-gold/30 to-transparent" />

            {/* Committee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              {[
                {
                  items: [
                    { role: 'Academic Team Lead', names: ['ALAMELU VENKATACHALAM', 'GOWRISHANKAR K N'] },
                    { role: 'Physical Team', names: ['A M CYRIL SANJAY', 'PRIYADHARSHINI P', 'SREEYAA SRI B'] },
                    { role: 'Workshop Heads', names: ['JEBISH A', 'RANJITA ANAND', 'KRISHNAMOORTHY PR', 'A M CYRIL SANJAY'] },
                    { role: 'H&S', names: ['GOWRISHANKAR K N'] },
                    { role: 'Registration', names: ['IMAAD SHAKIR', 'JAYASHREE E', 'MADHUMITHA G'] },
                  ]
                },
                {
                  items: [
                    { role: 'Organising Secretary', names: ['HEMANTH A E', 'SAI LIKHITHA P V'] },
                    { role: 'Content Writers & Editors', names: ['ITHISAM', 'VARSHA DHARANI K'] },
                    { role: 'Social Media', names: ['SUBHASHREE B K'] },
                    { role: 'Poster / Research / Case', names: ['ITHISAM', 'SHREE NACHA'] },
                    { role: 'Food & Beverage', names: ['AADINARAYAN C', 'NIKHIL B R'] },
                  ]
                },
                {
                  items: [
                    { role: 'Treasurer', names: ['RAM YOGESH'] },
                    { role: 'IT Head', names: ['IMAAD SHAKIR'] },
                    { role: 'Website', names: ['IMAAD SHAKIR', 'A M CYRIL SANJAY'] },
                    { role: 'Cult', names: ['ARJUN G', 'NARENDRAN G'] },
                    { role: 'Accommodation', names: ['VISHAL V', 'ASHIKA SHRI P'] },
                  ]
                },
              ].map((col, ci) => (
                <div key={ci} className="space-y-6">
                  {col.items.map((item, ii) => (
                    <div key={ii} className="p-4 rounded-xl border border-renaissance-gold/15 bg-renaissance-gold/5 backdrop-blur-sm">
                      <p className="text-[10px] text-renaissance-gold uppercase tracking-[0.25em] font-bold mb-2">{item.role}</p>
                      {item.names.map((n, ni) => (
                        <p key={ni} className="text-xs font-black uppercase text-[#FBF1CF]/90">{n}</p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBg>

    </div>
  );
};

export default About;
