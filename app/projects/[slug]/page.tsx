
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProjectDetailView from "./ProjectDetailContent";
import projects from "./../../../Project_Details.json";

type Params = {
    params: Promise<{ slug: string }>;
};

async function ProjectDetails({ params }: Params) {
    const { slug } = await params;

    const project = projects.find((item) => item.id === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailView project={project} />;
}

export default function ProjectDetail({ params }: Params) {
    return (
        <Suspense fallback={<p>Loading project...</p>}>
            <ProjectDetails params={params} />
        </Suspense>
    );
}