import {
  ArrowDown, ChevronRight, Phone, AlertCircle,
  IndianRupee, ExternalLink, Info, CheckCircle2, ShieldAlert,
  MapPin, FileText, Upload, CreditCard, Sparkles, UserPlus, Mail
} from 'lucide-react';

const Registration = () => {
  const workshopsList = [
    "Anatomy", "Biochemistry", "Pathology", "Microbiology", "FM Autopsy", "FM Crime scene",
    "ENT", "Ophthalmology", "General medicine", "General surgery", "OBG",
    "Paediatrics", "Psychiatry", "EM & Anaesthesia", "Orthopaedics"
  ];

  const TimelineStep = ({ num, title, desc, icon: Icon, isLast }) => (
    <div className="flex gap-5 md:gap-8 group">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 border border-renaissance-gold/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(201,162,39,0.1)] group-hover:bg-renaissance-gold/10 group-hover:border-renaissance-gold group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(201,162,39,0.4)] transition-all duration-500">
          <span className="font-title font-bold text-renaissance-gold text-xl group-hover:text-[#FBF1CF] transition-colors">{num}</span>
        </div>
        {!isLast && <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-renaissance-gold/40 to-transparent my-3 group-hover:from-renaissance-gold transition-colors duration-500"></div>}
      </div>
      <div className="pb-10 pt-2 md:pt-3">
        <h4 className="text-[#FBF1CF] font-bold text-lg md:text-xl mb-3 flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-renaissance-gold" />}
          {title}
        </h4>
        <p className="text-renaissance-cream/70 text-sm md:text-base leading-relaxed max-w-lg">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-body bg-[#110a07] relative overflow-hidden">

      {/* ── 1. HERO SECTION ── */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Library Background with Dark Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 transform scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#110a07] via-[#110a07]/80 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 to-transparent"></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-renaissance-gold/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-renaissance-burgundy/20 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-20">
          <div className="inline-block relative mb-8 group">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-milanesa font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FBF1CF] via-renaissance-gold to-[#a17a15] tracking-[0.1em] uppercase drop-shadow-2xl">
              REGISTRATION
            </h1>
            {/* Glowing Gold Underline Animation */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-renaissance-gold to-transparent opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[8px] blur-md bg-renaissance-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <p className="mt-8 text-lg md:text-xl text-renaissance-cream/80 max-w-3xl mx-auto font-light tracking-wide mb-12">
            Secure your presence at Wissendurst 2026. Experience elevated academic discourse, premium workshops, and peerless medical events.
          </p>

          <button className="group relative px-10 py-5 bg-gradient-to-r from-renaissance-gold to-[#e3ba31] text-black rounded-full font-title font-black uppercase tracking-[0.2em] text-sm md:text-base overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,162,39,0.5)] shadow-[0_0_20px_rgba(201,162,39,0.3)]">
            <span className="relative z-10 flex items-center gap-3">
              Proceed to Register <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">

        {/* ── 2. INFORMATION CARDS ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* About Wissendurst */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-renaissance-gold/20 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-renaissance-gold/50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(201,162,39,0.05)]">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-renaissance-gold/5 rounded-full blur-3xl pointer-events-none group-hover:bg-renaissance-gold/10 transition-colors duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-milanesa font-bold text-transparent bg-clip-text bg-gradient-to-r from-renaissance-gold to-[#FBF1CF] mb-8 uppercase tracking-widest flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-renaissance-gold shrink-0" /> About Wissendurst
            </h2>
            <div className="text-renaissance-cream/80 text-base md:text-lg leading-relaxed space-y-6 font-light">
              <p>
                <span className="font-bold text-[#FBF1CF] uppercase tracking-wider">Wissendurst ’26</span>, the annual intercollegiate academic fest hosted by ESIC Medical College, Chennai, returns this year in greater splendour, promising an experience more captivating and memorable than ever before.
              </p>
              <p>
                With 15 immersive workshops and 12+ dynamic events, Wissendurst is designed to ignite curiosity, connect ideas, and inspire discovery. It is a space where learning knows no limits and textbooks come alive through experience.
              </p>
            </div>
          </div>

          {/* Note from the Committee */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-renaissance-gold/20 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-renaissance-gold/50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(201,162,39,0.05)]">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-renaissance-burgundy/10 rounded-full blur-3xl pointer-events-none group-hover:bg-renaissance-burgundy/20 transition-colors duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-milanesa font-bold text-transparent bg-clip-text bg-gradient-to-r from-renaissance-gold to-[#FBF1CF] mb-8 uppercase tracking-widest flex items-center gap-4">
              <AlertCircle className="w-8 h-8 text-renaissance-gold shrink-0" /> Committee Note
            </h2>
            <div className="text-renaissance-cream/80 text-base md:text-lg leading-relaxed space-y-6 font-light">
              <p>
                <span className="font-bold text-[#FBF1CF]">WISSENDURST 2026</span> returns with a broader vision: refined workshops, diverse case and poster presentations, and the introduction of protocol presentations.
              </p>
              <p>
                <span className="font-bold text-[#FBF1CF]">MINERVA</span> expands with online editions, while Tamil events debut as a vibrant platform for expression. We also bring forth a new event for dental and AHS students: <span className="text-renaissance-gold font-medium italic">Face and Body Painting</span>.
              </p>
              <div className="p-5 mt-6 border-l-4 border-renaissance-gold bg-renaissance-gold/5 rounded-r-xl">
                <p className="font-medium text-renaissance-gold">
                  Join us on April 28–30 at ESIC Medical College & Hospital, KK Nagar, Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. REGISTRATION RULES & EXCEPTIONS ── */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-title font-black text-[#FBF1CF] uppercase tracking-[0.2em] mb-6">
              Registration Rules
            </h2>
            <p className="text-renaissance-gold/80 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Open to all bonafide students of medical colleges and universities. Please read carefully to ensure a seamless registration process.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Categories */}
            <div className="lg:col-span-4 bg-black/40 backdrop-blur-md border border-renaissance-gold/20 rounded-3xl p-8 hover:border-renaissance-gold/40 transition-colors">
              <h3 className="text-xl font-title font-bold text-renaissance-gold mb-8 uppercase tracking-widest flex items-center gap-3">
                <UserPlus className="w-6 h-6" /> Categories
              </h3>
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-[#FBF1CF] font-bold tracking-wide">General Registration</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-[#FBF1CF] font-bold tracking-wide">Workshop Registration</span>
                </div>
              </div>
              <p className="text-sm text-renaissance-cream/70 leading-relaxed p-4 bg-renaissance-gold/10 rounded-xl border border-renaissance-gold/20">
                <span className="font-bold text-renaissance-gold block mb-1">NOTE:</span>
                For <strong className="text-white">Events</strong>, General Registration is not required. You may directly access Event Registration.
              </p>
            </div>

            {/* Events Without General Registration */}
            <div className="lg:col-span-8 bg-black/40 backdrop-blur-md border border-renaissance-gold/20 rounded-3xl p-8 hover:border-renaissance-gold/40 transition-colors">
              <h3 className="text-xl font-title font-bold text-renaissance-gold mb-8 uppercase tracking-widest border-b border-renaissance-gold/20 pb-6 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6" /> Events Exempt from General Registration
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Quizzes", desc: "Online Quiz (Erythron and Axis) and Offline Quiz (Minerva Junior and Senior)" },
                  { title: "Presentations", desc: "Pathology Poster, Pharmacology Poster, Case Presentation, Symposium, Protocol Presentation" },
                  { title: "Speaker's Collective", desc: "English Debate, MUN" },
                  { title: "Tamil Mandram", desc: "Tamil Debate, Elocution" },
                  { title: "Other Events", desc: "Face and Body Painting, Health Care Detectives" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex gap-4">
                    <div className="w-1.5 min-h-[40px] bg-renaissance-gold/20 rounded-full group-hover:bg-renaissance-gold transition-colors duration-300"></div>
                    <div>
                      <h4 className="font-bold text-[#FBF1CF] text-base uppercase tracking-wider mb-2 group-hover:text-renaissance-gold transition-colors">{item.title}</h4>
                      <p className="text-sm text-renaissance-cream/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 4 & 5. GENERAL / WORKSHOP / EVENT REGISTRATION WITH TIMELINE ── */}
        <div className="space-y-16 mb-32">

          {/* General Registration Track */}
          <div className="bg-[#18110c] border border-renaissance-gold/20 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-renaissance-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:bg-renaissance-gold/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-renaissance-gold/10 rounded-full border border-renaissance-gold/30 text-renaissance-gold text-sm font-bold uppercase tracking-widest">
                  Track 01
                </div>
                <h2 className="text-4xl md:text-5xl font-milanesa font-black text-[#FBF1CF] tracking-wide leading-tight">
                  GENERAL<br />REGISTRATION
                </h2>

                <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-renaissance-gold to-[#a17a15] flex items-center justify-center shadow-lg">
                    <IndianRupee className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <span className="block text-3xl font-black text-renaissance-gold">300</span>
                    <span className="text-sm font-light text-renaissance-cream/60 uppercase tracking-widest">Per Candidate</span>
                  </div>
                </div>

                <p className="text-renaissance-cream/80 text-lg leading-relaxed font-light">
                  Mandatory for all participants attending <strong className="text-white">Workshops, MedTalks</strong>, and other programs (except Events).
                </p>
                <p className="text-xs text-red-300 bg-red-950/30 p-4 border-l-2 border-red-500 rounded-r-lg">
                  * General registration once completed cannot be cancelled or refunded.
                </p>
              </div>

              <div className="bg-black/40 p-8 md:p-10 rounded-3xl border border-white/5">
                <h3 className="text-xl font-title font-bold text-renaissance-gold mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Fill Online Form" desc="Navigate to the candidate registration form on our portal." icon={FileText} />
                  <TimelineStep num="2" title="Submit Details" desc="Provide Delegate Name, Year of Study, College Name, and Contact mapping." icon={UserPlus} />
                  <TimelineStep num="3" title="Upload Documents" desc="Scan and upload a clear photograph of your official College ID card." icon={Upload} />
                  <TimelineStep num="4" title="Execute Payment" desc="Upload the screenshot of your successful UPI QR Code payment transaction ID." icon={CreditCard} isLast={true} />
                </div>

                <div className="mt-8 bg-renaissance-gold/10 border border-renaissance-gold/30 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-renaissance-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#FBF1CF] font-bold text-lg mb-2">Receive Unique ID</h4>
                    <p className="text-sm text-renaissance-cream/80 leading-relaxed font-light">
                      Upon completion, receive a tracking <strong className="text-renaissance-gold">Unique ID + QR code</strong> within 24-48 hours via email. This ID is mandatory for accessing all workshop registrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Registration Track */}
          <div className="bg-[#18110c] border border-renaissance-gold/20 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-renaissance-gold/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 -translate-y-1/3 group-hover:bg-renaissance-gold/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 relative z-10">

              <div className="order-2 lg:order-1 bg-black/40 p-8 md:p-10 rounded-3xl border border-white/5">
                <h3 className="text-xl font-title font-bold text-renaissance-gold mb-10 uppercase tracking-widest">
                  Registration Process
                </h3>
                <div className="flex flex-col">
                  <TimelineStep num="1" title="Pre-requisite ID" desc="Ensure you have received your Unique ID from General Registration first." icon={ShieldAlert} />
                  <TimelineStep num="2" title="Select Workshop" desc="Choose your preferred workshop slot. Subject to first-come, first-serve basis." icon={FileText} />
                  <TimelineStep num="3" title="Submit Details" desc="Provide Delegate ID, Unique ID number, and College ID proof." icon={Upload} />
                  <TimelineStep num="4" title="Payment Details" desc="Upload screenshot of UPI transaction ID specifically for the workshop." icon={CreditCard} isLast={true} />
                </div>
                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-renaissance-cream/60 italic leading-relaxed text-center">
                  * Registrations are typically non-refundable unless cancelled due to unavoidable circumstances (15-day refund).
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-renaissance-gold/10 rounded-full border border-renaissance-gold/30 text-renaissance-gold text-sm font-bold uppercase tracking-widest">
                  Track 02
                </div>
                <h2 className="text-4xl md:text-5xl font-milanesa font-black text-[#FBF1CF] tracking-wide leading-tight">
                  WORKSHOP<br />REGISTRATION
                </h2>

                <p className="text-renaissance-cream/80 text-lg leading-relaxed font-light pb-8 border-b border-white/10">
                  Select from <strong className="text-renaissance-gold">15 premium workshops</strong> across 3 days. Limited slots apply per venue.
                </p>

                <div>
                  <h4 className="text-sm font-bold text-renaissance-gold tracking-[0.2em] mb-4 uppercase">Available Workshops</h4>
                  <div className="flex flex-wrap gap-2">
                    {workshopsList.map((w, i) => (
                      <span key={i} className="text-xs uppercase font-bold text-black bg-gradient-to-r from-renaissance-gold to-[#e0b938] px-3 py-1.5 rounded flex items-center shadow-sm">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Event Registration Track */}
          <div className="bg-[#18110c] border border-renaissance-gold/20 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:bg-white/10 transition-colors duration-700"></div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-bold uppercase tracking-widest">
                  Track 03
                </div>
                <h2 className="text-4xl md:text-5xl font-milanesa font-black text-[#FBF1CF] tracking-wide leading-tight">
                  EVENT<br />REGISTRATION
                </h2>

                <p className="text-renaissance-cream/80 text-lg leading-relaxed font-light pb-8 border-b border-white/10">
                  Participate in up to 15 events. <strong className="text-white border-b border-dashed border-white">General Registration is NOT required.</strong>
                </p>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <p className="text-sm text-renaissance-cream/70 leading-relaxed">
                    There is no upper limit to the number of events. For team events, only one registration per team is required. Review the schedule to avoid timing overlaps.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 p-8 md:p-10 rounded-3xl border border-white/5">
                <h3 className="text-xl font-title font-bold text-white mb-10 uppercase tracking-widest">
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
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-title font-black text-[#FBF1CF] uppercase tracking-widest mb-4">
              Mandatory On Event Day
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-renaissance-gold to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Confirmation Email', icon: Mail, desc: 'Digital or printed proof received post-registration.' },
              { title: 'Unique ID', icon: Sparkles, desc: 'The 24-48hr generated tracking code.' },
              { title: 'College ID Card', icon: FileText, desc: 'Physical, valid bonafide identity card from your institution.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-renaissance-gold/20 p-8 rounded-3xl text-center group hover:-translate-y-3 hover:bg-renaissance-gold/5 hover:border-renaissance-gold transition-all duration-500 shadow-xl">
                <div className="w-20 h-20 mx-auto rounded-full bg-black border border-renaissance-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-renaissance-gold group-hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] transition-all duration-500">
                  <item.icon className="w-8 h-8 text-renaissance-gold group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-title font-bold text-[#FBF1CF] text-lg uppercase tracking-wider mb-3 group-hover:text-renaissance-gold transition-colors">{item.title}</h3>
                <p className="text-sm text-renaissance-cream/60 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7 & 8. CONTACT & FOOTER ENHANCEMENT ── */}
        <div className="border-t border-renaissance-gold/20 pt-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-renaissance-gold to-transparent opacity-50"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Contact Grid */}
            <div>
              <h4 className="font-milanesa font-black mb-10 uppercase text-[#FBF1CF] tracking-[0.2em] text-2xl flex items-center gap-4">
                <Phone className="w-6 h-6 text-renaissance-gold" /> Query Contacts
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: "LEKHA", phone: "97897 03487", role: "Registration Head" },
                  { name: "SHALINI R", phone: "94442 62579", role: "Registration Head" },
                  { name: "KARTHIKEYAN", phone: "94895 32419", role: "Registration Head" },
                  { name: "MEIMOZHI", phone: "63828 66554", role: "Registration Head" }
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={`tel:+91${contact.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-renaissance-gold/20 hover:border-renaissance-gold hover:bg-renaissance-gold/10 transition-all duration-300 group shadow-lg drop-shadow-sm hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-full bg-renaissance-dark flex items-center justify-center text-renaissance-gold border-2 border-renaissance-gold/30 group-hover:bg-renaissance-gold group-hover:text-black transition-all duration-500 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[#FBF1CF] font-black tracking-widest text-sm uppercase group-hover:text-renaissance-gold transition-colors">{contact.name}</span>
                      <span className="block text-xs text-renaissance-cream/50 mb-1">{contact.role}</span>
                      <span className="block text-renaissance-gold font-light text-xs tracking-wider">+91 {contact.phone}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Styled Map / Address Card */}
            <div className="bg-white/[0.02] border border-renaissance-gold/20 p-8 rounded-3xl relative overflow-hidden group hover:border-renaissance-gold/50 transition-all duration-500 min-h-[300px] flex flex-col justify-end">
              {/* Subtle background map image pattern */}
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=ESIC+Medical+College,Chennai&zoom=14&size=600x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:landscape|element:geometry|color:0x1b120c&style=feature:poi|element:geometry|color:0x283d6a&style=feature:road|element:geometry.fill|color:0x342921&style=feature:water|element:geometry|color:0x0e1626')] bg-cover bg-center opacity-20 filter grayscale group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-renaissance-gold/20 backdrop-blur-md border border-renaissance-gold/50 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-renaissance-gold animate-bounce" />
                </div>
                <h3 className="text-2xl font-milanesa font-black text-[#FBF1CF] uppercase tracking-widest mb-3">Venue</h3>
                <p className="text-renaissance-cream/80 text-sm leading-relaxed max-w-sm">
                  <strong className="text-renaissance-gold block mb-1">ESIC Medical College & PGIMSR</strong>
                  Ashok Pillar Road, K.K. Nagar,<br />
                  Chennai, Tamil Nadu 600078
                </p>
                <a href="https://maps.google.com/?q=ESIC+Medical+College+KK+Nagar+Chennai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 text-xs font-bold text-renaissance-gold uppercase tracking-[0.2em] hover:text-[#FBF1CF] transition-colors border-b border-renaissance-gold/30 pb-1">
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
