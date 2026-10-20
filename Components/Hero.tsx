
"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans, Mrs_Saint_Delafield } from "next/font/google";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChevronRight,
  Code2,
  Cog,
  Database,
  Download,
  Lightbulb,
  Rocket,
  Send,
  ShieldCheck,
  Target,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const signature = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
});

const STATS = [
  { icon: Code2, value: "Backend", label: "Development", color: "text-violet-400" },
  { icon: BrainCircuit, value: "AI", label: "Intelligent Systems", color: "text-indigo-400" },
  { icon: Database, value: "Data", label: "Preparation & ML", color: "text-blue-400" },
  { icon: Target, value: "Always", label: "Learning & Improving", color: "text-violet-300" },
];

const VALUES = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Readable and maintainable",
    tone: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Systems",
    text: "Thoughtful backend design",
    tone: "bg-indigo-500/10 text-indigo-400",
  },
  {
    icon: Rocket,
    title: "Practical Projects",
    text: "Learning through building",
    tone: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    text: "Improving every day",
    tone: "bg-violet-400/10 text-violet-300",
  },
];

const SKILL_CARDS = [
  {
    icon: Cog,
    title: "Backend",
    text: "Node.js · Express\nMongoDB",
    tone: "border-violet-400/30 bg-[#101020]/90",
    iconTone: "text-violet-400",
    pos: "left-0 top-[22%]",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI",
    text: "RAG · Agents · LLMs",
    tone: "border-indigo-400/30 bg-[#141126]/90",
    iconTone: "text-indigo-400",
    pos: "right-0 top-[5%]",
  },
  {
    icon: Code2,
    title: "Frontend",
    text: "React · Next.js\nTailwind CSS",
    tone: "border-blue-400/30 bg-[#101522]/90",
    iconTone: "text-blue-400",
    pos: "right-0 top-[31%]",
  },
  {
    icon: Database,
    title: "Databases",
    text: "MongoDB · SQL",
    tone: "border-violet-300/30 bg-[#111020]/90",
    iconTone: "text-violet-300",
    pos: "left-0 top-[49%]",
  },
  {
    icon: BarChart3,
    title: "Data Preparation",
    text: "EDA · ML · Python",
    tone: "border-indigo-300/30 bg-[#171522]/90",
    iconTone: "text-indigo-300",
    pos: "right-0 top-[57%]",
  },
];

function GithubIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81.19 2.19.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className={`${jakarta.className} relative isolate overflow-hidden bg-[#070914] text-white`}
    >
      {/* Background grid and ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139,92,246,0.16) 1px, transparent 1px), radial-gradient(ellipse 60% 50% at 78% 30%, rgba(99,102,241,0.20), transparent 70%), radial-gradient(ellipse 50% 40% at 8% 95%, rgba(139,92,246,0.12), transparent 70%)",
          backgroundSize: "34px 34px, 100% 100%, 100% 100%",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-125 w-125 rounded-full bg-violet-600/5 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:pb-16 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: introduction */}
          <div className="relative z-10">
            <a
              href="Contact"
              className="inline-flex items-center gap-2.5 rounded-lg border border-violet-500/30 bg-violet-500/8 px-3.5 py-2 text-sm text-violet-300 transition hover:bg-violet-500/[0.14]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50 motion-reduce:animate-none" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-violet-400" />
              </span>
              Open to Opportunities
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              <span className="bg-linear-to-b from-white to-slate-300 bg-clip-text text-transparent">
                Software Engineer
              </span>
              <br />
              <span className="text-white">Building </span>
              <span className="bg-linear-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Real Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
              Backend Development
              <span className="mx-2 text-violet-400">|</span>
              AI Systems
              <span className="mx-2 text-violet-400">|</span>
              Full-Stack Projects
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I build backend systems, web applications, and practical AI
              solutions. From REST APIs and database-driven applications to
              LLM-powered agents and retrieval systems, I turn ideas into{" "}
              <strong className="font-semibold text-white">
                working software
              </strong>
              .
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-xl bg-linear-to-r from-violet-600 to-indigo-500 px-5 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_rgba(124,58,237,0.7)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 sm:px-6 sm:text-base"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                View My Projects
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </Link>

              <a
                href="/Shahzaib-Karamat-CV.pdf"
                download
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold transition hover:border-violet-400/60 hover:bg-white/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:px-6 sm:text-base"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Download CV
              </a>

              <a
                href="https://github.com/shahzaibkaramat67-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-violet-400/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:h-14 sm:w-14"
              >
                <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500 sm:text-sm">
              Backend engineering · Agentic AI · Data preparation
            </p>
          </div>

          {/* Right: portrait */}
          <div className="relative mx-auto mt-2 w-full max-w-lg lg:mt-0 lg:max-w-none">
            <div className="relative mx-auto aspect-4/5 w-full max-w-115">
              {/* Decorative portrait glow */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[8%] aspect-square w-[78%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#6366f1,#4338ca_55%,#1e1b4b_100%)] opacity-80 blur-[2px]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[8%] aspect-square w-[78%] -translate-x-1/2 rounded-full shadow-[0_0_100px_15px_rgba(99,102,241,0.25)]"
              />

              {/* Single portrait container */}
              <div className="absolute inset-x-[12%] bottom-0 top-[10%] overflow-hidden rounded-t-[48%] border border-white/10 bg-linear-to-b from-white/[0.07] to-white/1">
                <Image
                  src="/profile1.jpeg"
                  alt="Shahzaib Karamat"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-contain object-bottom"
                />

                {/* Subtle violet overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.13),transparent_65%)]"
                />
              </div>

              {/* Fade the portrait into the page */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-[#070914] to-transparent"
              />

              {/* Signature */}
              <div className="absolute bottom-5 left-1/2 z-20 w-max -translate-x-1/2 text-center sm:bottom-7">
                <p
                  className={`${signature.className} text-5xl leading-none text-white sm:text-6xl`}
                >
                  Shahzaib Karamat
                </p>
                <p className="mt-2 text-[9px] font-semibold tracking-[0.3em] text-slate-300 sm:text-[11px]">
                  SOFTWARE ENGINEER
                </p>
              </div>

              {/* Floating skill cards on desktop */}
              {SKILL_CARDS.map(
                ({ icon: Icon, title, text, tone, iconTone, pos }) => (
                  <div
                    key={title}
                    className={`absolute z-30 hidden items-center gap-3 rounded-2xl border px-3 py-3 shadow-xl backdrop-blur-xl md:flex lg:px-4 ${tone} ${pos}`}
                  >
                    <Icon
                      className={`h-6 w-6 shrink-0 ${iconTone} lg:h-7 lg:w-7`}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {title}
                      </p>
                      <p className="whitespace-pre-line text-[11px] leading-5 text-slate-400 lg:text-xs">
                        {text}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Skill chips for smaller screens */}
        <ul className="mt-5 flex flex-wrap justify-center gap-2 md:hidden">
          {SKILL_CARDS.map(({ title }) => (
            <li
              key={title}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-300"
            >
              {title}
            </li>
          ))}
        </ul>

        {/* Professional focus bar */}
        <dl className="mt-12 grid grid-cols-2 gap-y-7 rounded-3xl border border-white/10 bg-white/2.5 px-4 py-7 sm:px-8 lg:grid-cols-4 lg:py-8">
          {STATS.map(({ icon: Icon, value, label, color }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-2 sm:gap-4 sm:px-4 lg:px-6 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <Icon
                className={`h-8 w-8 shrink-0 sm:h-9 sm:w-9 ${color}`}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <dd className="text-base font-bold leading-tight text-white sm:text-xl">
                  {value}
                </dd>
                <dt className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  {label}
                </dt>
              </div>
            </div>
          ))}
        </dl>

        {/* Work values */}
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {VALUES.map(({ icon: Icon, title, text, tone }) => (
            <li key={title} className="flex items-center gap-4">
              <span
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl sm:h-16 sm:w-16 ${tone}`}
              >
                <Icon
                  className="h-7 w-7 sm:h-8 sm:w-8"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="text-base font-semibold text-white sm:text-lg">
                  {title}
                </p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to the About section"
          className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          Scroll Down
          <span className="grid h-10 w-6 place-items-start justify-center rounded-full border-2 border-slate-500 pt-1.5">
            <span className="h-2 w-0.5 rounded-full bg-slate-400" />
          </span>
          <ArrowDown
            className="h-4 w-4 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}


















































// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Plus_Jakarta_Sans, Mrs_Saint_Delafield } from "next/font/google";
// import {
//   ArrowDown,
//   ArrowRight,
//   BarChart3,
//   BrainCircuit,
//   ChevronRight,
//   Code2,
//   Cog,
//   Database,
//   Download,
//   Lightbulb,
//   Menu,
//   Rocket,
//   Send,
//   ShieldCheck,
//   Target,
//   Users,
//   X,
//   Zap,
// } from "lucide-react";

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

// const signature = Mrs_Saint_Delafield({
//   subsets: ["latin"],
//   weight: "400",
// });



// const STATS = [
//   { icon: Code2, value: "Backend", label: "Development", color: "text-violet-400" },
//   { icon: BrainCircuit, value: "AI", label: "Intelligent Systems", color: "text-sky-400" },
//   { icon: Database, value: "Data", label: "Preparation & ML", color: "text-indigo-400" },
//   { icon: Target, value: "Always", label: "Learning & Improving", color: "text-orange-400" },
// ];

// const VALUES = [
//   {
//     icon: Code2,
//     title: "Clean Code",
//     text: "Readable and maintainable",
//     tone: "bg-violet-500/10 text-violet-400",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Reliable Systems",
//     text: "Thoughtful backend design",
//     tone: "bg-sky-500/10 text-sky-400",
//   },
//   {
//     icon: Rocket,
//     title: "Practical Projects",
//     text: "Learning through building",
//     tone: "bg-fuchsia-500/10 text-fuchsia-400",
//   },
//   {
//     icon: Lightbulb,
//     title: "Continuous Learning",
//     text: "Improving every day",
//     tone: "bg-orange-500/10 text-orange-400",
//   },
// ];

// const SKILL_CARDS = [
//   {
//     icon: Cog,
//     title: "Backend",
//     text: "Node.js · Express\nMongoDB",
//     tone: "border-emerald-400/30 bg-[#101a20]/90",
//     iconTone: "text-emerald-400",
//     pos: "left-0 top-[22%]",
//   },
//   {
//     icon: BrainCircuit,
//     title: "Generative AI",
//     text: "RAG · Agents · LLMs",
//     tone: "border-fuchsia-400/30 bg-[#171020]/90",
//     iconTone: "text-fuchsia-400",
//     pos: "right-0 top-[5%]",
//   },
//   {
//     icon: Code2,
//     title: "Frontend",
//     text: "React · Next.js\nTailwind CSS",
//     tone: "border-sky-400/30 bg-[#101923]/90",
//     iconTone: "text-sky-400",
//     pos: "right-0 top-[31%]",
//   },
//   {
//     icon: Database,
//     title: "Databases",
//     text: "MongoDB · SQL",
//     tone: "border-indigo-400/30 bg-[#111326]/90",
//     iconTone: "text-indigo-400",
//     pos: "left-0 top-[49%]",
//   },
//   {
//     icon: BarChart3,
//     title: "Data Preparation",
//     text: "EDA · ML · Python",
//     tone: "border-orange-400/30 bg-[#1c1713]/90",
//     iconTone: "text-orange-400",
//     pos: "right-0 top-[57%]",
//   },
// ];

// function GithubIcon({ className = "h-6 w-6" }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={className}
//       aria-hidden="true"
//     >
//       <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
//     </svg>
//   );
// }



// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className={`${jakarta.className} relative isolate overflow-hidden bg-[#070914] text-white`}
//     >
//       {/* Background grid and ambient lighting */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(139,92,246,0.16) 1px, transparent 1px), radial-gradient(ellipse 60% 50% at 78% 30%, rgba(99,102,241,0.20), transparent 70%), radial-gradient(ellipse 50% 40% at 8% 95%, rgba(168,85,247,0.12), transparent 70%)",
//           backgroundSize: "34px 34px, 100% 100%, 100% 100%",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-0 top-0 -z-10 h-125 w-125 rounded-full bg-violet-600/5 blur-[120px]"
//       />

  

//       <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:pb-16 lg:pt-12">
//         <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
//           {/* Left: introduction */}
//           <div className="relative z-10">
//             <a
//               href="#Contact"
//               className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/8 px-3.5 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/[0.14]"
//             >
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
//                 <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
//               </span>
//               Open to Opportunities
//               <ChevronRight className="h-4 w-4" aria-hidden="true" />
//             </a>

//             <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
//               <span className="bg-linear-to-b from-white to-slate-300 bg-clip-text text-transparent">
//                 Software Engineer
//               </span>
//               <br />
//               <span className="text-white">Building </span>
//               <span className="bg-linear-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
//                 Real Solutions
//               </span>
//             </h1>

//             <p className="mt-6 text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
//               Backend Development
//               <span className="mx-2 text-violet-400">|</span>
//               AI Systems
//               <span className="mx-2 text-violet-400">|</span>
//               Full-Stack Projects
//             </p>

//             <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
//               I build backend systems, web applications, and practical AI
//               solutions. From REST APIs and database-driven applications to
//               LLM-powered agents and retrieval systems, I turn ideas into{" "}
//               <strong className="font-semibold text-white">
//                 working software
//               </strong>
//               .
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
//               <Link
//                 href="#projects"
//                 className="inline-flex items-center gap-2.5 rounded-xl bg-linear-to-r from-violet-600 to-indigo-500 px-5 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_rgba(124,58,237,0.7)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 sm:px-6 sm:text-base"
//               >
//                 <Send className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
//                 View My Projects
//                 <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
//               </Link>

//               <a
//                 href="/Shahzaib-Karamat-CV.pdf"
//                 download
//                 className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold transition hover:border-violet-400/60 hover:bg-white/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:px-6 sm:text-base"
//               >
//                 <Download className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
//                 Download CV
//               </a>

//               <a
//                 href="https://github.com/shahzaibkaramat67-coder"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Visit my GitHub profile"
//                 className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-violet-400/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:h-14 sm:w-14"
//               >
//                 <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6" />
//               </a>
//             </div>

//             <p className="mt-5 text-xs leading-6 text-slate-500 sm:text-sm">
//               Backend engineering · Agentic AI · Data preparation
//             </p>
//           </div>

//           {/* Right: portrait placeholder */}
//           <div className="relative mx-auto mt-2 w-full max-w-lg lg:mt-0 lg:max-w-none">
//             <div className="relative mx-auto aspect-4/5 w-full max-w-115">
//               {/* Decorative portrait glow */}
//               <div
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-[8%] aspect-square w-[78%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#6366f1,#4338ca_55%,#1e1b4b_100%)] opacity-80 blur-[2px]"
//               />

//               <div
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-[8%] aspect-square w-[78%] -translate-x-1/2 rounded-full shadow-[0_0_100px_15px_rgba(99,102,241,0.25)]"
//               />

//               {/* Add your transparent-background portrait here later.
//                   File location: public/images/profile.png */}
//               <div className="absolute inset-x-[12%] bottom-0 top-[10%] overflow-hidden rounded-t-[48%] border border-white/10 bg-linear-to-b from-white/[0.07] to-white/1">
//                 <div
//                   aria-hidden="true"
//                   className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.13),transparent_65%)]"
//                 />

//                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-slate-400">
//                   <div className="grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/4">
//                     <Users className="h-7 w-7 text-violet-300/70" />
//                   </div>
//                   <p className="text-sm font-medium text-slate-300">
//                     Your Photo
//                   </p>
//                   <p className="max-w-47.5 px-4 text-xs leading-5 text-slate-500">
//                     Replace this placeholder with your portrait later.
//                   </p>
//                 </div>
//               </div>

//               {/* Fade the portrait into the page */}
//               <div
//                 aria-hidden="true"
//                 className="absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-[#070914] to-transparent"
//               />

//               {/* Signature */}
//               <div className="absolute bottom-5 left-1/2 z-20 w-max -translate-x-1/2 text-center sm:bottom-7">
//                 <p
//                   className={`${signature.className} text-5xl leading-none text-white sm:text-6xl`}
//                 >
//                   Shahzaib Karamat
//                 </p>
//                 <p className="mt-2 text-[9px] font-semibold tracking-[0.3em] text-slate-300 sm:text-[11px]">
//                   SOFTWARE ENGINEER
//                 </p>
//               </div>

//               {/* Floating skill cards on desktop */}
//               {SKILL_CARDS.map(
//                 ({ icon: Icon, title, text, tone, iconTone, pos }) => (
//                   <div
//                     key={title}
//                     className={`absolute z-30 hidden items-center gap-3 rounded-2xl border px-3 py-3 shadow-xl backdrop-blur-xl md:flex lg:px-4 ${tone} ${pos}`}
//                   >
//                     <Icon
//                       className={`h-6 w-6 shrink-0 ${iconTone} lg:h-7 lg:w-7`}
//                       strokeWidth={1.8}
//                       aria-hidden="true"
//                     />
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {title}
//                       </p>
//                       <p className="whitespace-pre-line text-[11px] leading-5 text-slate-400 lg:text-xs">
//                         {text}
//                       </p>
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Skill chips for smaller screens */}
//         <ul className="mt-5 flex flex-wrap justify-center gap-2 md:hidden">
//           {SKILL_CARDS.map(({ title }) => (
//             <li
//               key={title}
//               className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-300"
//             >
//               {title}
//             </li>
//           ))}
//         </ul>

//         {/* Professional focus bar */}
//         <dl className="mt-12 grid grid-cols-2 gap-y-7 rounded-3xl border border-white/10 bg-white/2.5 px-4 py-7 sm:px-8 lg:grid-cols-4 lg:py-8">
//           {STATS.map(({ icon: Icon, value, label, color }, index) => (
//             <div
//               key={label}
//               className={`flex items-center gap-3 px-2 sm:gap-4 sm:px-4 lg:px-6 ${index > 0 ? "lg:border-l lg:border-white/10" : ""
//                 }`}
//             >
//               <Icon
//                 className={`h-8 w-8 shrink-0 sm:h-9 sm:w-9 ${color}`}
//                 strokeWidth={1.5}
//                 aria-hidden="true"
//               />
//               <div>
//                 <dd className="text-base font-bold leading-tight text-white sm:text-xl">
//                   {value}
//                 </dd>
//                 <dt className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
//                   {label}
//                 </dt>
//               </div>
//             </div>
//           ))}
//         </dl>

//         {/* Work values */}
//         <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
//           {VALUES.map(({ icon: Icon, title, text, tone }) => (
//             <li key={title} className="flex items-center gap-4">
//               <span
//                 className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl sm:h-16 sm:w-16 ${tone}`}
//               >
//                 <Icon
//                   className="h-7 w-7 sm:h-8 sm:w-8"
//                   strokeWidth={1.6}
//                   aria-hidden="true"
//                 />
//               </span>
//               <div>
//                 <p className="text-base font-semibold text-white sm:text-lg">
//                   {title}
//                 </p>
//                 <p className="mt-1 text-sm text-slate-400">{text}</p>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Scroll cue */}
//         <a
//           href="#about"
//           aria-label="Scroll to the About section"
//           className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-sm text-slate-400 transition hover:text-white"
//         >
//           Scroll Down
//           <span className="grid h-10 w-6 place-items-start justify-center rounded-full border-2 border-slate-500 pt-1.5">
//             <span className="h-2 w-0.5 rounded-full bg-slate-400" />
//           </span>
//           <ArrowDown
//             className="h-4 w-4 animate-bounce motion-reduce:animate-none"
//             aria-hidden="true"
//           />
//         </a>
//       </div>
//     </section>
//   );
// }




















// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Plus_Jakarta_Sans, Mrs_Saint_Delafield } from "next/font/google";
// import {
//   ArrowRight,
//   ArrowDown,
//   BarChart3,
//   Box,
//   BrainCircuit,
//   ChevronRight,
//   Code2,
//   Cog,
//   Database,
//   Download,
//   Lightbulb,
//   Menu,
//   Rocket,
//   Send,
//   ShieldCheck,
//   Target,
//   Users,
//   X,
//   Zap,
// } from "lucide-react";

// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
// const signature = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400" });

// /* ----------------------------- content ----------------------------- */

// const NAV = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

// const STATS = [
//   { icon: Box, value: "10+", label: "Projects Completed", color: "text-violet-400" },
//   { icon: Zap, value: "4+", label: "Technologies", color: "text-sky-400" },
//   { icon: Users, value: "3", label: "Core Domains", color: "text-indigo-400" },
//   { icon: Target, value: "100%", label: "Commitment to Growth", color: "text-orange-400" },
// ];

// const VALUES = [
//   { icon: Code2, title: "Clean Code", text: "Maintainable & Scalable", tone: "bg-violet-500/10 text-violet-400" },
//   { icon: ShieldCheck, title: "Secure Systems", text: "Best Security Practices", tone: "bg-sky-500/10 text-sky-400" },
//   { icon: Rocket, title: "Real-World Projects", text: "Practical & Impactful", tone: "bg-fuchsia-500/10 text-fuchsia-400" },
//   { icon: Lightbulb, title: "Continuous Learning", text: "Exploring New Technologies", tone: "bg-orange-500/10 text-orange-400" },
// ];

// /* Floating skill cards around the portrait (desktop only). */
// const SKILL_CARDS = [
//   {
//     icon: Cog,
//     title: "Backend",
//     text: "Node.js · Express\nMongoDB",
//     tone: "border-emerald-400/40 bg-emerald-500/10 text-emerald-400",
//     pos: "left-0 top-[22%]",
//   },
//   {
//     icon: BrainCircuit,
//     title: "Generative AI",
//     text: "RAG · Agents · LLMs",
//     tone: "border-white/15 bg-white/5 text-fuchsia-400",
//     pos: "right-0 top-[4%]",
//   },
//   {
//     icon: Code2,
//     title: "Frontend",
//     text: "React · Next.js\nTailwind CSS",
//     tone: "border-white/15 bg-white/5 text-sky-400",
//     pos: "right-[-2%] top-[30%]",
//   },
//   {
//     icon: Database,
//     title: "Databases",
//     text: "MongoDB · SQL",
//     tone: "border-sky-400/40 bg-sky-500/10 text-sky-400",
//     pos: "left-0 top-[48%]",
//   },
//   {
//     icon: BarChart3,
//     title: "Data Preparation",
//     text: "EDA · ML · Python",
//     tone: "border-white/15 bg-white/5 text-orange-400",
//     pos: "right-[-4%] top-[56%]",
//   },
// ];

// /* ----------------------------- pieces ----------------------------- */

// function GithubIcon({ className = "h-6 w-6" }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
//       <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
//     </svg>
//   );
// }

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="relative z-30">
//       <nav
//         aria-label="Main"
//         className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
//       >
//         <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-white sm:text-2xl">
//           <Code2 className="h-7 w-7 text-fuchsia-500" strokeWidth={2.2} aria-hidden="true" />
//           Shahzaib Karamat
//         </Link>

//         <ul className="hidden items-center gap-9 lg:flex">
//           {NAV.map((item, i) => (
//             <li key={item}>
//               <Link
//                 href={i === 0 ? "/" : `#${item.toLowerCase()}`}
//                 aria-current={i === 0 ? "page" : undefined}
//                 className={`relative pb-1.5 text-[15px] font-medium transition-colors hover:text-white  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 ${i === 0 ? "text-white" : "text-slate-300"
//                   }`}
//               >
//                 {item}
//                 {i === 0 && (
//                   <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500" />
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-3">
//           <a
//             href="/Shahzaib-Karamat-CV.pdf"
//             download
//             className="hidden items-center gap-2.5 rounded-xl border border-white/20 bg-white/3 px-5 py-2.5 text-[15px] font-medium text-white transition hover:border-violet-400/60 hover:bg-white/10  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:flex"
//           >
//             <Download className="h-4.5 w-4.5" aria-hidden="true" />
//             Download CV
//           </a>
//           <button
//             type="button"
//             onClick={() => setOpen((v) => !v)}
//             aria-expanded={open}
//             aria-label={open ? "Close menu" : "Open menu"}
//             className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
//           >
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </nav>

//       {open && (
//         <ul className="mx-5 mb-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0d1024]/95 p-3 backdrop-blur lg:hidden">
//           {NAV.map((item, i) => (
//             <li key={item}>
//               <Link
//                 href={i === 0 ? "/" : `#${item.toLowerCase()}`}
//                 onClick={() => setOpen(false)}
//                 className="block rounded-lg px-4 py-3 text-slate-200 hover:bg-white/5"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// }

// /* ------------------------------ hero ------------------------------ */

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className={`${jakarta.className} relative isolate min-h-screen overflow-hidden bg-[#070914] text-white`}
//     >
//       {/* background: dot grid + soft glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(139,92,246,0.18) 1px, transparent 1px), radial-gradient(ellipse 60% 50% at 75% 30%, rgba(99,102,241,0.22), transparent 70%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(168,85,247,0.15), transparent 70%)",
//           backgroundSize: "34px 34px, 100% 100%, 100% 100%",
//         }}
//       />

//       <Navbar />

//       <div className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:pt-12">
//         <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
//           {/* ------------------------- left: copy ------------------------- */}
//           <div>
//             <a
//               href="#Contact"
//               className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-sm text-emerald-400 transition hover:bg-emerald-500/20"
//             >
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
//               </span>
//               Available for Opportunities
//               <ChevronRight className="h-4 w-4" aria-hidden="true" />
//             </a>

//             <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
//               <span className="bg-linear-to-b from-white to-slate-300 bg-clip-text text-transparent">
//                 Software Engineer
//               </span>
//               <br />
//               <span className="bg-linear-to-b from-white to-slate-300 bg-clip-text text-transparent">
//                 Building{" "}
//               </span>
//               <span className="bg-linear-to-r from-fuchsia-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
//                 Real Solutions
//               </span>
//             </h1>

//             <p className="mt-6 text-xl font-medium text-slate-100 sm:text-2xl">
//               Backend Development <span className="mx-1 text-slate-400">|</span> AI Systems{" "}
//               <span className="mx-1 text-slate-400">|</span> Full-Stack Projects
//             </p>

//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
//               I design and build scalable web applications, powerful AI solutions, and data-driven
//               systems. From robust backend APIs to intelligent AI agents and clean user interfaces, I
//               turn ideas into <strong className="font-semibold text-white">real-world products</strong>.
//             </p>

//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <Link
//                 href="#projects"
//                 className="inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-500 px-7 py-4 text-base font-semibold shadow-[0_10px_40px_-10px_rgba(124,58,237,0.8)] transition hover:brightness-110  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
//               >
//                 <Send className="h-5 w-5" aria-hidden="true" />
//                 View My Projects
//                 <ArrowRight className="h-5 w-5" aria-hidden="true" />
//               </Link>

//               <a
//                 href="/Shahzaib-Karamat-CV.pdf"
//                 download
//                 className="inline-flex items-center gap-3 rounded-2xl border border-white/25 px-7 py-4 text-base font-semibold transition hover:border-violet-400/60 hover:bg-white/5  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
//               >
//                 <Download className="h-5 w-5" aria-hidden="true" />
//                 Download CV
//               </a>

//               <a
//                 href="https://github.com/shahzaibkaramat67-coder"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub profile"
//                 className="grid h-14.5 w-14.5 place-items-center rounded-full border border-white/25 transition hover:border-violet-400/60 hover:bg-white/5  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
//               >
//                 <GithubIcon />
//               </a>
//             </div>
//           </div>

//           {/* ----------------------- right: portrait ----------------------- */}
//           <div className="relative mx-auto h-14.5 w-full max-w-140 sm:h-130 lg:h-150 lg:max-w-none">
//             {/* glow orb */}
//             <div
//               aria-hidden="true"
//               className="absolute left-1/2 top-[6%] h-[78%] aspect-square -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#6366f1,#4338ca_55%,#1e1b4b_100%)] opacity-90 blur-[2px]"
//             />
//             <div
//               aria-hidden="true"
//               className="absolute left-1/2 top-[6%] h-[78%] aspect-square -translate-x-1/2 rounded-full shadow-[0_0_120px_20px_rgba(99,102,241,0.45)]"
//             />

//             {/* Use a transparent-background PNG (cut-out) of yourself */}
//             <Image
//               src="/images/profile.png"
//               alt="Portrait of Shahzaib Karamat"
//               width={640}
//               height={760}
//               priority
//               className="absolute bottom-0 left-1/2 z-10 h-[92%] w-auto -translate-x-1/2 object-contain"
//             />

//             {/* fade the bottom of the portrait into the page */}
//             <div
//               aria-hidden="true"
//               className="absolute inset-x-0 bottom-0 z-20 h-24 bg-linear-to-t from-[#070914] to-transparent"
//             />

//             {/* signature */}
//             <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/4 text-center">
//               <p className={`${signature.className} text-5xl leading-none text-white sm:text-6xl`}>
//                 Shahzaib Karamat
//               </p>
//               <p className="mt-1 text-[11px] font-medium tracking-[0.35em] text-slate-300">
//                 SOFTWARE ENGINEER
//               </p>
//             </div>

//             {/* floating skill cards */}
//             {SKILL_CARDS.map(({ icon: Icon, title, text, tone, pos }) => (
//               <div
//                 key={title}
//                 className={`absolute z-30 hidden items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-md md:flex ${tone} ${pos}`}
//               >
//                 <Icon className="h-7 w-7 shrink-0" strokeWidth={1.8} aria-hidden="true" />
//                 <div>
//                   <p className="text-[15px] font-semibold text-white">{title}</p>
//                   <p className="whitespace-pre-line text-xs leading-5 text-slate-400">{text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* mobile / tablet: skills as plain chips under the portrait */}
//         <ul className="mt-6 flex flex-wrap gap-2 md:hidden">
//           {SKILL_CARDS.map(({ title }) => (
//             <li key={title} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
//               {title}
//             </li>
//           ))}
//         </ul>

//         {/* ------------------------- stats bar ------------------------- */}
//         <dl className="mt-10 grid grid-cols-2 gap-y-8 rounded-3xl border border-white/15 bg-white/2 px-4 py-8 sm:px-10 lg:grid-cols-4 lg:py-7">
//           {STATS.map(({ icon: Icon, value, label, color }, i) => (
//             <div
//               key={label}
//               className={`flex items-center gap-4 px-2 lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
//             >
//               <Icon className={`h-10 w-10 shrink-0 ${color}`} strokeWidth={1.5} aria-hidden="true" />
//               <div>
//                 <dd className="text-3xl font-bold leading-none">{value}</dd>
//                 <dt className="mt-1.5 text-slate-400">{label}</dt>
//               </div>
//             </div>
//           ))}
//         </dl>

//         {/* ------------------------ values row ------------------------ */}
//         <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {VALUES.map(({ icon: Icon, title, text, tone }) => (
//             <li key={title} className="flex items-center gap-4">
//               <span className={`grid h-17 w-17 shrink-0 place-items-center rounded-2xl ${tone}`}>
//                 <Icon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
//               </span>
//               <div>
//                 <p className="text-lg font-semibold">{title}</p>
//                 <p className="text-slate-400">{text}</p>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* ------------------------ scroll cue ------------------------ */}
//         <a
//           href="#about"
//           aria-label="Scroll down"
//           className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-sm text-slate-300 transition hover:text-white"
//         >
//           Scroll Down
//           <span className="grid h-10 w-6 place-items-start justify-center rounded-full border-2 border-slate-300 pt-1.5">
//             <span className="h-2 w-0.5 rounded-full bg-slate-300" />
//           </span>
//           <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
//         </a>
//       </div>
//     </section>
//   );
// }






















// import Link from "next/link";
// import { ArrowDown, ArrowUpRight, Code2, BriefcaseBusiness } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-[#111318] px-6 py-20 text-[#F3F4F6] sm:px-10 lg:px-16 lg:py-28"
//     >
//       <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
//         {/* Left: Introduction */}
//         <div className="order-2 lg:order-1">
//           <p className="mb-5 flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-[#A78BFA] uppercase">
//             <span className="h-px w-8 bg-[#A78BFA]" />
//             Backend & AI Engineer
//           </p>

//           <h1 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-7xl">
//             Building intelligent
//             <span className="block text-[#A78BFA]">
//               systems & solutions.
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
//             Hi, I’m Shahzaib Karamat. I build backend systems, AI-powered
//             applications, and agentic workflows that turn ideas into
//             practical solutions.
//           </p>

//           {/* Buttons */}
//           <div className="mt-9 flex flex-wrap gap-4">
//             <Link
//               href="#projects"
//               className="inline-flex items-center gap-2 rounded-lg bg-[#A78BFA] px-6 py-3 font-medium text-[#111318] transition hover:bg-violet-300"
//             >
//               Explore Projects
//               <ArrowUpRight size={18} />
//             </Link>

//             <Link
//               href="#Contact"
//               className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:border-[#A78BFA] hover:text-[#A78BFA]"
//             >
//               Contact Me
//             </Link>
//           </div>

//           {/* Social Links */}
//           <div className="mt-10 flex items-center gap-5">
//             <Link
//               href="https://github.com/shahzaibkaramat67-coder"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="text-gray-400 transition hover:text-[#A78BFA]"
//             >
//               <Code2 size={22} />
//             </Link>

//             <Link
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="text-gray-400 transition hover:text-[#A78BFA]"
//             >
//               <BriefcaseBusiness size={22} />
//             </Link>

//             <span className="h-px w-12 bg-white/15" />

//             <a
//               href="#about"
//               className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
//             >
//               Scroll to explore
//               <ArrowDown size={15} />
//             </a>
//           </div>
//         </div>

//         {/* Right: Temporary portrait */}
//         <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
//           <div className="relative w-full max-w-md">
//             {/* Subtle violet border accent */}
//             <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border border-[#A78BFA]/50" />

//             <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-[#191B23]">
//               <img
//                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
//                 alt="Temporary professional portrait placeholder"
//                 className="h-full w-full object-cover object-center"
//               />

//               {/* Bottom image label */}
//               <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#111318] via-[#111318]/70 to-transparent p-6 pt-20">
//                 <p className="text-sm text-gray-300">
//                   Backend Development · Agentic AI
//                 </p>
//                 <p className="mt-1 text-xl font-semibold text-white">
//                   Shahzaib Karamat
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
