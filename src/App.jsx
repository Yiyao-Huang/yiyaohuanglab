import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Users,
  Sparkles,
  ExternalLink,
  Dna,
  Brain,
  CircleDotDashed,
  GraduationCap,
  FlaskConical,
  UserPlus,
  BriefcaseBusiness,
} from "lucide-react";

const googleScholarUrl = "https://scholar.google.com/citations?hl=zh-CN&user=tDDb3YcAAAAJ";

const researchAreas = [
  {
    title: "Non-coding RNA packaging in extracellular vesicles",
    text: "We investigate how non-coding RNAs, particularly tRNAs, circRNAs, and spliceosomal snRNAs, are selectively packaged into EVs and how these RNA cargos reflect cellular state, stress responses, and disease processes.",
  },
  {
    title: "Subtyping and source tracing of heterogeneous peripheral EVs",
    text: "We develop strategies to resolve heterogeneous EV populations in peripheral biofluids, with a focus on EV subtyping, source attribution, and cell- or tissue-associated signatures for more interpretable liquid biopsy.",
  },
  {
    title: "EV-based biomarkers for neurodegenerative diseases",
    text: "We study Alzheimer’s disease, Parkinson’s disease, and related neurodegenerative disorders by integrating paired brain tissue EV and plasma EV profiles to identify non-invasive biomarkers with biological relevance.",
  },
  {
    title: "ncRNAs, EVs, and HIV infection",
    text: "We explore how HIV infection reshapes EV-associated ncRNAs and RNA-processing machinery, and how ncRNA-containing EVs may contribute to host response, viral replication, and intercellular communication during infection.",
  },
];

const publications = [
  {
    journal: "Science Advances",
    year: "2025",
    title: "Enhanced Packaging of U6 Small Nuclear RNA and Splicing-Related Proteins into Extracellular Vesicles During HIV Infection",
    authors: "Huang, Y.; Abdelgawad, A.; Gololobova, O.; Liao, Z.; Cong, X.; Batish, M.; Zheng, L.; Witwer, K. W.",
    citation: "Science Advances, 2025, 11(11), eadq6557",
    url: "https://www.science.org/doi/10.1126/sciadv.adq6557",
  },
  {
    journal: "Aging Cell",
    year: "2025",
    title: "Associations of age and sex with characteristics of extracellular vesicles and protein-enriched fractions of blood plasma",
    authors: "Huang, Y.*; Feng, J.*; Xu, J.; Dong, L.; Su, W.; Li, B.; Witwer, K. W.; Zheng, L.",
    citation: "Aging Cell, 2025 Jan; 24(1): e14356",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/acel.14356",
  },
  {
    journal: "Journal of Extracellular Biology",
    year: "2025",
    title: "Profiling RNA Cargo in Extracellular Vesicles From hiPSC-Derived Neurons of Alzheimer's Disease Patients",
    authors: "Sagar, R.*; Huang, Y.*; Dong, D.; Boyd, R. J.; Ahmed, W.; Witwer, K. W.; Mahairaki, V.",
    citation: "Journal of Extracellular Biology, 2025, 4(8), e70074",
    url: "https://isevjournals.onlinelibrary.wiley.com/doi/10.1002/jex2.70074",
  },
  {
    journal: "The Journal of Infectious Diseases",
    year: "2024",
    title: "RNA landscapes of brain tissue and brain tissue-derived extracellular vesicles in simian immunodeficiency virus (SIV) infection and SIV-related central nervous system pathology",
    authors: "Huang, Y.; Abdelgawad, A.; Turchinovich, A.; Queen, S.; Abreu, C. M.; Zhu, X.; Batish, M.; Zheng, L.; Witwer, K. W.",
    citation: "The Journal of Infectious Diseases, 2024, 229(5): 1295–1305",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11095537/",
  },
  {
    journal: "Interdisciplinary Medicine",
    year: "2023",
    title: "Towards a human brain EV atlas: Characteristics of EVs from different brain regions, including small RNA and protein profiles",
    authors: "Huang, Y.*; Arab, T.*; Russell, A. E.; Mallick, E. R.; Nagaraj, R.; Gizzie, E.; Redding, J.; Troncoso, J. C.; Pletniková, O.; Turchinovich, A.; Routenberg, D. A.; Witwer, K. W.",
    citation: "Interdisciplinary Medicine, 2023, 1(4), e20230016",
    url: "https://onlinelibrary.wiley.com/doi/10.1002/inmd.20230016",
  },
];

