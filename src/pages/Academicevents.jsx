import { useState, useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Calendar, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/herosection';
import Galaxy from '../components/Galaxy.jsx';
import OptimizedImage from '../components/OptimizedImage';
import { usePerformance } from '../context/PerformanceContext';

const academicEvents = [
    {
        id: 1,
        title: "Pathology Poster Presentation",
        subtitle: "Bloodlines: The Hematology Showcase",
        date: "28.04.2026 (Tuesday)",
        image: "/asset/Academic_Events/Poster_presentation/Pathology_poster/Pathology_Brenners_blueprint_Needles_and_Nodes.jpg",
        description: "Countless cells silently yet decisively govern the balance between life and death. Participants are formally invited to present rare, unusual, and diagnostically challenging hematological cases.",
        regLink: "https://forms.gle/waHatkYd6LFg2kkQA",
        sections: [
            {
                title: "Judging Criteria",
                items: ["Diagnostic reasoning, clarity, and pathological correlation will be key judging criteria."]
            },
            {
                title: "General Instructions",
                items: [
                    "Maximum 2 per team, individual participation allowed.",
                    "Eligibility: All MBBS students including CRMI.",
                    "Team members must belong to the same college.",
                    "Only one submission per team. The same participant should not be associated with multiple teams."
                ]
            },
            {
                title: "Instructions for Abstract",
                items: [
                    "Font size: 12, Font style: Times New Roman, Line spacing: 1.5, Font colour: Black (only).",
                    "Word limit: 600 words (excluding References and Title.)",
                    "Must include: History, Salient Examination Finding, Differential Diagnosis, Investigations (special emphasis on gross & microscopic features), Final/Provisional diagnosis, Management, Case relevance.",
                    "Must not include personal details of patient and participant in the abstract.",
                    "Ensure that the cases are original and treated at your institution.",
                    "Must submit the attestation form, duly signed by the Head of the Department in the given format. Link: https://docs.google.com/document/d/1SrowN33hnHr7rgT5Ir58jyFfRbuNs165QHI3qv1XoB4/edit?tab=t.0",
                    "Abstract file must be named: Pathology Poster_Title in WORD (.docx) format (max 10MB).",
                    "Plagiarism or malpractice of any form is strictly prohibited and will lead to direct disqualification.",
                    "Last date for submission: 23.03.2026"
                ]
            },
            {
                title: "Finals Instructions",
                items: [
                    "Date: 28.04.2026 (Tuesday)",
                    "Top 10 abstracts will be selected for finals",
                    "Mode of Presentation: Poster (2x3 ft, Landscape or portrait)",
                    "Time for Presentation: 5 minutes presentation and 3 minutes discussion.",
                    "Judging Criteria will be announced 3 days before Finals."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Eshita Sudhakar: +91 88380 29901",
                    "Diya Vinod: +91 87781 25205"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Pharmacology Poster Presentation",
        subtitle: "Into the Pharmaverse",
        date: "28.04.2026 (Tuesday)",
        image: "/asset/Academic_Events/Poster_presentation/Pharmacology_poster/pharm_poster_presentation.jpeg",
        description: "Participants are invited to present posters among the given topics that distill and simplify key concepts, offering clarity and insight into the evolving landscape of contemporary neo-pharmacology.",
        regLink: "https://forms.gle/98Fdy7PnmHzrHcPR7",
        sections: [
            {
                title: "Topics",
                items: [
                    "Topic 1: Does one size fit all?- Exploring Pharmacogenomics",
                    "Topic 2: AI in Drug discovery & ADR monitoring",
                    "Topic 3: Bugs as drugs- Role of gut microbiome in drug therapy",
                    "Topic 4: Drug repurposing",
                    "Topic 5: Nutraceuticals & its safety concerns"
                ]
            },
            {
                title: "General Instructions",
                items: [
                    "Maximum 2 per team, individual participation allowed.",
                    "Eligibility: All MBBS students excluding CRMI.",
                    "Team members must belong to the same college.",
                    "Only one submission per team.",
                    "The same participant should not be associated with multiple teams."
                ]
            },
            {
                title: "Poster Instructions",
                items: [
                    "No preliminary round. All participants can present (if >20, top 10 will be shortlisted and asked to present).",
                    "Poster size: 2x3 ft, Landscape or portrait.",
                    "No restriction on font colour or font type. However, the images and the wordings must be clear.",
                    "References must be added.",
                    "You may include your name and college name in the poster.",
                    "Time for Presentation: 4 minutes presentation and 3 minutes discussion.",
                    "File must be submitted in PDF format, file named: Pharmacology Poster_Title.",
                    "Last date of submission: 01.04.2026",
                    "Judging Criteria will be announced 3 days before Finals."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Eshita Sudhakar: +91 88380 29901",
                    "Diya Vinod: +91 87781 25205"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Case Presentation",
        subtitle: "Classified: Casefiles of 1983",
        date: "30.04.2026 (Thursday)",
        image: "/asset/Academic_Events/Case_presentation/case_presentation.jpeg",
        description: "When textbook rarities come alive in the wards through uncommon presentations, they become lessons beyond the pages. Participants are encouraged to present rare and noteworthy clinical cases.",
        multiLinks: [
            { name: "General Medicine", url: "https://forms.gle/xNuCsw7xensYdAUw5" },
            { name: "General Surgery", url: "https://forms.gle/3jfxjgf4psbXCzN39" },
            { name: "OBG", url: "https://forms.gle/smFYn9r5e5Ktc6KSA" },
            { name: "Paediatrics", url: "https://forms.gle/DgLtvSFcHVTz4Nwk6" }
        ],
        sections: [
            {
                title: "Subjects",
                items: [
                    "General Medicine",
                    "General Surgery",
                    "Obstetrics and Gynaecology",
                    "Paediatrics"
                ]
            },
            {
                title: "General Instructions",
                items: [
                    "Maximum 2 per team, individual participation allowed.",
                    "Eligibility: 2nd year to CRMI.",
                    "Cross College teams not allowed.",
                    "Multiple Entries in the same subject are not allowed.",
                    "The same participant should not be associated with multiple teams in the same subject."
                ]
            },
            {
                title: "Instructions for Abstract",
                items: [
                    "Word limit: 700 words (excluding References and Title).",
                    "Must include: History, Salient Examination Findings, Differential Diagnosis, Investigations, Final/Provisional diagnosis, Management, Case relevance.",
                    "Must not include personal details of participants & patient in the abstract.",
                    "Ensure that the cases are original and treated at your institution.",
                    "Must submit the attestation form, duly signed by the Head of the Department in the given format. Link: https://docs.google.com/document/d/1SrowN33hnHr7rgT5Ir58jyFfRbuNs165QHI3qv1XoB4/edit?tab=t.0",
                    "Abstract file must be named: Subject_Title in WORD (.docx).",
                    "Last date for submission: 23-03-2026 (Monday)"
                ]
            },
            {
                title: "Instructions for Finals",
                items: [
                    "Date: 30.04.2026 (Thursday)",
                    "Top 10 abstracts will be selected for finals.",
                    "The competition will be held separately for the 4 subjects — General Medicine, General Surgery, Obstetrics and Gynaecology, and Pediatrics — on the same day.",
                    "Method of presentation: Oral (Total 10 minutes: 7 min presentation, 3-5 min discussion).",
                    "Presentation limited to 20 slides.",
                    "Judging Criteria will be announced 3 days before Finals."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Dhanyaa Sai A (Surgery): +91 97907 43116",
                    "Diya Vinod (Medicine): +91 87781 25205",
                    "Kavya DK (Paediatrics): +91 63691 85992",
                    "Niranjana Natesan (OBG): +91 94452 44014"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "The Scientific Symposium",
        subtitle: "Signals in the Static",
        date: "29.04.2026 (Wednesday)",
        image: "/asset/Academic_Events/Symposium/Symposium.jpg",
        description: "In a profession where rote memorization holds little value, true understanding lies in conceptual clarity. We invite participants to bring challenging medical topics to life through innovative teaching methods.",
        regLink: "https://forms.gle/zGYV4LrG4cEQVWUf6",
        sections: [
            {
                title: "Subjects",
                items: [
                    "General Medicine",
                    "General Surgery"
                ]
            },
            {
                title: "General Instructions",
                items: [
                    "Eligibility: All MBBS students including CRMI.",
                    "Number of participants: 3 to 6 per team. (Only 1 CRMI per team allowed).",
                    "Cross College teams are not allowed.",
                    "Multiple entries in the same subject are not allowed, however, a team may submit abstracts for more than 1 subject.",
                    "The same participant should not be associated with multiple teams in the same subject."
                ]
            },
            {
                title: "Instructions for Abstract",
                items: [
                    "Summary word limit: 750 words.",
                    "Must include: Subject, Title, Objective, List of subtopics covered, Summary, Teaching AIDS used, References.",
                    "May include images, flowcharts and other pictorial items relevant to the topic. However, appropriate references must be added.",
                    "Do not include personal details in the abstract.",
                    "Abstract must be named: Symposium_GS_Title (for General Surgery) and Symposium_GM_Title (for General Medicine).",
                    "Abstract must be submitted in WORD (.docx) form, file must not be more than 10MB.",
                    "Last date for submission: 23-03-2026 (Monday)"
                ]
            },
            {
                title: "Instructions for Finals",
                items: [
                    "Date: 29-04-2026 (Wednesday)",
                    "Top 6 selected teams must present their symposium.",
                    "Mode of Presentation: Oral (Each team given 15 mins for presentation and 5-7 mins discussion).",
                    "No bar on number of slides.",
                    "Evaluation based on: Choice of Topic, Novelty of Teaching Method, Clarity on Topic, Answer during Discussion."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Eshita Sudhakar (Surgery Symposium): +91 88380 29901",
                    "Diya Vinod (Medicine Symposium): +91 87781 25205"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Research Protocol Presentation",
        subtitle: "The Hawkins Hypothesis",
        date: "29.04.2026 (Wednesday)",
        image: "/asset/Academic_Events/Protocol_presentation/protocol_presentation.jpeg",
        description: "An idea holds potential, but a protocol gives it direction. It challenges minds to transform concepts into clear, structured plans where precision, feasibility, and vision shape the foundation of impactful research.",
        regLink: "https://forms.gle/yeTPPK392sDiuL5D8",
        sections: [
            {
                title: "General Instructions",
                items: [
                    "Maximum 2 per team, individual participation allowed.",
                    "Eligibility: 1st year to CRMI.",
                    "Cross College teams are allowed.",
                    "The participant should NOT have commenced work on the project yet.",
                    "Only one submission per team.",
                    "The same participant should not be associated with multiple teams."
                ]
            },
            {
                title: "Instructions for Abstract",
                items: [
                    "Word limit: 350 words (excluding References and Title).",
                    "Must include: Title, Background & Objectives, Methodology, Implications, References (5 to 7).",
                    "Must not include any personal details in the abstract. The institution where the study was conducted should also be anonymous.",
                    "Must submit the attestation form, duly signed by the Head of the Department in the given format. Link: https://docs.google.com/document/d/1SrowN33hnHr7rgT5Ir58jyFfRbuNs165QHI3qv1XoB4/edit?tab=t.0",
                    "Abstract file must be named: Protocol_Title.",
                    "Abstract must be submitted in WORD (.docx) form, file must not be more than 10MB.",
                    "Please refrain from adding images.",
                    "Last Date for submission: 23-04-2026"
                ]
            },
            {
                title: "Instructions for Finals",
                items: [
                    "Date: 29.04.2026 (Wednesday)",
                    "Top 10 abstracts selected for finals.",
                    "Method of presentation: Oral (PowerPoint slideshow).",
                    "Total 10 minutes: 7 minutes presentation and 3-5 minutes discussion.",
                    "Presentation limited to 20 slides.",
                    "Judging criteria will be announced 3 days prior."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Safika Roselin R: +91 77083 96669",
                    "Dhanyaa Sai A: +91 97907 43116"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Research Poster Presentation",
        subtitle: "The Null Zone",
        date: "29.04.2026 (Tuesday)",
        image: "/asset/Academic_Events/Research_presentation/research_presentation.jpeg",
        description: "An idea sparks innovation, but research gives it power. Research celebrates curiosity, critical thinking, and evidence where questions evolve into discoveries and ideas stand strong on data.",
        regLink: "https://forms.gle/9G3tqJcSMCymwN3m7",
        sections: [
            {
                title: "General Instructions",
                items: [
                    "Maximum 2 per team, individual participation allowed.",
                    "Eligibility: 1st year to CRMI.",
                    "Cross College teams are allowed.",
                    "Participants are allowed to submit only completed original research projects and systematic review & meta-analysis projects.",
                    "Individual participants are allowed to submit only one abstract. In case of team participation, ONLY 2 abstracts are allowed where the authorship is different (e.g. Participant A is 1st author in Abstract 1, Participant B is 1st author in Abstract 2).",
                    "The same participant should not be associated with multiple teams."
                ]
            },
            {
                title: "Instructions for Abstract",
                items: [
                    "Word limit: 350 words max.",
                    "Must include: Title, Background & Objectives, Methodology, Results, Conclusion, References (5 to 7).",
                    "Must not include any personal details in the abstract. The institution where the study was conducted should also be anonymous.",
                    "Must submit the attestation form, duly signed by the Head of the Department and the faculty guide in the given format. Link: https://docs.google.com/document/d/1SrowN33hnHr7rgT5Ir58jyFfRbuNs165QHI3qv1XoB4/edit?tab=t.0",
                    "It is mandatory to attach the IEC approval along with the attestation form at the time of submission.",
                    "Abstract file must be named: Research Poster_Title.",
                    "Abstract must be submitted in WORD (.docx) form, file must not be more than 10MB.",
                    "Last Date for submission: 23-04-2026"
                ]
            },
            {
                title: "Instructions for Finals",
                items: [
                    "Date: 29.04.2026 (Tuesday)",
                    "Top 10 abstracts selected for finals.",
                    "Mode of Presentation: Poster (2x3 ft, Landscape or portrait).",
                    "No restriction on font colour or font type. However, the images and the wordings must be clear.",
                    "Only one participant of the team can present. However, both may answer during the viva session.",
                    "Time for Presentation: 6 minutes presentation and 3 minutes discussion.",
                    "Judging Criteria will be announced 3 days before Finals."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Diya Vinod: +91 87781 25205",
                    "Rashmika T: +91 73586 65375"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Public Health Quests",
        subtitle: "Hellfire Club: The Health Detectives",
        date: "28.04.2026",
        image: "/asset/Academic_Events/Public_health_quests/public_health_quests_health_detectives.jpeg",
        description: "Public health is medicine beyond hospital walls. For medical students, it means looking beyond individual patients to the health of entire communities through prevention, epidemiology, and health programs, becoming true health detectives. Sharp minds and keen eyes will reveal the answers. Let the challenge begin.",
        regLink: "https://forms.gle/pzoL4fdDyC9YJRgm9",
        sections: [
            {
                title: "General Instructions",
                items: [
                    "Teams will venture through ten stations in the preliminary round and solve the puzzles given.",
                    "Earn your clues through each station, and be one of the six teams to chart their path into the final round.",
                    "Three participants per team. Lone wolves are welcome."
                ]
            },
            {
                title: "Station Puzzle Topics",
                items: [
                    "Research Methodology",
                    "Biostatistics",
                    "Outbreak Investigation",
                    "Maternal and Child Health",
                    "National Health Programs",
                    "Graphs, charts and plots",
                    "Geriatrics",
                    "Nutrition",
                    "Diseases of public health importance",
                    "Health planning and Management"
                ]
            },
            {
                title: "Registration Fee",
                items: [
                    "Early bird: ₹200 per team",
                    "Late bird: ₹300 per team",
                    "Early Bird Registration Deadline: 1st April, 2026"
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Haripriya D V: +91 99415 37867",
                    "Ashya A: +91 97899 66052"
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Face and Body Painting",
        subtitle: "Henry’s Disguise",
        date: "29.04.2026",
        image: "/asset/Academic_Events/Face_and_body_painting/Face_and-body_painting_henry_s_disguise.jpeg",
        description: "Anatomy unveiled through scalpel and skin beyond the pages of textbooks. We invite you to bring anatomy to life in an engaging and artistic face-painting competition. Explore the depths of muscle, nerve, vessel and transform knowledge into visual expression.",
        regLink: "https://forms.gle/Uq4CrJg1xyn1hdUo8",
        sections: [
            {
                title: "General Instructions",
                items: [
                    "Participants must compete in teams of two: One Artist And One Model.",
                    "Eligibility: Open to all MBBS, BDS, and AHS students (excluding all interns).",
                    "Cross college teams are not allowed.",
                    "Topic: ONLY Gross anatomy of any region.",
                    "Participants must bring their own materials.",
                    "No references allowed during the competition. No devices, printed images, or photocopies permitted.",
                    "Participants will be continuously monitored.",
                    "Plagiarism or malpractice of any form will lead to immediate disqualification.",
                    "Duration of event: 1 hour."
                ]
            },
            {
                title: "Judging Criteria",
                items: [
                    "1. Anatomical Accuracy & Appeal",
                    "2. Neatness, Innovation & Creativity",
                    "3. Ability to Answer Judge’s Questions"
                ]
            },
            {
                title: "Registration Fee",
                items: [
                    "Early bird: ₹200 per team",
                    "Late bird: ₹300 per team",
                    "Early Bird Registration Deadline: 1st April, 2026"
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Haripriya D V: +91 99415 37867",
                    "Luckshanya V K: +91 89393 11539"
                ]
            }
        ]
    }
];

const EventCard = memo(({ event, index, onClick }) => (
    <div
        className="group flex flex-col bg-[rgba(10,10,15,0.85)] border border-st-red/20 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,60,0.15)] transition-all duration-300"
        onClick={() => onClick(index)}
    >
        <div className="relative w-full aspect-video overflow-hidden">
            <OptimizedImage
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.85)] to-transparent"></div>
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-st-red/30">
                <span className="text-white text-lg font-bold uppercase tracking-wider font-title flex items-center gap-2">
                    {event.date.split(' ')[0]}
                </span>
            </div>
        </div>

        <div className="flex flex-col p-6 flex-1 bg-[#050505] border-t border-st-red/20">
            <span className="text-[#ff003c] text-[10px] md:text-xs font-black tracking-widest uppercase mb-2 block font-title">
                {event.subtitle}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-black uppercase leading-tight mb-4 group-hover:text-[#ffffff] transition-colors font-milanesa">
                {event.title}
            </h3>
            
            <div className="mt-auto pt-4 flex items-end justify-end border-t border-white/5 text-[#9fa0b8] text-[10px] md:text-xs uppercase tracking-widest font-title font-bold">
                <span className="text-st-red/50 flex items-center gap-1 group-hover:text-st-red transition-colors">Details <ChevronRight className="w-3 h-3" /></span>
            </div>
        </div>
    </div>
));

const Academicevents = () => {
    const { isLowPerf } = usePerformance();
    const [showIntro, setShowIntro] = useState(true);
    const [searchParams] = useSearchParams();
    const [detailIndex, setDetailIndex] = useState(null);

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            const idx = academicEvents.findIndex(e => e.id === parseInt(id));
            if (idx !== -1) {
                setDetailIndex(idx);
                setShowIntro(false);
            }
        }
    }, [searchParams]);

    useEffect(() => {
        // Automatically hide intro after 8 seconds
        const timer = setTimeout(() => setShowIntro(false), 8000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Scroll to top when detail view changes
        if (detailIndex !== null) {
            window.scrollTo(0, 0);
        }
    }, [detailIndex]);

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
                        <span className="text-outline w-full block">A PURSUIT OF</span>
                        <span className="text-fill-anim delay-1 w-full block py-1">IDEAS.</span>
                        <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM CURIOUS MINDS</span>
                        <span className="text-fill-anim delay-2 w-full block pb-1">TO MEANINGFUL DISCUSSIONS,</span>
                        <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY GATHERING</span>
                        <span className="text-outline w-full block">BECOMES AN</span>
                        <span className="text-fill-anim delay-2 w-full block pb-1">ACADEMIC FORUM.</span>
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
    const detailEvent = inDetail ? academicEvents[detailIndex] : null;
    const detailBg = inDetail ? detailEvent.image : null;

    const prev = () => setDetailIndex(i => (i - 1 + academicEvents.length) % academicEvents.length);
    const next = () => setDetailIndex(i => (i + 1) % academicEvents.length);

    return (
        <div className="min-h-screen font-body bg-[#050505] text-[#ffffff] animate-[fadeIn_1s_ease-out] overflow-x-hidden">

            {/* ── Hero ── */}
            <HeroSection 
                title="ACADEMIC EVENTS"
                subtitle="PRESENTATION EVENTS"
                description="Academic showcases exploring hematology, pharmacology, rare clinical cases, and impactful research studies through structured posters, symposiums, and oral protocols."
                image="/asset/hero_sec_for_all/acedemic_event.png"
            />

            {/* Galaxy Background layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <Galaxy 
                    starSpeed={0.2}
                    density={1.2}
                    hueShift={220}
                    transparent
                />
            </div>

            {/* ── Event Cards Grid ── */}
            <section className="py-16 px-4 sm:px-8 bg-[#050505]">

                {/* Section Header */}
                <div className="flex items-center justify-center max-w-7xl mx-auto mb-10">
                    <div className="h-[1px] bg-[#ff003c]/50 flex-1 max-w-[150px] mr-4"></div>
                    <h2 className="text-[#ff003c] font-bold tracking-[0.2em] font-title uppercase text-sm md:text-base">Events Lineup</h2>
                    <div className="h-[1px] bg-[#ff003c]/50 flex-1 max-w-[150px] ml-4"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {academicEvents.map((event, index) => (
                        <EventCard 
                            key={event.id} 
                            event={event} 
                            index={index} 
                            onClick={setDetailIndex} 
                        />
                    ))}
                </div>
            </section>

            {/* ── Detail Overlay ── */}
            {inDetail && detailEvent && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col overflow-hidden">

                    {/* Mobile top back bar */}
                    <div className="flex md:hidden items-center justify-between px-4 py-3 bg-[#0f0f14] border-b border-st-red/20 shrink-0 z-30">
                        <button
                            onClick={() => setDetailIndex(null)}
                            className="flex items-center gap-1 text-st-red font-bold uppercase tracking-widest text-xs"
                        >
                            <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <div className="flex items-center gap-3">
                            <button onClick={prev} className="flex items-center justify-center w-8 h-8 rounded-full border border-st-red/40 text-st-red hover:bg-st-red hover:text-black transition-all">
                                <ChevronLeft className="w-4 h-4 -ml-0.5" />
                            </button>
                            <span className="text-gray-300/50 text-xs font-title">{detailIndex + 1} / {academicEvents.length}</span>
                            <button onClick={next} className="flex items-center justify-center w-8 h-8 rounded-full border border-st-red/40 text-st-red hover:bg-st-red hover:text-black transition-all">
                                <ChevronRight className="w-4 h-4 -mr-0.5" />
                            </button>
                        </div>
                    </div>

                    {/* Inner split */}
                    <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

                        {/* LEFT: Full painting & Controls */}
                        <div className="relative w-full md:w-2/5 h-[30vh] md:h-full shrink-0 border-r border-st-red/20">
                            <img
                                src={detailBg}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent" />

                            {/* Desktop Details & Controls */}
                            <div className="hidden md:flex absolute inset-0 flex-col justify-end p-10 pb-20">
                                <span className="text-st-red text-xs font-black tracking-[0.3em] uppercase mb-4 block">{detailEvent.subtitle}</span>
                                <h2 className="text-4xl lg:text-5xl font-milanesa font-black uppercase text-[#ffffff] leading-tight drop-shadow-xl mb-8">
                                    {detailEvent.title}
                                </h2>

                                <div className="flex gap-4">
                                    <button onClick={prev} className="w-12 h-12 rounded-full bg-black/50 border border-st-red/30 flex items-center justify-center text-st-red hover:bg-st-red hover:text-black transition-all group backdrop-blur-sm">
                                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button onClick={next} className="w-12 h-12 rounded-full bg-black/50 border border-st-red/30 flex items-center justify-center text-st-red hover:bg-st-red hover:text-black transition-all group backdrop-blur-sm">
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Detail content & Extensive Sections */}
                        <div className="flex-1 overflow-y-auto bg-[#050505] relative">
                            {/* Desktop close button */}
                            <button
                                onClick={() => setDetailIndex(null)}
                                className="hidden md:flex fixed top-8 right-8 z-30 w-12 h-12 rounded-full bg-[#050505]/80 border border-st-red/40 items-center justify-center text-st-red hover:bg-st-red hover:text-black transition-all shadow-[0_0_15px_rgba(255,0,60,0.2)]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-6 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
                                <div className="md:hidden mb-6 border-b border-st-red/20 pb-6">
                                    <h2 className="text-3xl font-milanesa font-black uppercase tracking-wide text-[#ffffff] leading-tight mb-2">
                                        {detailEvent.title}
                                    </h2>
                                    <p className="text-st-red font-bold font-title uppercase tracking-[0.1em] text-xs">
                                        {detailEvent.subtitle}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8 text-st-red text-sm font-bold tracking-widest uppercase bg-st-red/10 inline-flex px-5 py-2.5 rounded-full border border-st-red/30 shadow-md">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {detailEvent.date}</span>
                                </div>

                                <p className="text-gray-300/90 leading-relaxed text-base md:text-lg font-light mb-12 italic border-l-4 border-st-red pl-6 py-2 bg-gradient-to-r from-white/5 to-transparent">
                                    {detailEvent.description}
                                </p>

                                {/* Register Button - TOP */}
                                <div className="mb-8">
                                    {detailEvent.multiLinks ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {detailEvent.multiLinks.map((link, lIdx) => (
                                                <a 
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-full"
                                                >
                                                    <button className="w-full px-6 py-4 bg-st-red text-white rounded-xl font-title font-black uppercase tracking-widest hover:scale-[1.02] hover:bg-white hover:text-black transition-all shadow-lg flex items-center justify-center gap-3 text-xs">
                                                        Register: {link.name}
                                                    </button>
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex justify-center">
                                            <a 
                                                href={detailEvent.regLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button className="px-10 py-4 bg-st-red text-white rounded-full font-title font-black uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,0,60,0.3)] flex items-center gap-3">
                                                    Register LINK
                                                </button>
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Info Sections Stack */}
                                <div className="space-y-8">
                                    {detailEvent.sections.map((section, idx) => (
                                        <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8">
                                            <h4 className="text-lg font-bold text-st-red uppercase tracking-[0.15em] mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                                {section.title}
                                            </h4>
                                            {section.title === "Subjects" ? (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {section.items.map((item, itemIdx) => (
                                                        <div 
                                                            key={itemIdx} 
                                                            className="group relative overflow-hidden bg-[rgba(10,10,15,0.85)]/50 border border-st-red/20 rounded-xl cursor-default hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,0,60,0.15)] transition-all duration-300 flex items-center justify-center p-6 sm:p-8"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                            <h3 className="relative z-10 text-white text-lg font-black uppercase tracking-wider group-hover:text-st-red transition-colors text-center font-milanesa mt-1">
                                                                {item}
                                                            </h3>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <ul className="space-y-4">
                                                    {section.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex gap-4 items-start text-sm md:text-base text-[#ffffff]/80 leading-relaxed">
                                                            <CheckCircle2 className="w-5 h-5 text-st-red/50 shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Academicevents;
