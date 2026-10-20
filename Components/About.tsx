
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Network,
  Sparkles,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "Backend Engineering",
    description:
      "Building application logic, REST APIs, authentication flows, database integrations, and server-side features.",
    tags: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Generative AI",
    description:
      "Integrating language models into applications and experimenting with prompting, AI tools, and intelligent workflows.",
    tags: ["LLMs", "Prompt Engineering", "AI APIs", "Python"],
  },
  {
    number: "03",
    icon: Network,
    title: "Agentic AI & RAG",
    description:
      "Developing multi-agent workflows, orchestration pipelines, document retrieval, and tool-using AI systems.",
    tags: ["LangChain", "RAG", "Agent Orchestration", "Tool Calling"],
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Application Development",
    description:
      "Working with data preparation, exploratory analysis, database queries, and frontend technologies to build complete solutions.",
    tags: ["Data Preparation", "SQL", "JavaScript", "React / Next.js"],
  },
];

const principles = [
  {
    title: "Build with purpose",
    description:
      "Focus on practical problems and useful outcomes rather than adding technology without a reason.",
  },
  {
    title: "Understand the system",
    description:
      "Learn how APIs, databases, models, tools, and workflows connect before optimizing individual components.",
  },
  {
    title: "Improve through practice",
    description:
      "Build projects, test ideas, investigate errors, and continuously strengthen engineering fundamentals.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#111318] px-5 py-24 text-[#F3F4F6] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#A78BFA]/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 grid gap-6 lg:mb-20 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#A78BFA]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A78BFA]">
                About me
              </span>
            </div>

            <h2
              id="about-heading"
              className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Engineering the backend.
              <span className="mt-2 block text-[#A78BFA]">
                Exploring AI.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg lg:justify-self-end">
            I&apos;m Shahzaib Karamat, a Software Engineer focused on backend
            development and practical AI engineering. I enjoy understanding
            how systems work, connecting technologies, and turning ideas into
            reliable, useful software.
          </p>
        </div>

        {/* Main biography and profile card */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/8 bg-white/2 p-7 sm:p-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/8 px-3 py-1.5 text-xs font-medium text-[#C4B5FD]">
              <Sparkles size={14} />
              Software Engineering & AI
            </span>

            <h3 className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              Turning ideas into working systems.
            </h3>

            <div className="space-y-5 text-sm leading-7 text-[#A1A1AA] sm:text-base">
              <p>
                My core interest is backend engineering: designing server-side
                logic, building APIs, connecting databases, and understanding
                the architecture behind applications. I primarily work with
                Node.js, Express.js, MongoDB, and Python.
              </p>

              <p>
                Alongside backend development, I explore Generative AI and
                agentic systems. My hands-on projects involve LLM integrations,
                prompt engineering, retrieval-augmented generation (RAG),
                document-based question answering, tool calling, and
                multi-agent orchestration.
              </p>

              <p>
                I also work with data preparation and exploratory analysis
                as part of my machine learning practice. My frontend knowledge
                includes JavaScript, React, Next.js, and Tailwind CSS, allowing
                me to understand how backend services integrate with user-facing
                applications.
              </p>

              <p>
                I&apos;m continuously improving my software engineering
                fundamentals, database skills, and ability to build dependable
                AI-powered solutions. My goal is to grow as a Backend and AI
                Engineer by solving real problems through practical development.
              </p>
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-5 py-3 text-sm font-semibold text-[#111318] transition hover:bg-[#C4B5FD] focus-visible:outline-2  focus-visible:outline-offset-4 focus-visible:outline-[#A78BFA]"
            >
              Explore my projects
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Profile snapshot */}
          <div className="flex flex-col gap-5">
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-[#A78BFA]/20 bg-linear-to-br from-[#A78BFA]/13 via-white/25 to-transparent p-7 sm:p-9">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#A78BFA]/25 bg-[#A78BFA]/10 text-[#C4B5FD]">
                <Layers3 size={27} strokeWidth={1.5} />
              </div>

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                My approach
              </p>

              <h3 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight">
                Strong foundations.
                <br />
                Intelligent solutions.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#A1A1AA]">
                I bring backend engineering principles and AI experimentation
                together to develop systems that are understandable,
                maintainable, and useful.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Backend-first", "AI-focused", "Project-driven"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#D4D4D8]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/2 p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#C4B5FD]">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A78BFA]">
                    Education
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Bachelor&apos;s Degree
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#A1A1AA]">
                    Lahore Leads University
                  </p>
                  <p className="mt-3 text-sm text-[#D4D4D8]">
                    16 years of education
                  </p>
                  <p className="mt-1 text-sm text-[#A1A1AA]">
                    CGPA: 3.10 / 4.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise cards */}
        <div className="mt-24 sm:mt-28">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#A78BFA]">
                What I work on
              </p>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Areas of expertise
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#A1A1AA]">
              A combination of core engineering skills and practical
              experimentation with AI technologies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-white/8 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/30 hover:bg-white/[0.035] sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A78BFA]/20 bg-[#A78BFA]/8 text-[#C4B5FD]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-xs text-white/30">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h4>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-[#A1A1AA]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/8 bg-white/25 px-2.5 py-1.5 text-xs text-[#D4D4D8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Engineering principles */}
        <div className="mt-24 border-t border-white/8 pt-12 sm:mt-28 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#A78BFA]">
                How I work
              </p>

              <h3 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Curiosity backed by practical engineering.
              </h3>
            </div>

            <div className="divide-y divide-white/8">
              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-3 py-6 sm:grid-cols-[44px_1fr]"
                >
                  <span className="font-mono text-sm text-[#A78BFA]">
                    0{index + 1}
                  </span>

                  <div>
                    <h4 className="font-medium text-[#F3F4F6]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[#A1A1AA]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 rounded-3xl border border-[#A78BFA]/20 bg-[#A78BFA]/5.5 p-7 sm:mt-20 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
              Looking ahead
            </p>

            <h3 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              Building my future at the intersection of backend engineering
              and AI.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#A1A1AA]">
              Focused on continuous learning, stronger engineering practices,
              and developing AI systems that solve meaningful problems.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-[#A78BFA]/50 hover:bg-[#A78BFA]/10 sm:self-center"
          >
            Let&apos;s connect
            <ArrowDownRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