const piProfile = {
  name: "黄依瑶 / Yiyao Huang, MD, PhD",
  role: "Principal Investigator",
  summary:
    "Dr. Yiyao Huang leads a translational extracellular vesicle biology lab focused on EV-associated non-coding RNAs, liquid biopsy, neurodegenerative diseases, and HIV-associated EV biology.",
  training: [
    "MD, PhD, Southern Medical University",
    "Postdoctoral training, Johns Hopkins University School of Medicine",
    "Research experience in extracellular vesicles, CNS biomarkers, EV RNA biology, and infection-associated EV remodeling",
  ],
  appointments: [
    "Associate Professor, Zhongshan School of Medicine, Sun Yat-sen University",
    "Member-at-Large, International Society for Extracellular Vesicles",
    "Member, ISEV Solid Tissue EVs Task Force",
    "Secretary, Chinese Society for Extracellular Vesicles",
  ],
};

const team = [
  {
    name: "石芷鸢 / Zhiyuan Shi",
    role: "PhD Student",
    note: "BSc: Huazhong Agricultural University · MSc: Sun Yat-sen University",
    photo: "/images/zhiyuan-shi.jpg",
  },
  {
    name: "胡凝语 / Ningyu Hu",
    role: "Master’s Student",
    note: "BSc: Jinan University",
    photo: "/images/ningyu-hu.jpg",
  },
];

const openings = [
  {
    title: "Postdoctoral Fellows",
    text: "We welcome applicants with training in extracellular vesicles, neurodegeneration, RNA biology, virology, bioinformatics, or related biomedical fields.",
  },
  {
    title: "Research Assistants",
    text: "Candidates with experience in multi-omics analysis, coding, molecular biology, or experimental EV research are encouraged to contact us.",
  },
  {
    title: "PhD Students",
    text: "Prospective PhD students interested in EV biology, liquid biopsy, neurodegenerative diseases, and HIV-related research are welcome to reach out.",
  },
  {
    title: "Master’s Students",
    text: "We welcome motivated Master’s students seeking rigorous training in molecular biology, EV methods, bioinformatics, and translational biomedical research.",
  },
];

function Card({ className = "", children }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function HivIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="15" fill="currentColor" opacity="0.18" />
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="3" />
      <path d="M24 31c4-6 12-6 16 0M24 37c4 6 12 6 16 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 5v9M32 50v9M5 32h9M50 32h9M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="5" r="3" fill="currentColor" />
      <circle cx="32" cy="59" r="3" fill="currentColor" />
      <circle cx="5" cy="32" r="3" fill="currentColor" />
      <circle cx="59" cy="32" r="3" fill="currentColor" />
      <circle cx="13" cy="13" r="3" fill="currentColor" />
      <circle cx="51" cy="51" r="3" fill="currentColor" />
      <circle cx="51" cy="13" r="3" fill="currentColor" />
      <circle cx="13" cy="51" r="3" fill="currentColor" />
    </svg>
  );
}

