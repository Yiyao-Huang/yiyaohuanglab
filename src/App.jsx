import React, { useState } from "react";
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

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children, ...props }) {
  return (
    <div className={cn("border", className)} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

const googleScholarUrl =
  "https://scholar.google.com/citations?hl=zh-CN&user=tDDb3YcAAAAJ";

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
    title:
      "Enhanced Packaging of U6 Small Nuclear RNA and Splicing-Related Proteins into Extracellular Vesicles During HIV Infection",
    authors:
      "Huang, Y.; Abdelgawad, A.; Gololobova, O.; Liao, Z.; Cong, X.; Batish, M.; Zheng, L.; Witwer, K. W.",
    citation: "Science Advances, 2025, 11(11), eadq6557",
    url: "https://www.science.org/doi/10.1126/sciadv.adq6557
        
        
        
        
        
        
        
        
        
        
        
        ",
  },
  {
    journal: "Aging Cell",
    year: "2025",
    title:
      "Associations of age and sex with characteristics of extracellular vesicles and protein-enriched fractions of blood plasma",
    authors:
      "Huang, Y.*; Feng, J.*; Xu, J.; Dong, L.; Su, W.; Li, B.; Witwer, K. W.; Zheng, L.",
    citation: "Aging Cell, 2025 Jan; 24(1): e14356",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/acel.14356
        
        
        
        
        
        
        
        
        
        
        
        ",
  },
  {
    journal: "Journal of Extracellular Biology",
    year: "2025",
    title:
      "Profiling RNA Cargo in Extracellular Vesicles From hiPSC-Derived Neurons of Alzheimer's Disease Patients",
    authors:
      "Sagar, R.*; Huang, Y.*; Dong, D.; Boyd, R. J.; Ahmed, W.; Witwer, K. W.; Mahairaki, V.",
    citation: "Journal of Extracellular Biology, 2025, 4(8), e70074",
    url: "https://isevjournals.onlinelibrary.wiley.com/doi/10.1002/jex2.70074
        
        
        
        
        
        
        
        
        
        
        
        ",
  },
  {
    journal: "The Journal of Infectious Diseases",
    year: "2024",
    title:
      "RNA landscapes of brain tissue and brain tissue-derived extracellular vesicles in simian immunodeficiency virus (SIV) infection and SIV-related central nervous system pathology",
    authors:
      "Huang, Y.; Abdelgawad, A.; Turchinovich, A.; Queen, S.; Abreu, C. M.; Zhu, X.; Batish, M.; Zheng, L.; Witwer, K. W.",
    citation: "The Journal of Infectious Diseases, 2024, 229(5): 1295–1305",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11095537
        
        
        
        
        
        
        
        
        
        
        
        /",
  },
  {
    journal: "Interdisciplinary Medicine",
    year: "2023",
    title:
      "Towards a human brain EV atlas: Characteristics of EVs from different brain regions, including small RNA and protein profiles",
    authors:
      "Huang, Y.*; Arab, T.*; Russell, A. E.; Mallick, E. R.; Nagaraj, R.; Gizzie, E.; Redding, J.; Troncoso, J. C.; Pletniková, O.; Turchinovich, A.; Routenberg, D. A.; Witwer, K. W.",
    citation: "Interdisciplinary Medicine, 2023, 1(4), e20230016",
    url: "https://onlinelibrary.wiley.com/doi/10.1002/inmd.20230016
        
        
        
        
        
        
        
        
        
        
        
        ",
  },
];

const piProfile = {
  name: "黄依瑶 / Yiyao Huang, MD, PhD",
  role: "Principal Investigator",
  photo: `${import.meta.env.BASE_URL}images/pi.jpg`,
  summary:
    "Dr. Yiyao Huang leads a young and growing translational extracellular vesicle biology lab. The lab focuses on EV-based liquid biopsy, EV-associated non-coding RNAs, neurodegenerative diseases, and HIV-associated EV biology.",
  training: [
    "MD, PhD, Southern Medical University",
    "Postdoctoral training, Johns Hopkins University School of Medicine",
    "Research experience in extracellular vesicles, tissue-derived EVs, CNS disease biomarkers, RNA biology,
  ],
  appointments: [
    "Associate Professor, Zhongshan School of Medicine, Sun Yat-sen University",
    "Member-at-Large, International Society for Extracellular Vesicles",
    "Member, ISEV Solid Tissue EVs Task Force",
    "Early Career Member and Secretary, Chinese Society for Extracellular Vesicles",
  ],
};
const team = [
  {
    name: "石芷鸢 / Zhiyuan Shi",
    role: "PhD Student",
    note: [
      "BSc: Huazhong Agricultural University",
      "MSc: Sun Yat-sen University",
    ],
    photo: `${import.meta.env.BASE_URL}images/zhiyuan-shi.jpg`,
  },
  {
    name: "胡凝语 / Ningyu Hu",
    role: "Master’s Student",
    note: ["BSc: Jinan University"],
    photo: `${import.meta.env.BASE_URL}images/ningyu-hu.jpg`,
  },
];

