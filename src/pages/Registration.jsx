import { ArrowDown, ChevronRight, Phone, AlertCircle, Link, IndianRupee, ExternalLink } from 'lucide-react';

const Registration = () => {
  const ListItem = ({ children, highlight }) => (
    <div className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${highlight ? 'bg-renaissance-gold/10 border border-renaissance-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'hover:bg-white/5 border border-transparent hover:border-white/10'}`}>
      <ChevronRight className={`w-5 h-5 shrink-0 mt-0.5 ${highlight ? 'text-renaissance-gold' : 'text-renaissance-gold/70'}`} />
      <div className="text-renaissance-cream/90 text-sm md:text-base leading-relaxed w-full">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-milanesa bg-renaissance-dark relative overflow-hidden">
      {/* Background Layer with Library Theme */}
      <div
        className="absolute inset-0 z-0 opacity-80 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1920&h=1080&auto=format&fit=crop')`
        }}
      ></div>
      {/* Lighter overlay so image shows through */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50"></div>

      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center">
          <div className="inline-block relative mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-milanesa font-black text-[#FBF1CF] tracking-[0.15em] relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              REGISTRATION
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-renaissance-gold/10 blur-3xl rounded-full -z-10"></div>
          </div>

          <button className="group relative px-8 py-3 md:px-10 md:py-4 bg-renaissance-burgundy text-renaissance-gold border border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
              REGISTER NOW <ExternalLink className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-renaissance-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">

            {/* General Registration Section */}
            <section className="bg-black/40 backdrop-blur-md border border-renaissance-gold/20 p-5 md:p-10 rounded-2xl shadow-xl relative overflow-hidden hover:border-renaissance-gold/40 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-renaissance-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <h2 className="text-xl md:text-3xl font-milanesa font-bold text-renaissance-gold mb-6 uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-renaissance-gold/50"></span>
                General Registration
              </h2>
              <div className="space-y-2">
                <ListItem>The national-level intercollegiate conference is open to all bonafide students of medical colleges and universities.</ListItem>
                <ListItem highlight>Conference <span className="text-renaissance-gold font-bold">GENERAL REGISTRATION</span> starts on <span className="text-renaissance-gold">3rd MAY 2025, 12 noon</span>.</ListItem>
                <ListItem>Registration can be completed online. Click <a href="#" className="text-renaissance-gold underline decoration-renaissance-gold/50 hover:decoration-renaissance-gold transition-colors font-medium">here</a> to register.</ListItem>
                <ListItem>Fee per candidate: <span className="text-renaissance-gold font-bold inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-renaissance-gold/10 rounded border border-renaissance-gold/20"><IndianRupee className="w-3.5 h-3.5" /> 250</span></ListItem>
                <ListItem>It is Mandatory for every single candidate to register and receive a <span className="text-renaissance-gold font-bold tracking-wider">UNIQUE ID</span> before registering for ALL events <span className="text-renaissance-cream/70 italic">(EXCEPT Quiz and Autopsy workshop)</span>.</ListItem>
                <ListItem>Candidate registration once done, cannot be cancelled or refunded at any cost.</ListItem>
                <ListItem>
                  Following registration, candidates will receive a confirmation email with their unique ID within <span className="text-renaissance-gold font-bold">24 to 48 hours</span>.
                  <span className="block mt-2 text-sm text-renaissance-cream/60 italic border-l-2 border-renaissance-gold/30 pl-3">Please make sure to check your inbox and spam folder for the same.</span>
                </ListItem>
                <ListItem>This unique ID will be used for all event registrations and is to be produced on the day of the event.</ListItem>
              </div>
            </section>

            {/* Registration For Events Section */}
            <section className="bg-black/40 backdrop-blur-md border border-renaissance-gold/20 p-5 md:p-10 rounded-2xl shadow-xl relative overflow-hidden hover:border-renaissance-gold/40 transition-colors duration-500">
              <h2 className="text-xl md:text-3xl font-milanesa font-bold text-renaissance-gold mb-6 uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-renaissance-gold/50"></span>
                Registration For Events
              </h2>
              <div className="space-y-2">
                <ListItem highlight>Registrations for <span className="text-renaissance-gold font-bold uppercase tracking-wider">INDIVIDUAL EVENTS AND WORKSHOPS</span> start on <span className="text-renaissance-gold font-bold">6th May 2025</span>.</ListItem>
                <ListItem>There are a total of 15 Workshops, Quizzes at 2 levels, a MUN, Case, Poster and Research Presentations spread across 3 days.</ListItem>
                <ListItem>Each workshop has a specific number of slots available. Participants will be selected on a <span className="text-[#FBF1CF] font-semibold border-b border-renaissance-gold/50 border-dashed">first come first serve</span> basis.</ListItem>
                <ListItem>There is no upper limit to the number of events a participant can take part in.</ListItem>
                <ListItem highlight>Early bird registrations for all workshops close on <span className="text-renaissance-gold font-bold">20th May 2025</span>. Make sure to register soon!</ListItem>
                <ListItem>Refer to the complete <a href="#" className="font-medium text-renaissance-gold underline decoration-renaissance-gold/50 hover:decoration-renaissance-gold transition-all inline-flex items-center gap-1">event schedule <Link className="w-3 h-3" /></a> to make sure there is no clash in timings. Any unavoidable overlaps will be taken care of from our end.</ListItem>
                <ListItem>Registrations for individual events are non-refundable.</ListItem>
                <ListItem>However, if the event is cancelled due to unavoidable circumstances, a full refund will be made within 15 business days after the conference.</ListItem>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8 flex flex-col">

            {/* Flowchart Section */}
            <div className="bg-gradient-to-b from-renaissance-dark/80 to-black/60 border border-renaissance-gold/30 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-renaissance-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-base md:text-lg font-title font-bold text-[#FBF1CF]/70 mb-6 uppercase tracking-[0.3em] text-center">
                Registration Flow
              </h3>

              <div className="flex flex-col items-center gap-4 relative py-2 mb-6">
                <div className="absolute top-4 bottom-4 w-px bg-gradient-to-b from-renaissance-gold/20 via-renaissance-gold to-renaissance-gold/20 -z-10"></div>

                <div className="w-full relative group">
                  <div className="absolute inset-0 bg-renaissance-gold opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-lg"></div>
                  <div className="p-4 bg-black/80 border border-renaissance-gold/50 text-[#FBF1CF] text-center font-title uppercase text-sm tracking-widest rounded-lg shadow-lg relative z-10">
                    GENERAL REGISTRATION
                  </div>
                </div>

                <div className="bg-renaissance-dark p-1.5 rounded-full border border-renaissance-gold/50 z-10 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <ArrowDown className="text-renaissance-gold w-4 h-4 animate-bounce" />
                </div>

                <div className="w-full relative group">
                  <div className="absolute inset-0 bg-renaissance-gold opacity-10 blur-lg rounded-xl"></div>
                  <div className="relative z-10 p-5 bg-gradient-to-br from-renaissance-burgundy/40 to-black border-2 border-renaissance-gold text-renaissance-gold text-center font-title text-sm tracking-widest leading-relaxed rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
                    WAIT 24-48 HOURS<br />FOR UNIQUE ID
                  </div>
                </div>

                <div className="bg-renaissance-dark p-1.5 rounded-full border border-renaissance-gold/50 z-10 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <ArrowDown className="text-renaissance-gold w-4 h-4" />
                </div>

                <div className="w-full relative group">
                  <div className="absolute inset-0 bg-renaissance-gold opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-lg"></div>
                  <div className="p-4 bg-black/80 border border-renaissance-gold/50 text-[#FBF1CF] text-center font-title uppercase text-sm tracking-widest rounded-lg shadow-lg relative z-10 leading-relaxed">
                    REGISTER FOR EVENTS<br />
                    <span className="text-[10px] text-renaissance-gold/70 tracking-normal normal-case block mt-1">(Using Unique ID)</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 border border-red-900/50 p-4 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-renaissance-gold shrink-0 mt-0.5" />
                <p className="text-sm text-renaissance-cream/90 leading-relaxed">
                  <span className="font-bold text-renaissance-gold block mb-1">NOTE:</span>
                  Unique ID is NOT required for <span className="font-semibold text-white">Quiz</span> and <span className="font-semibold text-white">Autopsy Workshop</span>.
                </p>
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-renaissance-gold/5 border border-renaissance-gold/20 rounded-2xl p-6 md:p-8 backdrop-blur-md flex-1">
              <h3 className="text-xl font-title font-bold text-renaissance-gold mb-6 uppercase tracking-widest border-b border-renaissance-gold/20 pb-4">
                Steps to Register
              </h3>
              <ul className="space-y-5">
                {[
                  'Registrations will be carried out online on our website — wissendurstesic.co.in',
                  'Google forms require submission of candidate details, unique ID, photos of College ID cards, & payment screenshot.',
                  'Payment strictly accepted through UPI QR codes.',
                  'Event registration confirmation sent via email. Bring email with unique ID & college ID card to the event.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-renaissance-gold/10 border border-renaissance-gold/50 text-renaissance-gold flex items-center justify-center shrink-0 font-bold font-title text-sm">
                      {i + 1}
                    </div>
                    <p className="text-sm text-renaissance-cream/90 pt-1 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA & Contact Section */}
        <div className="mt-16 md:mt-28 border border-renaissance-gold/20 rounded-3xl p-6 md:p-16 bg-gradient-to-b from-black/20 to-black/80 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-renaissance-gold/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-renaissance-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-renaissance-burgundy/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 translate-x-1/2"></div>

          <div className="text-center mb-12 relative z-10">
            <button className="px-10 py-5  bg-renaissance-burgundy text-renaissance-gold border border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] text-base md:text-lg">
              REGISTER NOW
            </button>
          </div>

          <div className="border-t border-renaissance-gold/10 pt-10 md:pt-16 relative z-10">
            <h4 className="font-milanesa font-bold mb-8 text-center uppercase text-renaissance-cream/60 tracking-[0.3em] text-sm">
              In Case of Any Query, Contact:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { name: "RAM YOGESH", phone: "9962939599" },
                { name: "JAYASHREE", phone: "9962114959" },
                { name: "MADHUMITHA", phone: "9600067717" }
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={`tel:${contact.phone}`}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-renaissance-gold/30 hover:bg-renaissance-gold/5 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center mb-3 text-renaissance-gold border border-renaissance-gold/20 group-hover:scale-110 group-hover:bg-renaissance-gold group-hover:text-black transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[#FBF1CF] font-bold tracking-widest mb-1 font-milanesa text-sm text-center">{contact.name}</span>
                  <span className="text-renaissance-cream/80 group-hover:text-renaissance-gold transition-colors tracking-wider text-sm">{contact.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