function PhotoPlaceholder({ label = "Photo", size = "h-40 w-40" }) {
  return (
    <div className={`grid ${size} place-items-center overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50`}>
      <div className="text-center">
        <Users className="mx-auto h-11 w-11 text-blue-700" />
        <p className="mt-3 text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function ResearchIcon({ index }) {
  const iconClasses = "h-7 w-7";
  if (index === 0) return <Dna className={iconClasses} />;
  if (index === 1) return <CircleDotDashed className={iconClasses} />;
  if (index === 2) return <Brain className={iconClasses} />;
  return <HivIcon className={iconClasses} />;
}

const researchStyles = [
  {
    card: "border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50",
    icon: "bg-violet-100 text-violet-700",
    label: "text-violet-700",
    visual: "from-violet-400 via-fuchsia-300 to-cyan-300",
  },
  {
    card: "border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50",
    icon: "bg-cyan-100 text-cyan-700",
    label: "text-cyan-700",
    visual: "from-cyan-400 via-blue-300 to-emerald-300",
  },
  {
    card: "border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50",
    icon: "bg-emerald-100 text-emerald-700",
    label: "text-emerald-700",
    visual: "from-emerald-400 via-teal-300 to-lime-300",
  },
  {
    card: "border-rose-100 bg-gradient-to-br from-rose-50 via-white to-orange-50",
    icon: "bg-rose-100 text-rose-700",
    label: "text-rose-700",
    visual: "from-rose-400 via-orange-300 to-amber-300",
  },
];

function ResearchHeaderVisual({ index }) {
  const style = researchStyles[index] || researchStyles[0];
  return (
    <div className={`relative mb-6 h-28 overflow-hidden rounded-3xl bg-gradient-to-br ${style.visual}`}>
      <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/30" />
      <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-white/25" />
      <div className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/80 text-slate-800 shadow-sm">
        <ResearchIcon index={index} />
      </div>
      <div className="absolute bottom-5 right-6 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-white/80" />
        <span className="h-5 w-5 rounded-full border-2 border-white/80 bg-white/20" />
        <span className="h-8 w-8 rounded-full border-2 border-white/70 bg-white/10" />
      </div>
      {index === 0 && (
        <svg className="absolute bottom-5 left-24 h-12 w-28" viewBox="0 0 120 50" fill="none">
          <path d="M5 20C20 5 35 35 50 20C65 5 80 35 95 20C105 10 112 15 116 20" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          <path d="M10 36C25 22 40 48 55 34C70 20 85 48 110 32" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        </svg>
      )}
      {index === 1 && (
        <div className="absolute bottom-6 left-24 grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <span key={item} className="h-4 w-4 rounded-full border border-white/80 bg-white/30" />
          ))}
        </div>
      )}
      {index === 2 && (
        <svg className="absolute bottom-4 left-24 h-16 w-28" viewBox="0 0 120 70" fill="none">
          <path d="M35 55C18 55 12 40 18 28C22 19 31 18 36 22C38 12 47 8 56 12C61 14 65 18 68 24C73 17 84 16 93 23C103 31 101 50 86 55H35Z" fill="white" opacity="0.75" />
          <path d="M45 18C40 30 42 43 50 55M63 16C58 31 59 44 64 56M80 22C74 32 75 45 82 55" stroke="#065F46" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
        </svg>
      )}
      {index === 3 && (
        <div className="absolute bottom-5 left-24 flex items-center gap-3">
          <HivIcon className="h-14 w-14 text-white/80" />
          <svg className="h-10 w-20" viewBox="0 0 90 45" fill="none">
            <path d="M5 15C18 3 28 27 40 15C52 3 62 27 85 13" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
            <path d="M5 32C18 20 28 44 40 32C52 20 62 44 85 30" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      )}
    </div>
  );
}

