export const events = [
  {
    id: 1,
    title: "MINERVA",
    subtitle: "THE JUNIOR QUIZ",
    description: "The 4th edition of Minerva has arrived in all its glory! This time, we're bringing not one, but two thrilling challenges: the Junior Quiz and the Systemic Quiz. Embrace yourselves for an intellectually stimulating session filled with fascinating medical facts, mind bending trivia and pure intellectual adrenaline!",
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 12",
    time: "Prelims 9 AM - 10 AM, Finals 10:30 AM - 4 PM"
  },
  {
    id: 2,
    title: "MINERVA",
    subtitle: "THE SYSTEMIC QUIZ",
    description: "The 4th edition of Minerva has arrived in all its glory! This time, we're bringing not one, but two thrilling challenges: the Junior Quiz and the Systemic Quiz.",
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 12",
    time: "Prelims 9 AM - 10 AM, Finals 10:30 AM - 4 PM"
  },
  {
    id: 3,
    title: "MODEL UNITED NATIONS",
    subtitle: "",
    description: "Engage in diplomatic discussions and debate global issues at our Model United Nations event.",
    image: "https://images.pexels.com/photos/8761558/pexels-photo-8761558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 13",
    time: "9 AM - 5 PM"
  },
  {
    id: 4,
    title: "RESEARCH PRESENTATION",
    subtitle: "",
    description: "Present your research findings to a panel of experts and peers in this academic showcase.",
    image: "https://images.pexels.com/photos/1267336/pexels-photo-1267336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 13",
    time: "10 AM - 4 PM"
  },
  {
    id: 5,
    title: "CASE PRESENTATION",
    subtitle: "",
    description: "Showcase your clinical acumen with detailed case presentations and discussions.",
    image: "https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 13",
    time: "2 PM - 5 PM"
  },
  {
    id: 6,
    title: "POSTER PRESENTATION",
    subtitle: "",
    description: "Display your research through visually compelling posters and engage with attendees.",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 14",
    time: "9 AM - 1 PM"
  },
  {
    id: 7,
    title: "PHOTOVOICE",
    subtitle: "",
    description: "Capture the essence of medical life through photography and share your unique perspective.",
    image: "https://images.pexels.com/photos/1122528/pexels-photo-1122528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 14",
    time: "All Day"
  }
];