const openings = [
  {
    title: "Postdoctoral Fellows",
    text: "We welcome applicants who are excited to build new research directions with us in EV biology, RNA biology, or neurodegeneration.",
  },
  {
    title: "Research Assistants",
    text: "Candidates with experience in multi-omics analysis, coding, or bioinformatics are encouraged to contact us.",
  },
  {
    title: "PhD Students",
    text: "Prospective PhD students interested in EVs, liquid biopsy, neurodegenerative diseases, HIV, RNA biology, or data-driven biology are welcome to reach out.",
  },
  {
    title: "Master’s Students",
    text: "We welcome motivated Master’s students who are curious, careful, and interested in learning experimental or computational approaches in EV research.",
  },
];

function PhotoBox({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div
        className={cn(
          "overflow-hidden border border-blue-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-violet-50 shadow-sm",
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid place-items-center overflow-hidden border border-blue-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-violet-50 shadow-sm",
        className
      )}
    >
      <div className="text-center">
        <Users className="mx-auto h-14 w-14 text-blue-700" />
        <p className="mt-3 text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function HivIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="15" fill="currentColor" opacity="0.18" />
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="3" />
      <path
        d="M24 31c4-6 12-6 16 0M24 37c4 6 12 6 16 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 5v9M32 50v9M5 32h9M50 32h9M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
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
  const labels = ["RNA cargo", "EV subtypes", "NDD biomarkers", "HIV & EVs"];

  return (
    <div className={`relative mb-6 h-28 overflow-hidden rounded-3xl bg-gradient-to-br ${style.visual}`}>
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/25" />
      <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-white/20" />

      <div className="absolute left-6 top-6 grid h-16 w-16 place-items-center rounded-3xl bg-white/85 text-slate-800 shadow-sm">
        <ResearchIcon index={index} />
      </div>

      <div className="absolute bottom-6 left-28">
        <p className="text-sm font-semibold text-white drop-shadow-sm">{labels[index]}</p>
        <div className="mt-2 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
          <span className="h-2.5 w-6 rounded-full bg-white/60" />
          <span className="h-2.5 w-10 rounded-full bg-white/35" />
        </div>
      </div>

      <div className="absolute right-7 bottom-6 grid h-14 w-14 place-items-center rounded-full border-2 border-white/70 bg-white/15">
        <div className="h-6 w-6 rounded-full border-2 border-white/80 bg-white/20" />
      </div>
    </div>
  );
}

function CosmicEvArtwork() {
  return (
    <div className="relative h-[460px] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.30),rgba(15,23,42,0.95)_45%,rgba(2,6,23,1)_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/15" />
      <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/15" />
      <div className="absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/15" />

      <div className="absolute left-[18%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80" />
      <div className="absolute right-[20%] top-[22%] h-1 w-1 rounded-full bg-cyan-200" />
      <div className="absolute left-[30%] bottom-[18%] h-1 w-1 rounded-full bg-violet-200" />
      <div className="absolute right-[26%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-white/70" />

      <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[10px] border-cyan-200/80 bg-white shadow-[0_0_60px_rgba(34,211,238,0.35)]">
        <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-cyan-50 via-violet-50 to-fuchsia-50">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
            <path
              d="M18 55C30 30 45 70 58 45C66 30 75 46 84 38"
              stroke="#7C3AED"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M20 40C34 54 45 25 58 42C70 58 76 31 84 52"
              stroke="#06B6D4"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="30" cy="28" r="4" fill="#EC4899" />
            <circle cx="68" cy="68" r="5" fill="#14B8A6" />
            <circle cx="66" cy="28" r="3.5" fill="#F59E0B" />
          </svg>
        </div>
      </div>

      <div className="absolute left-[17%] top-[34%] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
        <Brain className="mb-2 h-7 w-7 text-violet-200" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-100">Brain</p>
      </div>

      <div className="absolute right-[14%] top-[34%] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
        <Dna className="mb-2 h-7 w-7 text-amber-200" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">RNA</p>
      </div>

      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
        <HivIcon className="mx-auto mb-2 h-8 w-8 text-rose-200" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-100">Virus</p>
      </div>

      <div className="absolute left-[39%] top-[23%] h-4 w-4 rounded-full border-2 border-cyan-200 bg-cyan-200/20" />
      <div className="absolute right-[32%] top-[58%] h-3 w-3 rounded-full border-2 border-fuchsia-200 bg-fuchsia-200/20" />
      <div className="absolute left-[29%] bottom-[34%] h-5 w-5 rounded-full border-2 border-violet-200 bg-violet-200/20" />
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
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Extracellular Vesicles · Liquid Biopsy · NDDs · HIV
            </p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#research" className="hover:text-slate-950">
              Research
            </a>
            <a href="#people" className="hover:text-slate-950">
              People
            </a>
            <a href="#publications" className="hover:text-slate-950">
              Publications
            </a>
            <a href="#join" className="hover:text-slate-950">
              Join Us
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-cyan-300 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4" />
              Extracellular vesicles, liquid biopsy, neurodegenerative diseases, and HIV
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Decoding extracellular vesicle signals for liquid biopsy in neurodegenerative diseases and HIV
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              We study extracellular vesicles as a dynamic information layer connecting cellular states,
              peripheral biofluid signals, and disease mechanisms. Our work integrates EV separation,
              liquid biopsy, single-vesicle analysis, multi-omics, and functional validation in
              neurodegenerative diseases and HIV.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex min-w-[250px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                Explore Research <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#join"
                className="inline-flex min-w-[250px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                Join the Lab
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <CosmicEvArtwork />
          </motion.div>
        </div>
      </section>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                About the lab
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                A translational EV biology lab decoding disease-relevant signals in peripheral biofluids.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
  The Yiyao Huang Lab is a young and growing research group at Zhongshan School of Medicine (Shenzhen),
  Sun Yat-sen University. We study extracellular vesicles, non-coding RNAs, and liquid biopsy
  to understand how molecular signals move from tissues and cells into
  peripheral biofluids.
              </p>
              <p>
  We are especially interested in neurodegenerative diseases, including Alzheimer’s disease
  and Parkinson’s disease, as well as HIV-associated EV biology. As a new lab, we value
  thoughtful questions, rigorous experiments, transparent data analysis, and open discussion.
  We welcome trainees and collaborators who bring fresh ideas and are excited to build new
  directions together.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-[280px_1fr]">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
             <PhotoBox
  src={piProfile.photo}
  alt={piProfile.name}
  label="PI photo"
  className="h-48 w-48 rounded-[2rem]"
/>
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
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Research
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Research directions</h2>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-slate-600 md:block">
                We prioritize questions where EV biology can provide source information, mechanistic
                insight, and clinically relevant readouts.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {researchAreas.map((area, index) => {
                const style = researchStyles[index] || researchStyles[0];

                return (
                  <Card
                    key={area.title}
                    className={`rounded-3xl shadow-sm transition hover:-translate-y-1 hover:shadow-md ${style.card}`}
                  >
                    <CardContent className="p-6">
                      <ResearchHeaderVisual index={index} />
                      <div className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${style.icon}`}>
                        <ResearchIcon index={index} />
                      </div>
                      <p className={`mb-2 text-sm font-semibold ${style.label}`}>0{index + 1}</p>
                      <h3 className="text-2xl font-semibold tracking-tight">{area.title}</h3>
                      <p className="mt-4 leading-7 text-slate-600">{area.text}</p>
                    </CardContent>
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
              <Card key={person.name} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <PhotoBox
  src={person.photo}
  alt={person.name}
  label="Photo"
  className="mb-5 h-64 w-48 rounded-[2rem]"
/>
                  <h3 className="text-xl font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-700">{person.role}</p>
                  <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600">
  {Array.isArray(person.note) ? (
    person.note.map((item) => <p key={item}>{item}</p>)
  ) : (
    <p>{person.note}</p>
  )}
</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="publications" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  Publications
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Selected publications</h2>
              </div>
              <a
                href={googleScholarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center rounded-2xl border border-white/30 bg-transparent px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View Google Scholar <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              {publications.map((paper) => (
                <a
                  key={paper.title}
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                Join us
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                We are recruiting motivated trainees and early-career researchers.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
              As a young and growing lab, we welcome people who are curious, careful, and open to
new ideas. Applicants with interests in extracellular vesicles, liquid biopsy,
or bioinformatics are encouraged to contact us.
              </p>
              <a
                href="mailto:huangyy639@mail.sysu.edu.cn"
                className="mt-6 inline-flex items-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Contact about opportunities <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {openings.map((item, index) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                      {index === 0 ? (
                        <FlaskConical className="h-5 w-5" />
                      ) : index === 1 ? (
                        <UserPlus className="h-5 w-5" />
                      ) : (
                        <GraduationCap className="h-5 w-5" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </CardContent>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                    Contact
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-tight">Get in touch</h2>
                  <p className="mt-5 leading-7 text-slate-600">
                    For collaboration, training, or recruitment inquiries, please contact the lab by
                    email.
                  </p>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:items-center sm:gap-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <span>huangyy639@mail.sysu.edu.cn · yiyaohuang141@gmail.com</span>
                  </div>
                  <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:items-center sm:gap-3">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <span>
                      Zhongshan School of Medicine, Sun Yat-sen University (Shenzhen Campus),
                      Shenzhen, China
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Yiyao Huang Lab. Zhongshan School of Medicine, Sun Yat-sen University. All rights
        reserved.
      </footer>
    </div>
  );
}
