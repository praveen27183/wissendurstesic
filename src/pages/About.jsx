import { MapPin, Bus, Train, Plane } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen font-body bg-white text-renaissance-dark">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1920&h=1080')`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <h1 className="relative z-10 text-6xl md:text-8xl font-milanesa font-black text-white tracking-[0.1em] uppercase drop-shadow-2xl">
          ABOUT US
        </h1>
      </section>

      {/* About Description Section */}
      <section className="py-24 max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_350px] gap-16 items-center bg-white">
        <div>
          <h2 className="text-5xl md:text-6xl font-milanesa font-black mb-8 text-renaissance-dark">About us</h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed text-justify font-body text-gray-800 font-medium">
            <p>
              ESIC Medical College and Hospital, Chennai provides top quality medical care to all of the individuals insured under the ESI Act as Tamil Nadu and acting as a beacon of healing to all its patients. Our institution has been adding to its state of the art facilities year on year, guided by our honorable Dean and our highly experienced faculty, in our effort to provide the best care to patients.
            </p>
            <p>
              In 2013, the medical college was established with a strong intake of both undergraduate and postgraduate medical students, as well as allied health sciences. A robust research wing guides our students and faculty in our quest for knowledge.
            </p>
            <p>
              ESIC Medical College, Chennai has several clubs for extracurricular activities such as music, culturals, debates and quizzes, run by students and guided by faculty. These come together to host inter-disciplinary, sports and cultural fests, celebrations, quizzes, CMEs, debates and many more events all year round, providing the perfect balance between studies and extra-curricular activities to its students.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-renaissance-gold rounded-full opacity-20 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/ESIC_Logo.svg/200px-ESIC_Logo.svg.png"
              alt="ESIC Logo"
              className="relative w-72 h-72 object-contain bg-renaissance-burgundy p-8 rounded-full border-[16px] border-[#B9935A] shadow-2xl transition-transform duration-700 hover:rotate-3"
            />
          </div>
        </div>
      </section>

      {/* Reach Us Section */}
      <section className="bg-[#E7C6C6] py-24 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-milanesa font-black mb-16 text-renaissance-dark">How to reach us?</h2>

          <div className="space-y-12 text-sm md:text-base font-body font-medium text-gray-900 leading-relaxed border-l-4 border-renaissance-dark/20 pl-6 md:pl-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <MapPin strokeWidth={1.5} className="w-10 h-10 text-renaissance-dark flex-shrink-0" />
              <p className="italic pt-1 text-justify">Ask them to take the Ashok Nagar metro station, located on the green line of the city's metro. Connected to both the Chennai railway station and the domestic airport.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <Bus strokeWidth={1.5} className="w-10 h-10 text-renaissance-dark flex-shrink-0" />
              <div className="pt-1">
                <p className="mb-2">If you are travelling by the MTC bus, please choose the stop:</p>
                <ul className="list-[square] ml-6 space-y-1 opacity-80">
                  <li>ESIC Hospital (drop off at the college front gate)</li>
                  <li>Ashok Pillar/ Udhayam Theater (drop off 400m from the college gate)</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex gap-4 md:flex-col items-center justify-center">
                <Train strokeWidth={1.5} className="w-10 h-10 text-renaissance-dark flex-shrink-0" />
                <Plane strokeWidth={1.5} className="w-10 h-10 text-renaissance-dark flex-shrink-0" />
              </div>
              <div className="pt-1">
                <p className="mb-2">If you are reaching by auto, do reach here: <a href="https://maps.app.goo.gl/t5H2E88q8jGAt4V1A" className="text-renaissance-burgundy font-bold underline underline-offset-4 hover:text-black transition-colors" target="_blank" rel="noreferrer">https://maps.app.goo.gl/t5H2E88q8jGAt4V1A</a></p>
                <p className="font-bold underline underline-offset-4 mt-6">Nearest locations:</p>
                <ul className="list-[square] ml-6 space-y-1 mt-2 opacity-80">
                  <li>West Mambalam railway station: 2.8 km away</li>
                  <li>Egmore railway station: 8 km away</li>
                  <li>Chennai domestic airport: 9 km away</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Around Us Section */}
      <section className="py-24 px-4 bg-white">
        <h2 className="text-4xl md:text-6xl font-milanesa font-black mb-16 text-center text-renaissance-dark">Explore Around Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2">
          {[74, 1640777, 262706, 273671, 1030643, 271708, 1105953, 3184398, 1438081, 2182970].map((id, i) => (
            <div key={i} className="aspect-square bg-gray-200 overflow-hidden rounded-md group">
              <img src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400`} alt={`Around us ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#E7C6C6] py-24 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto text-center font-title text-renaissance-dark">
          <h2 className="text-4xl md:text-6xl font-milanesa font-black mb-20">Team Wissendurst'25</h2>

          <div className="space-y-16">
            {/* Chief Patron */}
            <div className="flex flex-col items-center">
              <p className="text-xs text-renaissance-burgundy font-bold mb-2 uppercase tracking-widest">CHIEF PATRON</p>
              <p className="text-2xl font-black mb-1">DR. CHAVAN KALIDAS DATTATRAYA</p>
              <p className="text-xs uppercase font-bold text-gray-800">DEAN,</p>
              <p className="text-xs uppercase font-bold text-gray-800">ESIC MEDICAL COLLEGE AND HOSPITAL</p>
            </div>

            {/* Vice Patrons */}
            <div className="flex flex-col items-center pt-8 border-t border-renaissance-dark/20 w-full max-w-4xl mx-auto">
              <p className="text-xs text-renaissance-burgundy font-bold mb-8 uppercase tracking-widest">VICE PATRONS</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col">
                  <p className="text-lg font-black mb-1 uppercase">DR. PUSHPHALATHA K.</p>
                  <p className="text-xs uppercase font-bold text-gray-800">MEDICAL SUPERINTENDENT</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-black mb-1 uppercase">DR. B.V. SARALA DEVI</p>
                  <p className="text-xs uppercase font-bold text-gray-800">REGISTRAR</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-black mb-1 uppercase">DR. YUVANANDH V.</p>
                  <p className="text-xs uppercase font-bold text-gray-800">PRINCIPAL</p>
                </div>
              </div>
            </div>

            {/* Faculty In-charge */}
            <div className="flex flex-col items-center pt-12 border-t border-renaissance-dark/20 w-full max-w-4xl mx-auto">
              <p className="text-xs text-renaissance-burgundy font-bold mb-2 uppercase tracking-widest">FACULTY IN-CHARGE</p>
              <p className="text-xl font-black uppercase mb-1">DR. KOTHAI GNANAMOORTHY</p>
              <p className="text-xs uppercase font-bold text-gray-800">PROFESSOR</p>
              <p className="text-xs uppercase font-bold text-gray-800">DEPARTMENT OF GENERAL MEDICINE</p>
            </div>

            {/* Committee Grid: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 pt-16 border-t border-renaissance-dark/20 w-full max-w-5xl mx-auto text-center md:text-left">
              {/* Column 1 */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">ACADEMIC TEAM LEAD</p>
                  <p className="text-sm font-black uppercase mb-1">ALAMELU VENKATACHALAM</p>
                  <p className="text-sm font-black uppercase">GOWRISHANKAR K N</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">PHYSICAL TEAM</p>
                  <p className="text-sm font-black uppercase mb-1">A M CYRIL SANJAY</p>
                  <p className="text-sm font-black uppercase mb-1">PRIYADHARSHINI P</p>
                  <p className="text-sm font-black uppercase">SREEYAA SRI B</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">WORKSHOP HEADS</p>
                  <p className="text-sm font-black uppercase mb-1">JEBISH A</p>
                  <p className="text-sm font-black uppercase mb-1">RANJITA ANAND</p>
                  <p className="text-sm font-black uppercase mb-1">KRISHNAMOORTHY PR</p>
                  <p className="text-sm font-black uppercase">A M CYRIL SANJAY</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">H&S</p>
                  <p className="text-sm font-black uppercase">GOWRISHANKAR K N</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">REGISTRATION</p>
                  <p className="text-sm font-black uppercase mb-1">IMAAD SHAKIR</p>
                  <p className="text-sm font-black uppercase mb-1">JAYASHREE E</p>
                  <p className="text-sm font-black uppercase">MADHUMITHA G</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">ORGANISING SECRETARY</p>
                  <p className="text-sm font-black uppercase mb-1">HEMANTH A E</p>
                  <p className="text-sm font-black uppercase">SAI LIKHITHA P V</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">CONTENT WRITERS & EDITORS</p>
                  <p className="text-sm font-black uppercase mb-1">ITHISAM</p>
                  <p className="text-sm font-black uppercase">VARSHA DHARANI K</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">SOCIAL MEDIA</p>
                  <p className="text-sm font-black uppercase">SUBHASHREE B K</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">POSTER/RESEARCH/CASE PRESENTATION</p>
                  <p className="text-sm font-black uppercase mb-1">ITHISAM</p>
                  <p className="text-sm font-black uppercase">SHREE NACHA</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">FOOD & BEVERAGE</p>
                  <p className="text-sm font-black uppercase mb-1">AADINARAYAN C</p>
                  <p className="text-sm font-black uppercase">NIKHIL B R</p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">TREASURER</p>
                  <p className="text-sm font-black uppercase">RAM YOGESH</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">IT HEAD</p>
                  <p className="text-sm font-black uppercase">IMAAD SHAKIR</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">WEBSITE</p>
                  <p className="text-sm font-black uppercase mb-1">IMAAD SHAKIR</p>
                  <p className="text-sm font-black uppercase">A M CYRIL SANJAY</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">CULT</p>
                  <p className="text-sm font-black uppercase mb-1">ARJUN G</p>
                  <p className="text-sm font-black uppercase">NARENDRAN G</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-renaissance-burgundy font-bold uppercase tracking-widest mb-3">ACCOMODATION</p>
                  <p className="text-sm font-black uppercase mb-1">VISHAL V</p>
                  <p className="text-sm font-black uppercase">ASHIKA SHRI P</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-white">
        <h2 className="text-4xl md:text-6xl font-milanesa font-black mb-16 text-center text-renaissance-dark">Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 overflow-hidden rounded-md group">
              <img src={`https://images.pexels.com/photos/${2182970 + i}/pexels-photo-${2182970 + i}.jpeg?auto=compress&cs=tinysrgb&w=400`} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