export const workshops = [
  {
    id: 1,
    title: "Anatomy - Kali's Prowess",
    description: "Not every gate leads to the Upside Down. Sometimes the real mystery lies much closer; inside the human eye. Step into the lab, peel back the layers of the eye, and uncover the hidden world behind vision.",
    highlights: [
      "Eye ball dissection using bull's eyeballs",
      "Anatomical overview on layers of eye ball",
      "Live demonstration of eyeball dissection",
      "Hands-on guided dissection performed by participants"
    ],
    date: "28th April, Tuesday",
    time: "8am - 12pm",
    venue: "Anatomy Dissection hall, College Building",
    fees: { regular: "₹600" },
    slots: "30",
    incharges: [
      { name: "Naveena S", phone: "63747 41894" },
      { name: "Dharshini C", phone: "63851 72712" },
      { name: "Dhivya S", phone: "88259 98687" }
    ]
  },
  {
    id: 2,
    title: "Biochemistry - Exposing the Hawkins lab",
    description: "Papa isn't the only one who can clone superhumans. Here, we expose the secrets of The Hawkins Lab, and show you the steps of DNA extraction. Extract your genetic blueprint, flaunt it in your locket and force pressure on Dr. Brenner.",
    highlights: [
       "Hands on DNA extraction from your own blood sample.",
       "Preservation of DNA in resin mold.",
       "You can take home your DNA, locked in a resin locket!",
       "You will be provided with - Falcon Tubes, UV resin, Locket"
    ],
    date: "29th April, Wednesday",
    time: "8am - 12pm",
    venue: "Biochemistry Demo Hall, College Block",
    fees: { earlyBird: "₹350", lateBird: "₹400" },
    slots: "18",
    incharges: [
      { name: "Ashvetha", phone: "91506 91888" },
      { name: "Bhumika", phone: "90030 69820" }
    ]
  },
  {
    id: 3,
    title: "Pathology - Brenner's Blueprint: Needles and Nodes",
    description: "In Hawkins, they say the ordinary world is only half the story; that just beneath its quiet surface lies another realm: strange, unseen, waiting patiently to be revealed.",
    highlights: [
      "FNAC techniques",
      "Grossing techniques",
      "Osmotic fragility testing",
      "Tour of the pathology laboratory"
    ],
    date: "28th April, Tuesday",
    time: "1-4 pm",
    venue: "Pathology Demo Hall, College Building",
    fees: { earlyBird: "₹600", lateBird: "₹700" },
    slots: "40",
    incharges: [
       { name: "Shreya R", phone: "93614 19206" },
       { name: "Tamil Oviya", phone: "72000 27203" }
    ]
  },
  {
    id: 4,
    title: "Microbiology - Spores of the Upside Down",
    description: "Descend into the Upside Down of Microbiology, where we unravel the secrets behind the spores. From streaked art to exploring hidden infections, we have it all.",
    highlights: [
       "Culture Media preparation and streaking techniques",
       "Microbial Art (using principles of microbial growth and streaking techniques)",
       "Outbreak Investigation",
       "Immunoblot",
       "Immunochromatography (ICT) - TORCH infections"
    ],
    date: "28th April, Tuesday",
    time: "8 am - 12 pm",
    venue: "Microbiology Demo Hall, College Building",
    fees: { earlyBird: "₹500", lateBird: "₹600" },
    slots: "30",
    incharges: [
       { name: "Vidhyalakshmi", phone: "80562 49544" },
       { name: "Amirdha Varshini", phone: "99402 15320" }
    ]
  },
  {
    id: 5,
    title: "FM Autopsy - Code black: The Hopper Case file",
    description: "Code Black! Code Black! Vecna strikes again. Let's examine the newest cases of the flayed to see what his new morbid methods are.",
    highlights: [
      "Live Autopsy",
      "External examination",
      "Internal examination of organs",
      "Hands On - Animal organ dissection",
      "NOTE : Fetal autopsy would be included based on availability of fetus"
    ],
    date: "30th April, Thursday",
    time: "8am - 12pm",
    venue: "Mortuary, College Building",
    fees: { spotPricing: "₹500" },
    slots: "30",
    incharges: [
       { name: "Sneha Baid", phone: "63831 44871" },
       { name: "Ravindra Upadhyay", phone: "99970 84187" }
    ]
  },
  {
    id: 6,
    title: "FM Crime scene - Code Hawkins: Ashes Beyond The Veil",
    description: "Some crimes speak loudly. Others leave only whispers for those who know how to listen - beneath smoke-stained walls, spent shell casings, and the fragile traces left behind by those who believed fire could erase their secrets.",
    highlights: [
       "Get hands-on experience on solving a mystery and step into the role of investigators. Was this truly an accident?",
       "Was the fire meant to conceal something? Or is there someone else involved?",
       "Can you piece together what the flames tried to erase?",
       "Think like an investigator, and let the ashes tell their story."
    ],
    date: "29th April, Wednesday",
    time: "8am-4pm",
    venue: "Forensic Medicine Lab, College Building",
    fees: { earlyBird: "₹900", lateBird: "₹1000" },
    slots: "40",
    incharges: [
      { name: "Srinidhi N", phone: "85240 52960" },
      { name: "Vignesh Kumar", phone: "88256 71320" }
    ]
  },
  {
    id: 7,
    title: "ENT - Running Up the Decibel",
    description: "Running Up the Decibel."
  },
  {
    id: 8,
    title: "Ophthalmology - El's Vision",
    description: "Just as Eleven uses her extraordinary vision to uncover hidden truths, this workshop invites you to sharpen your own clinical vision. Here, you get a chance to step into El's vision, to explore the science of sight and learn to see what others might miss.",
    highlights: [
      "Hands on training for lid suturing techniques.",
      "Fundus Fluorescein Angiography (FFA) live and video demonstration.",
      "Hands on of foreign body removal from goat eye."
    ],
    date: "29th April, Wednesday",
    time: "9am - 4pm",
    venue: "CAL Lab, College Building",
    fees: { earlyBird: "₹1300", lateBird: "₹1450" },
    slots: "30-35",
    incharges: [
      { name: "Sadhurthika", phone: "95669 00929" },
      { name: "Subashiny", phone: "63699 81808" }
    ]
  },
  {
    id: 9,
    title: "General medicine - Echoes from Camazotz",
    description: "The Mind Flayer doesn't announce itself, it creeps through every labored breath, every silent effusion, every missed inhaler dose. Here, in the Echoes of Camazotz, we arm you with what the shadows don't want you to know. Learn to listen, tap and strike back before the hive mind wins.",
    highlights: [
      "Auscultation of normal and abnormal lung sounds using clinical simulators.",
      "Pleural fluid tapping techniques using procedural models.",
      "Inhaler techniques for effective drug delivery in respiratory diseases."
    ],
    date: "28th April, Tuesday",
    time: "1 - 4pm",
    venue: "Medicine Seminar Hall, Hospital Building Block A",
    fees: { earlyBird: "TBD", lateBird: "TBD" },
    slots: "30",
    incharges: [
      { name: "Vishalini", phone: "96771 25671" },
      { name: "Sheeja Mol", phone: "88381 21551" }
    ]
  },
  {
    id: 10,
    title: "General surgery - Papa's gloves",
    description: "Papa's gloves."
  },
  {
    id: 11,
    title: "OBG - Project Karen",
    description: "Not every battle is fought in the open. Sometimes it unfolds in moments where calm minds, steady hands, and precise decisions change everything. Step into an experience where essential clinical skills are revealed and the unseen challenges of maternal care are brought to light.",
    highlights: [
      "B-Lynch suturing",
      "Balloon tamponade",
      "Bimanual uterine compression",
      "Pap smear",
      "IUCD insertion",
      "Forceps-assisted vacuum delivery",
      "Episiotomy",
      "Internal iliac and uterine artery ligation",
      "Non-pneumatic anti-shock garments"
    ],
    date: "30th April, Thursday",
    time: "9am -12pm",
    venue: "Skills Lab, College Building",
    fees: { earlyBird: "₹1000", lateBird: "₹1100" },
    slots: "50",
    incharges: [
       { name: "Sanjay Praveen", phone: "97898 12821" },
       { name: "Swathie Srividhya", phone: "95000 16593" }
    ]
  },
  {
    id: 12,
    title: "Paediatrics - Vecna's vessels",
    description: "When the usual rhythm of life falters and the world seems to tilt into the Upside Down, skill and calm bring it back into balance. Let's learn the art of restoring breath, rhythm, and resilience in the littlest lives.",
    highlights: [
      "Cardiopulmonary Resuscitation",
      "Nasogastric Tube Insertion",
      "Bag and Mask Ventilation",
      "Intraosseous Line Placement on Bone Model",
      "Hands-on ICD Insertion",
      "IV and IM Injection on Mannequins",
      "Umbilical Vein Catheterisation"
    ],
    date: "29th April, Wednesday",
    time: "8am - 12 noon",
    venue: "Skills Lab, College Building",
    fees: { earlyBird: "₹800", lateBird: "₹900" },
    slots: "35",
    incharges: [
      { name: "Aishwarya K", phone: "86670 56850" },
      { name: "Akshaya Priya", phone: "98400 02821" }
    ]
  },
  {
    id: 13,
    title: "Psychiatry - The Hive Mind",
    description: "When the mind drifts beyond, science steps in to secure it. Step into the world of neuronal whispers and try to understand the most fascinating facts about the human mind.",
    highlights: [
       "Live demonstration of Electroconvulsive Therapy (ECT)",
       "Transcranial Direct Current Stimulation (tDCS) demonstration",
       "Interactive UG Psychiatry Quiz"
    ],
    date: "28th April, Tuesday",
    time: "2pm - 4pm",
    venue: "Sushruta hall, College Building",
    fees: { earlyBird: "₹500", lateBird: "₹600" },
    slots: "30",
    incharges: [
       { name: "Sougandhika S", phone: "94453 79079" },
       { name: "Harinarayani Priya", phone: "79811 82649" }
    ]
  },
  {
    id: 14,
    title: "EM & Anaesthesia - Turnbows in the barn",
    description: "\"CODE RED! I REPEAT, CODE RED!\" Join the Party in their latest quest to battle the chaos, stabilise the fallen, and save lives before the Upside Down claims another victim.",
    highlights: [
       "Basic Life Support",
       "Advanced Cardiovascular Life Support",
       "IV cannulation",
       "Supraglottic airway devices",
       "Intubation",
       "Active Trauma Life Support",
       "E-FAST",
       "Primary Survey",
       "Secondary Survey",
       "Active Trauma Care (includes head chest abdomen and lone bone injuries paediatric trauma and trauma in pregnancy)"
    ],
    date: "30th April, Thursday",
    time: "1pm- 4pm",
    venue: "Skills Lab, College Building",
    fees: { earlyBird: "₹1000", lateBird: "₹1200" },
    slots: "45",
    incharges: [
       { name: "Rinay", phone: "98842 76671" },
       { name: "Rakshanaa", phone: "91505 99280" },
       { name: "Keerthi Shriya", phone: "89199 00411" }
    ]
  },
  {
    id: 15,
    title: "Orthopaedics - Walkman's canal",
    description: "Every clash with the Upside Down leaves a trail of shattered strength. Rise to the challenge of restoring alignment, stability, and resilience",
    highlights: [
       "Orthopaedic emergency simulation",
       "Management of fracture and dislocation",
       "Fracture immobilisation using plaster of Paris",
       "Lag screw fixation for internal stabilisation",
       "Plating techniques on bone models"
    ],
    date: "28th April, Tuesday",
    time: "9am- 12pm",
    venue: "Skills Lab, College Building",
    fees: { earlyBird: "₹1200", lateBird: "₹1300" },
    slots: "30",
    incharges: [
       { name: "Aditya Ram", phone: "75980 24750" },
       { name: "Deepthi J", phone: "75502 81244" }
    ]
  }
];

