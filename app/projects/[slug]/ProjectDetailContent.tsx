
"use client";

import { useState } from "react";
import {
    Code,
    ExternalLink,
    PlayCircle,
    Image as ImageIcon,
    Code2,
    Workflow,
    Layers,
    AlertCircle,
    Lightbulb,
    X,
} from "lucide-react";

/* ---------- Dataset Types ---------- */

type ProjectScreenshot = {
    id: string;
    image: string;
    title: string;
    description: string;
};

type ProjectModule = {
    file: string;
    role: string;
};

type ProjectVideo = {
    title: string;
    url: string;
    description: string;
};

type ProjectDetailData = {
    id: string;
    name: string;
    projectType: string;
    description: string;

    features: string[];
    technologies: string[];
    workflow: string[];
    modules: ProjectModule[];
    challenges: string[];
    futureImprovements: string[];

    githubUrl: string;
    liveUrl: string;
    demoVideo?: string;

    videos?: {
        codeFlow?: ProjectVideo;
        demo?: ProjectVideo;
    };

    screenshots?: ProjectScreenshot[];
};

/* ---------- Component ---------- */

export default function ProjectDetailContent({
    project,
}: {
    project: ProjectDetailData;
}) {
    const [selectedImage, setSelectedImage] =
        useState<ProjectScreenshot | null>(null);

    const screenshots = project.screenshots ?? [];
    const videos = project.videos ?? {};

    return (
        <div className="min-h-screen bg-[#111318] text-white">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Project Header */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
                        {project.projectType}
                    </p>

                    <h1 className="mb-5 text-3xl font-bold tracking-tight sm:text-5xl">
                        {project.name}
                    </h1>

                    <p className="max-w-3xl leading-8 text-slate-400">
                        {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-violet-400"
                            >
                                <Code size={18} />
                                GitHub Repository
                                <ExternalLink size={14} />
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium transition hover:bg-violet-400"
                            >
                                Live Project
                                <ExternalLink size={14} />
                            </a>
                        )}
                        {project.demoVideo && (
                            <a
                                href={project.demoVideo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium transition hover:bg-violet-400"
                            >
                                Live demoVideo
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Screenshots */}
                {screenshots.length > 0 && (
                    <section className="mb-14">
                        <div className="mb-6 flex items-center gap-3">
                            <ImageIcon
                                className="text-violet-400"
                                size={22}
                            />
                            <h2 className="text-2xl font-semibold">
                                Project Screenshots
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {screenshots.map((screenshot) => (
                                <button
                                    key={screenshot.id}
                                    type="button"
                                    onClick={() =>
                                        setSelectedImage(screenshot)
                                    }
                                    className="group overflow-hidden rounded-xl border border-white/10 bg-white/2 text-left"
                                >
                                    <img
                                        src={screenshot.image}
                                        alt={screenshot.title}
                                        className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                    />

                                    <div className="p-4">
                                        <h3 className="mb-2 font-medium">
                                            {screenshot.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-slate-400">
                                            {screenshot.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* Technologies */}
                {project.technologies.length > 0 && (
                    <section className="mb-14">
                        <div className="mb-6 flex items-center gap-3">
                            <Code2
                                className="text-violet-400"
                                size={22}
                            />
                            <h2 className="text-2xl font-semibold">
                                Technologies
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-lg border border-white/10 bg-white/3 px-4 py-2 text-sm text-slate-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Features */}
                {project.features.length > 0 && (
                    <section className="mb-14">
                        <h2 className="mb-6 text-2xl font-semibold">
                            Key Features
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-white/10 p-5"
                                >
                                    <p className="leading-7 text-slate-300">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Workflow */}
                {project.workflow.length > 0 && (
                    <section className="mb-14">
                        <div className="mb-6 flex items-center gap-3">
                            <Workflow
                                className="text-violet-400"
                                size={22}
                            />
                            <h2 className="text-2xl font-semibold">
                                Workflow
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {project.workflow.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 rounded-xl border border-white/10 p-5"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-300">
                                        {index + 1}
                                    </div>

                                    <p className="leading-7 text-slate-300">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Modules */}
                {project.modules.length > 0 && (
                    <section className="mb-14">
                        <div className="mb-6 flex items-center gap-3">
                            <Layers
                                className="text-violet-400"
                                size={22}
                            />
                            <h2 className="text-2xl font-semibold">
                                Project Structure &amp; Modules
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {project.modules.map((module, index) => (
                                <div
                                    key={`${module.file}-${index}`}
                                    className="rounded-xl border border-white/10 p-5"
                                >
                                    <code className="wrap-anywherebreak-words text-sm text-violet-300">
                                        {module.file}
                                    </code>

                                    <p className="mt-2 leading-7 text-slate-400">
                                        {module.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Project Demonstrations */}
                {[videos.codeFlow, videos.demo].some(
                    (video) => Boolean(video?.url)
                ) && (
                        <section className="mb-14">
                            <div className="mb-6 flex items-center gap-3">
                                <PlayCircle
                                    className="text-violet-400"
                                    size={22}
                                />
                                <h2 className="text-2xl font-semibold">
                                    Project Demonstrations
                                </h2>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                {[videos.codeFlow, videos.demo]
                                    .filter(
                                        (video): video is ProjectVideo =>
                                            Boolean(video?.url)
                                    )
                                    .map((video) => (
                                        <div
                                            key={video.title}
                                            className="rounded-xl border border-white/10 p-5"
                                        >
                                            <h3 className="mb-3 font-medium">
                                                {video.title}
                                            </h3>

                                            <p className="mb-5 text-sm leading-6 text-slate-400">
                                                {video.description}
                                            </p>

                                            <a
                                                href={video.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium transition hover:bg-violet-400"
                                            >
                                                <PlayCircle size={18} />
                                                Watch Video
                                                <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        </section>
                    )}

                {/* Challenges */}
                {project.challenges.length > 0 && (
                    <section className="mb-14">
                        <div className="mb-6 flex items-center gap-3">
                            <AlertCircle
                                className="text-violet-400"
                                size={22}
                            />
                            <h2 className="text-2xl font-semibold">
                                Technical Challenges
                            </h2>
                        </div>

                        <ul className="space-y-3">
                            {project.challenges.map((challenge, index) => (
                                <li
                                    key={index}
                                    className="rounded-xl border border-white/10 p-5 leading-7 text-slate-300"
                                >
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Future Improvements */}
                {project.futureImprovements.length > 0 && (
                    <section className="mb-14">
                        <div className="mb-6 flex items-center gap-3">
                            <Lightbulb
                                className="text-violet-400"
                                size={22}
                            />
                            <h2 className="text-2xl font-semibold">
                                Future Improvements
                            </h2>
                        </div>

                        <ul className="space-y-3">
                            {project.futureImprovements.map(
                                (improvement, index) => (
                                    <li
                                        key={index}
                                        className="rounded-xl border border-white/10 p-5 leading-7 text-slate-300"
                                    >
                                        {improvement}
                                    </li>
                                )
                            )}
                        </ul>
                    </section>
                )}
            </div>

            {/* Screenshot Preview */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        aria-label="Close image preview"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                    >
                        <X size={24} />
                    </button>

                    <div
                        className="max-h-[90vh] max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-h-[75vh] max-w-full rounded-lg object-contain"
                        />

                        <h3 className="mt-4 text-lg font-semibold">
                            {selectedImage.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            {selectedImage.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
