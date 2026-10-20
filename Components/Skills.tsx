
import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Network,
  Server,
  Wrench,
  ChartNoAxesCombined,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend Development",
    description: "Server-side engineering and APIs",
    icon: Server,
    featured: true,
    skills: [
      { name: "Node.js", level: "Practical" },
      { name: "Express.js", level: "Practical" },
      { name: "REST APIs", level: "Practical" },
      { name: "Authentication", level: "Practical" },
    ],
  },
  {
    title: "Generative AI",
    description: "LLM-powered applications",
    icon: BrainCircuit,
    featured: true,
    skills: [
      { name: "LLM Integration", level: "Hands-on" },
      { name: "Prompt Engineering", level: "Hands-on" },
      { name: "AI API Integration", level: "Hands-on" },
      { name: "AI Applications", level: "Project-based" },
    ],
  },
  {
    title: "Agentic AI & RAG",
    description: "Intelligent workflows and retrieval",
    icon: Network,
    featured: true,
    skills: [
      { name: "LangChain", level: "Hands-on" },
      { name: "RAG Pipelines", level: "Hands-on" },
      { name: "Tool Calling", level: "Hands-on" },
      { name: "Multi-Agent Orchestration", level: "Project-based" },
    ],
  },
  {
    title: "Data Science & EDA",
    description: "Dataset preparation and exploration",
    icon: ChartNoAxesCombined,
    skills: [
      { name: "Pandas", level: "Data manipulation" },
      { name: "NumPy", level: "Numerical computing" },
      { name: "Matplotlib", level: "Visualization" },
      { name: "Seaborn", level: "Statistical visualization" },
      { name: "Scikit-learn", level: "Preprocessing" },
      { name: "Jupyter Notebook", level: "Experimentation" },
    ],
  },
  {
    title: "Databases",
    description: "Data storage and management",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Practical" },
      { name: "SQL", level: "Working knowledge" },
      { name: "ChromaDB", level: "Hands-on" },
    ],
  },
  {
    title: "Programming",
    description: "Languages for software development",
    icon: Code2,
    skills: [
      { name: "Python", level: "Practical" },
      { name: "JavaScript", level: "Practical" },
      { name: "TypeScript", level: "Working knowledge" },
    ],
  },
  {
    title: "Frontend Development",
    description: "User interfaces and integration",
    icon: Layers3,
    skills: [
      { name: "React", level: "Working knowledge" },
      { name: "Next.js", level: "Working knowledge" },
      { name: "Tailwind CSS", level: "Working knowledge" },
      { name: "HTML & CSS", level: "Working knowledge" },
    ],
  },
  {
    title: "Development Tools",
    description: "Development and debugging workflow",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: "Practical" },
      { name: "VS Code", level: "Daily tooling" },
      { name: "Jupyter", level: "Notebook workflow" },
      { name: "Ollama", level: "Local LLM experimentation" },
    ],
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Designing server-side logic, APIs, authentication, and database integrations.",
  },
  {
    number: "02",
    title: "Generative AI",
    description:
      "Integrating language models and building practical AI-powered applications.",
  },
  {
    number: "03",
    title: "Agentic AI & RAG",
    description:
      "Connecting agents, tools, document retrieval, and multi-step workflows.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#111318] px-5 py-24 text-[#F3F4F6] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-36 h-80 w-80 rounded-full bg-[#A78BFA]/6 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#A78BFA]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A78BFA]">
                Technical Skills
              </span>
            </div>

            <h2
              id="skills-heading"
              className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              The tools behind
              <span className="block text-[#A78BFA]">
                what I build.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#A1A1AA] sm:text-base lg:justify-self-end">
            My toolkit combines backend engineering, Generative AI,
            agentic workflows, database technologies, and Python-based
            data preparation and exploratory analysis.
          </p>
        </div>

        {/* Core focus */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-[#A78BFA]/15 bg-[#A78BFA]/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/35 hover:bg-[#A78BFA]/[0.07]"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  Focus / {item.number}
                </span>
                <span className="text-[#A78BFA] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Skills categories */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Technologies & tools
            </h3>
            <p className="mt-2 text-sm text-[#71717A]">
              Organized by engineering discipline and practical use.
            </p>
          </div>

          <span className="text-xs uppercase tracking-[0.18em] text-[#71717A]">
            My technical toolkit
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-white/8 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/25 hover:bg-white/[0.035] sm:p-7"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#A78BFA]/15 bg-[#A78BFA]/[0.07] text-[#C4B5FD] transition group-hover:border-[#A78BFA]/30">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold tracking-tight">
                      {group.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-[#71717A]">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-white/6">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 py-3"
                    >
                      <span className="text-sm text-[#D4D4D8]">
                        {skill.name}
                      </span>

                      <span className="shrink-0 rounded-md border border-white/6 bg-white/2.5 px-2 py-1 text-[10px] text-[#A1A1AA]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#A78BFA]/15 bg-[#A78BFA]/4.5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#A78BFA]/20 bg-[#A78BFA]/8 text-[#C4B5FD]">
              <BrainCircuit size={21} />
            </div>

            <div>
              <h3 className="font-semibold">
                Learning by building.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#A1A1AA]">
                I continue to strengthen my engineering fundamentals,
                experiment with AI technologies, and develop practical
                projects that connect software engineering with intelligent
                systems.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-medium text-[#C4B5FD] transition hover:text-white sm:self-center"
          >
            Explore projects
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
