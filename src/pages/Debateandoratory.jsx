import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, X, CheckCircle2 } from 'lucide-react';

const debateEvents = [
    {
        id: 1,
        title: "Trials of Themis",
        subtitle: "Model United Nations",
        date: "TBA",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1280",
        description: "The Model United Nations returns under the banner of the Speaker's collective, promising sharper debate, stronger diplomacy, and a truly competitive arena of ideas. Delegates step into a world whose alliances flicker like lights in the dark; strategies twist in unexpected ways and every resolution could open doors to uncharted dimensions. Welcoming to a time and reserved MUN like no other.",
        sections: [
            {
                title: "Subject Details",
                items: ["Delegates will be evaluated on diplomacy, public speaking, negotiation, and adherence to parliamentary procedure."]
            },
            {
                title: "General Instructions",
                items: [
                    "Individual participation allowed.",
                    "Eligibility: All students.",
                    "Cross College participation allowed."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Contact details to be announced"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "The Sinclair Spectre",
        subtitle: "English Debate",
        date: "30.04.2026",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1280",
        description: "Argue your case under the spotlight in The Sinclair Spectre English Debate. A forum for logical reasoning, quick thinking, and impeccable oratory skills.",
        sections: [
            {
                title: "Subject Details",
                items: ["Arguments, rebuttals, and delivery will be the core judging criteria."]
            },
            {
                title: "General Instructions",
                items: [
                    "Team sizes and format details will be released shortly.",
                    "Eligibility: All students.",
                    "Cross College participation allowed."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Contact details to be announced"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Tamil Debate / பட்டிமன்றம்",
        subtitle: "Tamil Mandram",
        date: "TBA",
        image: "https://images.unsplash.com/photo-1551001099-28c4649f85c3?auto=format&fit=crop&q=80&w=1280",
        description: "A battle of wits and words exclusively in Tamil. Step onto the stage to prove the strength of your arguments in our classic Pattimandram.",
        sections: [
            {
                title: "Subject Details",
                items: ["Language proficiency, humor, impact, and logical flow will be key judging criteria."]
            },
            {
                title: "General Instructions",
                items: [
                    "Guidelines for the Tamil debate will be updated soon.",
                    "Eligibility: All students.",
                    "Cross College participation allowed."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Contact details to be announced"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Tamil Elocution / பேச்சுப்போட்டி",
        subtitle: "Tamil Mandram",
        date: "TBA",
        image: "https://images.unsplash.com/photo-1520038410233-7141be7b6d97?auto=format&fit=crop&q=80&w=1280",
        description: "A profound platform for passionate orators. Deliver a powerful solo speech on compelling topics utilizing the richness of the Tamil language.",
        sections: [
            {
                title: "Subject Details",
                items: ["Clarity, body language, emotional delivery, and content richness will be evaluated."]
            },
            {
                title: "General Instructions",
                items: [
                    "Topic list and time constraints to be announced.",
                    "Eligibility: All students.",
                    "Cross College participation allowed."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Contact details to be announced"
                ]
            }
        ]
    }
];

const Debateandoratory = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [detailIndex, setDetailIndex] = useState(null);

    useEffect(() => {
        // Automatically hide intro after 8 seconds
        const timer = setTimeout(() => setShowIntro(false), 8000);
        return () => clearTimeout(timer);
    }, []);

    if (showIntro) {
        return (
            <div
                className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer"
                onClick={() => setShowIntro(false)}
            >
                {/* Style for the text outline effect */}
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
                    <h1 className="text-[1.75rem] sm:text-5xl md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.1] sm:leading-[1.0] tracking-[0.05em] uppercase flex flex-col items-center justify-center w-full">
                        <span className="text-outline w-full block">A FORCE OF</span>
                        <span className="text-fill-anim delay-1 w-full block py-1">WORDS.</span>
                        <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM QUIET THOUGHTS</span>
                        <span className="text-fill-anim delay-2 w-full block pb-1">TO POWERFUL VOICES,</span>
                        <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY DISCUSSION</span>
                        <span className="text-outline w-full block">BECOMES A</span>
                        <span className="text-fill-anim delay-2 w-full block pb-1">MOVEMENT.</span>
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

    const inDetail = detailIndex !== null;
    const detailEvent = inDetail ? debateEvents[detailIndex] : null;
    const detailBg = inDetail ? detailEvent.image : null;

    const prev = () => setDetailIndex(i => (i - 1 + debateEvents.length) % debateEvents.length);
    const next = () => setDetailIndex(i => (i + 1) % debateEvents.length);

    return (
        <div className="min-h-screen font-body bg-renaissance-dark text-[#FBF1CF] animate-[fadeIn_1s_ease-out]">

            {/* ── Hero ── */}
            <section
                className="relative h-[42vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920')` }}
            >
                <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-milanesa font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] tracking-[0.1em] uppercase mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        DEBATE & ORATORY
                    </h1>
                    <p className="text-sm md:text-lg text-renaissance-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        A battleground arrayed with words instead of weapons. Prove your intellect, hone your rhetoric, and command the audience in our premier communication and diplomacy events.
                    </p>
                </div>
            </section>

            {/* ── Event Cards Grid ── */}
            <section className="py-16 px-4 sm:px-8 bg-[#0a0000]">

                {/* Section Header */}
                <div className="flex items-center justify-center max-w-7xl mx-auto mb-10">
                    <div className="h-[1px] bg-[#D4AF37]/50 flex-1 max-w-[150px] mr-4"></div>
                    <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] font-title uppercase text-sm md:text-base">Speaker's Collective</h2>
                    <div className="h-[1px] bg-[#D4AF37]/50 flex-1 max-w-[150px] ml-4"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 justify-items-center">
                    {debateEvents.map((event, index) => (
                        <div
                            key={event.id}
                            className="group flex flex-col bg-[#1c182d] border border-renaissance-gold/20 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-300 w-full max-w-xl"
                            onClick={() => setDetailIndex(index)}
                        >
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${event.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c182d] to-transparent"></div>
                            </div>

                            <div className="flex flex-col p-6 flex-1 bg-[#140c07] border-t border-renaissance-gold/20">
                                <span className="text-[#D4AF37] text-[10px] md:text-xs font-black tracking-widest uppercase mb-2 block font-title">
                                    {event.subtitle}
                                </span>
                                <h3 className="text-white text-xl md:text-2xl font-black uppercase leading-tight mb-4 group-hover:text-[#FBF1CF] transition-colors font-milanesa">
                                    {event.title}
                                </h3>

                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5 text-[#9fa0b8] text-[10px] md:text-xs uppercase tracking-widest font-title font-bold">
                                    <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-renaissance-gold" /> {event.date.split(' ')[0]}</span>
                                    <span className="text-renaissance-gold/50 flex items-center gap-1 group-hover:text-renaissance-gold transition-colors">Details <ChevronRight className="w-3 h-3" /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Detail Overlay ── */}
            {inDetail && detailEvent && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col overflow-hidden">

                    {/* Mobile top back bar */}
                    <div className="flex md:hidden items-center justify-between px-4 py-4 bg-[#100c06] border-b border-renaissance-gold/20 shrink-0 z-30">
                        <button
                            onClick={() => setDetailIndex(null)}
                            className="flex items-center gap-2 text-renaissance-gold font-bold uppercase tracking-widest text-sm"
                        >
                            <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <span className="text-renaissance-cream/50 text-xs font-title">{detailIndex + 1} / {debateEvents.length}</span>
                    </div>

                    {/* Inner split */}
                    <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

                        {/* LEFT: Full painting & Controls */}
                        <div className="relative w-full md:w-2/5 h-[30vh] md:h-full shrink-0 border-r border-renaissance-gold/20">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${detailBg})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent" />

                            {/* Desktop Details & Controls */}
                            <div className="hidden md:flex absolute inset-0 flex-col justify-end p-10 pb-20">
                                <span className="text-renaissance-gold text-xs font-black tracking-[0.3em] uppercase mb-4 block">{detailEvent.subtitle}</span>
                                <h2 className="text-4xl lg:text-5xl font-milanesa font-black uppercase text-[#FBF1CF] leading-tight drop-shadow-xl mb-8">
                                    {detailEvent.title}
                                </h2>

                                <div className="flex gap-4">
                                    <button onClick={prev} className="w-12 h-12 rounded-full bg-black/50 border border-renaissance-gold/30 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-black transition-all group backdrop-blur-sm">
                                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button onClick={next} className="w-12 h-12 rounded-full bg-black/50 border border-renaissance-gold/30 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-black transition-all group backdrop-blur-sm">
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Detail content & Extensive Sections */}
                        <div className="flex-1 overflow-y-auto bg-[#0a0604] relative">
                            {/* Desktop close button */}
                            <button
                                onClick={() => setDetailIndex(null)}
                                className="hidden md:flex fixed top-8 right-8 z-30 w-12 h-12 rounded-full bg-renaissance-dark/80 border border-renaissance-gold/40 items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-6 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
                                <div className="md:hidden mb-6 border-b border-renaissance-gold/20 pb-6">
                                    <h2 className="text-3xl font-milanesa font-black uppercase tracking-wide text-[#FBF1CF] leading-tight mb-2">
                                        {detailEvent.title}
                                    </h2>
                                    <p className="text-renaissance-gold font-bold font-title uppercase tracking-[0.1em] text-xs">
                                        {detailEvent.subtitle}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8 text-renaissance-gold text-sm font-bold tracking-widest uppercase bg-renaissance-gold/10 inline-flex px-5 py-2.5 rounded-full border border-renaissance-gold/30 shadow-md">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {detailEvent.date}</span>
                                </div>

                                <p className="text-renaissance-cream/90 leading-relaxed text-base md:text-lg font-light mb-12 italic border-l-4 border-renaissance-gold pl-6 py-2 bg-gradient-to-r from-white/5 to-transparent">
                                    {detailEvent.description}
                                </p>

                                {/* Info Sections Stack */}
                                <div className="space-y-8">
                                    {detailEvent.sections.map((section, idx) => (
                                        <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8">
                                            <h4 className="text-lg font-bold text-renaissance-gold uppercase tracking-[0.15em] mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                                {section.title}
                                            </h4>
                                            <ul className="space-y-4">
                                                {section.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex gap-4 items-start text-sm md:text-base text-[#FBF1CF]/80 leading-relaxed">
                                                        <CheckCircle2 className="w-5 h-5 text-renaissance-gold/50 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-renaissance-gold/20 flex justify-center">
                                    <button className="px-10 py-4 bg-renaissance-gold text-black rounded-full font-title font-black uppercase tracking-widest hover:scale-105 hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center gap-3">
                                        Register For Current Event
                                    </button>
                                </div>

                                {/* Mobile arrows */}
                                <div className="flex md:hidden items-center justify-between mt-12 mb-4 bg-black/40 p-4 rounded-2xl border border-white/5">
                                    <button onClick={prev} className="flex items-center gap-2 px-5 py-2.5 border border-renaissance-gold/40 text-renaissance-gold text-sm font-bold uppercase tracking-widest rounded-full hover:bg-renaissance-gold hover:text-black transition-all">
                                        <ChevronLeft className="w-4 h-4" /> Prev
                                    </button>
                                    <button onClick={next} className="flex items-center gap-2 px-5 py-2.5 border border-renaissance-gold/40 text-renaissance-gold text-sm font-bold uppercase tracking-widest rounded-full hover:bg-renaissance-gold hover:text-black transition-all">
                                        Next <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Debateandoratory;
