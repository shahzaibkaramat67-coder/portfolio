
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderCode } from "lucide-react";
import projects from "./../project-card.json";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-[#111318] px-5 py-24 text-[#F3F4F6] sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#A78BFA]">
            Selected Work
          </p>

          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Projects built around{" "}
            <span className="text-[#A78BFA]">real engineering.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Explore my work in backend development, generative AI,
            agentic systems, and retrieval-augmented generation.
          </p>
        </div>

        <div
          className="mb-10 flex flex-wrap gap-3"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] ${
                  isActive
                    ? "border-[#A78BFA] bg-[#A78BFA] text-[#111318]"
                    : "border-white/10 bg-white/3 text-gray-300 hover:border-[#A78BFA]/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/50 hover:bg-white/5"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-16/10 overflow-hidden bg-white/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#A78BFA]"
                aria-label={`View ${project.name} project details`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#111318]/40 to-transparent" />

                <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/20 bg-[#111318]/70 text-white backdrop-blur-sm transition group-hover:border-[#A78BFA] group-hover:text-[#A78BFA]">
                  <ArrowUpRight size={18} />
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#A78BFA]">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                  {project.shortDescription}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-200 transition hover:text-[#A78BFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                  >
                    View Project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-white/10 py-16 text-center">
            <FolderCode
              size={32}
              className="mx-auto mb-4 text-gray-500"
            />
            <p className="text-gray-400">No projects found.</p>
          </div>
        )}

        <p className="mt-8 text-sm text-gray-500">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
    </section>
  );
}