function CosmicEvArtwork() {
  return (
    <div className="relative h-[460px] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950" />
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
      <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/20" />
      <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20" />
      <div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-white/80" />
      <div className="absolute left-20 top-28 h-1 w-1 rounded-full bg-cyan-200" />
      <div className="absolute right-16 top-20 h-1.5 w-1.5 rounded-full bg-fuchsia-200" />
      <div className="absolute right-24 top-36 h-1 w-1 rounded-full bg-white/70" />
      <div className="absolute left-24 bottom-24 h-1.5 w-1.5 rounded-full bg-violet-200" />
      <div className="absolute right-10 bottom-20 h-1 w-1 rounded-full bg-cyan-100" />
      <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[10px] border-cyan-300 bg-white/95 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
        <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-cyan-100 via-violet-100 to-fuchsia-100">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 58C30 35 44 72 55 48C62 34 71 45 82 40" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
            <path d="M15 43C28 50 36 26 48 40C61 55 68 30 84 55" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
            <circle cx="28" cy="28" r="4" fill="#EC4899" />
            <circle cx="70" cy="68" r="5" fill="#14B8A6" />
            <circle cx="63" cy="30" r="3.5" fill="#F59E0B" />
          </svg>
        </div>
      </div>
      <div className="absolute left-8 top-16 rounded-3xl border border-violet-300/20 bg-violet-400/10 px-4 py-3 backdrop-blur-sm">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-100">Brain</div>
        <svg viewBox="0 0 120 80" className="h-16 w-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 60C18 60 12 43 17 31C20 24 27 20 34 21C35 13 42 8 50 8C58 8 64 12 68 18C72 13 78 10 85 11C96 12 104 21 104 33C104 46 95 56 83 58H35Z" fill="#F9A8D4" stroke="#F472B6" strokeWidth="2.5" />
          <path d="M43 18C39 26 39 40 45 58" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 14C55 24 55 39 60 58" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <path d="M77 18C72 28 72 42 76 56" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute right-8 top-16 rounded-3xl border border-amber-300/20 bg-amber-400/10 px-4 py-3 backdrop-blur-sm">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">RNA</div>
        <svg viewBox="0 0 120 80" className="h-16 w-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20C25 5 35 35 50 20C65 5 75 35 90 20C100 10 105 15 110 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 55C25 40 35 70 50 55C65 40 75 70 90 55C100 45 105 50 110 55" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="22" r="3" fill="#FDE68A" />
          <circle cx="52" cy="56" r="3" fill="#FBBF24" />
          <circle cx="83" cy="21" r="3" fill="#F59E0B" />
        </svg>
      </div>
      <div className="absolute left-10 bottom-12 rounded-3xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 backdrop-blur-sm">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-100">Virus</div>
        <HivIcon className="h-16 w-16 text-rose-300" />
      </div>
      <div className="absolute left-[44%] top-[24%] h-4 w-4 rounded-full border-2 border-cyan-300 bg-cyan-200/20" />
      <div className="absolute left-[68%] top-[48%] h-3 w-3 rounded-full border-2 border-fuchsia-300 bg-fuchsia-200/20" />
      <div className="absolute left-[28%] top-[55%] h-5 w-5 rounded-full border-2 border-violet-300 bg-violet-200/20" />
      <div className="absolute left-[58%] top-[72%] h-4 w-4 rounded-full border-2 border-amber-300 bg-amber-200/20" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">Yiyao Huang Lab</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Extracellular Vesicles · Liquid Biopsy · NDDs · HIV</p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#research" className="hover:text-slate-950">Research</a>
            <a href="#people" className="hover:text-slate-950">People</a>
            <a href="#publications" className="hover:text-slate-950">Publications</a>
            <a href="#join" className="hover:text-slate-950">Join Us</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-cyan-300 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4" />
              Extracellular vesicles, liquid biopsy, neurodegenerative diseases, and HIV
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Decoding extracellular vesicle signals for liquid biopsy in neurodegenerative diseases and HIV
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              We study extracellular vesicles as a dynamic information layer connecting cellular states, peripheral biofluid signals, and disease mechanisms. Our work integrates EV separation, liquid biopsy, single-vesicle analysis, multi-omics, and functional validation in neurodegenerative diseases and HIV.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#research" className="inline-flex min-w-[250px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100">
                Explore Research <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#join" className="inline-flex min-w-[250px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100">
                Join the Lab
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex items-center justify-center">
            <CosmicEvArtwork />
          </motion.div>
        </div>
      </section>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">About the lab</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">A translational EV biology lab decoding disease-relevant signals in peripheral biofluids.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                The Yiyao Huang Lab at Zhongshan School of Medicine, Sun Yat-sen University focuses on extracellular vesicles, non-coding RNAs, and liquid biopsy. We study how EVs carry molecular information from tissues and cells into peripheral biofluids, and how these signals can be used to understand disease mechanisms and develop more interpretable biomarkers.
              </p>
              <p>
                Our work centers on neurodegenerative diseases, especially Alzheimer’s disease and Parkinson’s disease, as well as HIV-associated EV biology. By integrating brain tissue EV profiling, plasma EV analysis, EV subtyping, source tracing, RNA biology, multi-omics, and functional studies, we aim to connect molecular mechanisms with clinically accessible readouts.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-[280px_1fr]">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <PhotoPlaceholder label="PI photo" size="h-48 w-48" />
                <h3 className="mt-5 text-xl font-semibold">{piProfile.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-700">{piProfile.role}</p>
              </div>
              <div>
                <p className="text-lg leading-8 text-slate-700">{piProfile.summary}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                      <GraduationCap className="h-4 w-4" /> Training
                    </div>
                    <ul className="space-y-3 text-sm leading-6 text-slate-700">
                      {piProfile.training.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                      <BriefcaseBusiness className="h-4 w-4" /> Appointments & service
                    </div>
                    <ul className="space-y-3 text-sm leading-6 text-slate-700">
                      {piProfile.appointments.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Research</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Research directions</h2>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-slate-600 md:block">
                We prioritize questions where EV biology can provide source information, mechanistic insight, and clinically relevant readouts.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {researchAreas.map((area, index) => {
                const style = researchStyles[index] || researchStyles[0];
                return (
                  <Card key={area.title} className={`transition hover:-translate-y-1 hover:shadow-md ${style.card}`}>
                    <div className="p-6">
                      <ResearchHeaderVisual index={index} />
                      <div className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${style.icon}`}>
                        <ResearchIcon index={index} />
                      </div>
                      <p className={`mb-2 text-sm font-semibold ${style.label}`}>0{index + 1}</p>
                      <h3 className="text-2xl font-semibold tracking-tight">{area.title}</h3>
                      <p className="mt-4 leading-7 text-slate-600">{area.text}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="people" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">People</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Team</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <Card key={person.name}>
                <div className="p-6">
                  <PhotoPlaceholder label="Photo" size="h-40 w-40" />
                  <h3 className="mt-5 text-xl font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-700">{person.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{person.note}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="publications" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Publications</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Selected publications</h2>
              </div>
              <a href={googleScholarUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center rounded-2xl border border-white/30 bg-transparent px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                View Google Scholar <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {publications.map((paper) => (
                <a key={paper.title} href={paper.url} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-100">
                    <span>{paper.journal}</span>
                    <span className="h-1 w-1 rounded-full bg-cyan-200" />
                    <span>{paper.year}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-7">{paper.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{paper.authors}</p>
                  <p className="mt-2 text-sm font-medium text-cyan-100">{paper.citation}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Join us</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">We are recruiting motivated trainees and early-career researchers.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                We welcome applicants interested in extracellular vesicles, liquid biopsy, neurodegenerative diseases, RNA biology, bioinformatics, and HIV-related research.
              </p>
              <a href="mailto:huangyy639@mail.sysu.edu.cn" className="mt-6 inline-flex items-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                Contact about opportunities <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {openings.map((item, index) => (
                <Card key={item.title} className="transition hover:-translate-y-1 hover:shadow-md">
                  <div className="p-6">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                      {index === 0 ? <FlaskConical className="h-5 w-5" /> : index === 1 ? <UserPlus className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[2rem] bg-slate-100 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Contact</p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-tight">Get in touch</h2>
                  <p className="mt-5 leading-7 text-slate-600">
                    For collaboration, training, or recruitment inquiries, please contact the lab by email.
                  </p>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:items-center sm:gap-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <span>huangyy639@mail.sysu.edu.cn · yiyaohuang141@gmail.com</span>
                  </div>
                  <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:items-center sm:gap-3">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <span>Zhongshan School of Medicine, Sun Yat-sen University (Shenzhen Campus), Shenzhen, China</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Yiyao Huang Lab. Zhongshan School of Medicine, Sun Yat-sen University. All rights reserved.
      </footer>
    </div>
  );
}