export const offers = {
  individual: [
    {
      id: 1,
      title: "ORTHOPAEDIC + MICROBIOLOGY + SURGERY DAY 2",
      originalPrice: "3340",
      discountedPrice: "2250",
      description: "The ultimate skill set to diagnose, treat, and heal."
    },
    {
      id: 2,
      title: "ORTHOPAEDIC + PSYCHIATRY + MICROBIOLOGY",
      originalPrice: "3240",
      discountedPrice: "2140",
      description: "A complete package for body, mind, and microbes."
    },
    {
      id: 3,
      title: "ENT + OPHTHALMOLOGY",
      originalPrice: "2580",
      discountedPrice: "2280",
      description: "For the head and neck enthusiast!"
    },
    {
      id: 4,
      title: "ORTHOPAEDIC + MICROBIOLOGY",
      originalPrice: "1850",
      discountedPrice: "1500",
      description: "Master movement and infection direction."
    },
    {
      id: 5,
      title: "BIOCHEMISTRY + OPHTHALMOLOGY",
      originalPrice: "2280",
      discountedPrice: "1900",
      description: "Explore molecules and the magic of sight."
    }
  ],
  group3: [
    {
      id: 1,
      title: "SURGERY DAY 2",
      originalPrice: "5300",
      perPerson: "1260",
      description: "Group of 3 offer"
    },
    {
      id: 2,
      title: "OPHTHALMOLOGY",
      originalPrice: "4400",
      perPerson: "1100",
      description: "Group of 3 offer"
    },
    {
      id: 3,
      title: "ORTHOPAEDICS",
      originalPrice: "5250",
      perPerson: "1750",
      description: "Group of 3 offer"
    }
  ],
  group4: [
    {
      id: 1,
      title: "SURGERY DAY 2",
      originalPrice: "5600",
      perPerson: "1400",
      description: "Group of 4 offer"
    },
    {
      id: 2,
      title: "OPHTHALMOLOGY",
      originalPrice: "4800",
      perPerson: "1200",
      description: "Group of 4 offer"
    },
    {
      id: 3,
      title: "PSYCHIATRY",
      originalPrice: "4800",
      perPerson: "1200",
      description: "Group of 4 offer"
    }
  ]
};
